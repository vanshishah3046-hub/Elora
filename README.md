# Elora

Elora is an elegant, full-stack e-commerce web platform designed to deliver a luxury shopping experience. Blending clean minimalist aesthetics with advanced client-side mechanics and structural backend validation, the platform offers dynamic storefront navigation, modular item view galleries, and a comprehensive user onboarding lifecycle.

## 🚀 Key Features

### 🛍️ Storefront & Interactive Cart Pipeline
*   **Dynamic Collection Streams:** Segmented discovery portals for new arrivals (`New Arrivals/`) and curated lookbooks (`Just-in(view all)/`).
*   **Modular Product Architecture:** Fully independent, structured single product layout pages (`product1.html` through `product6.html`) featuring unique asset configurations.
*   **Client-Side State Engine:** Interactive multi-item cart management (`Cart.html`, `Cart.js`, `Cart.css`) capable of processing real-time edits, item totals, and item updates.
*   **Fluid Checkout Flow:** Multi-stage layout handler (`Checkout.html`, `Checkout.js`, `Checkout.css`) that processes order details and transitions customers smoothly from checkout to final order placement (`order-details.html`).
*   **Smart Search Filters:** Instant structural search filtering handled directly on the frontend using optimized matching keys (`search.html`, `search.js`, `search.css`).

### 🔑 Membership & Personalization
*   **Elora Privé Lounge:** A dedicated premium member dashboard structure (`elora_prive.html`, `elora_prive.css`) built to provide exclusive customer perks.
*   **Secure Authentication Lifecycles:** Modular registration and session routing pathways (`register.html`, `register.php`, `login.html`, `login.php`, `elora_prive_register.php`) handling inputs safely.
*   **Central Data API Bridge:** Integrated server-side lookup pathways (`API.php`) acting as a structured request bridge between frontend view files and internal assets.

### 📖 Editorial Journal / Blogs
*   **Lifestyle Content Pipelines:** Optimized text layouts featuring custom editorial workflows like `blogRoseOil.php`, `blogNightRituals.php`, and `blogSeasonalSkincare.php` designed to boost user engagement and product up-selling.

---

## 🛠️ Tech Stack

*   **Frontend:** HTML5 (79.6% semantic page layouts), CSS3 (11.4% custom design system, fluid flexboxes, and product grids), JavaScript (6.3% runtime cart mechanics, filtering, and animation logic).
*   **Backend:** PHP & Hack (2.7% backend session orchestration, authentication handshakes, and input validation).

---

## 📂 Project Architecture

```text
Elora/
├── .vscode/                 # Editor configurations
├── Images/                  # Curated high-res product and campaign imagery
├── Just-in(view all)/      # Collections directory 
├── New Arrivals/            # Seasonal arrivals directory
├── API.php                  # Central backend controller
├── Cart.html/js/css         # Complete shopping cart module
├── Checkout.html/js/css     # Order checkout module
├── elora_prive.html/css     # Premium membership ecosystem
├── index.html               # Main core landing index
├── login.html/php/css       # Authentication system
├── register.html/php/css    # User onboarding system
├── search.html/js/css       # Interactive inventory lookup engine
└── style.css                # Global typographic and layout variables
