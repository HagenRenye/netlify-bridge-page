# CLAUDE.md – H.M. Renyé: Spheres of Elegance
**Stand:** 14.06.2026 | **Deployment:** LIVE  
**URL:** https://cute-pasca-7b0419.netlify.app  
**GitHub:** HagenRenye/netlify-bridge-page  
**Supabase:** gmibyowinqjfysgarhea  

---

## 🏗️ TECH STACK

```
Frontend:    V5 HTML (pxCode — HEILIGER GRAL, nie anfassen)
             + spheres-logic inline im HTML <script>
Datenbank:   Supabase PostgreSQL (3 Tabellen)
Deploy:      Netlify Auto-Deploy via GitHub push (Free Plan, 300 min)
Affiliate:   Amazon Associates (treasurewor00-21) + Awin (Publisher 2909169)
```

---

## 🎨 DESIGN-IDENTITÄT

| Token | Wert |
|---|---|
| Forest Green | `#0B2B1B` |
| Cashmere Gold | `#C5A880` |
| Alabaster | `#F9F6F0` |
| Schriften | Playfair Display + Inter |

Logo: Wassermann (Aquarius) mit Gefäß, Signatur "Hagen M." (nie Nachname)  
Claim: *"We sell decisions that outlast generations."*

---

## 📁 DATEIEN IM REPO

| Datei | Zweck |
|---|---|
| `index.html` | Hauptseite (4,4 MB — pxCode Export + inline JS) |
| `legal.html` | Legal Notice + Affiliate Disclosure ✅ NEU |
| `privacy.html` | Privacy Policy vollständig ✅ NEU |
| `CLAUDE.md` | Diese Datei — Session-Gedächtnis |

---

## 🗄️ SUPABASE TABELLEN

### Tabelle: `spheres`
Felder: `id`, `title`, `subtitle`, `heroImage`, `sort_order`

### Tabelle: `sub_spheres`  
Felder: `id`, `sphere_id`, `title`, `sub_number`, `hero_image`, `sort_order`

### Tabelle: `"Products"` (Großes P — immer in Anführungszeichen!)
Felder: `id`, `sphere_id`, `sub_sphere_id`, `name`, `brand`, `price_range`, `description`, `image_url`, `affiliate_url`, `is_active`, `awin_program_id`

**KRITISCH:** `"Products"` immer mit Anführungszeichen in SQL!

---

## ✅ AKTUELLER DB-STAND (nach Fix 14.06.2026)

| sphere_id | sub_sphere_id | Produkte | Aktiv |
|---|---|---|---|
| luxury-watches | luxury-watches-mens | 7 | 7 |
| luxury-watches | luxury-watches-womens | 3 | 3 |
| luxury-watches | luxury-watches-sport | 2 | 2 |
| kitchen-dining | kitchen-coffee | 5 | 5 |
| kitchen-dining | kitchen-appliances | 2 | 2 |
| kitchen-dining | kitchen-cookware | 3 | 3 |
| kitchen-dining | kitchen-knives | 3 | 3 |
| audio-technology | audio-headphones | 3 | 3 |
| audio-technology | audio-speakers | 1 | 1 |
| fragrances | fr-sig-men | 1 | 1 |
| fragrances | fr-sig-women | 2 | 2 |
| fragrances | fr-vault-men | 1 | 1 |
| art-objects | null | 2 | 2 |
| fine-jewelry | null | 1 | 1 |
| living-styles | 05a | 3 | 3 |

---

## 🔑 AWIN PROGRAMME (zugelassen)

| Programm | Awin ID | Status |
|---|---|---|
| Watches Of USA | 116479 | ✅ zugelassen |
| Watch Home | 51893 | ✅ zugelassen |
| Living with Luxury | 119901 | ✅ zugelassen |
| Rocket Espresso | 38418 | ✅ zugelassen |
| Niche Story Perfume DE | 119271 | ✅ zugelassen — NEU |

**Awin Link-Format:**  
`https://www.awin1.com/cread.php?awinmid=[ID]&awinaffid=2909169&clickref=[slug]&p=[url]`

**EU-Regel:** Nur Amazon.de oder EU Awin-Programme — NIEMALS US 110V-Geräte!

---

## 🐛 BUGS & FIXES HISTORY

### Fix 14.06.2026 ✅
**DB-Fixes:**
- `lw-mens/womens/sport` → `luxury-watches-mens/womens/sport` + `is_active=true`
- `04f` + `kd-coffee` → `kitchen-coffee`
- `kd-appliances/cookware/knives` → `kitchen-appliances/cookware/knives`
- `au-speakers/headphones` → `audio-speakers/audio-headphones`

**HTML-Fixes index.html:**
- Hero-Bild Bug: `renderDetail()` zeigte immer `sphere.heroImage`  
  Fix: `src="${activeSub && activeSub.heroImage ? activeSub.heroImage : sphere.heroImage}"`
- Footer-Links: `#` → `legal.html` / `privacy.html` / `mailto:`
- Disclaimer opacity: `0.05` → `0.38` (war praktisch unsichtbar)

**Neue Dateien:**
- `legal.html` — Legal Notice + Affiliate Disclosure
- `privacy.html` — Privacy Policy (DSGVO-konform)

---

## ⚠️ BEKANNTE OFFENE PUNKTE

1. `living-styles` hat `sub_sphere_id = '05a'` — noch nicht normalisiert
2. `fine-jewelry` + `art-objects`: keine Sub-Sphere-IDs → kein Karussell
3. Produkte mit `sub_sphere_id = null` erscheinen in keinem Karussell
4. Niche Story Perfume DE (119271) noch keine Produkte in DB
5. `contact@spheres-of-elegance.com` — E-Mail-Adresse muss noch eingerichtet werden

---

## 🚫 KRITISCHE REGELN

1. **GitHub API Tree** → TIMEOUT wegen node_modules — nie `git/trees?recursive=1`
2. **Dateipfade direkt raten** und via Raw-URL laden
3. **Supabase:** `execute_sql` ist zuverlässiger als `apply_migration`
4. **Netlify Free Plan:** Kein SSR/SSG — alles Client-Side Rendering (CSR)
5. **pxCode HTML** (V5) = Heiliger Gral — Design nie anfassen
6. **Neue Fixes:** Erst lokal testen + verifizieren, dann pushen
7. **Token-Warnung** bei 80% → Stand speichern + Prompt für nächsten Chat

---

## 📋 SESSION-START CHECKLISTE

1. `CLAUDE.md` lesen (diese Datei)
2. DB-Stand mit `execute_sql` prüfen falls nötig
3. Aktuellen HTML-Stand via Raw-URL laden (nicht GitHub Contents API — zu groß)
4. Bei GitHub API Problemen: Raw URL nutzen: `https://raw.githubusercontent.com/HagenRenye/netlify-bridge-page/main/[datei]`

---

## 💬 NÄCHSTER CHAT — STARTPROMPT

```
Lies bitte zuerst die CLAUDE.md aus dem GitHub-Repo HagenRenye/netlify-bridge-page 
(Raw URL: https://raw.githubusercontent.com/HagenRenye/netlify-bridge-page/main/CLAUDE.md).
Projekt: Spheres of Elegance (cute-pasca-7b0419.netlify.app).
Supabase: gmibyowinqjfysgarhea.
Wir arbeiten weiter an der Website. Aktueller Stand ist in der CLAUDE.md dokumentiert.
```
