# CLAUDE.md – H.M. Renyé: Spheres of Elegance
**Projekt-Typ:** Luxury Affiliate Curation Platform  
**Brand Name:** H.M. Renyé  
**Sub-Brand:** Spheres of Elegance  
**Model:** Pinterest → Website → Affiliate Links (Amazon + Awin)  
**Status:** LIVE & Functional  
**Last Updated:** 06.06.2026  
**Deployment:** Netlify (auto-deploy via GitHub)  
**Live URL:** https://cute-pasca-7b0419.netlify.app  
**GitHub Repo:** https://github.com/HagenRenye/netlify-bridge-page

---

## 💼 BUSINESS MODEL

### Revenue Flow
```
Pinterest Pin (Visual High Quality)
        ↓
Website (H.M. Renyé – Spheres of Elegance)
        ↓
Product Link (Amazon Affiliate / Awin)
        ↓
Commission on Sale
```

### Affiliate Networks
- **Amazon Associates Tag:** `treasurewor0f-20`
- **Awin:** Specialty Luxury Brands (Bang & Olufsen, etc.)

---

## 🏗️ AKTUELLER STAND – 06.06.2026

### Frontend: pxCode HTML (HEILIGER GRAL)
Das Design-Original ist eine **statische HTML-Datei** (`spheres_elegance_merged.html`),
gebaut in pxCode aus dem Figma-Design. Diese Datei ist das finale Frontend.

**KEIN React mehr aktiv** — die Netlify-Seite läuft noch auf dem React-Build vom 28.05.,
aber die Weiterentwicklung findet in der HTML-Datei statt.

### Was in der HTML-Datei integriert wurde (06.06.2026)
1. **9 Grid-Karten** mit IDs (`id="card-luxury-watches"` etc.) — clickbar
2. **`id="gridContainer"`** auf dem Grid-Container
3. **`id="detailContainer"`** — Div zwischen Grid und Footer
4. **JavaScript-Logik** (DeepSeek-Basis, bereinigt):
   - `spheresData[]` Array mit allen 9 Sphären
   - `openSphere()` / `closeSphereAndResetUrl()` / `renderSphereDetail()`
   - URL-Manipulation für Pinterest Deep-Links (`?sphere=fragrances`)
   - Browser-Zurück-Button unterstützt
5. **Produkt-Karussell** pro Sphere-Detail:
   - 6 Platzhalter-Karten (werden durch echte Produkte ersetzt)
   - Scroll mit ‹ › Pfeilen
   - Hover-Zoom auf Produktbilder
   - Klick → Affiliate-Link (target="_blank")

### 9 Sphären & ihre JS-IDs
| Nr | Titel            | JS-ID              |
|----|------------------|--------------------|
| 01 | Luxury Watches   | `luxury-watches`   |
| 02 | Fine Jewelry     | `fine-jewelry`     |
| 03 | Fragrances       | `fragrances`       |
| 04 | Kitchen & Dining | `kitchen-dining`   |
| 05 | Living Styles    | `living-styles`    |
| 06 | Audio & Technology | `audio-technology` |
| 07 | Fashion          | `fashion`          |
| 08 | Leather Goods    | `leather-goods`    |
| 09 | Art & Objects    | `art-objects`      |

---

## 🗄️ SUPABASE — Datenbank-Integration (GEPLANT)

### Status
- Supabase-Datenbank von Hagen eingerichtet ✅
- Claude.ai via MCP mit Supabase verbunden ✅
- Integration in die HTML-Datei: **TODO**

### Konzept: Sub-Sphären (4a, 4b, 4c...)

Die Küchen-Sphäre (04) hat zu viele Produkt-Kategorien für eine einzige Ansicht.
Gleiches wird für andere Sphären gelten. Lösung: **Sub-Sphären mit alphanumerischer Nummerierung**.

**Beispiel Kitchen & Dining (04):**
| Sub-ID | Kategorie         | Beispiel-Brands                    |
|--------|-------------------|------------------------------------|
| 04a    | Küchenmöbel       | Bulthaup, SieMatic, Poggenpohl    |
| 04b    | Töpfe & Pfannen   | Le Creuset, Staub, Demeyere       |
| 04c    | Messer            | Zwilling, Wüsthof, Global         |
| 04d    | Geschirr          | Villeroy & Boch, Rosenthal        |
| 04e    | Küchenmaschinen   | KitchenAid, Kenwood, Thermomix    |
| 04f    | Kaffeemaschinen   | Jura, De'Longhi, Miele            |

Dieses Prinzip gilt für alle 9 Sphären — Tiefe nur wo nötig.

### Geplante Supabase-Tabellenstruktur (Vorschlag)

```sql
-- Haupt-Sphären
CREATE TABLE spheres (
  id        TEXT PRIMARY KEY,   -- 'kitchen-dining'
  number    TEXT,               -- '04'
  title     TEXT,
  description TEXT,
  hero_image TEXT,
  sort_order INT
);

-- Sub-Sphären
CREATE TABLE sub_spheres (
  id          TEXT PRIMARY KEY,  -- 'kitchen-dining-coffee'
  sphere_id   TEXT REFERENCES spheres(id),
  sub_number  TEXT,              -- '04f'
  title       TEXT,              -- 'Kaffeemaschinen'
  description TEXT,
  sort_order  INT
);

-- Produkte
CREATE TABLE products (
  id              TEXT PRIMARY KEY,
  sub_sphere_id   TEXT REFERENCES sub_spheres(id),
  sphere_id       TEXT REFERENCES spheres(id),
  title           TEXT,
  image_url       TEXT,
  price_indication TEXT,
  affiliate_link  TEXT,
  affiliate_network TEXT,  -- 'amazon' | 'awin'
  brand           TEXT,
  is_active       BOOLEAN DEFAULT true,
  sort_order      INT
);
```

### Integration-Plan: Supabase → HTML
Statt statischer `spheresData[]` im JS:
1. Beim Seitenaufruf: Fetch von Supabase REST API
2. `spheresData` dynamisch aus DB befüllen
3. Sub-Sphären: eigene Navigationsebene im Detail-Panel
4. Produkte: aus `products`-Tabelle per `sphere_id` / `sub_sphere_id`

**API-Endpunkt-Schema:**
```javascript
const SUPABASE_URL = 'https://[project].supabase.co';
const SUPABASE_ANON_KEY = '[anon-key]';

// Sphären laden
fetch(`${SUPABASE_URL}/rest/v1/spheres?order=sort_order`, {
  headers: { 'apikey': SUPABASE_ANON_KEY }
})

// Produkte einer Sphäre laden
fetch(`${SUPABASE_URL}/rest/v1/products?sphere_id=eq.kitchen-dining&is_active=eq.true`, {
  headers: { 'apikey': SUPABASE_ANON_KEY }
})
```

---

## 🔧 TECH STACK

```
Frontend:     Statisches HTML + Vanilla JS (pxCode Design)
Datenbank:    Supabase (PostgreSQL)
Deployment:   Netlify (GitHub Auto-Deploy)
Affiliate:    Amazon Associates + Awin
Figma Source: oYnm2miE4JTKjRMQV6mFFU (Node 1:4642)
```

---

## 📋 NÄCHSTE SCHRITTE (Priorität)

### Sofort
- [ ] Supabase Tabellen anlegen (spheres / sub_spheres / products)
- [ ] Sub-Sphären für Kitchen definieren (04a–04f)
- [ ] Erste echte Produkte + Affiliate-Links in DB eintragen

### Kurzfristig
- [ ] HTML: statisches `spheresData[]` durch Supabase-Fetch ersetzen
- [ ] Sub-Sphären-Navigation im Detail-Panel einbauen
- [ ] Supabase Anon Key + URL in HTML integrieren

### Mittelfristig
- [ ] Alle 9 Sphären mit Sub-Sphären strukturieren
- [ ] Pinterest Deep-Link auch auf Sub-Sphären ausweiten (`?sphere=kitchen-dining&sub=04f`)
- [ ] Echte Hero-Bilder pro Sphäre (Cloudinary oder Supabase Storage)

---

## 🗝️ WORKFLOW FÜR NEUE SESSIONS

```
1. curl -s https://raw.githubusercontent.com/HagenRenye/netlify-bridge-page/main/CLAUDE.md
2. Kontext aus CLAUDE.md lesen
3. Supabase MCP verfügbar → direkt Tabellen abfragen
4. HTML-Datei: spheres_elegance_merged.html (lokal bei Hagen)
5. Änderungen → Hagen pusht via GitHub Token
```

---

## ⚙️ BUILD & DEPLOY

```bash
# Netlify Deploy (React-Build, noch aktiv)
git push origin main   # Auto-triggers Netlify build

# HTML-Version: Datei direkt im Browser öffnen (file://)
# Später: Netlify als Static Site (HTML direkt deployen)
```

---

**Figma:** https://www.figma.com/design/oYnm2miE4JTKjRMQV6mFFU/world-of-treasure  
**Supabase MCP:** verbunden via Claude.ai  
**Amazon Tag:** `treasurewor0f-20`  

*Zuletzt aktualisiert: 06.06.2026 — Claude Session*
