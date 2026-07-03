# ROXREADY 🏋️🏃

**A free Hyrox training app.** Periodized plan to race day, fast workout logging, split-consistency tracking, an adaptive coach, simulation reports, and a race pacing calculator — all in a single HTML file.

**👉 Open the app: [index.html](index.html)** (or the GitHub Pages link in the repo sidebar)

- 📱 On your phone: open the link, then browser menu → **Add to Home Screen**
- 📖 New here? Read the [User Guide](USER_GUIDE.md)
- 🔒 Your data never leaves your device — no accounts, no tracking, no server
- 💾 Back up any time: Settings → Export JSON

Built with the official season 25/26 Hyrox station standards (all divisions).

## For developers

The entire app is one file (`index.html`) — vanilla HTML/CSS/JS, no build step, no dependencies. Data persists in `localStorage` under the key `roxready_v1`. To develop locally, open the file directly or run `serve.ps1` (PowerShell static server on port 8317).
