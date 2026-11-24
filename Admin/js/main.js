
/* ==============================
   MEGA SHOP - ADMIN MAIN JS
============================== */

// ADMIN AUTHENTICATION CHECK

if (sessionStorage.getItem("megaAdminLoggedIn") !== "true") {
    window.location.replace("login.html");
}

// SIDEBAR SYSTEM

const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");

if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("open");
    });
}

// SIDEBAR CLOSE

document.addEventListener("click", (e) => {
    if (
        sidebar &&
        menuToggle &&
        window.innerWidth <= 768 &&
        !sidebar.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {
        sidebar.classList.remove("open");
    }
});


// DASHBOARD STATISTICS

function updateDashboardStats() {

    const products = JSON.parse(localStorage.getItem("megaProducts")) || [];
    const categories = JSON.parse(localStorage.getItem("megaCategories")) || [];
    const orders = JSON.parse(localStorage.getItem("megaOrders")) || [];

    const totalProducts = document.getElementById("totalProducts");
    const totalCategories = document.getElementById("totalCategories");
    const totalOrders = document.getElementById("totalOrders");

    if (totalProducts) {
        totalProducts.textContent = products.length;
    }

    if (totalCategories) {
        totalCategories.textContent = categories.length;
    }

    if (totalOrders) {
        totalOrders.textContent = orders.length;
    }
}


// INITIALIZE

document.addEventListener("DOMContentLoaded", () => {
    updateDashboardStats();
});
