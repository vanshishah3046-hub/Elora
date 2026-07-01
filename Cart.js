// ---------------------------------------------
// CLEAN PRICE → remove ₹ , commas etc.
// ---------------------------------------------
function cleanPrice(value) {
    // If it's null or undefined, return 0
    if (value === null || value === undefined) return 0;

    // If it's a number, make sure it is not NaN
    if (typeof value === "number") {
        return isNaN(value) ? 0 : value;
    }

    // If string, clean it
    if (typeof value === "string") {
        let cleaned = parseInt(value.replace(/[^\d]/g, ""));
        return isNaN(cleaned) ? 0 : cleaned;
    }

    return 0;
}

function getCart() {
    try {
        return JSON.parse(localStorage.getItem("elora_cart")) || [];
    } catch {
        return [];
    }
}


// ---------------------------------------------
// LOAD CART FROM LOCAL STORAGE (CORRECT KEY)
// ---------------------------------------------
function loadCart() {
    let cart = JSON.parse(localStorage.getItem("elora_cart")) || [];

    return cart.map(item => {
        // Fix quantity
        let qRaw = item.quantity ?? item.qty ?? 1;
        let q = parseInt(qRaw);
        if (!Number.isFinite(q) || q < 1) q = 1;

        // Fix price
        let price = cleanPrice(item.price ?? item.unit_price ?? item.p ?? 0);

        return {
            ...item,
            price: price,
            quantity: q
        };
    });
}


// ---------------------------------------------
// SAVE CART (CORRECT KEY)
// ---------------------------------------------
function saveCart(cart) {
    localStorage.setItem("elora_cart", JSON.stringify(cart));
}

// ---------------------------------------------
// DISPLAY CART ITEMS
// ---------------------------------------------
function displayCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const subtotalElement = document.getElementById("subtotal");

    let cart = loadCart();
    cartItemsContainer.innerHTML = "";
    let subtotal = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p class="empty">Your cart is empty.</p>`;
        subtotalElement.textContent = "0";
        return;
    }

    cart.forEach((item, index) => {
        const lineTotal = item.price * item.quantity;
        subtotal += lineTotal;

        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");

        itemDiv.innerHTML = `
            <div class="cart-left">
                <img src="${item.image}" class="cart-img">

                <div class="cart-info">
                    <h3>${item.title || item.name}</h3>
                    <p class="unit-price">₹${item.price}</p>

                    <div class="qty-control">
                        <button class="qty-btn minus" data-index="${index}">−</button>
                        <span class="qty">${item.quantity}</span>
                        <button class="qty-btn plus" data-index="${index}">+</button>
                    </div>
                </div>
            </div>

            <div class="cart-right">
                <p class="line-total">₹${lineTotal}</p>
                <button class="remove-btn" data-index="${index}">✕</button>
            </div>
        `;

        cartItemsContainer.appendChild(itemDiv);
    });

    subtotalElement.textContent = subtotal;
    attachQuantityButtons();
    attachRemoveButtons();
}

// ---------------------------------------------
// UPDATE CART ICON COUNT (For Home/Nav)
// ---------------------------------------------
function updateCartCountUI() {
    const cart = getCart();

    let totalQty = 0;

    cart.forEach(item => {
        const q = Number(item.quantity ?? item.qty ?? 1);
        totalQty += (q > 0 ? q : 1);
    });

    const el1 = document.getElementById('cart-count');
    const el2 = document.getElementById('cartCount');

    if (el1) el1.textContent = totalQty;
    if (el2) el2.textContent = totalQty;
}


// ---------------------------------------------
// QUANTITY BUTTON LOGIC
// ---------------------------------------------
function attachQuantityButtons() {
    let cart = loadCart();

    document.querySelectorAll(".plus").forEach(btn => {
        btn.addEventListener("click", function () {
            const i = this.dataset.index;
            cart[i].quantity++;
            saveCart(cart);
            displayCart();
        });
    });

    document.querySelectorAll(".minus").forEach(btn => {
        btn.addEventListener("click", function () {
            const i = this.dataset.index;
            if (cart[i].quantity > 1) cart[i].quantity--;
            saveCart(cart);
            displayCart();
        });
    });
}

// ---------------------------------------------
// REMOVE ITEM LOGIC
// ---------------------------------------------
function attachRemoveButtons() {
    let cart = loadCart();

    document.querySelectorAll(".remove-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            const index = this.dataset.index;
            cart.splice(index, 1);
            saveCart(cart);
            displayCart();
        });
    });
}

// ---------------------------------------------
// INIT
// ---------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    // Always update the header count on every page
    updateCartCountUI();

    // Only try to display the list if we are on the cart page
    if (document.getElementById("cart-items")) {
        displayCart();
    }
});

// -----------------------------
// CHECKOUT BUTTON CLICK
// -----------------------------
document.querySelector(".checkout-btn").addEventListener("click", () => {
    window.location.href = "Checkout.html";   // redirect to checkout page
});

