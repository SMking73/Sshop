(() => {
    const savedTheme = localStorage.getItem("sShopTheme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);

    function updateThemeButton() {
        const button = document.getElementById("themeToggle");
        if (!button) return;

        const isLight = document.documentElement.getAttribute("data-theme") === "light";
        button.textContent = isLight ? "☀️ Light" : "🌙 Dark";
        button.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
        button.title = isLight ? "Switch to dark mode" : "Switch to light mode";
    }

    document.addEventListener("DOMContentLoaded", () => {
        updateThemeButton();

        const button = document.getElementById("themeToggle");
        if (!button) return;

        button.addEventListener("click", () => {
            const current = document.documentElement.getAttribute("data-theme") || "dark";
            const next = current === "dark" ? "light" : "dark";

            document.documentElement.setAttribute("data-theme", next);
            localStorage.setItem("sShopTheme", next);
            updateThemeButton();
        });
    });
})();