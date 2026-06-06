# Mynah DMG Releases

Place your built DMG file here when ready:

  Mynah_0.1.1_aarch64.dmg

To build the DMG, run from the mynah monorepo:

  cd apps/mynah
  bun run tauri build

The output will be at:
  src-tauri/target/release/bundle/dmg/Mynah_0.1.1_aarch64.dmg

Copy that file into this /public/ folder, then push to Vercel.
The download button on the website will automatically serve it.

