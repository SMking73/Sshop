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