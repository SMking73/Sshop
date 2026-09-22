(() => {
    const THEME_KEY = "sShopTheme";

    function getTheme() {
        try {
            return localStorage.getItem(THEME_KEY) === "light" ? "light" : "dark";
        } catch {
            return "dark";
        }
    }

    function setTheme(theme) {
        const value = theme === "light" ? "light" : "dark";

        document.documentElement.dataset.theme = value;
        document.body?.setAttribute("data-theme", value);

        const button = document.getElementById("themeToggle");
        if (button) {
            const isLight = value === "light";
            button.textContent = isLight ? "☀️ Light" : "🌙 Dark";
            button.setAttribute(
                "aria-label",
                isLight ? "Switch to dark mode" : "Switch to light mode"
            );
            button.title = isLight ? "Switch to dark mode" : "Switch to light mode";
        }

        try {
            localStorage.setItem(THEME_KEY, value);
        } catch {}
    }

    function initTheme() {
        setTheme(getTheme());

        const button = document.getElementById("themeToggle");
        if (!button || button.dataset.themeReady === "true") return;

        button.dataset.themeReady = "true";

        button.addEventListener("click", () => {
            const current =
                document.documentElement.dataset.theme === "light"
                    ? "light"
                    : "dark";

            setTheme(current === "light" ? "dark" : "light");
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initTheme);
    } else {
        initTheme();
    }
})();