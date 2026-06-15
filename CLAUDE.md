# CLAUDE.md – H.M. Renyé: Spheres of Elegance
**Stand:** 15.06.2026 | **Deployment:** LIVE  
**URL:** https://cute-pasca-7b0419.netlify.app  
**GitHub:** HagenRenye/netlify-bridge-page  
**Supabase:** gmibyowinqjfysgarhea  

---

## 🏗️ TECH STACK

```
Frontend:    index.html (1287 Zeilen — aktueller Stand = index2.html lokal)
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
| `index.html` | Hauptseite (1287 Zeilen — inline JS + CSR) |
| `legal.html` | Legal Notice + Affiliate Disclosure (Platzhalter — muss gefüllt werden) |
| `privacy.html` | Privacy Policy (Platzhalter — muss gefüllt werden) |
| `logo_final_v2.png` | Lokales Logo-Asset (noch nicht im Header eingesetzt) |
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
- DB sub_sphere_id Normalisierung (lw-mens → luxury-watches-mens etc.)
- Hero-Bild Bug in renderDetail() behoben
- Footer-Links auf legal.html / privacy.html gesetzt
- Disclaimer opacity 0.05 → 0.38

### Stand 15.06.2026 — index2.html (lokal, noch nicht gepusht)
- Header bereinigt: doppelte/kaputte Zeilen entfernt
- Header-Branding: "Spheres of Elegance" + "Hagen R." zentriert
- Live-Produktlogik (CSR via Supabase) bleibt aktiv
- 1287 Zeilen total

---

## ⚠️ OFFENE AUFGABEN (Priorität)

1. **index2.html → GitHub pushen** (Hagen macht das lokal via VS Code)
2. **legal.html** — finaler Rechtstext einfüllen (Impressum + Affiliate Disclosure)
3. **privacy.html** — finale DSGVO-konforme Privacy Policy einfüllen
4. **logo_final_v2.png** — Header-Logo durch Bild ersetzen (text → img)
5. **living-styles** sub_sphere_id `05a` normalisieren
6. **fine-jewelry + art-objects** — Sub-Sphere-IDs fehlen → kein Karussell
7. **Niche Story Perfume DE** (119271) — Produkte in DB eintragen
8. **contact@spheres-of-elegance.com** — E-Mail einrichten

---

## 🚫 KRITISCHE REGELN

1. **GitHub API Tree** → TIMEOUT wegen node_modules — nie `git/trees?recursive=1`
2. **Dateipfade direkt** via Raw-URL laden
3. **Supabase:** `execute_sql` zuverlässiger als `apply_migration`
4. **Netlify Free Plan:** Kein SSR/SSG — alles CSR
5. **index.html** = nie blind überschreiben — immer erst Raw-URL lesen
6. **Neue Fixes:** Erst lokal testen, dann pushen
7. **Token-Warnung** bei 80% → Stand speichern + Prompt für nächsten Chat
8. **index2.html** = aktuellster lokaler Stand (Hagen hat lokal via VS Code gearbeitet)

---

## 📋 SESSION-START CHECKLISTE

1. `CLAUDE.md` lesen (Raw: `https://raw.githubusercontent.com/HagenRenye/netlify-bridge-page/main/CLAUDE.md`)
2. index.html via Raw-URL laden um aktuellen Stand zu prüfen
3. DB-Stand mit `execute_sql` prüfen falls nötig

---

## 💬 NÄCHSTER CHAT — STARTPROMPT

```
Lies bitte zuerst die CLAUDE.md aus dem GitHub-Repo HagenRenye/netlify-bridge-page 
(Raw URL: https://raw.githubusercontent.com/HagenRenye/netlify-bridge-page/main/CLAUDE.md).
Projekt: Spheres of Elegance (cute-pasca-7b0419.netlify.app).
Supabase: gmibyowinqjfysgarhea.

WICHTIG: Hagen hat lokal mit VS Code an index2.html gearbeitet (1287 Zeilen, bereinigter Header).
Diese Datei muss er noch via VS Code/GitHub nach main pushen — dann ist sie als index.html live.

Offene Aufgaben (Priorität):
1. legal.html mit finalem Impressum + Affiliate Disclosure füllen
2. privacy.html mit DSGVO-konformer Privacy Policy füllen  
3. logo_final_v2.png als Header-Logo einsetzen
4. fine-jewelry + art-objects Sub-Sphere-IDs anlegen → Karussell aktivieren
5. living-styles sub_sphere_id 05a normalisieren

Strategie für große HTML-Dateien: Immer nur den relevanten JS-Block extrahieren,
nie die ganze Datei laden. Änderungen als Patch zeigen, Hagen fügt lokal ein.
```
