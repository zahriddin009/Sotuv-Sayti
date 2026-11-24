
document.addEventListener("DOMContentLoaded", function () {

    const header = document.createElement("div");

    header.innerHTML = `
        <div class="top-header">
            <div class="container top-header-content">
                <div class="location">📍 Toshkent</div>

                <div class="top-links">
                    <a href="#">Sotuvchi bo'lish</a>
                    <a href="#">Yordam</a>
                    <a href="#">Buyurtmalarim</a>
                    <a href="#">O'zbekcha</a>
                </div>
            </div>
        </div>

        <header class="header">
            <div class="container header-content">

                <a href="index.html" class="logo">
                    <span>MEGA</span> SHOP
                </a>

                <button class="catalog-btn" id="catalogBtn">
                    ☰ Katalog
                </button>

                <div class="search-box">
                    <input type="text" id="searchInput"
                        placeholder="Mahsulotlar va turkumlarni izlash">
                    <button id="searchBtn">🔍</button>
                </div>

                <nav class="header-actions">
                    <a href="login.html">👤 <span>Kirish</span></a>
                    <a href="favorites.html">♡ <span>Saralangan</span></a>
                    <a href="cart.html">🛍️ <span>Savat</span>
                        <b id="cartCount">0</b>
                    </a>
                </nav>

            </div>
        </header>

        <nav class="category-nav">
            <div class="container category-links">
                <a href="products.html">🔥 Chegirmalar</a>
                <a href="products.html">📱 Elektronika</a>
                <a href="products.html">👕 Kiyimlar</a>
                <a href="products.html">🏠 Uy uchun</a>
                <a href="products.html">💄 Go'zallik</a>
                <a href="products.html">🧸 Bolalar uchun</a>
                <a href="products.html">⚽ Sport</a>
            </div>
        </nav>
    `;

    document.body.prepend(header);

});