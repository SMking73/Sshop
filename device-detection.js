(function () {
    "use strict";

    function detectDevice() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const screenWidth = window.screen?.width || width;
        const screenHeight = window.screen?.height || height;
        const ua = navigator.userAgent.toLowerCase();
        const touch = navigator.maxTouchPoints || 0;

        const isTV = /smart-tv|smarttv|googletv|appletv|hbbtv|netcast|viera|webos.*tv|tizen.*tv|roku|aquos/.test(ua);

        const isMobileUA = /iphone|ipod|windows phone|mobile/.test(ua);
        const isTabletUA = /ipad|tablet|android(?!.*mobile)/.test(ua);

        let type = "desktop";

        if (isTV || (screenWidth >= 1800 && screenHeight >= 900 && !touch && /tv|tizen|webos|roku/.test(ua))) {
            type = "tv";
        } else if (isMobileUA && width <= 900) {
            type = "mobile";
        } else if (isTabletUA || (touch > 1 && width >= 600 && width <= 1280)) {
            type = "tablet";
        } else if (width <= 1600 && height <= 1000) {
            type = "laptop";
        } else {
            type = "desktop";
        }

        const orientation = width >= height ? "landscape" : "portrait";

        document.body.classList.remove(
            "device-mobile",
            "device-tablet",
            "device-laptop",
            "device-desktop",
            "device-tv"
        );

        document.body.classList.add("device-" + type);
        document.body.dataset.device = type;
        document.body.dataset.orientation = orientation;

        window.SShopDevice = {
            type,
            width,
            height,
            screenWidth,
            screenHeight,
            touch: touch > 0,
            touchPoints: touch,
            orientation
        };

        window.dispatchEvent(new CustomEvent("sshopdevicechange", {
            detail: window.SShopDevice
        }));
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", detectDevice, { once: true });
    } else {
        detectDevice();
    }

    let resizeTimer;
    window.addEventListener("resize", function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(detectDevice, 150);
    });

    window.addEventListener("orientationchange", detectDevice);
})();