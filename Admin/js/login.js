
/* ==============================
   MEGA SHOP - ADMIN LOGIN
============================== */

const loginForm = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const errorMessage = document.getElementById("errorMessage");

const togglePassword = document.getElementById("togglePassword");

// PASSWORD SHOW / HIDE

if (togglePassword) {
    togglePassword.addEventListener("click", () => {

        const isPassword = password.type === "password";

        password.type = isPassword ? "text" : "password";

        togglePassword.innerHTML = isPassword
            ? '<i class="fa-solid fa-eye-slash"></i>'
            : '<i class="fa-solid fa-eye"></i>';

    });
}


// LOGIN SYSTEM

if (loginForm) {

    loginForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const loginValue = username.value.trim();
        const passwordValue = password.value;

        if (loginValue === "admin" && passwordValue === "admin123") {

            sessionStorage.setItem("megaAdminLoggedIn", "true");

            window.location.href = "index.html";

        } else {

            errorMessage.textContent = "Login yoki parol noto'g'ri!";

            password.value = "";

        }

    });

}
