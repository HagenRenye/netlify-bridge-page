# CLAUDE_SPHERES.md – H.M. Renyé: Spheres of Elegance
**Stand: 12.06.2026** | Deployment: LIVE
**URL:** https://cute-pasca-7b0419.netlify.app
**GitHub:** HagenRenye/netlify-bridge-page | **Supabase:** gmibyowinqjfysgarhea

---

## ⚡ QUICK-REF: TECH STACK

| Layer | Tech |
|-------|------|
| Frontend | V5 HTML (pxCode — HEILIGER GRAL, NIE ANFASSEN) + spheres-logic-v6.js |
| Database | Supabase PostgreSQL (gmibyowinqjfysgarhea) |
| Deploy | Netlify auto-deploy via GitHub |
| Affiliate | Amazon (treasurewor00-21) + Awin (2909169) |

---

## 📦 SUPABASE SCHEMA (3 TABELLEN)

### `spheres` (9 aktiv)
- id, number, title, description, hero_image, sort_order, is_active

### `sub_spheres`
- id, sphere_id, sub_number, title, description, sort_order

### `Products` (Großes P! Anführungszeichen in SQL!)
- sphere_id, sub_sphere_id, brand, title, price, image_url, affiliate_link, affiliate_network, description, tagline, is_active, sort_order

**RLS:** GRANT SELECT TO anon ✅

---

## 🎨 DESIGN (INVARIANT)

**Palette:** Forest Green #0B2B1B | Cashmere #C5A880 | Alabaster #F9F6F0
**Fonts:** Playfair Display (Headlines) | Inter (Body)
**Logo:** Wassermann — Cashmere Gold auf Forest Green
**Tagline:** "Discover your Sphere." | **Kurator:** H.M. Renyé

---

## 🔗 AMAZON LINK FORMAT

```
https://www.amazon.de/s?k=[TERM]&rh=n%3A[KATEGORIE-ID]&tag=treasurewor00-21
```

Kategorien: Uhren 368208031 | Parfüm 64257031 | Küche 3167641 | HiFi 3171261 | Kopfhörer 3171271 | Schmuck 194979031

---

## 🚀 JS-DATEI: spheres-logic-v6.js (aktuell V9)

**Funktionen:**
- `openSphere(sphereId, subId)` — Detail-Panel öffnen
- `switchSub(subId)` — Sub wechseln, scrollt ins Carousel
- `loadProducts(sphereId, subId)` — Supabase-Fetch
- `carouselScroll(dir)` — Prev/Next Buttons (‹ ›)
- `openProduct(p)` — Produkt-Overlay
- `closeProduct()` / `closeSphere()` — zurück

---

## ✅ REPARIERT (12.06.2026 — Session mit Claude)

| Fix | Details |
|-----|---------|
| switchSub scrollte nicht ins Carousel | `scrollIntoView` nach 100ms Delay |
| Fragrances IDs falsch | `fr-men/women/unisex` → `fr-sig-men/fr-sig-women/fr-vault-men` |
| Kitchen 04f ID | `kd-coffee` → `04f` (Supabase-konform) |
| crossSell ReferenceError | Funktion aus Template-String raus, Variable davor |
| Picsum-Platzhalter | Durch sauberes "Loading…" ersetzt |
| Carousel Prev/Next | ‹ › Buttons mit carouselScroll() |

---

## 📊 SUPABASE PRODUKTE — AKTUELLER STAND

| Sphäre | Sub-ID | Anzahl | Status |
|--------|--------|--------|--------|
| luxury-watches | lw-mens | 7 | ✅ aktiv |
| luxury-watches | lw-womens | 3 | ✅ aktiv |
| luxury-watches | lw-sport | 2 | ✅ aktiv |
| fragrances | fr-sig-men | 1 | ✅ aktiv |
| fragrances | fr-sig-women | 2 | ✅ aktiv |
| fragrances | fr-vault-men | 1 | ✅ aktiv |
| kitchen-dining | kd-cookware | 3 | ✅ aktiv |
| kitchen-dining | kd-knives | 3 | ✅ aktiv |
| kitchen-dining | 04f (Kaffee) | 3 | ✅ aktiv |
| kitchen-dining | kd-appliances | 3 | ❌ alle deaktiviert |
| audio-technology | au-speakers | 2 | ✅ aktiv |
| audio-technology | au-headphones | 2 | ✅ aktiv |
| living-styles | 05a | 3 | ✅ aktiv |
| living-styles | null | 2 | ✅ aktiv |
| art-objects | null | 2 | ✅ aktiv |
| fine-jewelry | null | 2 | ❌ alle deaktiviert |
| fashion | null | 2 | ❌ alle deaktiviert |
| leather-goods | null | 2 | ❌ alle deaktiviert |

---

## 📋 OFFENE TASKS (Priorität)

1. **kd-appliances** — 3 Produkte deaktiviert: bewusst oder Affiliate fehlt?
2. **fine-jewelry / fashion / leather-goods** — deaktiviert, keine Sub-Sphären in JS
3. **Sub-Sphären fehlen** in JS für: Fashion, Living, Leather, Art, Jewelry
4. **living-styles** hat Sub-ID `05a` in Supabase — JS hat keinen subSpheresMap-Eintrag
5. **Sphären-Catcher** (Taglines) für Sphären 02, 03, 04, 09
6. **Pinterest-Strategie** + Make.com Automation
7. **i18n** EN/IT/FR/ES

---

## ⚙️ DEPLOYMENT REGEL

1. Nur `spheres-logic-v6.js` ändern — HTML NIEMALS anfassen
2. GitHub Push → Netlify auto-deploy (sofort live)

---

## ⚠️ REGELN

1. **HTML NIEMALS anfassen** — nur JS
2. **Produkt ohne Affiliate = is_active: false**
3. **Supabase: `"Products"` (Großes P, Anführungszeichen)**
4. **Sub-IDs im JS müssen exakt mit Supabase sub_sphere_id übereinstimmen**
5. Windows-User — kein Linux/Bash

---

## 🔄 AWIN STATUS

**Publisher-ID:** 2909169

| Programm | Status |
|----------|--------|
| Watches Of USA (116479) | ✅ Aktiv |
| Watch Home Awin First (51893) | ✅ Aktiv |
| Michael Kors EU | 🔄 Beworben |
| Chronext DE/AT/CH/FR | 🔄 Beworben |
