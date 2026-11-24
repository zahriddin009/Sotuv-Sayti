
// ==============================
// MEGA SHOP - PRODUCT DETAIL
// ==============================

// GET PRODUCT ID

const params = new URLSearchParams(window.location.search);

const productId = Number(params.get("id"));


// ==============================
// DISPLAY PRODUCT
// ==============================

function displayProductDetail() {

    const product = products.find(item => item.id === productId);

    const detailContainer = document.getElementById("productDetail");

    if (!product) {

        detailContainer.innerHTML = `
            <div class="empty-state">
                <h2>Mahsulot topilmadi!</h2>
                <p>Bunday mahsulot mavjud emas.</p>
                <a href="products.html">Mahsulotlarga qaytish</a>
            </div>
        `;

        return;
    }

    document.title = product.name + " | MEGA SHOP";

    document.getElementById("detailImage").src = product.image;

    document.getElementById("detailImage").alt = product.name;

    document.getElementById("detailName").textContent = product.name;

    document.getElementById("detailCategory").textContent = product.category;

    document.getElementById("detailRating").textContent =
        "⭐ " + product.rating + " / 5";

    document.getElementById("detailPrice").textContent =
        formatPrice(product.price);

    document.getElementById("detailOldPrice").textContent =
        formatPrice(product.oldPrice);

    document.getElementById("detailDescription").textContent =
        product.name + " — MEGA SHOP do'konidagi sifatli va zamonaviy mahsulot. Xaridingiz uchun ajoyib tanlov!";

    updateDetailFavoriteButton();

}


// ==============================
// ADD TO CART
// ==============================

function addDetailToCart() {

    const product = products.find(item => item.id === productId);

    if (!product) return;

    addToCart(productId);

}


// ==============================
// FAVORITE BUTTON
// ==============================

function updateDetailFavoriteButton() {

    const button = document.getElementById("detailFavoriteBtn");

    if (!button) return;

    const isFavorite = favorites.includes(productId);

    button.textContent = isFavorite
        ? "♥ Saralanganlarda"
        : "♡ Saralanganlarga";

    button.classList.toggle("active", isFavorite);

}


// ==============================
// INITIALIZE
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    displayProductDetail();

    const cartButton = document.getElementById("detailCartBtn");

    const favoriteButton = document.getElementById("detailFavoriteBtn");

    if (cartButton) {
        cartButton.addEventListener("click", addDetailToCart);
    }

    if (favoriteButton) {

        favoriteButton.addEventListener("click", () => {

            toggleFavorite(productId);

            updateDetailFavoriteButton();

        });

    }

});
