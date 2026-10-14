/**
 * لیندا | Lynda Lingerie Atelier - Core Client-Side Logic
 * Vanilla JavaScript (Zero Build Step - Drag & Drop Ready)
 */

// Initial Default Cart Data if empty
const DEFAULT_CART = [
  {
    id: 'LND-8824',
    name: 'ست سوتین و شورت دانتل فرانسوی والنتینا',
    color: 'کالباسی مات (Dusty Rose)',
    size: '80B',
    price: 1480000,
    qty: 1,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAETUftqqSEoLA9_ZJmXNekk0IgB_HinM5iqIK4_jTFDaxjnlwjoe_ehF3T7dJNO251ail4fd66usry_hISejTUthYEBWXR7nqj2VCCidXnwPBmxJUvKSyhywpXTLkaf4XmYYNVRSXBjFfq72STUTPoFUFIPwN8xi61irPzjlncGjXHWIdouZd5QtIhXrB1uacl7pqjy5UoXOGjSDIhBMpFT1fWZWxI4kV2X23dNU4VkFjZJhMU2QU3',
    tag: 'بافت لیون فرانسه'
  },
  {
    id: 'LND-7710',
    name: 'برلت ابریشمی بدون فنر آرتمیس',
    color: 'عاجی شامپاینی (Ivory)',
    size: '75C',
    price: 1480000,
    qty: 1,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmH4zsPGgfu1wSYeKAZLgP7GY8iWzdLQ6PfJ6u16SNeyln7N1qSGzU8_0Ja3VZUI149eLuVj5xtPjQ8t99TSu3HOQHoe49NoCllhmtgPSmhtmefZDVWs_hsNHjKKAedRU6CjfUEcID6cFDJWOQm7ZcFDGQrdWmbFv3QUT20Mgo9Kul9NjJC2qC4nj0620wRrHAYAk7p2w-WqqQ3VpWPE7W8VbgJW2mEnxyunsJYY7zNrKozw5sNn5i',
    tag: '۱۰۰٪ ابریشم توت'
  }
];

// Catalog definition for Search & Quick Add
const CATALOG = [
  {
    id: 'LND-8824',
    name: 'ست سوتین و شورت دانتل فرانسوی والنتینا',
    category: 'ست‌های دانتل و مجلسی',
    price: 1480000,
    oldPrice: 1750000,
    rating: 4.9,
    reviews: 128,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAETUftqqSEoLA9_ZJmXNekk0IgB_HinM5iqIK4_jTFDaxjnlwjoe_ehF3T7dJNO251ail4fd66usry_hISejTUthYEBWXR7nqj2VCCidXnwPBmxJUvKSyhywpXTLkaf4XmYYNVRSXBjFfq72STUTPoFUFIPwN8xi61irPzjlncGjXHWIdouZd5QtIhXrB1uacl7pqjy5UoXOGjSDIhBMpFT1fWZWxI4kV2X23dNU4VkFjZJhMU2QU3',
    url: 'product.html'
  },
  {
    id: 'LND-9012',
    name: 'روبدوشامبر ساتن سیلک بلند مدل آلیس',
    category: 'لباس خواب و کیمونو ابریشمی',
    price: 2250000,
    oldPrice: 2500000,
    rating: 4.8,
    reviews: 88,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLQJ1Wfj8Q54_2pOpHkKhaZ20S5W7HxEffKidoJG3-BXgAhRcUuFA2ZXznf1Prt81X1ZFOue-vDQosQSF7BUFIbDyzMzW1-U3WhSOrrlxW9ODL3PyqMmGtpmdCSkWHopEdS9wwUhgLxNpaeOFFeR4prjXR2n4uLL4Un1kiGlvvIPltNiCEBO8nv0p2-fZ3JzPk03gv7CMUr1T5t_y6ClhJptWpgesXcybdKZwoHTC6cTDH3ZvkbcEw',
    url: 'product.html'
  },
  {
    id: 'LND-3401',
    name: 'سوتین تک اسفنجی فنردار فرانسوی مدل ژیزل',
    category: 'سوتین و کاستوم',
    price: 890000,
    oldPrice: 980000,
    rating: 4.9,
    reviews: 210,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAnZFb-efRpvIT3ZPSln0lOBTKdmO3OWqyUW1DbZSiuM7UrsoShgkuEmmwvGtJgQ_prigfT-e1GSF6xcrF_lLw0wYD5jlgQYV62qr0kqTfzWKU9fvdCUYhN8dBy6LynwSdGMbX98oYTAjaYrWz6vUxohC5I8ZIt79FwMI2rIoxwNe4JawDiu4vbwd9ti1KIbeMrrrEx5VThV_6NirrvZKVbnJIl6H21PQVwA8aYVZWnXSngMfKCp_4',
    url: 'product.html'
  },
  {
    id: 'LND-5562',
    name: 'ست بادی گیپور گل‌برجسته مدل فلورا',
    category: 'ست‌های دانتل و مجلسی',
    price: 1650000,
    oldPrice: 1850000,
    rating: 4.7,
    reviews: 52,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlxAgDTBeX8bkwBGvGl_VUpj-kxSJ2emUTUFLJmNJFesgHAwwQTkkZaVEj3M5MJelP6r99isNaT2Vz3uhtaNIyGyhbwDiz7-puOIww3Dugk_P__jzsm4aBeEw13T4OVh-j8znKQ9xom1SexZxfGVsne5Jl66iab6e3RMhqjKpokA5Udygtul7T_gGqtnetrOBSHKSfqXJ_J93y9r1I8N4BtmnMBngFcFY2WKEhcudful7z7uT1zRM3',
    url: 'product.html'
  }
];

// Helper: Format Persian Numbers
function toPersianDigits(num) {
  if (num === null || num === undefined) return '';
  return num.toString().replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
}

function formatPrice(amount) {
  return toPersianDigits(amount.toLocaleString('en-US')) + ' تومان';
}

// ========================
// Cart Management System
// ========================
function getCart() {
  try {
    const raw = localStorage.getItem('lynda_cart');
    if (!raw) {
      localStorage.setItem('lynda_cart', JSON.stringify(DEFAULT_CART));
      return DEFAULT_CART;
    }
    return JSON.parse(raw);
  } catch (e) {
    return DEFAULT_CART;
  }
}

function saveCart(cart) {
  localStorage.setItem('lynda_cart', JSON.stringify(cart));
  updateCartBadges();
  renderCartDrawer();
  // If we are on checkout page, notify checkout page
  if (typeof renderCheckoutSummary === 'function') {
    renderCheckoutSummary();
  }
}

function addToCart(item) {
  const cart = getCart();
  const existingIndex = cart.findIndex(c => c.id === item.id && c.size === item.size && c.color === item.color);
  if (existingIndex > -1) {
    cart[existingIndex].qty += (item.qty || 1);
  } else {
    cart.push({
      id: item.id || 'LND-' + Math.floor(1000 + Math.random() * 9000),
      name: item.name,
      color: item.color || 'کالباسی مات',
      size: item.size || '80B',
      price: item.price || 1480000,
      qty: item.qty || 1,
      img: item.img,
      tag: item.tag || 'آتلیه لیندا'
    });
  }
  saveCart(cart);
  showToast('«' + item.name + '» به سبد خرید افزوده شد.');
  openCartDrawer();
}

function updateCartQty(index, delta) {
  const cart = getCart();
  if (!cart[index]) return;
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
    showToast('کالا از سبد خرید حذف شد.');
  }
  saveCart(cart);
}

function removeCartItem(index) {
  const cart = getCart();
  if (cart[index]) {
    const name = cart[index].name;
    cart.splice(index, 1);
    saveCart(cart);
    showToast('«' + name + '» حذف شد.');
  }
}

function calculateCartTotals() {
  const cart = getCart();
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const discount = Math.round(subtotal * 0.10); // 10% welcome discount
  const shipping = subtotal > 1500000 ? 0 : 95000;
  const total = Math.max(0, subtotal - discount + shipping);
  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return { subtotal, discount, shipping, total, itemCount };
}

function updateCartBadges() {
  const { itemCount, subtotal } = calculateCartTotals();
  const badgeEls = document.querySelectorAll('.cart-counter-badge, #cartBadgeCounter');
  badgeEls.forEach(el => {
    el.innerText = toPersianDigits(itemCount);
  });

  const headerPriceEls = document.querySelectorAll('.header-cart-total');
  headerPriceEls.forEach(el => {
    el.innerText = formatPrice(subtotal);
  });
}

// ========================
// Cart Drawer UI Rendering
// ========================
function renderCartDrawer() {
  const listEl = document.getElementById('cartDrawerItemsList');
  if (!listEl) return;

  const cart = getCart();
  const { subtotal, total, itemCount } = calculateCartTotals();

  if (cart.length === 0) {
    listEl.innerHTML = `
      <div class="py-16 flex flex-col items-center justify-center text-center text-on-surface-variant">
        <span class="material-symbols-outlined text-6xl text-outline-variant mb-3">shopping_bag</span>
        <p class="font-headline-sm text-lg text-on-surface font-semibold">سبد خرید شما در حال حاضر خالی است</p>
        <p class="font-body-sm text-sm text-outline mt-1 mb-6">از لطیف‌ترین کارهای کالکشن جدید دیدن فرمایید.</p>
        <a href="index.html#featured-products" onclick="closeCartDrawer()" class="bg-primary hover:bg-primary-container text-on-primary font-label-md px-6 py-2.5 rounded-full shadow transition-all">
          مشاهده کاتالوگ لباس زیر
        </a>
      </div>
    `;
  } else {
    listEl.innerHTML = cart.map((item, idx) => `
      <div class="flex items-center gap-3 p-3 bg-surface-container-low rounded-xl border border-outline-variant/30 hover:border-primary/30 transition-all">
        <div class="w-16 h-20 rounded-lg overflow-hidden shrink-0 bg-surface-container-high border border-outline-variant/20">
          <img src="${item.img}" alt="${item.name}" class="w-full h-full object-cover">
        </div>
        <div class="flex flex-col flex-1 min-w-0">
          <div class="flex items-start justify-between gap-1">
            <h4 class="font-label-md text-on-surface font-semibold truncate text-sm">${item.name}</h4>
            <button onclick="removeCartItem(${idx})" class="text-outline hover:text-error transition-colors p-1" title="حذف">
              <span class="material-symbols-outlined text-[16px]">close</span>
            </button>
          </div>
          <div class="flex items-center gap-2 text-xs text-on-surface-variant mt-1">
            <span>رنگ: <strong>${item.color.split(' ')[0]}</strong></span>
            <span>•</span>
            <span>سایز: <strong>${item.size}</strong></span>
          </div>
          <div class="flex items-center justify-between mt-2 pt-1 border-t border-outline-variant/20">
            <div class="flex items-center bg-surface-container rounded-full h-7 px-1">
              <button onclick="updateCartQty(${idx}, -1)" class="w-6 h-6 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-variant text-xs">−</button>
              <span class="w-6 text-center font-bold text-xs">${toPersianDigits(item.qty)}</span>
              <button onclick="updateCartQty(${idx}, 1)" class="w-6 h-6 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-variant text-xs">+</button>
            </div>
            <span class="font-label-md text-primary font-bold text-sm">${formatPrice(item.price * item.qty)}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  const drawerSubtotal = document.getElementById('cartDrawerSubtotal');
  if (drawerSubtotal) drawerSubtotal.innerText = formatPrice(subtotal);

  const drawerTotal = document.getElementById('cartDrawerTotal');
  if (drawerTotal) drawerTotal.innerText = formatPrice(total);

  const drawerCount = document.getElementById('cartDrawerItemCount');
  if (drawerCount) drawerCount.innerText = toPersianDigits(itemCount) + ' کالا';
}

function openCartDrawer() {
  renderCartDrawer();
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartDrawerBackdrop');
  if (drawer && backdrop) {
    backdrop.classList.remove('hidden');
    requestAnimationFrame(() => {
      backdrop.classList.remove('opacity-0');
      backdrop.classList.add('opacity-100');
      drawer.classList.remove('translate-x-full');
      drawer.classList.add('translate-x-0');
    });
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartDrawerBackdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('translate-x-0');
    drawer.classList.add('translate-x-full');
    backdrop.classList.remove('opacity-100');
    backdrop.classList.add('opacity-0');
    setTimeout(() => {
      backdrop.classList.add('hidden');
      document.body.style.overflow = '';
    }, 300);
  }
}

// ========================
// Telegram Ordering Engine
// ========================
function orderCartViaTelegram() {
  const cart = getCart();
  if (cart.length === 0) {
    showToast('سبد خرید شما خالی است. ابتدا کالای مورد نظر را انتخاب نمایید.');
    return;
  }

  const { subtotal, total, itemCount } = calculateCartTotals();
  let msg = `🌸 سلام، مایل به ثبت سفارش در آتلیه لیندا (Lynda Lingerie) هستم:\n\n`;
  msg += `📋 اقلام سبد خرید (${toPersianDigits(itemCount)} قلم):\n`;
  msg += `─────────────────────────\n`;

  cart.forEach((item, i) => {
    msg += `${toPersianDigits(i + 1)}. ${item.name}\n`;
    msg += `   🎨 رنگ: ${item.color}\n`;
    msg += `   📏 سایز: ${item.size}\n`;
    msg += `   🔢 تعداد: ${toPersianDigits(item.qty)} عدد\n`;
    msg += `   💵 مبلغ: ${formatPrice(item.price * item.qty)}\n\n`;
  });

  msg += `─────────────────────────\n`;
  msg += `💰 مبلغ قابل پرداخت با تخفیف: ${formatPrice(total)}\n`;
  msg += `📦 نوع ارسال درخواستی: بسته‌بندی ۱۰۰٪ محرمانه و بدون نام کالا\n`;
  msg += `✨ لطفاً شماره کارت یا درگاه جهت واریز و ثبت نهایی را ارسال فرمایید.`;

  openTelegramModal(msg);
}

function orderSingleViaTelegram(productName, color, size, price) {
  let msg = `🌸 سلام، مایل به خرید مستقیم این محصول از آتلیه لیندا هستم:\n\n`;
  msg += `🛍️ نام کالا: ${productName}\n`;
  if (color) msg += `🎨 رنگ انتخابی: ${color}\n`;
  if (size) msg += `📏 سایز کاپ / دور سینه: ${size}\n`;
  if (price) msg += `💵 قیمت: ${price}\n`;
  msg += `📦 بسته‌بندی ۱۰۰٪ محرمانه و اختصاصی لیندا\n`;
  msg += `✨ لطفاً جهت نهایی‌سازی سفارش و ارسال اکسپرس هماهنگ بفرمایید.`;

  openTelegramModal(msg);
}

function openTelegramModal(messageText) {
  const modal = document.getElementById('telegramOrderModal');
  const preview = document.getElementById('telegramMessagePreview');
  const link = document.getElementById('telegramDirectLink');

  if (preview) preview.value = messageText;
  if (link) {
    const encoded = encodeURIComponent(messageText);
    link.href = `https://t.me/LyndaLingerie_Admin?text=${encoded}`;
  }

  if (modal) {
    modal.classList.remove('hidden');
    requestAnimationFrame(() => {
      modal.classList.remove('opacity-0');
      modal.classList.add('opacity-100');
    });
  }
}

function closeTelegramModal() {
  const modal = document.getElementById('telegramOrderModal');
  if (modal) {
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0');
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 250);
  }
}

function copyTelegramMessage() {
  const preview = document.getElementById('telegramMessagePreview');
  if (preview) {
    navigator.clipboard.writeText(preview.value).then(() => {
      showToast('متن سفارش کپی شد. می‌توانید در تلگرام یا واتساپ پیست کنید.');
    }).catch(() => {
      preview.select();
      document.execCommand('copy');
      showToast('متن سفارش کپی شد.');
    });
  }
}

// ========================
// Search Modal & Live Filter
// ========================
function openSearchModal() {
  const modal = document.getElementById('searchModal');
  const input = document.getElementById('searchInputField');
  if (modal) {
    modal.classList.remove('hidden');
    requestAnimationFrame(() => {
      modal.classList.remove('opacity-0');
      modal.classList.add('opacity-100');
      if (input) input.focus();
    });
    renderSearchResults('');
  }
}

function closeSearchModal() {
  const modal = document.getElementById('searchModal');
  if (modal) {
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0');
    setTimeout(() => modal.classList.add('hidden'), 250);
  }
}

function handleSearchInput(query) {
  renderSearchResults(query.trim());
}

function renderSearchResults(query) {
  const resultsContainer = document.getElementById('searchResultsList');
  if (!resultsContainer) return;

  const filtered = query
    ? CATALOG.filter(p => p.name.includes(query) || p.category.includes(query))
    : CATALOG;

  if (filtered.length === 0) {
    resultsContainer.innerHTML = `
      <div class="py-8 text-center text-outline">
        <p>مدلی با مشخصات «${query}» یافت نشد.</p>
        <p class="text-xs mt-1">می‌توانید کلماتی مثل «والنتینا»، «دانتل»، «ابریشم» یا «روبدوشامبر» را امتحان کنید.</p>
      </div>
    `;
    return;
  }

  resultsContainer.innerHTML = filtered.map(item => `
    <a href="${item.url}" class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-surface-container transition-all group border border-transparent hover:border-outline-variant/30">
      <img src="${item.img}" alt="${item.name}" class="w-14 h-16 rounded-lg object-cover bg-surface-container-high shrink-0">
      <div class="flex-1 min-w-0">
        <span class="font-label-sm text-xs text-primary font-semibold">${item.category}</span>
        <h4 class="font-label-md text-on-surface font-semibold group-hover:text-primary transition-colors truncate">${item.name}</h4>
        <div class="flex items-center gap-2 mt-1">
          <span class="font-label-md text-primary font-bold text-xs">${formatPrice(item.price)}</span>
          <span class="text-xs text-tertiary flex items-center gap-0.5">★ ${toPersianDigits(item.rating)}</span>
        </div>
      </div>
      <span class="material-symbols-outlined text-outline group-hover:text-primary group-hover:-translate-x-1 transition-all text-sm">chevron_left</span>
    </a>
  `).join('');
}

// ========================
// Wishlist & Toast Manager
// ========================
let wishlistCount = 2;

function toggleWishlist(btn, productName) {
  const icon = btn.querySelector('.material-symbols-outlined') || btn;
  const isFilled = icon.style.fontVariationSettings && icon.style.fontVariationSettings.includes("'FILL' 1");
  const favCounter = document.getElementById('favCounter');

  if (isFilled) {
    icon.style.fontVariationSettings = "'FILL' 0";
    btn.classList.remove('text-primary');
    wishlistCount = Math.max(0, wishlistCount - 1);
    showToast('از لیست علاقه‌مندی‌ها برداشته شد.');
  } else {
    icon.style.fontVariationSettings = "'FILL' 1";
    btn.classList.add('text-primary');
    btn.style.transform = 'scale(1.25)';
    setTimeout(() => { btn.style.transform = 'scale(1)'; }, 200);
    wishlistCount += 1;
    showToast((productName || 'محصول') + ' به علاقه‌مندی‌ها اضافه شد.');
  }

  if (favCounter) {
    favCounter.innerText = toPersianDigits(wishlistCount);
  }
}

function showToast(message) {
  let toast = document.getElementById('globalToastPill');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToastPill';
    toast.className = 'fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-primary/95 backdrop-blur-md text-on-primary font-label-md text-sm px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 opacity-0 -translate-y-4 pointer-events-none transition-all duration-300 border border-white/20';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <span class="material-symbols-outlined text-[18px]">verified</span>
    <span>${message}</span>
  `;

  toast.classList.remove('opacity-0', '-translate-y-4', 'pointer-events-none');
  toast.classList.add('opacity-100', 'translate-y-0');

  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', '-translate-y-4', 'pointer-events-none');
  }, 2600);
}

// ========================
// Mobile Navigation Drawer
// ========================
function toggleMobileMenu() {
  const menu = document.getElementById('mobileNavDrawer');
  const backdrop = document.getElementById('mobileNavBackdrop');
  if (menu && backdrop) {
    const isOpen = !menu.classList.contains('translate-x-full');
    if (isOpen) {
      menu.classList.add('translate-x-full');
      backdrop.classList.add('hidden', 'opacity-0');
      document.body.style.overflow = '';
    } else {
      backdrop.classList.remove('hidden');
      requestAnimationFrame(() => {
        backdrop.classList.remove('opacity-0');
        backdrop.classList.add('opacity-100');
        menu.classList.remove('translate-x-full');
      });
      document.body.style.overflow = 'hidden';
    }
  }
}

// Initial Run
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadges();

  // Scroll Reveal Observer
  const reveals = document.querySelectorAll('.reveal-fade-up');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-visible'));
  }
});
