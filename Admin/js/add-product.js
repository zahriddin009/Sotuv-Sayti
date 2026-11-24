
// ==============================
// MEGA SHOP - ADD / EDIT PRODUCT
// ==============================

let products = JSON.parse(localStorage.getItem("megaProducts")) || [];

// ELEMENTS

const productForm = document.getElementById("productForm");

const nameInput = document.getElementById("productName");
const priceInput = document.getElementById("productPrice");
const oldPriceInput = document.getElementById("productOldPrice");
const categoryInput = document.getElementById("productCategory");
const imageInput = document.getElementById("productImage");
const descriptionInput = document.getElementById("productDescription");

const pageTitle = document.getElementById("pageTitle");
const saveProductBtn = document.getElementById("saveProductBtn");

// GET EDIT ID

const params = new URLSearchParams(window.location.search);

const editId = params.get("edit") || params.get("id");

let editingProduct = null;

// LOAD PRODUCT DATA

if (editId) {

    editingProduct = products.find(
        product => String(product.id) === String(editId)
    );

    if (!editingProduct) {

        alert("Mahsulot topilmadi!");

        window.location.href = "products.html";

    } else {

        pageTitle.textContent = "Mahsulotni tahrirlash";

        saveProductBtn.textContent = "O‘zgarishlarni saqlash";

        nameInput.value = editingProduct.name || "";
        priceInput.value = editingProduct.price || "";
        oldPriceInput.value = editingProduct.oldPrice || "";
        imageInput.value = editingProduct.image || "";
        descriptionInput.value = editingProduct.description || "";

        // CATEGORY

        const category = editingProduct.category || "";

        const categoryExists = [...categoryInput.options].some(
            option => option.value === category
        );

        if (category && !categoryExists) {

            const option = document.createElement("option");

            option.value = category;
            option.textContent = category;

            categoryInput.appendChild(option);

        }

        categoryInput.value = category;

    }

}

// SAVE PRODUCT

productForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = nameInput.value.trim();
    const price = Number(priceInput.value);
    const oldPrice = Number(oldPriceInput.value) || 0;
    const category = categoryInput.value;
    const image = imageInput.value.trim();
    const description = descriptionInput.value.trim();

    if (!name || !category || !Number.isFinite(price) || price <= 0) {

        alert("Ma'lumotlarni to‘g‘ri kiriting!");

        return;

    }

    if (oldPrice < 0) {

        alert("Eski narx noto‘g‘ri!");

        return;

    }

    const productData = {

        ...(editingProduct || {}),

        id: editingProduct ? editingProduct.id : Date.now(),

        name,
        price,
        oldPrice,
        category,

        image: image || "https://placehold.co/400x400?text=Product",

        description,

        createdAt: editingProduct?.createdAt || new Date().toISOString()

    };

    if (editingProduct) {

        const index = products.findIndex(
            product => String(product.id) === String(editId)
        );

        if (index === -1) {

            alert("Mahsulot topilmadi!");

            return;

        }

        products[index] = productData;

    } else {

        products.unshift(productData);

    }

    // SAVE TO LOCAL STORAGE

    localStorage.setItem(
        "megaProducts",
        JSON.stringify(products)
    );

    alert(
        editingProduct
            ? "Mahsulot muvaffaqiyatli yangilandi!"
            : "Mahsulot muvaffaqiyatli qo‘shildi!"
    );

    window.location.href = "products.html";

});
