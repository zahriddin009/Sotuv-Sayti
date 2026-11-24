
// ==============================
// MEGA SHOP - SEARCH SYSTEM
// ==============================

let searchTimeout;

function initSearch() {
    const searchInput = document.getElementById("searchInput");
    const suggestionsBox = document.getElementById("searchSuggestions");

    if (!searchInput) return;

    searchInput.addEventListener("input", () => {
        clearTimeout(searchTimeout);

        const value = searchInput.value.trim().toLowerCase();

        if (!value) {
            suggestionsBox?.classList.remove("active");
            visibleProducts = 20;
            displayProducts(products);
            return;
        }

        searchTimeout = setTimeout(() => {
            const results = products.filter(product =>
                product.name.toLowerCase().includes(value) ||
                product.category.toLowerCase().includes(value)
            );

            visibleProducts = results.length;
            displayProducts(results);
            displaySearchSuggestions(results);

        }, 300);
    });
}

function displaySearchSuggestions(results) {
    const box = document.getElementById("searchSuggestions");
    if (!box) return;

    if (results.length === 0) {
        box.innerHTML = `<div class="search-empty">Mahsulot topilmadi 🔍</div>`;
        box.classList.add("active");
        return;
    }

    box.innerHTML = results.slice(0, 5).map(product => `
        <div class="search-suggestion" onclick="openProduct(${product.id})">
            <img src="${product.image}" alt="${product.name}">
            <div>
                <h4>${product.name}</h4>
                <p>${product.category}</p>
            </div>
            <strong>${product.price.toLocaleString()} so'm</strong>
        </div>
    `).join("");

    box.classList.add("active");
}

function openProduct(id) {
    window.location.href = `product-detail.html?id=${id}`;
}

document.addEventListener("click", event => {
    const box = document.getElementById("searchSuggestions");

    if (!event.target.closest(".search-container")) {
        box?.classList.remove("active");
    }
});

document.addEventListener("DOMContentLoaded", initSearch);
