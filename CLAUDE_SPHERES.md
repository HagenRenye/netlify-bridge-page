# CLAUDE_SPHERES.md – H.M. Renyé: Spheres of Elegance
**Stand: 12.06.2026 — 14:00** | Deployment: LIVE
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

## 🎨 DESIGN (INVARIANT)

**Palette:** Forest Green #0B2B1B | Cashmere #C5A880 | Alabaster #F9F6F0
**Fonts:** Playfair Display (Headlines) | Inter (Body)
**Logo:** Wassermann — Cashmere Gold auf Forest Green
**Tagline:** "Discover your Sphere." | **Kurator:** H.M. Renyé

---

## 📦 SUPABASE SCHEMA

### `Products` (Großes P! Anführungszeichen in SQL!)
sphere_id, sub_sphere_id, brand, title, price, image_url, affiliate_link,
affiliate_network, description, tagline, is_active, sort_order

**RLS:** GRANT SELECT TO anon ✅

---

## 🔗 AMAZON LINK FORMAT

```
https://www.amazon.de/s?k=[TERM]&rh=n%3A[ID]&tag=treasurewor00-21
```
Kategorien: Uhren 368208031 | Parfüm 64257031 | Küche 3167641 | HiFi 3171261 | Kopfhörer 3171271 | Schmuck 194979031

---

## ✅ REPARIERT (12.06.2026)

| Fix | Details |
|-----|---------|
| switchSub → Carousel-Scroll | scrollIntoView nach 100ms |
| Fragrances IDs | fr-men/women/unisex → fr-sig-men / fr-sig-women / fr-vault-men |
| Kitchen 04f | kd-coffee → 04f (Supabase-konform) |
| crossSell ReferenceError | Variable statt Template-String |
| Picsum-Platzhalter | "Loading…" ersetzt |
| Carousel Prev/Next | ‹ › Buttons mit carouselScroll() |

---

## 📊 PRODUKTE SUPABASE — STAND

| Sphäre | Sub-ID | Anzahl | Status |
|--------|--------|--------|--------|
| luxury-watches | lw-mens | 7 | ✅ |
| luxury-watches | lw-womens | 3 | ✅ |
| luxury-watches | lw-sport | 2 | ✅ |
| fragrances | fr-sig-men | 1 | ✅ |
| fragrances | fr-sig-women | 2 | ✅ |
| fragrances | fr-vault-men | 1 | ✅ |
| kitchen-dining | kd-cookware | 3 | ✅ |
| kitchen-dining | kd-knives | 3 | ✅ |
| kitchen-dining | 04f | 3 | ✅ |
| kitchen-dining | kd-appliances | 3 | ❌ deaktiviert |
| audio-technology | au-speakers | 2 | ✅ |
| audio-technology | au-headphones | 2 | ✅ |
| living-styles | 05a | 3 | ✅ |
| art-objects | null | 2 | ✅ |
| fine-jewelry | null | 2 | ❌ deaktiviert |
| fashion | null | 2 | ❌ deaktiviert |
| leather-goods | null | 2 | ❌ deaktiviert |

---

## 📋 OFFENE TASKS (Priorität)

### 🔴 KRITISCH
1. **Footer-Links** — "Legal Notice · Privacy Policy · Contact" sind Placeholder-Text ohne Funktion. Brauchen echte Seiten oder Modal-Overlays (JS-only, kein HTML). DSGVO-relevant!
2. **kd-appliances** — 3 Produkte deaktiviert: Affiliate-Link fehlt?
3. **fine-jewelry / fashion / leather-goods** — alle deaktiviert, keine Sub-Sphären in JS

### 🟡 WICHTIG
4. **Sub-Sphären in JS** fehlen für: Fashion, Living (05a!), Leather, Art, Jewelry
5. **living-styles** hat Sub-ID `05a` in Supabase — kein JS-Eintrag
6. **V9 testen** auf live-Site: Fragrances, Kitchen, Watches

### 🟢 GEPLANT
7. Sphären-Catcher (Taglines) für Sphären 02, 03, 04, 09
8. Pinterest-Strategie + Make.com Automation
9. i18n EN/IT/FR/ES

---

## ⚠️ EISERNE REGELN

1. **HTML NIEMALS anfassen** — nur spheres-logic-v6.js
2. **Produkt ohne Affiliate = is_active: false**
3. **Supabase: `"Products"` (Großes P + Anführungszeichen)**
4. **Sub-IDs JS = exakt Supabase sub_sphere_id**
5. **Windows-User — kein Linux/Bash**
6. **Neue Änderungen: erst testen, dann pushen**

---

## 🔄 AWIN STATUS

Publisher-ID: 2909169

| Programm | Status |
|----------|--------|
| Watches Of USA (116479) | ✅ Aktiv |
| Watch Home Awin First (51893) | ✅ Aktiv |
| Michael Kors EU | 🔄 Beworben |
| Chronext DE/AT/CH/FR | 🔄 Beworben |
