# CLAUDE.md – H.M. Renyé: Spheres of Elegance
**Stand:** 08.06.2026 | **Deployment:** LIVE  
**URL:** https://cute-pasca-7b0419.netlify.app  
**GitHub:** HagenRenye/netlify-bridge-page  
**Supabase:** gmibyowinqjfysgarhea  

---

## 🏗️ TECH STACK

```
Frontend:    V5 HTML (pxCode — HEILIGER GRAL, nie anfassen)
             + spheres-logic-v6.js (inline im HTML)
Datenbank:   Supabase PostgreSQL (3 Tabellen)
Deploy:      Netlify Auto-Deploy via GitHub push
Affiliate:   Amazon Associates (treasurewor00-21)
             Awin Publisher (2909169 / nexus_publishing)
```

---

## 📁 SUPABASE TABELLEN

### `spheres` — 9 Hauptsphären
| Spalte | Typ | Inhalt |
|--------|-----|--------|
| id | TEXT PK | 'kitchen-dining' etc. |
| number | TEXT | '04' |
| title | TEXT | 'Kitchen & Dining' |
| description | TEXT | Sphären-Beschreibung |
| hero_image | TEXT | Unsplash URL |
| sort_order | INT | 1-9 |
| is_active | BOOL | true |

### `sub_spheres` — Unterkategorien
| Spalte | Typ | Inhalt |
|--------|-----|--------|
| id | TEXT PK | 'kd-coffee' etc. |
| sphere_id | TEXT FK | → spheres.id |
| sub_number | TEXT | '04f' |
| title | TEXT | 'Kaffeemaschinen' |
| description | TEXT | Brand-Hinweise |
| sort_order | INT | Reihenfolge |

**Aktuelle Sub-Sphären:**
- Kitchen: 04a Küchenmöbel, 04b Töpfe, 04c Messer, 04d Geschirr, 04e Küchenmaschinen, 04f Kaffeemaschinen
- Watches: 01a Herren, 01b Damen, 01c Sport
- Fragrances: 03a Signature·Herren, 03b Signature·Damen, 03c Signature·Unisex, 03d Private Vault·Herren, 03e Private Vault·Damen, 03f Private Vault·Unisex
- Audio: 06a Lautsprecher, 06b Kopfhörer, 06c Smart Home

### `Products` (Großes P!) — Affiliate-Produkte
| Spalte | Typ | Inhalt |
|--------|-----|--------|
| id | UUID PK | auto |
| sphere_id | TEXT FK | → spheres.id |
| sub_sphere_id | TEXT FK | → sub_spheres.id |
| brand | TEXT | 'Jura' |
| title | TEXT | Produktname |
| price | NUMERIC | Preis €  |
| price_indication | TEXT | 'Premium Selection' |
| image_url | TEXT | Produktbild URL |
| affiliate_link | TEXT | Amazon/Awin Link |
| affiliate_network | TEXT | 'amazon' / 'awin' |
| description | TEXT | Emotionaler Text |
| tagline | TEXT | Kurz-Catcher kursiv |
| is_active | BOOL | false = unsichtbar |
| sort_order | INT | Karussell-Reihenfolge |

**RLS:** GRANT SELECT TO anon auf allen 3 Tabellen ✅

---

## 📦 AKTUELLE PRODUKTE (26 aktiv / 7 deaktiviert)

### Aktiv (Amazon-Links mit Kategorie-Filter):
- Kitchen: Jura E8, De'Longhi Magnifica, Le Creuset, Staub, Demeyere, Zwilling, Wüsthof, Global, KitchenAid, Kenwood
- Audio: Bang & Olufsen Beosound A9, Bowers & Wilkins 606 S3, Sennheiser HD 800 S, Sony WH-1000XM5
- Fragrances: Creed Aventus, Tom Ford Oud Wood, Chanel N°5, Diptyque Philosykos
- Watches: Omega Seamaster, TAG Heuer Carrera, Cartier Tank Must
- Leather: Pandora Armband
- Living: Vitra Eames Lounge Chair, Menu Plinth
- Art: Meissen Vase, Villeroy & Boch MetroChic

### Deaktiviert (kein Affiliate-Link):
Hermès, Bottega Veneta, Loro Piana, Brunello Cucinelli, Tiffany, Thermomix, Miele
→ Aktivieren sobald Awin-Links vorhanden

### Amazon-Link Format (WICHTIG):
```
https://www.amazon.de/s?k=[SUCHBEGRIFF]&rh=n%3A[KATEGORIE-ID]&tag=treasurewor00-21
```
Kategorie-IDs:
- Uhren: 368208031
- Parfüm: 64257031
- Küche: 3167641
- HiFi: 3171261
- Kopfhörer: 3171271
- Schmuck: 194979031

---

## 🎨 DESIGN & BRANDING

**Palette:** Forest Green #0B2B1B | Cashmere #C5A880 | Alabaster #F9F6F0 | Stone #8B9E8E  
**Fonts:** Playfair Display (Headlines) | Inter (Body)  
**Logo:** Wassermann mit Gefäß — Cashmere Gold auf Forest Green  
         (ChatGPT/DALL-E generiert, 08.06.2026)  
**Tagline:** "Discover your Sphere."  
**Kurator:** H.M. Renyé  

### Sphären-Catcher (in spheres.tagline Spalte eintragen):
- 01 Watches: *"Die Zeit ist das Einzige, was man nicht kaufen kann. Aber wie man sie misst — das ist eine Entscheidung für Generationen."*
- 05 Living: *"Ein Raum erzählt, wer du bist — bevor du ein Wort gesagt hast."*
- 06 Audio: *"Stille ist selten. Guter Klang ist seltener. Beides zusammen — unbezahlbar."*
- 07 Fashion: *"Mode vergeht. Stil bleibt. Der Unterschied liegt nicht im Preis — sondern in der Entscheidung."*
- 08 Leather: *"Echtes Leder wird mit den Jahren besser. Wie alles was Substanz hat."*
- **02, 03, 04, 09:** Hagen überdenkt noch — nicht eintragen bis er sie schickt

---

## 💡 BRAND-PHILOSOPHIE

**Ferrari vs. Lamborghini:**
- Ferrari-Kunde: aspirational, will ankommen, kauft das Symbol → braucht Erklärung
- Lamborghini-Kunde: ist angekommen, kauft Substanz → braucht Bestätigung

**Der USP:** "Wir verkaufen Entscheidungen die Generationen überdauern."  
Hagen bürgt mit 40 Jahren Erfahrung persönlich für jedes Produkt.  
Kein Amazon-Shop — ein Kurator mit Haltung.

**Produkttext-Prinzip:** Keine Specs, keine Features — Lebensphilosophie.  
Beispiel Wüsthof: *"Dein Sohn wird damit kochen. Dein Enkel wird fragen, woher es kommt."*

---

## 🔗 AWIN INTEGRATION (TODO)

**Publisher-ID:** 2909169 (nexus_publishing)  
**Status:** 0 zugelassene Advertiser — Bewerbungen ausstehend

**Empfohlene Programme (Awin):**
| Programm | Brands | Awin-ID |
|----------|--------|---------|
| Pleasance & Harper | Omega, TAG Heuer, Longines | 19109 |
| The Luxury Closet | Hermès, Cartier, Rolex, Chanel | 38182 |
| Jura Watches | TAG Heuer, Breitling, Longines | 7153 |
| YSL Beauty | Düfte | suchen |
| Dior Beauty | Sauvage, J'adore | suchen |

**Awin-Link Format:**
```
https://www.awin1.com/cread.php?awinmid=[ADVERTISER-ID]&awinaffid=2909169&clickref=[PRODUKT-ID]&p=[ENCODED-URL]
```

**Workflow wenn Awin-Programm genehmigt:**
1. Hagen schickt Advertiser-ID
2. Claude baut Link + trägt in Supabase ein
3. `is_active = true` setzen
4. Sofort live

---

## 🚀 JS-ARCHITEKTUR (spheres-logic.js)

**Kernfunktionen:**
- `init()` — Karten-Events + Deep-Link beim Laden
- `openSphere(sphereId, subId)` — Detail-Panel öffnen
- `switchSub(subId)` — Sub-Sphäre wechseln
- `renderDetail()` — HTML für Detail-Panel
- `loadProducts(sphereId, subId)` — Supabase-Fetch, ersetzt Platzhalter
- `openProduct(p)` — Produkt-Overlay (Emotion + CTA)
- `closeProduct()` — Overlay schließen
- `closeSphere()` — zurück zum Grid

**State:** `activeSphereId`, `activeSubId` (global)  
**Platzhalter:** 4 Picsum-Karten solange keine DB-Produkte  
**Supabase:** Fetch mit anon key, silent fail bei Netzwerkfehler  

---

## 📋 NÄCHSTE SCHRITTE

### Sofort (ohne Bildschirm):
- [ ] Awin-Programme beantragen: Pleasance & Harper (19109), The Luxury Closet (38182)
- [ ] Sphären-Catcher für 02, 03, 04, 09 formulieren
- [ ] Supabase: `tagline` Spalte in `spheres` Tabelle für Catcher

### Mit Bildschirm (Montag+):
- [ ] Alle Produktbilder durch echte Produktfotos ersetzen
- [ ] Direkte Amazon-ASINs recherchieren (statt Suche)
- [ ] Sub-Sphären für Fashion, Living, Leather, Art, Jewelry anlegen
- [ ] Pinterest-Strategie + Make.com Automation
- [ ] JSON-LD Schema für KI-Sichtbarkeit
- [ ] Wassermann-Logo als SVG in pxCode integrieren

### Langfristig:
- [ ] 1.000 Produkte × 10€ Provision = 10.000€/Tag
- [ ] Make.com: Supabase → Pinterest/Instagram/TikTok Automation
- [ ] Eigene API / openapi.yaml für KI-Agenten-Abfragen

---

## ⚠️ WICHTIGE REGELN

1. **HTML-Design NIEMALS anfassen** — nur JS-Block ersetzen
2. **Produktbild muss zum Link passen** — kein Mismatch
3. **Kein Produkt ohne Affiliate-Link** — deaktivieren statt löschen
4. **Amazon-Links immer mit Kategorie-Filter** (`rh=n%3A...`)
5. **Supabase-Tabelle heißt `"Products"`** (Großes P, in Anführungszeichen)
6. **Deploy:** index.html + netlify.toml pushen → Netlify auto-deployed

---

## 🔧 SESSION-INIT FÜR NEUE CHATS

```bash
# 1. Diese Datei lesen
curl -s https://raw.githubusercontent.com/HagenRenye/netlify-bridge-page/main/CLAUDE.md

# 2. Supabase via MCP verfügbar
# Projekt: gmibyowinqjfysgarhea

# 3. GitHub Token bei Hagen erfragen wenn nötig
# (Token läuft ab — immer neu generieren)

# 4. V5 HTML ist Basis — spheres_elegance_merged_5.html
# JS-Block (Zeile ~829 bis ~1125) ersetzen mit spheres-logic-v6.js
```

---

## 🔗 AWIN STATUS (08.06.2026)

**Publisher-ID:** 2909169 (nexus_publishing)

### Zugelassen:
| Programm | Awin-ID | Brands | Link-Format |
|----------|---------|--------|-------------|
| Watches Of USA | 116479 | Omega, TAG Heuer, Cartier, Breitling, IWC, Zenith, Longines | awinmid=116479 |
| Watch Home Awin First | 51893 | Weitere Uhren | awinmid=51893 |

### Ausstehend (Bewerbung läuft):
Michael Kors EU, Chronext FR/CH/AT/DE, House of Watches, Niche Jewellery, Elisabetta Franchi IT, Marc Antoine Barrois (US), Douglas EE, Aurélien Smart Luxury NL

### Awin-Link Baukasten:
```
https://www.awin1.com/cread.php?awinmid=[ADVERTISER-ID]&awinaffid=2909169&clickref=[PRODUKT-ID]&p=[ENCODED-URL]
```

---

## 🌍 SPRACHMODUL (GEPLANT)

**Zielsprachen:** EN (Basis), IT, FR, ES
**Zielmarkt:** Weltweiter Versand, englischsprachige Seite
**Ansatz:** i18n-Objekt im JS, Sprachumschalter im Header

### Struktur:
```javascript
const i18n = {
  en: { discover: "Discover your Sphere", back: "← Back", ... },
  it: { discover: "Scopri la tua Sfera", back: "← Indietro", ... },
  fr: { discover: "Découvrez votre Sphère", back: "← Retour", ... },
  es: { discover: "Descubre tu Esfera", back: "← Volver", ... }
}
```

**TODO:** Sprachumschalter im HTML-Header einbauen (4 Buttons EN/IT/FR/ES)
**TODO:** Alle statischen Texte durch i18n-Keys ersetzen
**TODO:** Sphären-Beschreibungen in 4 Sprachen in Supabase (Spalten: desc_en, desc_it, desc_fr, desc_es)

---

## ⌚ UHREN PORTFOLIO (13 Produkte — Watches Of USA Awin 116479)

Herren: Omega Seamaster (2x), Breitling Navitimer, IWC Portugieser, Zenith El Primero, Longines Master
Damen: Cartier Tank Must, Cartier Ballon Bleu, Omega Constellation
Sport: TAG Heuer (2x), Breitling Superocean
Alle bis max. $6.900 — bewusste Entscheidung (Lamborghini-Kunden Einstiegsbereich)

---

## ⚡ KRITISCHE REGEL: 110V vs. 220V

**US-Shops (z.B. Watches of USA) NUR für:**
- Uhren ✅
- Schmuck ✅
- Leder/Bags ✅
- Parfüm ✅
- Kleidung ✅
- Alles ohne Stromversorgung ✅

**NIEMALS US-Shops für Elektrogeräte:**
- Kaffeemaschinen ❌ (110V funktioniert nicht in EU)
- Küchenmaschinen ❌ (KitchenAid 110V = kaputt in Europa)
- Audio/HiFi ❌
- Haushaltsgeräte ❌

**Elektrogeräte immer über:**
- Amazon.de (220V garantiert) ✅
- EU-Awin-Programme ✅

---

## 📅 MEILENSTEINE

| Datum | Meilenstein |
|-------|-------------|
| 07.06.2026 | Plattform live, 9 Sphären, 33 Produkte, Wassermann-Logo |
| 08.06.2026 | Awin Publisher aktiv, 12 Programme beworben |
| 08.06.2026 | Watches of USA + Watch Home genehmigt (100% Bestätigungsrate) |
| 08.06.2026 | 13 Uhren mit Awin-Links bis $6.900 |
| 08.06.2026 | Amazon Kategorie-Filter auf allen Links |
| 08.06.2026 | Sprachmodul EN/IT/FR/ES geplant |
| Pending | Chronext DE/AT/CH/FR → Rolex, Patek, AP |
| Pending | Douglas EE → Düfte komplett |
| Pending | Niche Jewellery → Fine Jewelry Sphäre |
