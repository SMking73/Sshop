/* SShop language switcher — English / Persian */
(() => {
  "use strict";
  const translations = new Map(Object.entries({
    "Home":"خانه","Products":"محصولات","About Us":"درباره ما","Favorites":"علاقه‌مندی‌ها","♥ Favorites":"♥ علاقه‌مندی‌ها","❤️ Favorites":"❤️ علاقه‌مندی‌ها","💛 Favorites":"💛 علاقه‌مندی‌ها","Cart":"سبد خرید","🛒 Cart":"🛒 سبد خرید","Search items":"جست‌وجوی محصولات",
    "☀️ Light":"☀️ روشن","🌙 Dark":"🌙 تیره","Category ▾":"دسته‌بندی‌ها ▾","🎮 Gaming PC":"🎮 کامپیوتر گیمینگ","🖱️ Mouse":"🖱️ ماوس","⌨️ Keyboard":"⌨️ کیبورد","🎧 Headset":"🎧 هدست","🎮 Console":"🎮 کنسول",
    "Gaming PC":"کامپیوتر گیمینگ","Gaming PCs":"کامپیوترهای گیمینگ","Console":"کنسول","Consoles":"کنسول‌ها","Keyboard":"کیبورد","Keyboards":"کیبوردها","Mouse":"ماوس","Mice":"ماوس‌ها","Headset":"هدست","Headsets":"هدست‌ها","Sound":"صدا","Laptop":"لپ‌تاپ","Laptops":"لپ‌تاپ‌ها","Chair":"صندلی","Computer":"کامپیوتر","Gaming Accessories":"لوازم جانبی گیمینگ",
    "Category":"دسته‌بندی","Categories":"دسته‌بندی‌ها","Featured":"پیشنهاد ویژه","Featured Products":"محصولات منتخب","Trending":"پرطرفدار","Trending Products":"محصولات پرطرفدار","NEW":"جدید","HOT":"محبوب","SALE":"تخفیف",
    "Add to Cart":"افزودن به سبد خرید","🛒 Add to Cart":"🛒 افزودن به سبد خرید","Add to cart":"افزودن به سبد خرید","✓ Added to Cart":"✓ به سبد خرید اضافه شد","Added to Cart":"به سبد خرید اضافه شد","Add to Favorites":"افزودن به علاقه‌مندی‌ها","♡ Add to Favorites":"♡ افزودن به علاقه‌مندی‌ها","♥ Remove from Favorites":"♥ حذف از علاقه‌مندی‌ها","Remove from Favorites":"حذف از علاقه‌مندی‌ها","Remove from favorites":"حذف از علاقه‌مندی‌ها","Add to favorites":"افزودن به علاقه‌مندی‌ها","♡ Add to favorites":"♡ افزودن به علاقه‌مندی‌ها",
    "Description":"توضیحات محصول","Product Description":"توضیحات محصول","Specifications":"مشخصات فنی","⚙ Specifications":"⚙ مشخصات فنی","Product Details":"جزئیات محصول","Details":"جزئیات","More Details":"جزئیات بیشتر","⭐ Rate this product":"⭐ به این محصول امتیاز بدهید","Rate this product":"به این محصول امتیاز بدهید","Rate this Product":"به این محصول امتیاز بدهید","No rating yet":"هنوز امتیازی ثبت نشده","Customer Rating":"امتیاز مشتریان","Rating":"امتیاز","Reviews":"نظرها","Customer Reviews":"نظرهای مشتریان","Fast delivery":"ارسال سریع","Product protection":"محافظت از محصول","Secure Payment":"پرداخت امن","Safe checkout":"پرداخت امن","✓ Genuine Product":"✓ محصول اصل","✓ Easy Returns":"✓ امکان مرجوعی آسان","✓ Customer Support":"✓ پشتیبانی مشتریان",
    "In Stock":"موجود","Out of Stock":"ناموجود","● In Stock":"● موجود","Free Shipping":"ارسال رایگان","Standard Shipping":"ارسال معمولی","Warranty":"گارانتی","Warranty Included":"دارای گارانتی","1 Year Warranty":"گارانتی یک‌ساله",
    "Your Cart is Empty":"سبد خرید شما خالی است","Your cart is empty!":"سبد خرید شما خالی است!","Your cart is empty.":"سبد خرید شما خالی است.","Your cart is empty":"سبد خرید شما خالی است","Add some products to your cart!":"چند محصول به سبد خریدتان اضافه کنید!","Empty Cart":"سبد خرید خالی است","🗑️ Clear Cart":"🗑️ خالی کردن سبد خرید","Clear Cart":"خالی کردن سبد خرید","💳 Checkout":"💳 تسویه حساب","Checkout":"تسویه حساب","Continue Shopping":"ادامه خرید","🎮 Continue Shopping":"🎮 ادامه خرید","Continue shopping":"ادامه خرید","Browse Products":"مشاهده محصولات","View All Products":"مشاهده همه محصولات","View Products":"مشاهده محصولات","Shop Now":"همین حالا خرید کنید","Explore Products":"مشاهده محصولات",
    "Your Favorites":"علاقه‌مندی‌های شما","♥ My Favorites":"♥ علاقه‌مندی‌های من","Your favorites list is empty.":"فهرست علاقه‌مندی‌های شما خالی است.","Your favorites list is empty 😕":"فهرست علاقه‌مندی‌های شما خالی است 😕","No favorites yet":"هنوز محصولی به علاقه‌مندی‌ها اضافه نکرده‌اید","Remove Favorite":"حذف از علاقه‌مندی‌ها",
    "Nothing found 😕":"چیزی پیدا نشد 😕","Nothing found":"چیزی پیدا نشد","No products found.":"محصولی پیدا نشد.","Oops! No products found.":"اوه! محصولی پیدا نشد.","Try another search.":"عبارت دیگری را جست‌وجو کنید.","Clear Search":"پاک کردن جست‌وجو","Search":"جست‌وجو","Search Results":"نتایج جست‌وجو","No results":"نتیجه‌ای پیدا نشد",
    "Product":"محصول","Product:":"محصول:","Price":"قیمت","Quantity":"تعداد","Subtotal":"جمع جزء","Total":"مبلغ کل","Total:":"مبلغ کل:","Order Summary":"خلاصه سفارش","Shipping Fee":"هزینه ارسال","Free":"رایگان","Tax":"مالیات","Grand Total":"مبلغ نهایی","Proceed to Checkout":"ادامه برای تسویه حساب","Remove":"حذف","Remove Item":"حذف محصول","Remove from cart":"حذف از سبد خرید","Update Cart":"به‌روزرسانی سبد خرید",
    "Sort by":"مرتب‌سازی بر اساس","Sort":"مرتب‌سازی","All":"همه","Apply":"اعمال","Newest":"جدیدترین","Popular":"محبوب‌ترین","Name":"نام","Loading...":"در حال بارگذاری…","Success!":"انجام شد!","Cancel":"لغو","Close":"بستن","Save":"ذخیره","Back":"بازگشت","Back to Home":"بازگشت به صفحه اصلی","Home Page":"صفحه اصلی","Previous":"قبلی","Next":"بعدی","Clear":"پاک کردن","Confirm":"تأیید","Payment":"پرداخت","Payment is not available yet.":"امکان پرداخت هنوز فعال نشده است.","Checkout is not available yet! 🛒":"تسویه‌حساب هنوز فعال نشده است! 🛒","Thank you!":"متشکریم!","Oops!":"اوه!","Contact Us":"تماس با ما","About":"درباره ما","About S Shop":"درباره اس‌شاپ",
    "🎮 WELCOME TO S SHOP":"🎮 به اس‌شاپ خوش آمدید","Welcome to S Shop":"به اس‌شاپ خوش آمدید","Welcome to our store!":"به فروشگاه ما خوش آمدید!","Our Products":"محصولات ما","Gaming Products":"محصولات گیمینگ","Why Choose Us?":"چرا اس‌شاپ را انتخاب کنید؟","Fast Delivery":"ارسال سریع","Secure Shopping":"خرید امن","Quality Products":"محصولات باکیفیت","Support":"پشتیبانی","Learn More":"بیشتر بدانید","Follow Us":"ما را دنبال کنید","All rights reserved.":"تمامی حقوق محفوظ است","All rights reserved":"تمامی حقوق محفوظ است","Made with ❤️":"ساخته‌شده با ❤️","Quick Links":"دسترسی سریع","Quick links":"دسترسی سریع","Shop by Category":"خرید بر اساس دسته‌بندی","Shop by category":"خرید بر اساس دسته‌بندی","Latest Products":"جدیدترین محصولات","Our Mission":"هدف ما","What We Offer":"آنچه ارائه می‌دهیم","Get in Touch":"با ما در ارتباط باشید",
    "Modern gaming and technology products for gamers and tech lovers.":"محصولات مدرن گیمینگ و فناوری برای گیمرها و علاقه‌مندان به تکنولوژی.","Built for gamers 🎮":"ساخته‌شده برای گیمرها 🎮","Technology Items":"محصولات فناوری","Gaming":"گیمینگ","Technology":"فناوری","S SHOP PRODUCT":"محصول اس‌شاپ","S SHOP":"اس‌شاپ","S Shop":"اس‌شاپ","Products - S Shop":"محصولات - اس‌شاپ","About Us - S Shop":"درباره ما - اس‌شاپ","Cart - S Shop":"سبد خرید - اس‌شاپ","Favorites - S Shop":"علاقه‌مندی‌ها - اس‌شاپ",
    "A powerful gaming PC designed for gaming and everyday use.":"یک کامپیوتر گیمینگ قدرتمند برای بازی و استفاده روزمره.","PlayStation 5 gaming console with powerful performance, fast loading and a huge game library.":"کنسول پلی‌استیشن ۵ با قدرت پردازشی بالا، بارگذاری سریع و مجموعه‌ای بزرگ از بازی‌ها.","Xbox Series X with high performance, fast loading and an excellent gaming experience.":"ایکس‌باکس سری X با عملکرد قدرتمند، بارگذاری سریع و تجربه‌ای عالی از بازی.","Gaming headset with clear sound, immersive audio and a comfortable design for long gaming sessions.":"هدست گیمینگ با صدای شفاف، صدای فراگیر و طراحی راحت برای بازی‌های طولانی.","Mechanical gaming keyboard with RGB lighting, responsive keys and a durable gaming-focused design.":"کیبورد مکانیکی گیمینگ با نورپردازی RGB، کلیدهای سریع و طراحی بادوام مخصوص بازی.","Gaming mouse with an accurate sensor, fast response and a comfortable design for competitive and casual gaming.":"ماوس گیمینگ با حسگر دقیق، واکنش سریع و طراحی راحت برای بازی رقابتی و تفریحی.","High performance gaming laptop designed for modern games, demanding applications and everyday use.":"لپ‌تاپ گیمینگ قدرتمند برای بازی‌های جدید، برنامه‌های سنگین و استفاده روزمره.","Comfortable gaming chair designed for long gaming sessions with supportive padding and adjustable positioning.":"صندلی گیمینگ راحت با بالشتک‌های پشتیبان و قابلیت تنظیم برای بازی‌های طولانی.","A slimmer PlayStation 5 with fast SSD loading and next-generation gaming performance.":"پلی‌استیشن ۵ باریک‌تر با بارگذاری سریع SSD و عملکرد نسل جدید بازی.","Compact Xbox console built for fast loading and smooth next-generation gaming.":"کنسول جمع‌وجور ایکس‌باکس با بارگذاری سریع و اجرای روان بازی‌های نسل جدید.","A portable gaming laptop with a high-performance processor, dedicated graphics and fast SSD storage.":"لپ‌تاپ گیمینگ قابل‌حمل با پردازنده قدرتمند، گرافیک مجزا و حافظه SSD سریع.","Immersive gaming headset with virtual surround sound, RGB lighting and a clear microphone.":"هدست گیمینگ فراگیر با صدای مجازی چندکاناله، نورپردازی RGB و میکروفون شفاف.","Premium mechanical keyboard with RGB backlighting, anti-ghosting and a fast gaming response.":"کیبورد مکانیکی حرفه‌ای با نورپردازی RGB، قابلیت Anti-Ghosting و واکنش سریع در بازی.","Lightweight gaming mouse with a precision sensor, programmable buttons and RGB lighting.":"ماوس گیمینگ سبک با حسگر دقیق، دکمه‌های قابل‌برنامه‌ریزی و نورپردازی RGB."
  }));

  const categoryNames = {"Gaming PC":"کامپیوتر گیمینگ","Console":"کنسول","Keyboard":"کیبورد","Mouse":"ماوس","Headset":"هدست","Laptop":"لپ‌تاپ","Chair":"صندلی","Sound":"صدا","Gaming Accessories":"لوازم جانبی گیمینگ"};
  let englishTitle = document.title;

  function translateValue(value) {
    const trimmed = value.trim().replace(/\s+/g, " ");
    if (translations.has(trimmed)) return translations.get(trimmed);
    let match = trimmed.match(/^Category\s*\/\s*(.+)$/i);
    if (match) return "دسته‌بندی / " + (categoryNames[match[1]] || match[1]);
    match = trimmed.match(/^Category:\s*(.+)$/i);
    if (match) return "دسته‌بندی: " + (categoryNames[match[1]] || match[1]);
    match = trimmed.match(/^Your rating:\s*(.+)$/i);
    if (match) return "امتیاز شما: " + match[1].replace(" / 5", " از ۵");
    match = trimmed.match(/^\((\d+)\s+reviews?\)$/i);
    if (match) return "(" + match[1] + " نظر)";
    if (/^●\s*In Stock$/i.test(trimmed)) return "● موجود";
    if (/^●\s*Out of Stock$/i.test(trimmed)) return "● ناموجود";
    return null;
  }

  function isProductNameOrPrice(node) {
    const parent = node.parentElement;
    return !!parent?.closest(".product-card h2, .product-card .price, .favorite-card h2, .favorite-card .favorite-price, .cart-item-info h2, .cart-item-price");
  }

  function translateTextNode(node, toPersian) {
    if (!node.nodeValue || !node.nodeValue.trim() || isProductNameOrPrice(node)) return;
    if (toPersian) {
      if (node.__sshopOriginal === undefined) node.__sshopOriginal = node.nodeValue;
      const translated = translateValue(node.nodeValue);
      if (translated !== null) {
        const leading = node.nodeValue.match(/^\s*/)?.[0] || "";
        const trailing = node.nodeValue.match(/\s*$/)?.[0] || "";
        node.nodeValue = leading + translated + trailing;
      }
    } else if (node.__sshopOriginal !== undefined) {
      node.nodeValue = node.__sshopOriginal;
      delete node.__sshopOriginal;
    }
  }

  function translateAttributes(toPersian) {
    document.querySelectorAll("[aria-label], [title], img[alt]").forEach(el => {
      ["aria-label", "title", "alt"].forEach(attr => {
        if (!el.hasAttribute(attr)) return;
        const key = "sshopEn" + attr.replace(/[^a-z]/gi, "");
        if (el.dataset[key] === undefined) el.dataset[key] = el.getAttribute(attr);
        const original = el.dataset[key];
        if (toPersian) {
          const translated = translateValue(original);
          if (translated !== null) el.setAttribute(attr, translated);
        } else el.setAttribute(attr, original);
      });
    });
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

    document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach(el => {
      if (el.dataset.sshopEnglishPlaceholder === undefined) el.dataset.sshopEnglishPlaceholder = el.placeholder;
      if (fa) {
        const translated = translateValue(el.dataset.sshopEnglishPlaceholder);
        if (translated !== null) el.placeholder = translated;
      } else el.placeholder = el.dataset.sshopEnglishPlaceholder;
    });
    translateAttributes(fa);
    document.querySelectorAll("[data-language-button]").forEach(button => {
      button.textContent = fa ? "🇬🇧 English" : "🇮🇷 فارسی";
      button.setAttribute("aria-label", fa ? "Switch to English" : "تغییر زبان به فارسی");
      button.title = fa ? "Switch to English" : "تغییر زبان به فارسی";
    });
    document.title = fa ? (translations.get(englishTitle) || englishTitle) : englishTitle;
    localStorage.setItem("sshop-language", fa ? "fa" : "en");
  }

  function addStyles() {
    if (document.getElementById("sshop-language-styles")) return;
    const style = document.createElement("style");
    style.id = "sshop-language-styles";
    style.textContent = [
      "@import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;500;600&display=swap');",
      "[data-language-button]{border:1px solid rgba(255,106,0,.75);border-radius:12px;padding:10px 14px;color:#fff;background:linear-gradient(135deg,#8b3dff,#ff6a00);font:600 14px/1.6 Arial,sans-serif;cursor:pointer;white-space:nowrap;box-shadow:0 4px 16px rgba(139,61,255,.2);transition:transform .2s,filter .2s}",
      "[data-language-button]:hover{transform:translateY(-2px);filter:brightness(1.1)}",
      "body.sshop-persian{font-family:'Noto Nastaliq Urdu',Tahoma,serif;line-height:2.1}",
      "body.sshop-persian :is(input,button,select,textarea){font-family:Tahoma,Arial,sans-serif}",
      "body.sshop-persian :is(h1,h2,h3,h4,p,a,label,li,footer){line-height:2.05}",
      "body.sshop-persian .head{gap:14px}",
      "body.sshop-persian nav{direction:rtl}",
      "body.sshop-persian .search-form input{text-align:right}",
      "body.sshop-persian header.head>a:has(>h1),body.sshop-persian header.head>h1{display:none!important}",
      "@media(max-width:700px){[data-language-button]{padding:8px 10px}}"
    ].join("\n");
    document.head.appendChild(style);
  }

  function init() {
    englishTitle = document.title;
    addStyles();
    const header = document.querySelector("header.head, header");
    if (header && !document.querySelector("[data-language-button]")) {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.languageButton = "true";
      button.addEventListener("click", () => applyLanguage(document.documentElement.lang === "fa" ? "en" : "fa"));
      header.appendChild(button);
    }
    applyLanguage(localStorage.getItem("sshop-language") || "en");
    const observer = new MutationObserver(records => {
      if (document.documentElement.lang !== "fa") return;
      records.forEach(record => record.addedNodes.forEach(added => {
        if (added.nodeType === Node.TEXT_NODE) translateTextNode(added, true);
        else if (added.nodeType === Node.ELEMENT_NODE && !added.matches("[data-language-button]")) {
          const walker = document.createTreeWalker(added, NodeFilter.SHOW_TEXT);
          while (walker.nextNode()) translateTextNode(walker.currentNode, true);
          translateAttributes(true);
        }
      }));
    });
    observer.observe(document.body, {childList:true,subtree:true});
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();