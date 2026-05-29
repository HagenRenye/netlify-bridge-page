# CLAUDE.md – H.M. Renyé: Spheres of Elegance

**Projekt-Typ:** Luxury Affiliate Curation Platform  
**Brand Name:** H.M. Renyé  
**Sub-Brand:** Spheres of Elegance  
**Model:** Pinterest → Website → Affiliate Links (Amazon + Awin)  
**Status:** LIVE & Functional  
**Last Updated:** 28.05.2026  
**Deployment:** Netlify (auto-deploy via GitHub)  
**Live URL:** https://cute-pasca-7b0419.netlify.app  
**GitHub Repo:** https://github.com/HagenRenye/netlify-bridge-page

---

## 💼 HAUPTTHEMA – Business Model

### Strategy (CRITICAL)
1. **Pinterest-Konform:** Nur visuelle Qualität, keine Spam
2. **Brand Identity:** H.M. Renyé (Hauptname auf Website)
3. **Sub-Brand:** Spheres of Elegance (unter Markennamen)
4. **Monetisierung:** Amazon Associates + Awin Affiliate Network
5. **Product Strategy:** Luxury Items handpicked pro Sphere

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
- **Amazon Associates:** Standard Luxury Products
- **Awin:** Specialty Luxury Brands (Bang & Olufsen, Infinity, etc.)

---

## 📋 SESSION 28.05.2026 – Was wurde gemacht

### Problem gelöst
- Hagen hatte das Design in **Figma** (H.M. Renyé – World of Treasure)
- Versuchte 4h lang mit Gemini/Builder.io/Velo den Code zu extrahieren → Halluzinationen, Faden verloren
- **Lösung:** Figma MCP Tool → direkt React-Code in 5 Minuten

### Was wurde gebaut
1. **Figma → React-Code Extraction**
   - `get_design_context` auf Figma File: `oYnm2miE4JTKjRMQV6mFFU`
   - Gesamtes Design als Tailwind JSX kopiert
   
2. **App.tsx Updated**
   - Ersetzte generic "Netlify Bridge" mit echtem Design
   - Component: `WorldOfTreasureLiveYourDreams()`
   - 6 Luxury Spheres: Kitchens, Outdoor, Fragrances, Timepieces, Audio, Interior & Art
   
3. **Design System**
   - Tailwind Config: Gold (#C9A843) / Cream (#F5F0E8) / Dark (#080808)
   - Custom Fonts: Jura, Jost, Cinzel, Cormorant Garamond
   - All fonts from Google Fonts (importiert in index.css)

4. **Deployment**
   - GitHub Push erfolgreich
   - Netlify auto-deployed
   - Live seit 28.05.2026 ~22:00 CET

---

## 🔧 Tech Stack

```
Frontend:     React 19 + TypeScript
Styling:      Tailwind CSS 3.4
Build:        Vite 8.0
Deployment:   Netlify (GitHub Auto-Deploy)
Fonts:        Google Fonts (Jura, Jost, Cinzel, Cormorant Garamond)
```

---

## 📁 File Structure

```
netlify-bridge-page/
├── src/
│   ├── App.tsx              ← Main component (H.M. Renyé – Spheres of Elegance)
│   ├── main.tsx
│   └── index.css            ← Tailwind imports + custom CSS variables
├── tailwind.config.ts       ← Luxury design tokens
├── package.json
├── vite.config.ts
├── netlify.toml             ← Build config (auto-rebuild on push)
└── CLAUDE.md                ← This file
```

---

## 🎨 Design Komponenten

### Hero Section
- Header: "H.M. Renyé – Spheres OF Luxury – Curated Excellence"
- Subline: "Spheres OF Luxury"
- Tagline: "One of the world's exceptional luxury discovered, curated, delivered to you"
- Ornament: Gold divider lines + diamond
- Scroll-hint: "Discover ↓"

### 6 Luxury Spheres (Cards)
Jede Sphere:
- Nummering (01–06)
- Titel (z.B. "Sphere of Luxury Kitchens")
- Beschreibung (3–4 Zeilen)
- "Discover →" CTA
- Gold border + Dark background

**Spheres:**
1. **Luxury Kitchens** — Jura, De'Longhi, Le Creuset, Smeg, KitchenAid
2. **Outdoor Living** — Teak, Napoleon, Weber, Designer Loungers, Fire Features
3. **Fine Fragrances** — Tom Ford, Creed, Xerjoff, Amouage
4. **Timepieces** — Longines, Tissot, Montblanc, Leather Goods
5. **Premium Audio** — Bang & Olufsen, Bowers & Wilkins, Sonos
6. **Interior & Art** — Designer Furniture, Wall Art, Candles, Objects d'art

### Footer Section
- Quote: "Luxury is not a price tag. It is the art of living beautifully and knowing exactly where to find it."
- Ornaments: Gold dividers + diamond separators
- Copyright: "© 2026 World Of Treasure · All rights reserved"

---

## 🔗 Figma Source

**File:** https://www.figma.com/design/oYnm2miE4JTKjRMQV6mFFU/world-of-treasure  
**Current Node ID:** 1:4642 (Main frame)  
**Status:** Live & editable by Hagen

---

## 🚀 Workflow für zukünftige Sessions

### Wenn Hagen Updates macht in Figma:

1. **Update in Figma** (z.B. Karusell hinzufügen, Shop-Pages erstellen, Content updaten)
2. **Sagt mir:** "CLAUDE – lies die CLAUDE.md in GitHub"
3. **Ich mache:**
   - CLAUDE.md lesen (weiß Projekt-Context)
   - Figma Link (`oYnm2miE4JTKjRMQV6mFFU`) öffnen
   - `get_design_context` auf neue/veränderte Frames
   - React-Code rein
   - Build + Push

### Nächste geplante Features:

**Phase 1: Product Integration**
- [ ] Karusells pro Sphere (Product Showcase)
- [ ] Affiliate Links (Amazon + Awin)
- [ ] Product Grid mit Bilder + Produktinfos

**Phase 2: Shop-Structure**
- [ ] Sphere-Pages (Einzelne Landingpages pro Kategorie)
- [ ] React Router (Navigation zwischen Spheres)
- [ ] Pinterest-friendly Layout (mobile optimiert)

**Phase 3: Pinterest Strategy**
- [ ] Pinterest Pins generieren (pro Produkt/Sphere)
- [ ] Pin-Templates (Figma)
- [ ] Affiliate Link Tracking (UTM Parameters)

---

## 🛍️ Spheres – Produktkategorien & Brands

### Sphere 1: Luxury Kitchens
**Brands:** Jura, De'Longhi, Le Creuset, Smeg, KitchenAid  
**Fokus:** Premium Espresso Machines, Designer Cookware, Kitchen Tech

### Sphere 2: Outdoor Living
**Brands:** Teak, Napoleon, Weber, Bang & Olufsen Outdoor  
**Fokus:** Grill Systems, Designer Loungers, Outdoor Audio, Fire Features

### Sphere 3: Fine Fragrances
**Brands:** Tom Ford, Creed, Xerjoff, Amouage  
**Fokus:** Niche Perfumes, Luxury Candles, Fragrance Collections

### Sphere 4: Timepieces
**Brands:** Longines, Tissot, Montblanc, **Infinity**, Fine Leather Goods  
**Fokus:** Swiss Watches, Designer Timepieces, Accessories

### Sphere 5: Premium Audio
**Brands:** **Bang & Olufsen, Infinity**, Bowers & Wilkins, Sonos  
**Fokus:** High-End Speakers, Smart Home Audio, Audio Systems

### Sphere 6: Interior & Art
**Brands:** Designer Furniture, Art Suppliers, Luxury Decor  
**Fokus:** Statement Pieces, Luxury Home Decor, Objects d'art

---

## 📊 Affiliate Strategy

**Netzwerke:**
- Amazon Associates (Standard Luxury Products)
- Awin (Specialty Brands: Bang & Olufsen, Infinity, Tom Ford, etc.)

**Process:**
1. Hagen recherchiert Produkte pro Sphere (Amazon + Awin)
2. Erstellt Affiliate Links mit UTM Tracking
3. Integrator in Website (Product Cards mit Link)
4. Pinterest Pins → Website → Link → Commission

---

**Token:** Stored in local git config (expires nach Nutzung)  
**Repo:** https://github.com/HagenRenye/netlify-bridge-page  
**Branch:** main (auto-deploy enabled)

---

## 📝 Notes

- **Tailwind Arbitrary Values:** Design nutzt `font-['FontName:Weight']` Syntax
- **Fonts importiert via:** `@import url('https://fonts.googleapis.com/css2?family=...')`
- **Dark Mode:** Config präpariert für dark mode, aber aktuell nur Dark-Design
- **Responsive:** Desktop-first (Figma war 1276px width)
- **Performance:** Gzip CSS 4.19kB, JS 63.73kB (optimal)

---

## ⚙️ Build & Deploy Commands

```bash
# Local Dev
npm run dev          # Vite dev server (localhost:5173)

# Build
npm run build        # Vite build → dist/

# Preview
npm run preview      # Preview built version locally

# Deploy
git push origin main # Auto-triggers Netlify build
```

---

**Status:** ✅ READY FOR PRODUCT INTEGRATION  
**Next Step:** Hagen recherchiert Produkte + Affiliate Links → gibt mir Figma Update → ich integriere → Deploy

---

Generated by Claude during session 28.05.2026 ~22:00 CET
