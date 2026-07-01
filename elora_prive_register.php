<?php
header("Content-Type: application/json");
require_once "API.php"; // your database connection

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';
    $action = $_POST['action'] ?? '';

    if (empty($email) || empty($password)) {
        echo json_encode(["success" => false, "message" => "All fields are required."]);
        exit;
    }

    try {
        if ($action === 'register') {
            // Check if email already exists
            $stmt = $pdo->prepare("SELECT * FROM prive_users WHERE email = ?");
            $stmt->execute([$email]);
            if ($stmt->fetch()) {
                echo json_encode(["success" => false, "message" => "Email already registered."]);
                exit;
            }

            // Insert new user
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
            $stmt = $pdo->prepare("INSERT INTO prive_users (email, password) VALUES (?, ?)");
            $stmt->execute([$email, $hashedPassword]);

            echo json_encode(["success" => true, "message" => "Registration successful! Welcome to Elora Privé."]);

        } else if ($action === 'login') {
            // Login user
            $stmt = $pdo->prepare("SELECT * FROM prive_users WHERE email = ?");
            $stmt->execute([$email]);
            $user = $stmt->fetch();

            if ($user && password_verify($password, $user['password'])) {
                echo json_encode(["success" => true, "message" => "Welcome to Elora Privé"]);
            } else {
                echo json_encode(["success" => false, "message" => "Invalid email or password"]);
            }

        } else {
            echo json_encode(["success" => false, "message" => "Invalid action"]);
        }

    } catch (PDOException $e) {
        echo json_encode(["success" => false, "message" => "Server error: " . $e->getMessage()]);
    }
}
?>
