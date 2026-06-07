// ==============================================================
// SPHERES OF ELEGANCE — LOGIK V7
// Fix: Navigation/Back, Mobile, Supabase Live
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

const subSpheresMap = {
  'luxury-watches': [
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
let activeSphereId = null;
let activeSubId    = null;

const gridContainer   = document.getElementById('gridContainer');
const detailContainer = document.getElementById('detailContainer');

function getSphereById(id) { return spheresData.find(s => s.id === id); }

// ── SUPABASE ──────────────────────────────────────────────────
function loadProducts(sphereId, subId) {
  let params = `sphere_id=eq.${sphereId}&is_active=eq.true&order=sort_order`;
  if (subId) params += `&sub_sphere_id=eq.${subId}`;
  fetch(`${SB_URL}/rest/v1/Products?${params}`, {
    headers:{ 'apikey':SB_KEY, 'Authorization':`Bearer ${SB_KEY}` }
  })
  .then(r => r.ok ? r.json() : [])
  .then(products => {
    if (!products || !products.length) return;
    const c = document.getElementById('soe-carousel');
    if (!c) return;
    c.innerHTML = products.map(p => `
      <a href="${p.affiliate_link||'#'}" target="_blank" rel="noopener sponsored"
        style="flex:0 0 200px;text-decoration:none;color:#f9f6f0;display:block;">
        <div style="width:200px;height:200px;overflow:hidden;background:rgba(255,255,255,0.05);margin-bottom:12px;">
          <img src="${p.image_url||''}" alt="${p.title}"
            style="width:100%;height:100%;object-fit:cover;transition:transform 0.4s;"
            onmouseover="this.style.transform='scale(1.06)'"
            onmouseout="this.style.transform='scale(1)'">
        </div>
        ${p.brand?`<p style="font-size:0.62rem;letter-spacing:2px;text-transform:uppercase;color:rgba(249,246,240,0.38);margin:0 0 4px;">${p.brand}</p>`:''}
        <p style="font-size:0.78rem;margin:0 0 4px;color:#f9f6f0;line-height:1.4;">${p.title}</p>
        <p style="font-size:0.66rem;letter-spacing:1px;text-transform:uppercase;color:rgba(249,246,240,0.42);margin:0;">
          ${p.price ? '€\u202f'+parseFloat(p.price).toLocaleString('de-DE',{minimumFractionDigits:0}) : (p.price_indication||'Premium Selection')}
        </p>
      </a>`).join('');
  })
  .catch(()=>{});
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

function switchSub(subId) {
  activeSubId = subId;
  renderDetail();
  history.replaceState({ sphere: activeSphereId, sub: subId }, '', '?sphere=' + activeSphereId + '&sub=' + subId);
  detailContainer.scrollIntoView({ behavior:'smooth', block:'start' });
  loadProducts(activeSphereId, subId);
}

function closeSphere() {
  activeSphereId = null;
  activeSubId    = null;
  detailContainer.innerHTML = '';
  history.pushState(null, '', window.location.pathname);
  gridContainer.scrollIntoView({ behavior:'smooth', block:'start' });
}

// ── RENDER ────────────────────────────────────────────────────
function renderDetail() {
  const sphere = getSphereById(activeSphereId);
  if (!sphere) return;
  const subs      = subSpheresMap[activeSphereId] || [];
  const activeSub = subs.find(s => s.id === activeSubId) || null;

  const placeholders = Array.from({length:4}, (_,i) => ({
    title: ['Premium Selection','Exclusive Edition','Iconic Piece','Signature Series'][i],
    img:   `https://picsum.photos/seed/${activeSphereId}${i}/300/300`
  }));

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
        <button onclick="switchSub('${sub.id}')" style="
          background:${sub.id===activeSubId?'rgba(249,246,240,0.1)':'transparent'};
          border:1px solid ${sub.id===activeSubId?'rgba(249,246,240,0.55)':'rgba(249,246,240,0.18)'};
          color:${sub.id===activeSubId?'#f9f6f0':'rgba(249,246,240,0.48)'};
          padding:7px 14px;font-family:'Inter',sans-serif;font-size:0.7rem;
          letter-spacing:1px;cursor:pointer;text-transform:uppercase;
          -webkit-tap-highlight-color:transparent;">
          ${sub.num}&thinsp;${sub.title}
        </button>`).join('')}
    </div>
    ${activeSub ? `<p style="font-size:0.76rem;color:rgba(249,246,240,0.38);margin:10px 0 0;">${activeSub.desc}</p>` : ''}
  </div>` : ''}

  <div style="width:48px;height:1px;background:rgba(249,246,240,0.15);margin-bottom:28px;"></div>

  <p style="font-size:0.64rem;letter-spacing:3px;text-transform:uppercase;color:rgba(249,246,240,0.3);margin:0 0 18px;">Curated Selection</p>

  <div id="soe-carousel" style="display:flex;gap:18px;overflow-x:auto;padding-bottom:8px;scrollbar-width:none;-ms-overflow-style:none;">
    ${placeholders.map(p => `
      <div style="flex:0 0 180px;">
        <div style="width:180px;height:180px;background:rgba(255,255,255,0.05);margin-bottom:10px;">
          <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;display:block;opacity:0.5;">
        </div>
        <p style="font-size:0.72rem;color:rgba(249,246,240,0.4);margin:0;text-align:center;">Loading…</p>
      </div>`).join('')}
  </div>

</div>
<style>
  #soe-carousel::-webkit-scrollbar{display:none;}
  @media(max-width:600px){
    #soe-carousel > a, #soe-carousel > div { flex:0 0 150px !important; }
    #soe-carousel > a > div, #soe-carousel > div > div { width:150px !important; height:150px !important; }
  }
</style>`;
}

// ── NAVIGATION (Back-Button Handy-Fix) ───────────────────────
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
