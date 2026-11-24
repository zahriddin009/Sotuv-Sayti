
const favoritesContainer = document.getElementById("favoritesContainer");
const emptyFavorites = document.getElementById("emptyFavorites");

// MEGA SHOP FAVORITES

function displayFavorites() {

    if (!favoritesContainer) return;

    favoritesContainer.innerHTML = "";

    const favoriteProducts = products.filter(product =>
        favorites.includes(product.id)
    );

    if (favoriteProducts.length === 0) {
        emptyFavorites.style.display = "block";
        return;
    }

    emptyFavorites.style.display = "none";

    favoriteProducts.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";
        card.dataset.id = product.id;

        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">

                <button class="favorite-btn active"
                    onclick="removeFavorite(${product.id})">
                    ♥
                </button>
            </div>

            <div class="product-info">

                <h3 class="product-title">${product.name}</h3>

                <div class="product-price">
                    ${formatPrice(product.price)}
                </div>

                <a class="product-buy"
                    href="product-detail.html?id=${product.id}">
                    Batafsil ko'rish →
                </a>

                <button class="product-buy"
                    onclick="addToCart(${product.id})">
                    🛒 Savatga qo'shish
                </button>

            </div>
        `;

        favoritesContainer.appendChild(card);

    });

}

function removeFavorite(id) {

    favorites = favorites.filter(item => item !== id);

    saveFavorites();

    displayFavorites();

    showNotification("Saralanganlardan olib tashlandi!");
}

document.addEventListener("DOMContentLoaded", displayFavorites);
