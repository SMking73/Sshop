(() => {
    const THEME_KEY = "sShopTheme";

    function getTheme() {
        try {
            const saved = localStorage.getItem(THEME_KEY);
            if (saved === "light" || saved === "dark") return saved;
        } catch {}
        return "dark";
    }

    function setTheme(theme) {
        const value = theme === "light" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", value);
        document.body?.setAttribute("data-theme", value);

        const button = document.getElementById("themeToggle");
        if (button) {
            const isLight = value === "light";
            button.textContent = isLight ? "🌙 Dark" : "☀️ Light";
            button.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
            button.title = isLight ? "Switch to dark mode" : "Switch to light mode";
        }

        try { localStorage.setItem(THEME_KEY, value); } catch {}
    }

    function createToggle() {
        if (document.getElementById("themeToggle")) return;
        const header = document.querySelector(".head");
        if (!header) return;

        const button = document.createElement("button");
        button.id = "themeToggle";
        button.type = "button";
        button.className = "theme-toggle";
        button.addEventListener("click", () => {
            const current = document.documentElement.getAttribute("data-theme") || "dark";
            setTheme(current === "dark" ? "light" : "dark");
        });
        header.appendChild(button);
    }

    function initTheme() {
        setTheme(getTheme());
        createToggle();
        setTheme(getTheme());
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initTheme);
    } else {
        initTheme();
    }
})();