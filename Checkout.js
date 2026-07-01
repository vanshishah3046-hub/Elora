let paymentSelected = "";
let qrTimerStarted = false;

// ------------ Show QR when online payment is selected ----------
document.querySelectorAll("input[name='payment']").forEach(radio => {
    radio.addEventListener("change", function() {

        paymentSelected = this.value;

        if (this.value === "online") {
            document.getElementById("qrSection").style.display = "block";

            if (!qrTimerStarted) {
                startQrTimer();
                qrTimerStarted = true;
            }

        } else {
            document.getElementById("qrSection").style.display = "none";
        }
    });
});

// ------------ 2 MINUTE TIMER + AUTO SUCCESS AFTER 45 sec -------------
function startQrTimer() {
    let time = 120;
    const timerEl = document.getElementById("timer");

    // SHOW TIMER COUNTDOWN
    let interval = setInterval(() => {

        let min = Math.floor(time / 60);
        let sec = time % 60;

        timerEl.textContent = `${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;

        if (time <= 0) {
            clearInterval(interval);
            alert("QR code expired! Please scan again.");
            location.reload();
        }

        time--;

    }, 1000);

    // PAYMENT SUCCESS AFTER EXACTLY 45 SECONDS
    setTimeout(() => {
        clearInterval(interval);
        alert("Payment Successful!");
        autoPlaceOrder();
    }, 45000); // 45 sec = 45000 ms
}

// ------------ Auto Place Order (used after payment success) -------------
function autoPlaceOrder() {

    const name = document.getElementById("name").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const pincode = document.getElementById("pincode").value.trim();

    const cartItems = JSON.parse(localStorage.getItem("elora_cart")) || [];

    const orderData = {
        name,
        mobile,
        address,
        city,
        pincode,
        payment: "online",
        items: cartItems,
        total: cartItems.reduce((sum, item) =>
            sum + (parseInt(item.price) * parseInt(item.quantity)), 0),
        orderId: "ELORA" + Math.floor(Math.random() * 900000 + 100000)
    };

    localStorage.setItem("elora_order", JSON.stringify(orderData));
    localStorage.removeItem("elora_cart");

    window.location.href = "order-details.html";
}



// ------------ Manual Place Order Button (for COD) ---------------
document.getElementById("placeOrderBtn").addEventListener("click", () => {

    const name = document.getElementById("name").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const pincode = document.getElementById("pincode").value.trim();

    if (!name || !mobile || !address || !city || !pincode) {
        alert("Please fill all shipping details.");
        return;
    }

    if (paymentSelected === "") {
        alert("Please select a payment method!");
        return;
    }

    if (paymentSelected === "online") {
        alert("Please wait… your payment will be auto-verified.");
        return;
    }


    // COD case → direct order
    const orderData = {
        name, mobile, address, city, pincode,
        payment: "COD",
        orderId: "ELORA" + Math.floor(Math.random() * 900000 + 100000)
    };

    const cartItems = JSON.parse(localStorage.getItem("elora_cart")) || [];

orderData.items = cartItems;

orderData.total = cartItems.reduce((sum, item) =>
    sum + (parseInt(item.price) * parseInt(item.quantity)), 0);


    localStorage.setItem("elora_order", JSON.stringify(orderData));
    localStorage.removeItem("elora_cart");

    window.location.href = "order-details.html";
});

