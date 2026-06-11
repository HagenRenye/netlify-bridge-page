# CLAUDE_SPHERES.md – H.M. Renyé: Spheres of Elegance
**LEAN VERSION** | Stand: 11.06.2026 | Deployment: LIVE  
**URL:** https://cute-pasca-7b0419.netlify.app  
**GitHub:** HagenRenye/netlify-bridge-page | **Supabase:** gmibyowinqjfysgarhea

---

## 🎯 STARTUP-PROMPT FÜR NEUEN SPHERES-CHAT

```
Lies CLAUDE_SPHERES.md aus GitHub.
Aktueller Status: [Aktuell zusammengefasst vom letzten Chat]
Nächste Aktion: [Nächster Schritt]
Keine anderen Projekte — nur Spheres of Elegance.
```

---

## ⚡ QUICK-REF: TECH STACK

| Layer | Tech |
|-------|------|
| Frontend | V5 HTML (pxCode — HEILIGER GRAL) + spheres-logic.js |
| Database | Supabase PostgreSQL (gmibyowinqjfysgarhea) |
| Deploy | Netlify auto-deploy via GitHub |
| Affiliate | Amazon (treasurewor00-21) + Awin (2909169) |

---

## 📦 SUPABASE SCHEMA (3 TABELLEN)

### `spheres` (9 aktiv)
- id, number, title, description, hero_image, sort_order, is_active

### `sub_spheres` 
- id, sphere_id, sub_number, title, description, sort_order
- Aktuelle Sub-Sphären: Kitchen (6), Watches (3), Fragrances (6), Audio (3)

### `Products` (Großes P!)
- sphere_id, sub_sphere_id, brand, title, price, image_url, affiliate_link, affiliate_network, description, tagline, is_active, sort_order

**RLS:** GRANT SELECT TO anon ✅

---

## 🎨 DESIGN (INVARIANT)

**Palette:** Forest Green #0B2B1B | Cashmere #C5A880 | Alabaster #F9F6F0  
**Fonts:** Playfair Display (Headlines) | Inter (Body)  
**Logo:** Wassermann mit Gefäß — Cashmere Gold auf Forest Green  
**Tagline:** "Discover your Sphere."  
**Kurator:** H.M. Renyé  

---

## 🔗 AMAZON LINK FORMAT

```
https://www.amazon.de/s?k=[TERM]&rh=n%3A[KATEGORIE-ID]&tag=treasurewor00-21
```

Kategorien: Uhren 368208031 | Parfüm 64257031 | Küche 3167641 | HiFi 3171261 | Kopfhörer 3171271 | Schmuck 194979031

---

## 🚀 JS-FUNKTIONEN (spheres-logic.js)

- `init()` — Events + Deep-Link
- `openSphere(sphereId, subId)` — Detail-Panel
- `switchSub(subId)` — Sub-Wechsel
- `loadProducts(sphereId, subId)` — Supabase-Fetch
- `openProduct(p)` — Produkt-Overlay
- `closeProduct()` / `closeSphere()` — zurück

---

## ⚙️ DEPLOYMENT

1. `index.html` + `netlify.toml` → GitHub
2. Netlify Auto-Deploy (läuft sofort)
3. HTML-Block nicht anfassen, nur JS ersetzen

---

## 📋 AKTIVE FEHLER / TASKS

- [ ] Kitchen/Jewelry/Fragrances: Hero-Image-Bug (Carousel statt statisch)
- [ ] Sphären-Catcher (Tagline) für 02, 03, 04, 09 formulieren
- [ ] Sub-Sphären für Fashion, Living, Leather, Art, Jewelry anlegen
- [ ] Pinterest-Strategie + Make.com Automation

---

## ⚠️ REGELN

1. **HTML NIEMALS anfassen** — nur JS-Block
2. **Produkt ohne Affiliate = deaktivieren** (is_active: false)
3. **Kein Bild-/Link-Mismatch**
4. **Supabase: `\"Products\"` (Großes P, Anführungszeichen)**
5. **Deep-Link:** `?sphere=kitchen-dining&sub=kd-coffee` funktioniert?

---

## 🔄 AWIN STATUS

**Publisher-ID:** 2909169

| Programm | Awin-ID | Status |
|----------|---------|--------|
| Watches Of USA | 116479 | ✅ Aktiv |
| Watch Home Awin First | 51893 | ✅ Aktiv |
| Michael Kors EU | - | 🔄 Beworben |
| Chronext DE/AT/CH/FR | - | 🔄 Beworben |

**Link-Format:**
```
https://www.awin1.com/cread.php?awinmid=[ADVERTISER]&awinaffid=2909169&clickref=[PRODUKT]&p=[URL]
```

---

## 📊 PRODUKTE (33 aktiv / 7 deaktiviert)

**Aktiv mit Links:**
Kitchen (10), Audio (4), Fragrances (4), Watches (13), Leather (1), Living (2), Art (1)

**Deaktiviert (Link fehlt):**
Hermès, Bottega Veneta, Loro Piana, Brunello Cucinelli, Tiffany, Thermomix, Miele

---

## 🌍 i18n (GEPLANT)

Zielsprachen: EN, IT, FR, ES
- Sprachumschalter im Header
- Sphären-Beschreibungen in 4 Sprachen in Supabase

