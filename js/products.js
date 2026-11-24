
/* ==============================
   MEGA SHOP - PRODUCTS DATABASE
============================== */

const defaultProducts = [
    {
        id: 1,
        name: "Apple iPhone 16 Pro Max 256GB",
        price: 16500000,
        oldPrice: 18000000,
        rating: 4.9,
        category: "Elektronika",
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500"
    },
    {
        id: 2,
        name: "Apple AirPods Pro Wireless",
        price: 2800000,
        oldPrice: 3200000,
        rating: 4.8,
        category: "Elektronika",
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500"
    },
    {
        id: 3,
        name: "MacBook Pro 14 inch",
        price: 22000000,
        oldPrice: 24000000,
        rating: 4.9,
        category: "Elektronika",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500"
    },
    {
        id: 4,
        name: "Samsung Galaxy Watch",
        price: 1900000,
        oldPrice: 2300000,
        rating: 4.7,
        category: "Elektronika",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
    },
    {
        id: 5,
        name: "Sony Wireless Headphones",
        price: 2100000,
        oldPrice: 2500000,
        rating: 4.8,
        category: "Elektronika",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    },
    {
        id: 6,
        name: "Nike Air Max Sport Shoes",
        price: 950000,
        oldPrice: 1200000,
        rating: 4.8,
        category: "Kiyimlar",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    },
    {
        id: 7,
        name: "Classic Black Backpack",
        price: 350000,
        oldPrice: 450000,
        rating: 4.6,
        category: "Kiyimlar",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
    },
    {
        id: 8,
        name: "Premium Wrist Watch",
        price: 750000,
        oldPrice: 900000,
        rating: 4.7,
        category: "Aksessuarlar",
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500"
    },
    {
        id: 9,
        name: "Modern Sunglasses",
        price: 250000,
        oldPrice: 350000,
        rating: 4.5,
        category: "Aksessuarlar",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500"
    },
    {
        id: 10,
        name: "Minimalist Table Lamp",
        price: 280000,
        oldPrice: 350000,
        rating: 4.6,
        category: "Uy uchun",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
    },
    {
        id: 11,
        name: "Modern Home Chair",
        price: 850000,
        oldPrice: 1000000,
        rating: 4.7,
        category: "Uy uchun",
        image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=500"
    },
    {
        id: 12,
        name: "Premium Coffee Machine",
        price: 1800000,
        oldPrice: 2200000,
        rating: 4.8,
        category: "Uy uchun",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500"
    },
    {
        id: 13,
        name: "Modern Digital Camera",
        price: 6500000,
        oldPrice: 7200000,
        rating: 4.9,
        category: "Elektronika",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"
    },
    {
        id: 14,
        name: "Gaming Controller",
        price: 650000,
        oldPrice: 800000,
        rating: 4.7,
        category: "Elektronika",
        image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=500"
    },
    {
        id: 15,
        name: "Modern White Sneakers",
        price: 580000,
        oldPrice: 750000,
        rating: 4.6,
        category: "Kiyimlar",
        image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=500"
    },
    {
        id: 16,
        name: "Leather Travel Bag",
        price: 900000,
        oldPrice: 1100000,
        rating: 4.8,
        category: "Aksessuarlar",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
    },
    {
        id: 17,
        name: "Wireless Computer Mouse",
        price: 220000,
        oldPrice: 300000,
        rating: 4.6,
        category: "Elektronika",
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500"
    },
    {
        id: 18,
        name: "Mechanical Gaming Keyboard",
        price: 550000,
        oldPrice: 700000,
        rating: 4.8,
        category: "Elektronika",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
    },
    {
        id: 19,
        name: "Modern Sofa Decoration",
        price: 420000,
        oldPrice: 500000,
        rating: 4.5,
        category: "Uy uchun",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500"
    },
    {
        id: 20,
        name: "Professional Running Shoes",
        price: 780000,
        oldPrice: 950000,
        rating: 4.8,
        category: "Sport",
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500"
    },
    {
        id: 21,
        name: "Smart Bluetooth Speaker",
        price: 450000,
        oldPrice: 550000,
        rating: 4.7,
        category: "Elektronika",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500"
    },
    {
        id: 22,
        name: "Modern Men's Jacket",
        price: 680000,
        oldPrice: 850000,
        rating: 4.6,
        category: "Kiyimlar",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500"
    },
    {
        id: 23,
        name: "Elegant Women's Handbag",
        price: 520000,
        oldPrice: 650000,
        rating: 4.8,
        category: "Aksessuarlar",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500"
    },
    {
        id: 24,
        name: "Skincare Beauty Set",
        price: 320000,
        oldPrice: 400000,
        rating: 4.7,
        category: "Go'zallik",
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500"
    },
    {
        id: 25,
        name: "Modern Office Desk",
        price: 1500000,
        oldPrice: 1800000,
        rating: 4.6,
        category: "Uy uchun",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500"
    },
    {
        id: 26,
        name: "Professional Football",
        price: 280000,
        oldPrice: 350000,
        rating: 4.8,
        category: "Sport",
        image: "https://images.unsplash.com/photo-1614632537423-1e6c2e7e0e6d?w=500"
    },
    {
        id: 27,
        name: "Premium Perfume",
        price: 390000,
        oldPrice: 480000,
        rating: 4.9,
        category: "Go'zallik",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500"
    },
    {
        id: 28,
        name: "Modern Tablet",
        price: 4200000,
        oldPrice: 4700000,
        rating: 4.8,
        category: "Elektronika",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
    },
    {
        id: 29,
        name: "Travel Water Bottle",
        price: 150000,
        oldPrice: 200000,
        rating: 4.5,
        category: "Sport",
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500"
    },
    {
        id: 30,
        name: "Premium Backpack",
        price: 490000,
        oldPrice: 600000,
        rating: 4.7,
        category: "Aksessuarlar",
        image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=500"
    }
];


// ==============================
// ADMIN PRODUCTS
// ==============================

const adminProducts =
    JSON.parse(localStorage.getItem("megaProducts")) || [];

const deletedProducts =
    JSON.parse(localStorage.getItem("megaDeletedProducts")) || [];

// O‘chirilgan mahsulotlarni chiqarib tashlash
const activeDefaultProducts = defaultProducts
    .filter(product =>
        !deletedProducts.some(
            id => String(id) === String(product.id)
        )
    )
    .map(product => {
        const edited = adminProducts.find(
            item => String(item.id) === String(product.id)
        );

        return edited
            ? { ...product, ...edited }
            : product;
    });

// Faqat Admin orqali yangidan qo‘shilgan mahsulotlar
const newAdminProducts = adminProducts
    .filter(product => {
        const existsInDefault = defaultProducts.some(
            item => String(item.id) === String(product.id)
        );

        const isDeleted = deletedProducts.some(
            id => String(id) === String(product.id)
        );

        return !existsInDefault && !isDeleted;
    })
    .sort((a, b) => {
        return new Date(b.createdAt || 0) -
               new Date(a.createdAt || 0);
    });

// YANGI MAHSULOTLAR BIRINCHI QATORDA
const products = [
    ...newAdminProducts,
    ...activeDefaultProducts
];


// ==============================
// PRODUCT SETTINGS
// ==============================

let visibleProducts = 20;
const productsPerLoad = 10;
let currentProductList = products;




// ==============================
// PRICE FORMAT
// ==============================

function formatPrice(price) {
    return new Intl.NumberFormat("uz-UZ").format(
        Number(price) || 0
    ) + " so'm";
}


// ==============================
// DISPLAY PRODUCTS
// ==============================

function displayProducts(productList = products) {

    const productsGrid =
        document.getElementById("productsGrid");

    if (!productsGrid) return;

    currentProductList = productList;

    const visibleList =
        productList.slice(0, visibleProducts);

    if (visibleList.length === 0) {

        productsGrid.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">📦</div>
                <h2>Mahsulotlar topilmadi</h2>
                <p>Hozircha bu kategoriyada mahsulot yo'q.</p>
            </div>
        `;

        return;
    }

    productsGrid.innerHTML = visibleList.map(product => {

        const price = Number(product.price) || 0;
        const oldPrice = Number(product.oldPrice) || 0;

        const discount = oldPrice > price && price > 0
            ? Math.round((1 - price / oldPrice) * 100)
            : 0;

        const rating = product.rating || 5;

        return `
            <div class="product-card" data-id="${product.id}">

                <div class="product-image">

                    <img
                        src="${product.image || 'https://placehold.co/400x400?text=Product'}"
                        alt="${product.name}"
                        loading="lazy"
                    >

                    ${discount > 0 ? `
                        <span class="product-badge">
                            -${discount}%
                        </span>
                    ` : ""}

                    <button
                        class="favorite-btn"
                        onclick="event.stopPropagation(); toggleFavorite(${JSON.stringify(product.id)})"
                        aria-label="Saralanganlarga qo'shish"
                    >
                        ♡
                    </button>

                </div>

                <div class="product-info">

                    <h3 class="product-title">
                        ${product.name}
                    </h3>

                    <div class="product-rating">
                        ⭐ ${rating}
                        <span>• Mega Shop</span>
                    </div>

                    <div class="product-price">
                        ${formatPrice(price)}
                    </div>

                    ${oldPrice > price ? `
                        <span class="old-price">
                            ${formatPrice(oldPrice)}
                        </span>
                    ` : ""}

                    <button
                        class="product-buy"
                        onclick="addToCart(${JSON.stringify(product.id)})"
                    >
                        🛒 Savatga qo'shish
                    </button>

                </div>

            </div>
        `;

    }).join("");

    const loadMoreBtn =
        document.getElementById("loadMoreBtn");

    if (loadMoreBtn) {

        loadMoreBtn.style.display =
            visibleProducts >= productList.length
                ? "none"
                : "block";

    }

    if (typeof updateFavoriteButtons === "function") {
        updateFavoriteButtons();
    }

}


// ==============================
// LOAD MORE PRODUCTS
// ==============================

function loadMoreProducts() {

    visibleProducts += productsPerLoad;

    displayProducts(currentProductList);

}


// ==============================
// CATEGORY FILTER
// ==============================

function filterCategory(category) {

    visibleProducts = 20;

    const filteredProducts = category === "all"
        ? products
        : products.filter(product =>
            product.category === category
        );

    displayProducts(filteredProducts);

}


// ==============================
// INITIALIZE
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    displayProducts();

    const loadMoreBtn =
        document.getElementById("loadMoreBtn");

    if (loadMoreBtn) {

        loadMoreBtn.addEventListener(
            "click",
            loadMoreProducts
        );

    }

});
