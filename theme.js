(() => {
    const THEME_KEY = "sShopTheme";

    function getTheme() {
        try {
            const savedTheme = localStorage.getItem(THEME_KEY);

            if (savedTheme === "light" || savedTheme === "dark") {
                return savedTheme;
            }
        } catch (error) {
            console.warn("Theme storage is unavailable.");
        }

        return "dark";
    }

    function updateThemeButton(theme) {
        const button = document.getElementById("themeToggle");

        if (!button) {
            return;
        }

        if (theme === "light") {
            button.textContent = "🌙 Dark";
            button.setAttribute("aria-label", "Switch to dark mode");
            button.title = "Switch to dark mode";
        } else {
            button.textContent = "☀️ Light";
            button.setAttribute("aria-label", "Switch to light mode");
            button.title = "Switch to light mode";
        }
    }

    function applyTheme(theme) {
        const currentTheme = theme === "light" ? "light" : "dark";

        document.documentElement.dataset.theme = currentTheme;

        if (document.body) {
            document.body.dataset.theme = currentTheme;
        }

        updateThemeButton(currentTheme);

        try {
            localStorage.setItem(THEME_KEY, currentTheme);
        } catch (error) {
            console.warn("Could not save theme preference.");
        }
    }

    function initTheme() {
        applyTheme(getTheme());

        const button = document.getElementById("themeToggle");

        if (!button || button.dataset.themeReady === "true") {
            return;
        }

        button.dataset.themeReady = "true";

        button.addEventListener("click", () => {
            const currentTheme =
                document.documentElement.dataset.theme === "light"
                    ? "light"
                    : "dark";

            const nextTheme = currentTheme === "light"
                ? "dark"
                : "light";

            applyTheme(nextTheme);
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initTheme);
    } else {
        initTheme();
    }
})();
// ===============================
// S Shop - Cart Notifications
// ===============================

function showCartNotification(productName) {

    // Toast داخل سایت
    const toast = document.createElement("div");

    toast.innerHTML = `
        <div style="font-size:18px;font-weight:700;margin-bottom:4px;">
            🛒 S Shop
        </div>
        <div>
            ${productName} به سبد خرید اضافه شد!
        </div>
    `;

    Object.assign(toast.style, {
        position: "fixed",
        right: "20px",
        bottom: "20px",
        zIndex: "999999",
        background: "#181824",
        color: "#fff",
        padding: "15px 20px",
        borderRadius: "14px",
        boxShadow: "0 10px 35px rgba(0,0,0,.35)",
        border: "1px solid rgba(139,61,255,.5)",
        fontFamily: "Arial, sans-serif",
        opacity: "0",
        transform: "translateY(20px)",
        transition: "all .3s ease"
    });

    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.style.opacity = "1";
        toast.style.transform = "translateY(0)";
    });

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(20px)";

        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);


    // Notification واقعی مرورگر
    if (!("Notification" in window)) {
        return;
    }

    if (Notification.permission === "granted") {

        new Notification("🛒 S Shop", {
            body: `${productName} به سبد خرید اضافه شد!`,
            icon: "background.png"
        });

    } else if (Notification.permission !== "denied") {

        Notification.requestPermission().then(permission => {

            if (permission === "granted") {

                new Notification("🛒 S Shop", {
                    body: `${productName} به سبد خرید اضافه شد!`,
                    icon: "background.png"
                });

            }

        });

    }
}