# Nafiz Fuad Niloy — Academic Portfolio (Astro v2)

Research-focused portfolio rebuilt in **Astro**, retaining the v1 visual style.

## Pages

- `/` — Home, thesis and engineering projects
- `/research/thesis/` — Undergraduate thesis case study
- `/projects/autolab-scada/` — Automation project
- `/projects/glazing-energy-analysis/` — EnergyPlus comparison
- `/projects/battery-thermal-management/` — Arduino prototype

## Original project photographs

This version **does not upscale the tiny WebP thumbnails** from the original v1 ZIP.
Instead:

- The light/dark AutoLab interface PNGs are from the earlier full-size AutoLab portfolio archive (1440 × 1009).
- The light/dark crystal diagrams are original 2048 × 1280 PNG files.
- The original full-resolution battery setup photograph is loaded from `nf-niloy/arduino-battery-thermal-management`.
- The original full-resolution glazing building screenshot is loaded from `nf-niloy/glazing-energy-analysis`.
- Every project image uses `object-fit: contain` to prevent image cropping.

The original Glazing and Battery images require internet access when viewed.

## Deploying to GitHub Pages

This project is for **`nf-niloy/niloy.github.io`** (a GitHub Pages project repository).
The Astro `base` is `/niloy.github.io` and the workflow deploys `dist/`.

**Settings → Pages → Source: GitHub Actions.**

The GitHub Actions workflow installs Node dependencies and builds the website.
You do NOT need Node.js or npm installed on your laptop just to push changes.

For local development with Node installed:

```bash
npm install
npm run dev
npm run build
```

## Important

This is a complete replacement of the v1 static site; preserve your `.git` directory.
Do not rename `nf-niloy.github.io` (the old portfolio) or change that repo.

Designed with no Canvas animations, maintaining fast mobile scrolling, theme selection, accessible navigation and the crystal Back-to-Top control.
