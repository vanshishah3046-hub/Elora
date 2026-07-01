<?php
// Strict JSON-only response
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Stop preflight early
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    echo json_encode(['success' => false, 'message' => 'OPTIONS not supported here']);
    exit;
}

// Turn ON error logging but DO NOT output PHP warnings into response
ini_set('log_errors', 1);
ini_set('display_errors', 0); // important: prevent PHP warnings from breaking JSON
error_reporting(E_ALL);

// DB config
$host = '127.0.0.1';
$db   = 'elora_db';
$user = 'root';
$pass = 'fiyoni1605'; // use your password
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (PDOException $e) {
    // Return JSON error (no stack trace)
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database connection failed']);
    exit;
}

// Read raw input
$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

if (!is_array($data)) {
    echo json_encode(['success' => false, 'message' => 'Invalid JSON input', 'raw' => substr($raw, 0, 200)]);
    exit;
}

// Required fields
if (empty($data['fullname']) || empty($data['email']) || empty($data['password'])) {
    echo json_encode(['success' => false, 'message' => 'Please provide fullname, email and password']);
    exit;
}

$fullname = trim($data['fullname']);
$email = trim($data['email']);
$password_plain = $data['password'];

// Basic validation
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

try {
    // Check duplicate
    $check = $pdo->prepare("SELECT id FROM users WHERE email = ?");
    $check->execute([$email]);
    if ($check->rowCount() > 0) {
        echo json_encode(['success' => false, 'message' => 'Email already registered']);
        exit;
    }

    // Insert
    $hashed = password_hash($password_plain, PASSWORD_BCRYPT);
    $stmt = $pdo->prepare("INSERT INTO users (fullname, email, password) VALUES (?, ?, ?)");
    $stmt->execute([$fullname, $email, $hashed]);

    echo json_encode(['success' => true, 'message' => 'Registration successful']);
    exit;

}catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    exit;
}
?>
