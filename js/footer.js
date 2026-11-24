
document.addEventListener("DOMContentLoaded", function () {

    const footer = document.createElement("footer");

    footer.className = "footer";

    footer.innerHTML = `
        <div class="container footer-content">

            <div>
                <h2 class="footer-logo">MEGA SHOP</h2>
                <p>Sizning ishonchli online do'koningiz.</p>
            </div>

            <div>
                <h3>Ma'lumotlar</h3>
                <a href="#">Biz haqimizda</a>
                <a href="#">Yetkazib berish</a>
                <a href="#">Bog'lanish</a>
            </div>

            <div>
                <h3>Xaridorlar uchun</h3>
                <a href="cart.html">Savat</a>
                <a href="favorites.html">Saralanganlar</a>
                <a href="#">Yordam markazi</a>
            </div>

        </div>

        <div class="footer-bottom">
            © 2026 MEGA SHOP. Barcha huquqlar himoyalangan.
        </div>
    `;

    document.body.appendChild(footer);

});
