/* SShop Language Switcher — English / Persian
   Product names, prices, specifications and product descriptions are intentionally unchanged. */
(() => {
  "use strict";

  const translations = new Map(Object.entries({
    "Home":"خانه", "Products":"محصولات", "About Us":"درباره ما",
    "Favorites":"علاقه‌مندی‌ها", "♥ Favorites":"♥ علاقه‌مندی‌ها", "❤️ Favorites":"❤️ علاقه‌مندی‌ها", "💛 Favorites":"💛 علاقه‌مندی‌ها",
    "Cart":"سبد خرید", "🛒 Cart":"🛒 سبد خرید", "Search items":"جست‌وجوی محصولات",
    "☀️ Light":"☀️ روشن", "🌙 Dark":"🌙 تاریک", "Category ▾":"دسته‌بندی ▾",
    "🎮 WELCOME TO S SHOP":"🎮 به فروشگاه اس‌شاپ خوش آمدید",
    "About S Shop":"درباره اس‌شاپ",
    "S Shop is a modern gaming and technology store created for gamers and tech lovers.":"اس‌شاپ یک فروشگاه مدرن بازی و فناوری برای گیمرها و علاقه‌مندان به تکنولوژی است.",
    "Our goal is simple:":"هدف ما ساده است:",
    "make finding gaming products easier,":"پیدا کردن محصولات گیمینگ را آسان‌تر کنیم،",
    "faster and more enjoyable.":"و تجربه‌ای سریع‌تر و لذت‌بخش‌تر بسازیم.",
    "Gaming Products":"محصولات گیمینگ", "Your Cart":"سبد خرید شما",
    "Your Favorites":"علاقه‌مندی‌های شما", "Your cart is empty!":"سبد خرید شما خالی است!",
    "Your favorites list is empty.":"فهرست علاقه‌مندی‌های شما خالی است.",
    "Continue Shopping":"ادامه خرید", "Continue shopping":"ادامه خرید",
    "Remove":"حذف", "Remove Item":"حذف محصول", "Clear Cart":"خالی کردن سبد خرید",
    "Checkout":"تسویه حساب", "Subtotal":"جمع جزء", "Total":"مبلغ کل",
    "Add to Cart":"افزودن به سبد خرید", "Added to Cart":"به سبد خرید اضافه شد",
    "Add to Favorites":"افزودن به علاقه‌مندی‌ها", "Remove from Favorites":"حذف از علاقه‌مندی‌ها",
    "Featured":"پیشنهاد ویژه", "Featured Products":"محصولات منتخب",
    "View All Products":"مشاهده همه محصولات", "View Products":"مشاهده محصولات",
    "Explore Products":"دیدن محصولات", "Shop Now":"همین حالا خرید کنید",
    "Learn More":"بیشتر بدانید", "Contact Us":"تماس با ما",
    "Welcome to S Shop":"به اس‌شاپ خوش آمدید",
    "Gaming PC":"کامپیوتر گیمینگ", "Mouse":"ماوس", "Keyboard":"کیبورد",
    "Headset":"هدست", "Console":"کنسول", "Sound":"صدا",
    "In Stock":"موجود", "Out of Stock":"ناموجود",
    "Free Shipping":"ارسال رایگان", "1 Year Warranty":"یک سال گارانتی",
    "Quantity":"تعداد", "Price":"قیمت", "Category":"دسته‌بندی",
    "Sort by":"مرتب‌سازی بر اساس", "All":"همه", "Apply":"اعمال",
    "No products found.":"محصولی پیدا نشد.",
    "Search":"جست‌وجو", "Cancel":"لغو", "Close":"بستن", "Save":"ذخیره",
    "About":"درباره", "Follow Us":"ما را دنبال کنید",
    "All rights reserved.":"تمامی حقوق محفوظ است.",
    "Made with ❤️":"ساخته‌شده با ❤️",
    "Thank you for shopping with us!":"از خرید شما سپاسگزاریم!",
    "Are you sure you want to remove this item?":"از حذف این محصول مطمئن هستید؟",
    "Your cart":"سبد خرید شما", "Empty Cart":"سبد خرید خالی است",
    "Favorites":"علاقه‌مندی‌ها", "Back to Home":"بازگشت به خانه",
    "Home Page":"صفحه اصلی", "Product Details":"جزئیات محصول",
    "Customer Reviews":"نظرهای مشتریان", "Reviews":"نظرها",
    "Specifications":"مشخصات فنی", "Description":"توضیحات",
    "Shipping":"ارسال", "Warranty":"گارانتی", "Availability":"وضعیت موجودی",
    "Welcome":"خوش آمدید", "Our Products":"محصولات ما",
    "Why Choose Us?":"چرا اس‌شاپ را انتخاب کنید؟",
    "Fast Delivery":"ارسال سریع", "Secure Shopping":"خرید امن",
    "Quality Products":"محصولات باکیفیت", "Support":"پشتیبانی",
    "Loading...":"در حال بارگذاری…", "Success!":"انجام شد!",
    "Item added to cart!":"محصول به سبد خرید اضافه شد!",
    "Item added to favorites!":"محصول به علاقه‌مندی‌ها اضافه شد!",
    "Item removed from favorites!":"محصول از علاقه‌مندی‌ها حذف شد!"
  }));

  const protectedSelectors = [
    ".product-card", ".favorite-card", ".cart-product", ".cart-item .product-info",
    ".product-details .product-description", "[data-product-info]"
  ].join(",");

  function isProtected(node) {
    const parent = node.parentElement;
    return !!parent?.closest(protectedSelectors);
  }

  function translateTextNode(node, toPersian) {
    if (!node.nodeValue || !node.nodeValue.trim() || isProtected(node)) return;
    const original = node.nodeValue.trim();
    if (toPersian) {
      if (translations.has(original)) {
        node.__sshopOriginal = node.__sshopOriginal ?? node.nodeValue;
        const leading = node.nodeValue.match(/^\s*/)?.[0] ?? "";
        const trailing = node.nodeValue.match(/\s*$/)?.[0] ?? "";
        node.nodeValue = leading + translations.get(original) + trailing;
      }
    } else if (node.__sshopOriginal !== undefined) {
      node.nodeValue = node.__sshopOriginal;
      delete node.__sshopOriginal;
    }
  }

  function applyLanguage(language) {
    const fa = language === "fa";
    document.documentElement.lang = fa ? "fa" : "en";
    document.documentElement.dir = fa ? "rtl" : "ltr";
    document.body.classList.toggle("sshop-persian", fa);

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => translateTextNode(node, fa));

    document.querySelectorAll("input[placeholder],textarea[placeholder]").forEach(el => {
      if (el.dataset.enPlaceholder === undefined) el.dataset.enPlaceholder = el.placeholder;
      if (fa && translations.has(el.dataset.enPlaceholder)) el.placeholder = translations.get(el.dataset.enPlaceholder);
      else if (!fa) el.placeholder = el.dataset.enPlaceholder;
    });

    document.querySelectorAll("[data-language-button]").forEach(button => {
      button.textContent = fa ? "🇬🇧 English" : "🇮🇷 فارسی";
      button.setAttribute("aria-label", fa ? "Switch to English" : "تغییر زبان به فارسی");
      button.title = fa ? "Switch to English" : "تغییر زبان به فارسی";
    });
    localStorage.setItem("sshop-language", fa ? "fa" : "en");
  }

  function addStyles() {
    if (document.getElementById("sshop-language-styles")) return;
    const style = document.createElement("style");
    style.id = "sshop-language-styles";
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;500;600&display=swap');
      [data-language-button] {
        border: 1px solid rgba(255,106,0,.75); border-radius: 12px;
        padding: 10px 14px; color: #fff; background: linear-gradient(135deg,#8b3dff,#ff6a00);
        font: 600 14px/1.6 Arial,sans-serif; cursor: pointer; white-space: nowrap;
        box-shadow: 0 4px 16px rgba(139,61,255,.2); transition: transform .2s,filter .2s;
      }
      [data-language-button]:hover { transform: translateY(-2px); filter: brightness(1.1); }
      body.sshop-persian { font-family: 'Noto Nastaliq Urdu', Tahoma, serif; line-height: 2.1; }
      body.sshop-persian :is(input,button,select,textarea) { font-family: Tahoma, Arial, sans-serif; }
      body.sshop-persian :is(h1,h2,h3,h4,p,a,label,li,footer) { line-height: 2.05; }
      body.sshop-persian .head { gap: 14px; }
      body.sshop-persian nav { direction: rtl; }
      body.sshop-persian .search-form input { text-align: right; }
      @media (max-width: 700px) { [data-language-button] { padding: 8px 10px; } }
    `;
    document.head.appendChild(style);
  }

  function init() {
    addStyles();
    const header = document.querySelector("header.head, header");
    if (header && !document.querySelector("[data-language-button]")) {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.languageButton = "true";
      button.addEventListener("click", () => {
        const next = document.documentElement.lang === "fa" ? "en" : "fa";
        applyLanguage(next);
      });
      header.appendChild(button);
    }
    applyLanguage(localStorage.getItem("sshop-language") || "en");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();