/* script.js - renders products, manages cart, and language toggle */

// -- Utility
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

function formatPrice(num){
  return '$' + Number(num).toFixed(2);
}

// -- Local Storage cart
const CART_KEY = 'ozel_cart_v1';
function loadCart(){
  try{
    return JSON.parse(localStorage.getItem(CART_KEY)) || {};
  }catch(e){ return {}; }
}
function saveCart(cart){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount(){
  const cart = loadCart();
  const count = Object.values(cart).reduce((s,i)=>s+i.qty,0);
  const els = $$('#cart-count'); // may be many
  els.forEach(el => el.textContent = count);
  const els2 = $$('#cart-count-cart');
  els2.forEach(el => el.textContent = count);
}

// -- Render products
function createProductCard(p){
  const div = document.createElement('div');
  div.className = 'card';
  div.innerHTML = `
    <img src="${p.image}" alt="${p.name}" loading="lazy">
    <h4 class="product-name">${p.name}</h4>
    <p class="small">${p.category} • ${p.description}</p>
    <p class="price">${formatPrice(p.price)}</p>
    <div style="display:flex;gap:8px;margin-top:8px">
      <button class="btn add-btn" data-id="${p.id}">Add to Cart</button>
      <button class="btn" data-id="${p.id}" onclick="viewDetails(${p.id})">Details</button>
    </div>
  `;
  return div;
}

function displayProducts(list){
  const grid = $('#product-grid');
  if(!grid) return;
  grid.innerHTML = '';
  if(list.length===0){
    grid.innerHTML = '<p class="small">No products found.</p>';
    return;
  }
  list.forEach(p=>{
    grid.appendChild(createProductCard(p));
  });
  // Attach add-to-cart handlers
  $$('.add-btn').forEach(btn=>{
    btn.onclick = () => { addToCart(Number(btn.dataset.id)); };
  });
}

// -- Details (quick alert modal fallback)
function viewDetails(id){
  const p = products.find(x=>x.id===id);
  if(!p) return;
  alert(p.name + '\n' + p.description + '\nPrice: ' + formatPrice(p.price));
}

// -- Add to cart
function addToCart(id, qty=1){
  const p = products.find(x=>x.id===id);
  if(!p) return;
  const cart = loadCart();
  if(cart[id]){
    cart[id].qty += qty;
  } else {
    cart[id] = { id: p.id, name: p.name, price: p.price, image: p.image, qty: qty };
  }
  saveCart(cart);
  flashMessage('Added to cart');
}

// -- Flash message
function flashMessage(text){
  const el = document.createElement('div');
  el.className = 'flash';
  el.textContent = text;
  document.body.appendChild(el);
  setTimeout(()=>el.classList.add('show'),20);
  setTimeout(()=>el.classList.remove('show'),1500);
  setTimeout(()=>el.remove(),2000);
}

// -- Filters & Search
function buildFilterButtons(){
  const categories = ['all','floral','fresh','woody','citrus','gourmand','spicy'];
  const container = $('#filters');
  if(!container) return;
  container.innerHTML = '';
  categories.forEach(cat=>{
    const b = document.createElement('button');
    b.className = 'btn';
    b.textContent = cat[0].toUpperCase() + cat.slice(1);
    b.dataset.cat = cat;
    b.onclick = ()=> {
      $$('#filters .btn').forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
      filterProducts(cat);
    };
    container.appendChild(b);
  });
  // set all active by default
  const first = container.querySelector('button');
  if(first) first.classList.add('active');
}

function filterProducts(cat){
  if(cat==='all') displayProducts(products);
  else displayProducts(products.filter(p=>p.category===cat));
}

function searchProducts(){
  const q = ($('#search-input')||{value:''}).value.toLowerCase().trim();
  if(!q) displayProducts(products);
  else displayProducts(products.filter(p=>p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)));
}

// -- Cart page rendering
function renderCartPage(){
  const cartContainer = $('#cart-items');
  if(!cartContainer) return;
  const cart = loadCart();
  const ids = Object.keys(cart).map(k=>Number(k));
  if(ids.length===0){ cartContainer.innerHTML = '<p class="small">Your cart is empty.</p>'; $('#cart-total') && ($('#cart-total').textContent = 'Total: $0.00'); return; }
  cartContainer.innerHTML = '';
  let total = 0;
  ids.forEach(id=>{
    const item = cart[id];
    total += item.price * item.qty;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div style="flex:1">
        <h4>${item.name}</h4>
        <p class="small">${formatPrice(item.price)} × <span class="item-qty">${item.qty}</span></p>
        <div class="qty-controls">
          <button class="btn dec" data-id="${id}">−</button>
          <button class="btn inc" data-id="${id}">+</button>
          <button class="btn remove" data-id="${id}">Remove</button>
        </div>
      </div>
    `;
    cartContainer.appendChild(div);
  });
  $('#cart-total').textContent = 'Total: ' + formatPrice(total);
  // attach handlers
  $$('.dec').forEach(b=>b.onclick = ()=> adjustQty(Number(b.dataset.id), -1));
  $$('.inc').forEach(b=>b.onclick = ()=> adjustQty(Number(b.dataset.id), +1));
  $$('.remove').forEach(b=>b.onclick = ()=> removeFromCart(Number(b.dataset.id)));
}

function adjustQty(id, delta){
  const cart = loadCart();
  if(!cart[id]) return;
  cart[id].qty += delta;
  if(cart[id].qty <= 0) delete cart[id];
  saveCart(cart);
  renderCartPage();
}

function removeFromCart(id){
  const cart = loadCart();
  delete cart[id];
  saveCart(cart);
  renderCartPage();
}

// -- clear cart
function clearCart(){
  localStorage.removeItem(CART_KEY);
  updateCartCount();
  renderCartPage();
}

// -- Language toggle (English <-> Arabic)
const LANG_KEY = 'ozel_lang_v1';
function currentLang(){ return localStorage.getItem(LANG_KEY) || 'en'; }
function setLang(lang){
  localStorage.setItem(LANG_KEY, lang);
  applyLang();
}
function applyLang(){
  const lang = currentLang();
  // Basic translations
  const texts = {
    en: {
      brand: 'Ozel',
      hero: 'Discover Your Signature Scent',
      sub: 'Luxury fragrances crafted with the finest ingredients.',
      shopNow: 'Shop Now',
      shopHeading: 'Our Perfumes',
      shopSub: 'Browse our exquisite collection',
      footer: 'All rights reserved.',
      added: 'Added to cart',
      cartTitle: 'Your Cart',
      checkout: 'Checkout (demo)'
    },
    ar: {
      brand: 'أوزيل',
      hero: 'اكتشف عطرك المميز',
      sub: 'عطور فاخرة مصنوعة من أجود المكونات.',
      shopNow: 'تسوق الآن',
      shopHeading: 'عطورنا',
      shopSub: 'تصفح تشكيلتنا الرائعة',
      footer: 'جميع الحقوق محفوظة.',
      added: 'تم الإضافة إلى السلة',
      cartTitle: 'سلة مشترياتك',
      checkout: 'الدفع (عرض توضيحي)'
    }
  };
  const t = texts[lang] || texts.en;
  // set direction and html lang
  const html = document.documentElement;
  if(lang==='ar'){ html.lang = 'ar'; html.dir = 'rtl'; } else { html.lang = 'en'; html.dir = 'ltr'; }
  // text replacements (if elements exist)
  $('#brand-title') && ($('#brand-title').textContent = t.brand);
  $('#hero-title') && ($('#hero-title').textContent = t.hero);
  $('#hero-sub') && ($('#hero-sub').textContent = t.sub);
  $('#shop-now') && ($('#shop-now').textContent = t.shopNow);
  $('#shop-heading') && ($('#shop-heading').textContent = t.shopHeading);
  $('#shop-subheading') && ($('#shop-subheading').textContent = t.shopSub);
  $('#footer-text') && ($('#footer-text').textContent = '© ' + new Date().getFullYear() + ' Ozel — ' + t.footer);
  $('#footer-text-cart') && ($('#footer-text-cart').textContent = '© ' + new Date().getFullYear() + ' Ozel — ' + t.footer);
  $('#cart-title') && ($('#cart-title').textContent = t.cartTitle);
  $('#checkout-btn') && ($('#checkout-btn').textContent = t.checkout);
  // switch button text
  const switchBtn = $('#lang-switch') || $('#lang-switch-cart');
  if(switchBtn) switchBtn.textContent = (lang==='en' ? 'العربية' : 'English');
}

// -- Events & Init
function initSite(){
  // populate year
  $$('#year').forEach(el=>el.textContent = new Date().getFullYear());
  $$('#year-cart').forEach(el=>el.textContent = new Date().getFullYear());

  buildFilterButtons();
  displayProducts(products);

  // search input
  const si = $('#search-input');
  if(si) si.addEventListener('input', searchProducts);

  // category select
  const sel = $('#category-filter');
  if(sel) sel.addEventListener('change', (e)=> filterProducts(e.target.value));

  // lang switch(s)
  const ls = $('#lang-switch');
  if(ls) ls.onclick = ()=> { setLang(currentLang()==='en' ? 'ar' : 'en'); };
  const lsc = $('#lang-switch-cart');
  if(lsc) lsc.onclick = ()=> { setLang(currentLang()==='en' ? 'ar' : 'en'); };

  // checkout button demo
  const cb = $('#checkout-btn');
  if(cb) cb.onclick = ()=> { alert('This is a demo checkout. Integrate real payments to complete orders.'); };

  const cc = $('#clear-cart');
  if(cc) cc.onclick = ()=> { if(confirm('Clear cart?')) clearCart(); };

  // attach add to cart via event delegation (for dynamic pages)
  document.addEventListener('click', (ev)=>{
    const t = ev.target;
    if(t.matches && t.matches('.add-btn')){ addToCart(Number(t.dataset.id)); }
  });

  // initial cart count
  updateCartCount();
  // apply language preference
  applyLang();

  // if on cart page, render cart
  if(document.location.pathname.endsWith('cart.html')) renderCartPage();
}

// init on DOM ready
document.addEventListener('DOMContentLoaded', initSite);
