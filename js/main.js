
/* ==============================
   MEGA SHOP - MAIN JS
============================== */

// SAVAT VA SARALANGANLAR

let cart = JSON.parse(localStorage.getItem("megaCart")) || [];

let favorites = JSON.parse(localStorage.getItem("megaFavorites")) || [];


// ==============================
// ADMIN MAHSULOTLARINI OLISH
// ==============================

function getAllProducts() {

    const adminProducts =
        JSON.parse(localStorage.getItem("megaProducts")) || [];

    const baseProducts =
        typeof products !== "undefined" && Array.isArray(products)
            ? products
            : [];

    const allProducts = [...baseProducts];

    adminProducts.forEach(adminProduct => {

        const index = allProducts.findIndex(
            item => String(item.id) === String(adminProduct.id)
        );

        if (index !== -1) {
            allProducts[index] = {
                ...allProducts[index],
                ...adminProduct
            };
        } else {
            allProducts.push(adminProduct);
        }

    });

    return allProducts;
}


// ==============================
// CART SYSTEM
// ==============================

function saveCart() {

    localStorage.setItem("megaCart", JSON.stringify(cart));

    updateCartCount();
}


function saveFavorites() {

    localStorage.setItem(
        "megaFavorites",
        JSON.stringify(favorites)
    );
}


function updateCartCount() {

    const cartCount = document.getElementById("cartCount");

    if (cartCount) {

        cartCount.textContent = cart.reduce(
            (total, item) => total + item.quantity,
            0
        );

    }
}


function addToCart(id) {

    const product = getAllProducts().find(
        item => String(item.id) === String(id)
    );

    if (!product) return;

    const existingProduct = cart.find(
        item => String(item.id) === String(id)
    );

    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }

    saveCart();

    showNotification("Mahsulot savatga qo'shildi! 🛒");
}


function removeFromCart(id) {

    cart = cart.filter(
        item => String(item.id) !== String(id)
    );

    saveCart();

    showNotification("Mahsulot savatdan o'chirildi!");
}


// ==============================
// FAVORITES SYSTEM
// ==============================

function toggleFavorite(id) {

    const productId = String(id);

    if (favorites.some(item => String(item) === productId)) {

        favorites = favorites.filter(
            item => String(item) !== productId
        );

        showNotification("Saralanganlardan olib tashlandi");

    } else {

        favorites.push(id);

        showNotification("Saralanganlarga qo'shildi ❤️");

    }

    saveFavorites();

    updateFavoriteButtons();
}


function updateFavoriteButtons() {

    document.querySelectorAll(".product-card").forEach(card => {

        const button = card.querySelector(".favorite-btn");

        if (!button) return;

        const id = card.dataset.id;

        const isFavorite = favorites.some(
            item => String(item) === String(id)
        );

        button.classList.toggle("active", isFavorite);

        button.textContent = isFavorite ? "♥" : "♡";

    });

}


// ==============================
// NOTIFICATION
// ==============================

function showNotification(message) {

    const oldNotification =
        document.querySelector(".notification");

    if (oldNotification) {
        oldNotification.remove();
    }

    const notification = document.createElement("div");

    notification.className = "notification";

    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 2500);

}


// ==============================
// SEARCH SYSTEM
// ==============================

function searchProducts() {

    const searchInput =
        document.getElementById("searchInput");

    if (!searchInput) return;

    const searchValue =
        searchInput.value.trim().toLowerCase();

    const allProducts = getAllProducts();

    if (!searchValue) {

        if (typeof displayProducts === "function") {
            displayProducts(allProducts);
        }

        return;
    }

    const results = allProducts.filter(product =>

        (product.name || "").toLowerCase().includes(searchValue) ||

        (product.category || "").toLowerCase().includes(searchValue)

    );

    const productsGrid =
        document.getElementById("productsGrid");

    if (results.length === 0) {

        if (productsGrid) {

            productsGrid.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">🔍</div>
                    <h2>Mahsulot topilmadi</h2>
                    <p>Boshqa mahsulot nomini qidirib ko'ring.</p>
                </div>
            `;

        }

        const loadMoreBtn =
            document.getElementById("loadMoreBtn");

        if (loadMoreBtn) {
            loadMoreBtn.style.display = "none";
        }

        return;
    }

    if (typeof displayProducts === "function") {
        displayProducts(results);
    }

}


// ==============================
// INITIALIZATION
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    const searchInput =
        document.getElementById("searchInput");

    const searchBtn =
        document.getElementById("searchBtn");

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            searchProducts
        );

        searchInput.addEventListener("keydown", event => {

            if (event.key === "Enter") {
                searchProducts();
            }

        });

    }

    if (searchBtn) {

        searchBtn.addEventListener(
            "click",
            searchProducts
        );

    }


    const catalogBtn =
        document.getElementById("catalogBtn");

    if (catalogBtn) {

        catalogBtn.addEventListener("click", () => {

            window.location.href = "products.html";

        });

    }


    // ADMIN MAHSULOTLARINI SAYTGA CHIQARISH

    const productsGrid =
        document.getElementById("productsGrid");

    if (productsGrid && typeof displayProducts === "function") {

        displayProducts(getAllProducts());

    }


    updateCartCount();

    updateFavoriteButtons();

});
