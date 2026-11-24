
 // ==============================
 // MEGA SHOP - CART SYSTEM
 // ==============================

function displayCart() {

    const cartContainer = document.getElementById("cartItems");

    if (!cartContainer) return;

    if (cart.length === 0) {

        cartContainer.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🛒</div>
                <h2>Savatingiz hozircha bo'sh</h2>
                <p>Mahsulotlarni tanlab, savatingizga qo'shing.</p>
                <a href="products.html">Xarid qilish</a>
            </div>
        `;

        updateCartTotal();
        return;
    }

    cartContainer.innerHTML = cart.map(item => `

        <div class="cart-item">

            <img src="${item.image}" alt="${item.name}">

            <div class="cart-info">
                <h3>${item.name}</h3>

                <p>${item.price.toLocaleString()} so'm</p>

                <div class="quantity-controls">

                    <button onclick="changeQuantity(${item.id}, -1)">−</button>

                    <span>${item.quantity}</span>

                    <button onclick="changeQuantity(${item.id}, 1)">+</button>

                </div>
            </div>

            <button class="remove-cart"
                onclick="removeCartItem(${item.id})">
                🗑️
            </button>

        </div>

    `).join("");

    updateCartTotal();

}


// ==============================
// CHANGE QUANTITY
// ==============================

function changeQuantity(id, amount) {

    const item = cart.find(product => product.id === id);

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        cart = cart.filter(product => product.id !== id);
    }

    saveCart();

    displayCart();

}


// ==============================
// REMOVE CART ITEM
// ==============================

function removeCartItem(id) {

    cart = cart.filter(item => item.id !== id);

    saveCart();

    displayCart();

    showNotification("Mahsulot o'chirildi!");
}


// ==============================
// CART TOTAL
// ==============================

function updateCartTotal() {

    const totalElement = document.getElementById("cartTotal");

    if (!totalElement) return;

    const total = cart.reduce((sum, item) => {

        return sum + item.price * item.quantity;

    }, 0);

    totalElement.textContent = total.toLocaleString() + " so'm";

}


// ==============================
// INITIALIZE CART
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    displayCart();

});




 // ==============================
 // CHECKOUT BUTTON
 // ==============================

document.addEventListener("DOMContentLoaded", () => {

    const checkoutBtn = document.querySelector(".checkout-btn");

    if (!checkoutBtn) return;

    checkoutBtn.addEventListener("click", () => {

        if (cart.length === 0) {
            showNotification("Savatingiz bo'sh! 🛒");
            return;
        }

        window.location.href = "checkout.html";

    });

});
