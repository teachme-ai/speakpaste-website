# SpeakPaste Website

The official marketing landing page for **SpeakPaste** — a premium, privacy-first voice dictation utility for macOS.

## 🌐 Live Site

Deployed via Vercel. Visit the live site to download SpeakPaste for free.

## 📦 Adding a New Release

1. Build the DMG from the main repo:
   ```bash
   cd /path/to/speakpaste/apps/speakpaste
   bun run tauri build
   ```

2. Copy the output DMG into `public/`:
   ```bash
   cp src-tauri/target/universal-apple-darwin/release/bundle/dmg/SpeakPaste_*.dmg public/
   ```

3. Update the version number in `index.html` (search for `v0.1.0`).

4. Push — Vercel auto-deploys on every push to `main`.

## 🛠 Local Preview

```bash
npx serve . -p 4173
```

Then open http://localhost:4173

## 📁 Structure

```
website/
├── index.html        # Landing page
├── styles.css        # Obsidian Dark theme
├── main.js           # Scroll reveals, copy button
├── vercel.json       # Vercel headers + security config
└── public/
    └── *.dmg         # Place built DMG files here
```

## License

MIT © 2026 Irfan
