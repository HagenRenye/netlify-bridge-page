// ==============================================================
// SPHERES OF ELEGANCE — LOGIK V9
// Fix: switchSub scrollt ins Carousel, Sub-IDs Supabase-konform
// ==============================================================

const SB_URL = 'https://gmibyowinqjfysgarhea.supabase.co';
const SB_KEY = 'sb_publishable_DWGaYYEE_2xpLcMvgqs6kA_QA2TFHr9';

const spheresData = [
  { id:'luxury-watches',   title:'Luxury Watches',    description:'Time. Precision. Legacy. Where horological mastery meets sculptural beauty — each timepiece an heirloom engineered to outlast generations.',           crossSellingSpheres:['fine-jewelry','leather-goods'],   heroImage:'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80' },
  { id:'fine-jewelry',     title:'Fine Jewelry',      description:'Crafted Brilliance. The quiet power of precious stones and noble metals — jewellery that speaks without words.',                                        crossSellingSpheres:['luxury-watches','fragrances'],    heroImage:'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80' },
  { id:'fragrances',       title:'Fragrances',        description:'Invisible Luxury. The most intimate luxury — a signature scent that lingers long after you have left the room.',                                        crossSellingSpheres:['fine-jewelry','fashion'],         heroImage:'https://images.unsplash.com/photo-1541643600914-78b084683702?w=800&q=80' },
  { id:'kitchen-dining',   title:'Kitchen & Dining',  description:'The Art of Entertaining. Where culinary passion meets obsessive craftsmanship — tools and tableware for those who treat every meal as ceremony.',       crossSellingSpheres:['living-styles','art-objects'],    heroImage:'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80' },
  { id:'living-styles',    title:'Living Styles',     description:'Spaces That Inspire. Sculptural furniture, luminous textiles, and objects that transform a house into a considered world.',                             crossSellingSpheres:['audio-technology','art-objects'], heroImage:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80' },
  { id:'audio-technology', title:'Audio & Technology',description:'Sound Beyond Expectations. The symphony of acoustic perfection and timeless industrial design — where engineering transcends utility and becomes art.',  crossSellingSpheres:['living-styles','art-objects'],    heroImage:'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80' },
  { id:'fashion',          title:'Fashion',           description:'Quiet Confidence. Curated fashion for those who understand that true style is never about noise — it is about presence.',                                crossSellingSpheres:['leather-goods','fragrances'],     heroImage:'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80' },
  { id:'leather-goods',    title:'Leather Goods',     description:'Timeless Companions. Iconic bags, wallets and accessories crafted from the finest hides — objects that improve with every year of use.',                crossSellingSpheres:['fashion','luxury-watches'],       heroImage:'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80' },
  { id:'art-objects',      title:'Art & Objects',     description:'Curated Expressions. Collectible art, sculptural objects and rare editions for interiors that tell a story.',                                           crossSellingSpheres:['living-styles','kitchen-dining'], heroImage:'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80' }
];

// IDs MÜSSEN exakt mit Supabase sub_sphere_id übereinstimmen!
const subSpheresMap = {
  'luxury-watches': [
    { id:'lw-mens',        num:'01a', title:'Herrenuhren',     desc:'Rolex, Patek Philippe, A. Lange & Söhne' },
    { id:'lw-womens',      num:'01b', title:'Damenuhren',      desc:'Cartier, Chopard, Bulgari' },
    { id:'lw-sport',       num:'01c', title:'Sportuhren',      desc:'IWC, TAG Heuer, Breitling' }
  ],
  // Fragrances: IDs aus Supabase → fr-sig-men, fr-sig-women, fr-vault-men
  'fragrances': [
    { id:'fr-sig-men',     num:'03a', title:'Signature Men',   desc:'Tom Ford, Creed, Xerjoff' },
    { id:'fr-sig-women',   num:'03b', title:'Signature Women', desc:'Amouage, Chanel, Diptyque' },
    { id:'fr-vault-men',   num:'03c', title:'Private Vault',   desc:'Maison Margiela, Byredo, Niche' }
  ],
  // Kitchen: kd-cookware, kd-knives aktiv; kd-coffee = 04f in Supabase → ID angepasst
  'kitchen-dining': [
    { id:'kd-cookware',    num:'04b', title:'Töpfe & Pfannen', desc:'Le Creuset, Staub, Demeyere' },
    { id:'kd-knives',      num:'04c', title:'Messer',          desc:'Zwilling, Wüsthof, Global' },
    { id:'04f',            num:'04f', title:'Kaffeemaschinen', desc:"Jura, De'Longhi, Miele" }
  ],
  'audio-technology': [
    { id:'au-speakers',    num:'06a', title:'Lautsprecher',    desc:'Bang & Olufsen, Bowers & Wilkins' },
    { id:'au-headphones',  num:'06b', title:'Kopfhörer',       desc:'Focal, Sennheiser, Sony' },
    { id:'au-smarthome',   num:'06c', title:'Smart Home Audio',desc:'Sonos, Denon, Yamaha' }
  ]
};

// ── STATE ─────────────────────────────────────────────────────
let activeSphereId = null;
let activeSubId    = null;

const gridContainer   = document.getElementById('gridContainer');
const detailContainer = document.getElementById('detailContainer');

function getSphereById(id) { return spheresData.find(s => s.id === id); }

// ── SUPABASE ──────────────────────────────────────────────────
function loadProducts(sphereId, subId) {
  const c = document.getElementById('soe-carousel');
  if (!c) return;

  c.innerHTML = `<div style="flex:0 0 100%;display:flex;align-items:center;justify-content:center;height:280px;color:rgba(249,246,240,0.3);font-size:0.75rem;letter-spacing:3px;text-transform:uppercase;">Loading …</div>`;

  let params = `sphere_id=eq.${sphereId}&is_active=eq.true&order=sort_order`;
  if (subId) params += `&sub_sphere_id=eq.${subId}`;

  fetch(`${SB_URL}/rest/v1/Products?${params}`, {
    headers:{ 'apikey':SB_KEY, 'Authorization':`Bearer ${SB_KEY}` }
  })
  .then(r => r.ok ? r.json() : [])
  .then(products => {
    if (!products || !products.length) {
      c.innerHTML = `<div style="flex:0 0 100%;display:flex;align-items:center;justify-content:center;height:280px;color:rgba(249,246,240,0.25);font-size:0.75rem;letter-spacing:3px;text-transform:uppercase;">No products yet</div>`;
      return;
    }
    c.innerHTML = products.map(p => `
      <div onclick="openProduct(JSON.parse(decodeURIComponent('${encodeURIComponent(JSON.stringify(p))}')))"
        style="flex:0 0 260px;cursor:pointer;color:#f9f6f0;-webkit-tap-highlight-color:transparent;">
        <div style="width:260px;height:280px;overflow:hidden;background:rgba(255,255,255,0.05);margin-bottom:14px;position:relative;">
          <img src="${p.image_url||''}" alt="${p.title}"
            style="width:100%;height:100%;object-fit:cover;transition:transform 0.5s;"
            onmouseover="this.style.transform='scale(1.05)'"
            onmouseout="this.style.transform='scale(1)'">
          <div style="position:absolute;bottom:0;left:0;right:0;padding:8px 12px;background:linear-gradient(transparent,rgba(11,43,27,0.85));font-size:0.6rem;letter-spacing:2px;text-transform:uppercase;color:rgba(249,246,240,0.7);">
            Discover →
          </div>
        </div>
        ${p.brand?`<p style="font-size:0.62rem;letter-spacing:2px;text-transform:uppercase;color:rgba(249,246,240,0.38);margin:0 0 5px;">${p.brand}</p>`:''}
        <p style="font-size:0.85rem;margin:0 0 5px;color:#f9f6f0;line-height:1.4;">${p.title}</p>
        <p style="font-size:0.78rem;font-family:'Playfair Display',serif;color:rgba(249,246,240,0.7);margin:0;">
          ${p.price ? '€\u202f'+parseFloat(p.price).toLocaleString('de-DE',{minimumFractionDigits:0}) : (p.price_indication||'Premium Selection')}
        </p>
      </div>`).join('');
  })
  .catch(()=>{
    const c2 = document.getElementById('soe-carousel');
    if (c2) c2.innerHTML = `<div style="flex:0 0 100%;color:rgba(249,246,240,0.2);font-size:0.75rem;letter-spacing:2px;padding:40px;">Connection error</div>`;
  });
}

// ── SUB-SWITCH ────────────────────────────────────────────────
function switchSub(subId) {
  activeSubId = subId;
  history.replaceState({ sphere: activeSphereId, sub: subId }, '', '?sphere=' + activeSphereId + '&sub=' + subId);

  // Buttons umfärben
  const subs = subSpheresMap[activeSphereId] || [];
  subs.forEach(sub => {
    const btn = document.getElementById('subsphere-btn-' + sub.id);
    if (!btn) return;
    const active = sub.id === subId;
    btn.style.background = active ? 'rgba(249,246,240,0.1)' : 'transparent';
    btn.style.border     = '1px solid ' + (active ? 'rgba(249,246,240,0.55)' : 'rgba(249,246,240,0.18)');
    btn.style.color      = active ? '#f9f6f0' : 'rgba(249,246,240,0.48)';
  });

  // Sub-Desc aktualisieren
  const activeSub = subs.find(s => s.id === subId);
  const descEl = document.getElementById('soe-sub-desc');
  if (descEl) descEl.textContent = activeSub ? activeSub.desc : '';

  // Produkte laden
  loadProducts(activeSphereId, subId);

  // ── Scroll ins Carousel (nach kurzem Delay, damit DOM settled) ──
  setTimeout(() => {
    const carousel = document.getElementById('soe-carousel');
    if (carousel) carousel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
}

// ── KARTEN ────────────────────────────────────────────────────
function initCardEvents() {
  spheresData.forEach(sphere => {
    const card = document.getElementById('card-' + sphere.id);
    if (!card) return;
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => openSphere(sphere.id));
  });
}

// ── ÖFFNEN ────────────────────────────────────────────────────
function openSphere(sphereId, subId) {
  const sphere = getSphereById(sphereId);
  if (!sphere) return;
  activeSphereId = sphereId;
  const subs = subSpheresMap[sphereId] || [];
  activeSubId = subId || (subs.length ? subs[0].id : null);
  renderDetail();
  history.pushState({ sphere: sphereId, sub: activeSubId }, '', '?sphere=' + sphereId + (activeSubId ? '&sub=' + activeSubId : ''));
  detailContainer.scrollIntoView({ behavior:'smooth', block:'start' });
  loadProducts(sphereId, activeSubId);
}

function closeSphere() {
  activeSphereId = null;
  activeSubId    = null;
  detailContainer.innerHTML = '';
  history.pushState(null, '', window.location.pathname);
  gridContainer.scrollIntoView({ behavior:'smooth', block:'start' });
}

// ── CAROUSEL SCROLL (Prev/Next Buttons) ──────────────────────
function carouselScroll(dir) {
  const c = document.getElementById('soe-carousel');
  if (!c) return;
  c.scrollBy({ left: dir * 300, behavior: 'smooth' });
}

// ── RENDER ────────────────────────────────────────────────────
function renderDetail() {
  const sphere = getSphereById(activeSphereId);
  if (!sphere) return;
  const subs      = subSpheresMap[activeSphereId] || [];
  const activeSub = subs.find(s => s.id === activeSubId) || null;

  detailContainer.innerHTML = `
<div style="max-width:1200px;margin:0 auto;padding:48px 24px 64px;font-family:'Inter',sans-serif;color:#f9f6f0;box-sizing:border-box;">

  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:36px;flex-wrap:wrap;gap:16px;">
    <h2 style="font-family:'Playfair Display',serif;font-size:clamp(1.4rem,4vw,2rem);font-weight:400;letter-spacing:2px;color:#f9f6f0;margin:0;text-transform:uppercase;">
      ${sphere.title}
    </h2>
    <button onclick="closeSphere()" style="background:transparent;border:1px solid rgba(249,246,240,0.35);color:#f9f6f0;padding:9px 22px;font-family:'Inter',sans-serif;font-size:0.78rem;letter-spacing:2px;cursor:pointer;text-transform:uppercase;white-space:nowrap;-webkit-tap-highlight-color:transparent;">
      ← Back
    </button>
  </div>

  <div style="display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:32px;align-items:start;margin-bottom:40px;">
    <img src="${sphere.heroImage}" alt="${sphere.title}"
      style="width:100%;aspect-ratio:4/3;object-fit:cover;display:block;">
    <div>
      <p style="font-size:clamp(0.9rem,2vw,1rem);line-height:1.9;color:rgba(249,246,240,0.78);margin:0 0 28px;">
        ${sphere.description}
      </p>
      ${sphere.crossSellingSpheres && sphere.crossSellingSpheres.length ? `
      <p style="font-size:0.66rem;letter-spacing:3px;text-transform:uppercase;color:rgba(249,246,240,0.32);margin:0 0 12px;">Explore Also</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        ${sphere.crossSellingSpheres.map(id => {
          const s = getSphereById(id);
          return s ? `<button onclick="openSphere('${id}')" style="background:transparent;border:1px solid rgba(249,246,240,0.18);color:rgba(249,246,240,0.62);padding:6px 14px;font-family:'Inter',sans-serif;font-size:0.7rem;letter-spacing:2px;cursor:pointer;text-transform:uppercase;-webkit-tap-highlight-color:transparent;">${s.title}</button>` : '';
        }).join('')}
      </div>` : ''}
    </div>
  </div>

  ${subs.length ? `
  <div style="margin-bottom:32px;">
    <p style="font-size:0.65rem;letter-spacing:3px;text-transform:uppercase;color:rgba(249,246,240,0.3);margin:0 0 12px;">Category</p>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      ${subs.map(sub => `
        <button id="subsphere-btn-${sub.id}" onclick="switchSub('${sub.id}')" style="
          background:${sub.id===activeSubId?'rgba(249,246,240,0.1)':'transparent'};
          border:1px solid ${sub.id===activeSubId?'rgba(249,246,240,0.55)':'rgba(249,246,240,0.18)'};
          color:${sub.id===activeSubId?'#f9f6f0':'rgba(249,246,240,0.48)'};
          padding:7px 14px;font-family:'Inter',sans-serif;font-size:0.7rem;
          letter-spacing:1px;cursor:pointer;text-transform:uppercase;
          -webkit-tap-highlight-color:transparent;">
          ${sub.num}&thinsp;${sub.title}
        </button>`).join('')}
    </div>
    <p id="soe-sub-desc" style="font-size:0.76rem;color:rgba(249,246,240,0.38);margin:10px 0 0;">${activeSub ? activeSub.desc : ''}</p>
  </div>` : ''}

  <div style="width:48px;height:1px;background:rgba(249,246,240,0.15);margin-bottom:28px;"></div>

  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;">
    <p style="font-size:0.64rem;letter-spacing:3px;text-transform:uppercase;color:rgba(249,246,240,0.3);margin:0;">Curated Selection</p>
    <div style="display:flex;gap:8px;">
      <button onclick="carouselScroll(-1)" aria-label="Previous"
        style="background:transparent;border:1px solid rgba(249,246,240,0.2);color:rgba(249,246,240,0.6);width:36px;height:36px;cursor:pointer;font-size:1rem;display:flex;align-items:center;justify-content:center;-webkit-tap-highlight-color:transparent;">‹</button>
      <button onclick="carouselScroll(1)" aria-label="Next"
        style="background:transparent;border:1px solid rgba(249,246,240,0.2);color:rgba(249,246,240,0.6);width:36px;height:36px;cursor:pointer;font-size:1rem;display:flex;align-items:center;justify-content:center;-webkit-tap-highlight-color:transparent;">›</button>
    </div>
  </div>

  <div id="soe-carousel" style="display:flex;gap:20px;overflow-x:auto;padding-bottom:16px;scrollbar-width:none;-ms-overflow-style:none;">
    <div style="flex:0 0 100%;display:flex;align-items:center;justify-content:center;height:280px;color:rgba(249,246,240,0.3);font-size:0.75rem;letter-spacing:3px;text-transform:uppercase;">Loading …</div>
  </div>

</div>
<style>
  #soe-carousel::-webkit-scrollbar{display:none;}
  @media(max-width:600px){
    #soe-carousel > div[style*="flex:0 0 260px"] { flex:0 0 180px !important; }
    #soe-carousel > div[style*="flex:0 0 260px"] > div { width:180px !important; height:200px !important; }
  }
</style>`;
}

// ── NAVIGATION (Back-Button) ──────────────────────────────────
window.addEventListener('popstate', (e) => {
  if (e.state && e.state.sphere) {
    const sphere = getSphereById(e.state.sphere);
    if (!sphere) return;
    activeSphereId = e.state.sphere;
    activeSubId    = e.state.sub || null;
    renderDetail();
    loadProducts(activeSphereId, activeSubId);
    detailContainer.scrollIntoView({ behavior:'smooth', block:'start' });
  } else {
    activeSphereId = null;
    activeSubId    = null;
    detailContainer.innerHTML = '';
    if (gridContainer) gridContainer.scrollIntoView({ behavior:'smooth', block:'start' });
  }
});

// ── START ─────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  initCardEvents();
  const p  = new URLSearchParams(window.location.search);
  const sp = p.get('sphere');
  if (sp && getSphereById(sp)) openSphere(sp, p.get('sub'));
});

// ── PRODUKT-DETAIL OVERLAY ────────────────────────────────────
function openProduct(p) {
  let overlay = document.getElementById('soe-product-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'soe-product-overlay';
    document.body.appendChild(overlay);
  }

  const crossSell = (function() {
    const s = getSphereById(activeSphereId);
    if (!s || !s.crossSellingSpheres) return [];
    return s.crossSellingSpheres.map(id => getSphereById(id)).filter(Boolean).slice(0,2);
  })();

  const crossSellHTML = crossSell.map(s => `
    <button onclick="closeProduct();openSphere('${s.id}')"
      style="background:transparent;border:1px solid rgba(249,246,240,0.2);color:rgba(249,246,240,0.6);padding:8px 16px;font-family:'Inter',sans-serif;font-size:0.72rem;letter-spacing:2px;cursor:pointer;text-transform:uppercase;-webkit-tap-highlight-color:transparent;">
      ${s.title}
    </button>`).join('');

  overlay.style.cssText = `
    position:fixed;top:0;left:0;width:100%;height:100%;
    background:rgba(11,43,27,0.97);z-index:9999;
    overflow-y:auto;display:flex;align-items:flex-start;
    justify-content:center;padding:0;box-sizing:border-box;
    animation:soe-fadein 0.3s ease;
  `;

  overlay.innerHTML = `
    <style>
      @keyframes soe-fadein { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
      #soe-product-overlay::-webkit-scrollbar{width:4px;}
      #soe-product-overlay::-webkit-scrollbar-thumb{background:rgba(249,246,240,0.15);}
    </style>
    <div style="max-width:900px;width:100%;padding:32px 24px 64px;box-sizing:border-box;font-family:'Inter',sans-serif;color:#f9f6f0;">

      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:32px;">
        <p style="font-size:0.65rem;letter-spacing:3px;text-transform:uppercase;color:rgba(249,246,240,0.35);margin:0;">
          H.M. Renyé &thinsp;·&thinsp; Curated Selection
        </p>
        <button onclick="closeProduct()" style="background:transparent;border:1px solid rgba(249,246,240,0.25);color:#f9f6f0;padding:8px 20px;font-family:'Inter',sans-serif;font-size:0.75rem;letter-spacing:2px;cursor:pointer;text-transform:uppercase;-webkit-tap-highlight-color:transparent;">
          ← Back
        </button>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start;margin-bottom:48px;">
        <div>
          <img src="${p.image_url||''}" alt="${p.title}"
            style="width:100%;aspect-ratio:1;object-fit:cover;display:block;margin-bottom:16px;">
          ${p.brand ? `<p style="font-size:0.62rem;letter-spacing:3px;text-transform:uppercase;color:rgba(249,246,240,0.35);margin:0 0 4px;">${p.brand}</p>` : ''}
          <p style="font-size:1.1rem;color:#f9f6f0;margin:0 0 8px;line-height:1.4;">${p.title}</p>
          <p style="font-size:1.3rem;font-family:'Playfair Display',serif;color:#f9f6f0;margin:0;">
            ${p.price ? '€\u202f'+parseFloat(p.price).toLocaleString('de-DE',{minimumFractionDigits:0}) : (p.price_indication||'')}
          </p>
        </div>
        <div>
          ${p.tagline ? `
          <p style="font-family:'Playfair Display',serif;font-size:clamp(1.2rem,3vw,1.7rem);font-weight:400;font-style:italic;color:#f9f6f0;margin:0 0 28px;line-height:1.5;">
            "${p.tagline}"
          </p>` : ''}
          ${p.description ? `
          <p style="font-size:0.95rem;line-height:1.9;color:rgba(249,246,240,0.75);margin:0 0 36px;">
            ${p.description}
          </p>` : ''}

          <a href="${p.affiliate_link||'#'}" target="_blank" rel="noopener sponsored"
            style="display:block;background:#f9f6f0;color:#0B2B1B;text-align:center;padding:16px 32px;font-family:'Inter',sans-serif;font-size:0.82rem;letter-spacing:3px;text-transform:uppercase;text-decoration:none;margin-bottom:12px;-webkit-tap-highlight-color:transparent;">
            Entdecken &amp; Kaufen →
          </a>
          <p style="font-size:0.62rem;letter-spacing:1px;color:rgba(249,246,240,0.28);text-align:center;margin:0 0 32px;">
            Weiterleitung zum verifizierten Händler · Affiliate-Link
          </p>

          <div style="border-top:1px solid rgba(249,246,240,0.12);padding-top:24px;">
            <p style="font-size:0.65rem;letter-spacing:3px;text-transform:uppercase;color:rgba(249,246,240,0.3);margin:0 0 14px;">
              Weiter stöbern
            </p>
            <div style="display:flex;gap:10px;flex-wrap:wrap;">
              <button onclick="closeProduct()"
                style="background:transparent;border:1px solid rgba(249,246,240,0.2);color:rgba(249,246,240,0.6);padding:8px 16px;font-family:'Inter',sans-serif;font-size:0.72rem;letter-spacing:2px;cursor:pointer;text-transform:uppercase;-webkit-tap-highlight-color:transparent;">
                ← Zurück zur Sphäre
              </button>
              ${crossSellHTML}
            </div>
          </div>
        </div>
      </div>
    </div>`;

  const style = document.createElement('style');
  style.textContent = '@media(max-width:640px){#soe-product-overlay [style*="grid-template-columns:1fr 1fr"]{grid-template-columns:1fr !important;}}';
  overlay.appendChild(style);

  document.body.style.overflow = 'hidden';
  history.pushState({ product: p.id, sphere: activeSphereId, sub: activeSubId }, '', '?sphere=' + activeSphereId + (activeSubId ? '&sub='+activeSubId : '') + '&product=' + (p.id||''));
}

function closeProduct() {
  const overlay = document.getElementById('soe-product-overlay');
  if (overlay) overlay.remove();
  document.body.style.overflow = '';
  history.back();
}
