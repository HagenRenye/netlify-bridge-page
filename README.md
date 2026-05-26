# 🌐 Netlify Bridge Page

Statische Bridge-Page, deployed via **Netlify** (GitHub → Netlify CI/CD).

## Projektstruktur

```
netlify-bridge-page/
├── index.html       ← Hauptseite mit CTA & Affiliate-Link
├── 404.html         ← Fehlerseite
├── style.css        ← Styling (Dark Mode, modern)
├── _redirects       ← Netlify Redirect-Regeln
├── netlify.toml     ← Build- & Header-Konfiguration
├── .gitignore
└── README.md
```

## ✏️ Anpassen

1. **Affiliate-Link** in `index.html` ersetzen:
   ```html
   <a href="https://DEIN-AFFILIATE-LINK-HIER" ...>
   ```

2. **Brand-Name** in `index.html` und `404.html` ändern:
   ```html
   <span class="logo">✦ MeinBrand</span>
   ```

3. **Texte** in `index.html` nach Bedarf anpassen.

4. **Kurz-URL** (optional) in `_redirects` eintragen:
   ```
   /go/produkt  https://DEIN-AFFILIATE-LINK  302
   ```

## 🚀 Deploy

1. Diesen Ordner als GitHub-Repo pushen
2. In [Netlify](https://app.netlify.com) → **"Add new site" → "Import an existing project"**
3. GitHub-Repo auswählen → Deploy startet automatisch

## ⚠️ Hinweis

Diese Seite enthält Affiliate-Links. Bitte Impressum & Datenschutzerklärung ergänzen (`impressum.html`, `datenschutz.html`).
