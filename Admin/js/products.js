
// ==============================
// MEGA SHOP - ADMIN PRODUCTS
// ==============================

let products = JSON.parse(localStorage.getItem("megaProducts")) || [];

const productsTable = document.getElementById("productsTable");
const productSearch = document.getElementById("productSearch");
const productCount = document.getElementById("productCount");
const searchCount = document.getElementById("searchCount");
const emptyProducts = document.getElementById("emptyProducts");

// HTML PROTECTION

function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[char]);
}

// DISPLAY PRODUCTS

function displayProducts(data = products) {

    if (!productsTable) return;

    productsTable.innerHTML = "";

    data.forEach(product => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td><strong>${escapeHTML(product.name)}</strong></td>

            <td>${escapeHTML(product.category || "—")}</td>

            <td>
                <strong>
                    ${Number(product.price || 0).toLocaleString("uz-UZ")} so'm
                </strong>
            </td>

            <td>${escapeHTML(product.date || product.createdAt?.slice(0, 10) || "—")}</td>

            <td>
                <div class="product-actions">
                    <button class="edit-btn" data-action="edit"
                        data-id="${escapeHTML(product.id)}">
                        <i class="fa-solid fa-pen"></i>
                    </button>

                    <button class="delete-btn" data-action="delete"
                        data-id="${escapeHTML(product.id)}">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </td>
        `;

        productsTable.appendChild(row);

    });

    if (productCount) {
        productCount.textContent = products.length;
    }

    if (searchCount) {
        searchCount.textContent = data.length;
    }

    if (emptyProducts) {
        emptyProducts.style.display = data.length === 0 ? "block" : "none";
    }

    const tableWrapper = productsTable.closest(".table-wrapper");

    if (tableWrapper) {
        tableWrapper.style.display = data.length === 0 ? "none" : "block";
    }
}

// SEARCH

if (productSearch) {

    productSearch.addEventListener("input", () => {

        const value = productSearch.value.toLowerCase().trim();

        const filtered = products.filter(product => {

            return (
                String(product.name || "").toLowerCase().includes(value) ||
                String(product.category || "").toLowerCase().includes(value)
            );

        });

        displayProducts(filtered);

    });

}

// TABLE ACTIONS

if (productsTable) {

    productsTable.addEventListener("click", event => {

        const button = event.target.closest("button[data-action]");

        if (!button) return;

        const id = button.dataset.id;
        const action = button.dataset.action;

        if (action === "edit") {
            editProduct(id);
        }

        if (action === "delete") {
            deleteProduct(id);
        }

    });

}

// EDIT PRODUCT

function editProduct(id) {

    const product = products.find(
        item => String(item.id) === String(id)
    );

    if (!product) {
        alert("Mahsulot topilmadi!");
        return;
    }

    window.location.href =
        `add-product.html?edit=${encodeURIComponent(id)}`;

}

// DELETE PRODUCT

function deleteProduct(id) {

    const confirmDelete = confirm(
        "Mahsulotni o'chirishni xohlaysizmi?"
    );

    if (!confirmDelete) return;

    products = products.filter(
        item => String(item.id) !== String(id)
    );

    localStorage.setItem("megaProducts", JSON.stringify(products));

    displayProducts();

    if (typeof updateDashboardStats === "function") {
        updateDashboardStats();
    }

}

// INITIALIZE

displayProducts();
