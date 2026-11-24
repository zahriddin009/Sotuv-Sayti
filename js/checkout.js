
// ==============================
// MEGA SHOP - CHECKOUT SYSTEM
// ==============================

// DISPLAY ORDER PRODUCTS

function displayCheckout() {

    const checkoutItems = document.getElementById("checkoutItems");
    const checkoutTotal = document.getElementById("checkoutTotal");

    if (!checkoutItems || !checkoutTotal) return;

    if (cart.length === 0) {

        checkoutItems.innerHTML = `
            <p>Savatingiz bo'sh 🛒</p>
        `;

        checkoutTotal.textContent = "0 so'm";
        return;
    }

    checkoutItems.innerHTML = cart.map(item => `

        <div class="checkout-product">

            <img src="${item.image}" alt="${item.name}">

            <div>
                <h4>${item.name}</h4>
                <p>Soni: ${item.quantity}</p>
            </div>

            <strong>
                ${(item.price * item.quantity).toLocaleString()} so'm
            </strong>

        </div>

    `).join("");

    updateCheckoutTotal();
}

// ==============================
// TOTAL PRICE
// ==============================

function updateCheckoutTotal() {

    const checkoutTotal = document.getElementById("checkoutTotal");

    if (!checkoutTotal) return;

    const total = cart.reduce((sum, item) => {

        return sum + item.price * item.quantity;

    }, 0);

    checkoutTotal.textContent = total.toLocaleString() + " so'm";

}

// ==============================
// SUBMIT ORDER
// ==============================

function submitOrder(event) {

    event.preventDefault();

    if (cart.length === 0) {

        showNotification("Savatingiz bo'sh!");

        return;
    }

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const address = document.getElementById("customerAddress").value.trim();
    const comment = document.getElementById("customerComment").value.trim();

    if (!name || !phone || !address) {

        showNotification("Barcha kerakli maydonlarni to'ldiring!");

        return;
    }

    const total = cart.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);

    const order = {

        id: Date.now(),

        customer: {
            name,
            phone,
            address,
            comment
        },

        products: [...cart],

        total: total,

        date: new Date().toLocaleString("uz-UZ"),

        status: "Yangi buyurtma"

    };

    const orders = JSON.parse(localStorage.getItem("megaOrders")) || [];

    orders.push(order);

    localStorage.setItem("megaOrders", JSON.stringify(orders));

    cart = [];

    saveCart();

    showNotification("Buyurtmangiz qabul qilindi! 🎉");

    document.getElementById("checkoutForm").reset();

    displayCheckout();

}

// ==============================
// INITIALIZE
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    displayCheckout();

    const checkoutForm = document.getElementById("checkoutForm");

    if (checkoutForm) {

        checkoutForm.addEventListener("submit", submitOrder);

    }

});