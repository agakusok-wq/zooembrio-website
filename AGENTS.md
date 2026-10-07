# AGENTS.md — ZOOEMBRIO

This repo is one of five sites in `C:\Users\Guest\Documents\Сайты`.

## Local port (mandatory)
- **dev/preview port: 4321**
- URL: http://127.0.0.1:4321/
- Use `npm run dev` / `npm run preview` only (scripts include `--strictPort`).
- Do **not** use port 4321 unless this repo is zooembrio-website.
- Full table: `../ports.json` and `../LOCAL-PORTS.md` (or `../_shared/LOCAL-PORTS.md`).

Other sites must keep running in parallel on 4321–4325. Do not steal another site's port.

## IP / platform assets
Follow `../_shared/TILDA-IP-TRAPS.md`. Do not copy third-party website-builder JS/CSS/CDN/widgets into this project. Run `npm run scan:ip` (Node: `scripts/scan-tilda-ip.mjs`) before deploy — not PowerShell (AV false positives). See `../_shared/ANTIVIRUS-FALSE-POSITIVES.md`.

## Local dev / antivirus
Use **`ЗАПУСТИТЬ-САЙТ.bat`** (visible `cmd` + `npm run dev`) and **`ОСТАНОВИТЬ-САЙТ.bat`**. Do **not** add hidden PowerShell, VBS, or `-WindowStyle Hidden` launchers — they trigger false trojan alerts (Kaspersky). See `../_shared/ANTIVIRUS-DEV-NOTES.md`.
