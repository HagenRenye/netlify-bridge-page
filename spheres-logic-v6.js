// ==============================================================
// SPHERES OF ELEGANCE — LOGIK V6
// Supabase Live + Sub-Sphären
// ==============================================================

const SB_URL = 'https://gmibyowinqjfysgarhea.supabase.co';
const SB_KEY = 'sb_publishable_DWGaYYEE_2xpLcMvgqs6kA_QA2TFHr9';

// ── DATEN ─────────────────────────────────────────────────────
const spheresData = [
  { id: "luxury-watches",   title: "Luxury Watches",    description: "Time. Precision. Legacy. Where horological mastery meets sculptural beauty — each timepiece an heirloom engineered to outlast generations.",          crossSellingSpheres: ["fine-jewelry","leather-goods"],  heroImage: "https://picsum.photos/id/26/800/500",  products: [] },
  { id: "fine-jewelry",     title: "Fine Jewelry",      description: "Crafted Brilliance. The quiet power of precious stones and noble metals — jewellery that speaks without words.",                                       crossSellingSpheres: ["luxury-watches","fragrances"],   heroImage: "https://picsum.photos/id/30/800/500",  products: [] },
  { id: "fragrances",       title: "Fragrances",        description: "Invisible Luxury. The most intimate luxury — a signature scent that lingers long after you have left the room.",                                       crossSellingSpheres: ["fine-jewelry","fashion"],        heroImage: "https://picsum.photos/id/42/800/500",  products: [] },
  { id: "kitchen-dining",   title: "Kitchen & Dining",  description: "The Art of Entertaining. Where culinary passion meets obsessive craftsmanship — tools and tableware for those who treat every meal as ceremony.",      crossSellingSpheres: ["living-styles","art-objects"],   heroImage: "https://picsum.photos/id/52/800/500",  products: [] },
  { id: "living-styles",    title: "Living Styles",     description: "Spaces That Inspire. Sculptural furniture, luminous textiles, and objects that transform a house into a considered world.",                            crossSellingSpheres: ["audio-technology","art-objects"],heroImage: "https://picsum.photos/id/169/800/500", products: [] },
  { id: "audio-technology", title: "Audio & Technology",description: "Sound Beyond Expectations. The symphony of acoustic perfection and timeless industrial design — where engineering transcends utility and becomes art.", crossSellingSpheres: ["living-styles","art-objects"],   heroImage: "https://picsum.photos/id/165/800/500", products: [] },
  { id: "fashion",          title: "Fashion",           description: "Quiet Confidence. Curated fashion for those who understand that true style is never about noise — it is about presence.",                               crossSellingSpheres: ["leather-goods","fragrances"],    heroImage: "https://picsum.photos/id/96/800/500",  products: [] },
  { id: "leather-goods",    title: "Leather Goods",     description: "Timeless Companions. Iconic bags, wallets and accessories crafted from the finest hides — objects that improve with every year of use.",               crossSellingSpheres: ["fashion","luxury-watches"],      heroImage: "https://picsum.photos/id/119/800/500", products: [] },
  { id: "art-objects",      title: "Art & Objects",     description: "Curated Expressions. Collectible art, sculptural objects and rare editions for interiors that tell a story.",                                          crossSellingSpheres: ["living-styles","kitchen-dining"],heroImage: "https://picsum.photos/id/145/800/500", products: [] }
];

const subSpheresMap = {
  'luxury-watches':   [
    { id:'lw-mens',   num:'01a', title:'Herrenuhren',    desc:'Rolex, Patek Philippe, A. Lange & Söhne' },
    { id:'lw-womens', num:'01b', title:'Damenuhren',     desc:'Cartier, Chopard, Bulgari' },
    { id:'lw-sport',  num:'01c', title:'Sportuhren',     desc:'IWC, TAG Heuer, Breitling' }
  ],
  'fragrances': [
    { id:'fr-men',    num:'03a', title:'Herrendüfte',    desc:'Tom Ford, Creed, Xerjoff' },
    { id:'fr-women',  num:'03b', title:'Damendüfte',     desc:'Amouage, Chanel, Diptyque' },
    { id:'fr-unisex', num:'03c', title:'Unisex & Nische',desc:'Maison Margiela, Byredo' }
  ],
  'kitchen-dining': [
    { id:'kd-furniture',  num:'04a', title:'Küchenmöbel',    desc:'Bulthaup, SieMatic, Poggenpohl' },
    { id:'kd-cookware',   num:'04b', title:'Töpfe & Pfannen',desc:'Le Creuset, Staub, Demeyere' },
    { id:'kd-knives',     num:'04c', title:'Messer',         desc:'Zwilling, Wüsthof, Global' },
    { id:'kd-tableware',  num:'04d', title:'Geschirr',       desc:'Villeroy & Boch, Rosenthal, Meissen' },
    { id:'kd-appliances', num:'04e', title:'Küchenmaschinen',desc:'KitchenAid, Kenwood, Thermomix' },
    { id:'kd-coffee',     num:'04f', title:'Kaffeemaschinen',desc:"Jura, De'Longhi, Miele" }
  ],
  'audio-technology': [
    { id:'au-speakers',   num:'06a', title:'Lautsprecher',    desc:'Bang & Olufsen, Bowers & Wilkins' },
    { id:'au-headphones', num:'06b', title:'Kopfhörer',       desc:'Focal, Sennheiser, Sony' },
    { id:'au-smarthome',  num:'06c', title:'Smart Home Audio',desc:'Sonos, Denon, Yamaha' }
  ]
};

// ── STATE ─────────────────────────────────────────────────────
let activeSphereId    = null;
let highlightProductId = null;
let activeSubId       = null;

const gridContainer   = document.getElementById('gridContainer');
const detailContainer = document.getElementById('detailContainer');

// ── HELPERS ───────────────────────────────────────────────────
function getSphereById(id) {
  return spheresData.find(s => s.id === id);
}

// ── SUPABASE PRODUKTE ─────────────────────────────────────────
function loadSupabaseProducts(sphereId, subId) {
  let params = `sphere_id=eq.${sphereId}&is_active=eq.true&order=sort_order`;
  if (subId) params += `&sub_sphere_id=eq.${subId}`;
  fetch(`${SB_URL}/rest/v1/Products?${params}`, {
    headers: { 'apikey': SB_KEY, 'Authorization': `Bearer ${SB_KEY}` }
  })
  .then(r => r.json())
  .then(products => {
    if (!products || products.length === 0) return;
    const c = document.getElementById('carousel-' + sphereId);
    if (!c) return;
    c.innerHTML = products.map(p => `
      <a href="${p.affiliate_link || '#'}" target="_blank" rel="noopener sponsored"
        style="flex:0 0 220px;text-decoration:none;color:#f9f6f0;display:block;">
        <div style="width:220px;height:220px;overflow:hidden;background:rgba(255,255,255,0.04);margin-bottom:14px;">
          <img src="${p.image_url || 'https://picsum.photos/seed/'+p.id+'/300/300'}"
            style="width:100%;height:100%;object-fit:cover;transition:transform 0.4s ease;"
            onmouseover="this.style.transform='scale(1.06)'" onmouseout="this.style.transform='scale(1)'">
        </div>
        ${p.brand ? `<p style="font-size:0.65rem;letter-spacing:2px;text-transform:uppercase;color:rgba(249,246,240,0.35);margin:0 0 4px;">${p.brand}</p>` : ''}
        <p style="font-size:0.78rem;letter-spacing:1px;margin:0 0 5px;color:#f9f6f0;line-height:1.4;">${p.title}</p>
        <p style="font-size:0.68rem;letter-spacing:2px;text-transform:uppercase;color:rgba(249,246,240,0.4);margin:0;">
          ${p.price ? '€' + parseFloat(p.price).toFixed(2) : (p.price_indication || 'Premium Selection')}
        </p>
      </a>`).join('');
  })
  .catch(() => {});
}

// ── SUB-SPHÄRE WECHSELN ───────────────────────────────────────
function switchSubSphere(sphereId, subId) {
  activeSubId = subId;
  renderSphereDetail(sphereId, null);
  loadSupabaseProducts(sphereId, subId);
  detailContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── KARTEN ────────────────────────────────────────────────────
function initCardEvents() {
  spheresData.forEach(sphere => {
    const card = document.getElementById('card-' + sphere.id);
    if (card) {
      card.style.cursor = 'pointer';
      card.addEventListener('click', () => openSphere(sphere.id, null));
    }
  });
}

// ── SPHERE ÖFFNEN ─────────────────────────────────────────────
function openSphere(sphereId, productId) {
  if (!sphereId || !getSphereById(sphereId)) return;
  activeSphereId    = sphereId;
  highlightProductId = productId || null;
  activeSubId       = null;

  const subs = subSpheresMap[sphereId] || [];
  if (subs.length > 0) activeSubId = subs[0].id;

  renderSphereDetail(sphereId, highlightProductId);

  let newUrl = window.location.pathname + '?sphere=' + sphereId;
  if (productId) newUrl += '&product=' + productId;
  window.history.pushState({ sphere: sphereId, product: productId }, '', newUrl);

  detailContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  loadSupabaseProducts(sphereId, activeSubId);
}

// ── DETAIL RENDERN ────────────────────────────────────────────
function renderSphereDetail(sphereId, highlightProdId) {
  const sphere = getSphereById(sphereId);
  if (!sphere) return;

  const subs       = subSpheresMap[sphereId] || [];
  const currentSub = activeSubId || (subs.length > 0 ? subs[0].id : null);
  const activeSub  = subs.find(s => s.id === currentSub) || null;

  const placeholders = [
    { prodId:'p1', prodTitle:'Featured Selection I',   prodImage:`https://picsum.photos/seed/${sphereId}1/300/300`, prodPriceIndication:'Premium Selection',  affiliateLink:'#' },
    { prodId:'p2', prodTitle:'Featured Selection II',  prodImage:`https://picsum.photos/seed/${sphereId}2/300/300`, prodPriceIndication:'Exclusive Edition',  affiliateLink:'#' },
    { prodId:'p3', prodTitle:'Featured Selection III', prodImage:`https://picsum.photos/seed/${sphereId}3/300/300`, prodPriceIndication:'Iconic Piece',        affiliateLink:'#' },
    { prodId:'p4', prodTitle:'Featured Selection IV',  prodImage:`https://picsum.photos/seed/${sphereId}4/300/300`, prodPriceIndication:"Collector's Choice",  affiliateLink:'#' },
    { prodId:'p5', prodTitle:'Featured Selection V',   prodImage:`https://picsum.photos/seed/${sphereId}5/300/300`, prodPriceIndication:'Limited Edition',     affiliateLink:'#' },
    { prodId:'p6', prodTitle:'Featured Selection VI',  prodImage:`https://picsum.photos/seed/${sphereId}6/300/300`, prodPriceIndication:'Signature Series',    affiliateLink:'#' },
  ];

  const carouselId = 'carousel-' + sphereId;

  detailContainer.innerHTML = `
    <div style="max-width:1277px;margin:0 auto;padding:60px 40px 70px;font-family:'Inter',sans-serif;color:#f9f6f0;">

      <!-- HEADER -->
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:40px;">
        <h2 style="font-family:'Playfair Display',serif;font-size:2rem;font-weight:400;letter-spacing:2px;color:#f9f6f0;margin:0;text-transform:uppercase;">${sphere.title}</h2>
        <button onclick="closeSphereAndResetUrl()" style="background:transparent;border:1px solid rgba(249,246,240,0.3);color:#f9f6f0;padding:10px 24px;font-family:'Inter',sans-serif;font-size:0.8rem;letter-spacing:2px;cursor:pointer;text-transform:uppercase;"
          onmouseover="this.style.borderColor='#f9f6f0'" onmouseout="this.style.borderColor='rgba(249,246,240,0.3)'">
          ← Back
        </button>
      </div>

      <!-- HERO + DESCRIPTION -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start;margin-bottom:48px;">
        <img src="${sphere.heroImage}" alt="${sphere.title}" style="width:100%;height:300px;object-fit:cover;display:block;">
        <div>
          <p style="font-size:1.05rem;line-height:1.9;color:rgba(249,246,240,0.8);margin:0 0 36px;">${sphere.description}</p>
          ${sphere.crossSellingSpheres && sphere.crossSellingSpheres.length > 0 ? `
          <div>
            <p style="font-size:0.7rem;letter-spacing:3px;text-transform:uppercase;color:rgba(249,246,240,0.35);margin:0 0 14px;">Explore Also</p>
            <div style="display:flex;gap:10px;flex-wrap:wrap;">
              ${sphere.crossSellingSpheres.map(id => {
                const s = getSphereById(id);
                return s ? `<button onclick="openSphere('${id}',null)" style="background:transparent;border:1px solid rgba(249,246,240,0.18);color:rgba(249,246,240,0.65);padding:7px 16px;font-family:'Inter',sans-serif;font-size:0.72rem;letter-spacing:2px;cursor:pointer;text-transform:uppercase;"
                  onmouseover="this.style.borderColor='rgba(249,246,240,0.55)';this.style.color='#f9f6f0'"
                  onmouseout="this.style.borderColor='rgba(249,246,240,0.18)';this.style.color='rgba(249,246,240,0.65)'">${s.title}</button>` : '';
              }).join('')}
            </div>
          </div>` : ''}
        </div>
      </div>

      <!-- SUB-SPHÄREN TABS -->
      ${subs.length > 0 ? `
      <div style="margin-bottom:36px;">
        <p style="font-size:0.68rem;letter-spacing:3px;text-transform:uppercase;color:rgba(249,246,240,0.32);margin:0 0 14px;">Category</p>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          ${subs.map(sub => `
            <button onclick="switchSubSphere('${sphereId}','${sub.id}')" style="
              background:${sub.id===currentSub ? 'rgba(249,246,240,0.1)' : 'transparent'};
              border:1px solid ${sub.id===currentSub ? 'rgba(249,246,240,0.55)' : 'rgba(249,246,240,0.2)'};
              color:${sub.id===currentSub ? '#f9f6f0' : 'rgba(249,246,240,0.5)'};
              padding:7px 16px;font-family:'Inter',sans-serif;font-size:0.72rem;
              letter-spacing:2px;cursor:pointer;text-transform:uppercase;">
              ${sub.num}&nbsp;${sub.title}
            </button>`).join('')}
        </div>
        ${activeSub ? `<p style="font-size:0.78rem;color:rgba(249,246,240,0.4);margin:12px 0 0;">${activeSub.desc}</p>` : ''}
      </div>` : ''}

      <!-- TRENNLINIE -->
      <div style="width:60px;height:1px;background:rgba(249,246,240,0.2);margin-bottom:40px;"></div>

      <!-- PRODUKT-KARUSSELL -->
      <div style="margin-bottom:8px;display:flex;justify-content:space-between;align-items:baseline;">
        <p style="font-size:0.7rem;letter-spacing:3px;text-transform:uppercase;color:rgba(249,246,240,0.35);margin:0;">Curated Selection</p>
        <div style="display:flex;gap:10px;">
          <button onclick="scrollCarousel('${carouselId}',-1)" style="background:transparent;border:1px solid rgba(249,246,240,0.2);color:#f9f6f0;width:36px;height:36px;cursor:pointer;font-size:1rem;"
            onmouseover="this.style.borderColor='rgba(249,246,240,0.6)'" onmouseout="this.style.borderColor='rgba(249,246,240,0.2)'">‹</button>
          <button onclick="scrollCarousel('${carouselId}',1)" style="background:transparent;border:1px solid rgba(249,246,240,0.2);color:#f9f6f0;width:36px;height:36px;cursor:pointer;font-size:1rem;"
            onmouseover="this.style.borderColor='rgba(249,246,240,0.6)'" onmouseout="this.style.borderColor='rgba(249,246,240,0.2)'">›</button>
        </div>
      </div>

      <div id="${carouselId}" style="display:flex;gap:20px;overflow-x:auto;scroll-behavior:smooth;padding-bottom:12px;scrollbar-width:none;-ms-overflow-style:none;">
        ${placeholders.map(p => `
        <a href="${p.affiliateLink}" target="_blank" rel="noopener" style="flex:0 0 220px;text-decoration:none;color:#f9f6f0;display:block;">
          <div style="width:220px;height:220px;overflow:hidden;background:rgba(255,255,255,0.04);margin-bottom:14px;">
            <img src="${p.prodImage}" alt="${p.prodTitle}"
              style="width:100%;height:100%;object-fit:cover;transition:transform 0.4s ease;display:block;"
              onmouseover="this.style.transform='scale(1.06)'" onmouseout="this.style.transform='scale(1)'">
          </div>
          <p style="font-size:0.78rem;letter-spacing:1px;margin:0 0 5px;color:#f9f6f0;line-height:1.4;">${p.prodTitle}</p>
          <p style="font-size:0.68rem;letter-spacing:2px;text-transform:uppercase;color:rgba(249,246,240,0.4);margin:0;">${p.prodPriceIndication}</p>
        </a>`).join('')}
      </div>

    </div>
    <style>#${carouselId}::-webkit-scrollbar{display:none;}</style>
  `;
}

// ── SCROLL + CLOSE ────────────────────────────────────────────
function scrollCarousel(id, dir) {
  const el = document.getElementById(id);
  if (el) el.scrollBy({ left: dir * 480, behavior: 'smooth' });
}

function closeSphereAndResetUrl() {
  activeSphereId = null;
  highlightProductId = null;
  activeSubId = null;
  detailContainer.innerHTML = '';
  window.history.pushState(null, '', window.location.pathname);
  gridContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── INIT ──────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  initCardEvents();
  const urlParams   = new URLSearchParams(window.location.search);
  const sphereParam = urlParams.get('sphere');
  const productParam = urlParams.get('product');
  if (sphereParam && getSphereById(sphereParam)) {
    openSphere(sphereParam, productParam);
  }
});

window.addEventListener('popstate', (e) => {
  if (e.state && e.state.sphere) {
    renderSphereDetail(e.state.sphere, e.state.product);
    detailContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    detailContainer.innerHTML = '';
  }
});
