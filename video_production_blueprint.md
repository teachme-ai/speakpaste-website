# 🎬 Mynah 1-Minute Video Blueprint

A highly detailed blueprint and storyboard to record, edit, and export a professional, high-conversion **1-minute installation and troubleshooting video** for the Mynah homepage.

---

## 🛠️ Recording Setup & Tools

* **Recording App**: [CleanShot X](https://cleanshot.com/) (recommended) or native macOS Screen Recording (`Cmd + Shift + 5`).
* **Microphone**: A crisp USB mic (e.g., Rode NT-USB, Blue Yeti) or high-quality lapel mic for clear, energetic vocal instructions.
* **Canvas Settings**:
  * Screen resolution: **1080p (1920x1080)**.
  * Desktop state: **Strictly clean**. Hide desktop icons, close unrelated apps, and use a premium minimalist dark or cohesive wallpaper.
  * Pointer effects: Enable subtle click highlights to make it easy to follow.

---

## 📽️ Storyboard & Script (60 Seconds)

### Scene 1 — The Hook (0:00 - 0:10)
* **Visual**: Show a clean macOS desktop. Open a text editor (Notion or VS Code). Click into a line. Hold the `Fn` key—the glowing Mynah wave overlay pops up. Dictate naturally: *"Hey, this is a live demonstration of Mynah. It types directly at my cursor instantly."* Release `Fn`—the text is typed instantly.
* **Voiceover**: *"Voice dictation on Mac should feel like a native reflex. Meet Mynah."*

### Scene 2 — Simple Installation (0:10 - 0:25)
* **Visual**: Open Finder, show the downloaded `Mynah_0.1.1_aarch64.dmg`. Double-click to open it. Drag the Mynah icon into the Applications folder. Double-click the app in `/Applications` to launch.
* **Voiceover**: *"To set up, just download the lightweight Apple Silicon DMG and drag it straight into your Applications folder."*

### Scene 3 — Setup and Permissions (0:25 - 0:40)
* **Visual**: On first launch, show the permissions prompt. Click **"Enable Accessibility Access"**—watch Mynah automatically open System Settings directly to the correct Accessibility pane. Toggle Mynah **On** (using touch ID / password confirmation). 
* **Voiceover**: *"Mynah has a self-healing setup. It will automatically detect what permissions it needs, and open the exact macOS settings pane for you. Just toggle it on."*

### Scene 4 — Quick Troubleshooting (0:40 - 0:50)
* **Visual**: Click the settings icon in Mynah. Go to the "Transcription" tab and click "Download a Model" (Whisper C++). Show the troubleshooting guide inside the app or a terminal copy window.
* **Voiceover**: *"If macOS says the developer is unidentified, just right-click to open it, or copy the single command from our website. Everything runs 100% locally on your Mac's GPU—no data ever leaves your machine."*

### Scene 5 — Outro & CTA (0:50 - 1:00)
* **Visual**: Zoom in on the main title card of the website: **mynah.online**.
* **Voiceover**: *"No clouds, no latency, no subscription. Download Mynah for free today at mynah.online."*

---

## 🎨 Editing & Branding Guidelines

* **Transitions**: Use simple, fast cuts. Avoid cheap or cheesy wipe transitions.
* **Music Background**: An extremely quiet, upbeat, modern corporate tech beat (e.g., lo-fi synth or ambient house) set at **-25dB** so it doesn't overpower your voice.
* **Text Overlays**: Use a clean sans-serif typeface (like **Inter** or **Outfit**) with a subtle dark drop shadow.
* **Zooming**: Use smooth digital zoom-ins (e.g., Ken Burns effect) in post-production when showing mouse clicks or typing results to make it highly legible on mobile screens.

---

## 📦 Export Settings for Web

Once edited in **CapCut**, **iMovie**, or **Final Cut Pro**, export with these specifications to guarantee blazing-fast loading speeds on Vercel:
* **Format**: `MP4` (Codec: `H.264`).
* **Resolution**: `1080p` (1920x1080).
* **Frame Rate**: `30fps`.
* **Target Bitrate**: `2 - 3 Mbps` (this keeps the file size around **15MB to 20MB**, ensuring instant loading on mobile network connections!).
* **Target Filename**: **`mynah_tutorial.mp4`**.
* **Destination**: Save directly inside your website's **`website/public/`** directory.
