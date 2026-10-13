# Nafiz Fuad Niloy — Research Portfolio (v1)

A lightweight, one-page academic portfolio for **Nafiz Fuad Niloy**, Energy Science and Engineering undergraduate at **KUET**. This is a **new, independent site** for the `nf-niloy/niloy.github.io` repository. It is not an update to the existing `nf-niloy/nf-niloy.github.io` repository.

## What's included

- Research-focused introduction and undergraduate thesis (2026–2027, ongoing).
- Selected engineering projects: AutoLab SCADA, Glazing Energy Analysis and Battery Thermal Management.
- Education, research interests and direct GitHub/contact links.
- Responsive light and dark modes in the existing teal/plum Deep Ocean color family.
- No Notes section, rotating 3D hero, autoplay animations, npm, Astro, build tool or runtime dependencies.
- Optimized local WebP images. The images for Glazing and Battery are cropped previews of the existing website's project photographs, not new renders. The thesis crystal graph is explicitly conceptual.

## Preview on your laptop (NO npm needed)

Extract the ZIP to `D:\niloy-research-v1`. Open `index.html` directly in Chrome or Edge.

If desired, you can also run a local server with Python (optional):

```powershell
cd "D:\niloy-research-v1"
python -m http.server 8000
```

Then visit `http://localhost:8000/`.

## Publish to a NEW GitHub repository

1. On GitHub, create an **empty, public repository** named `niloy.github.io` under account `nf-niloy`. Do **not** initialize it with a README, license or `.gitignore`.
2. Extract the ZIP into `D:\niloy-research-v1` so `index.html` is directly inside that folder.
3. Open PowerShell:

```powershell
cd "D:\niloy-research-v1"
git init
git branch -M main
git remote add origin https://github.com/nf-niloy/niloy.github.io.git
git add .
git commit -m "Launch research portfolio v1"
git push -u origin main
```

4. Go to **Repository Settings → Pages → Build and deployment** and choose **Deploy from a branch**, **main**, **/(root)**; save.
5. The new preview URL will normally be:

   **https://nf-niloy.github.io/niloy.github.io/**

No `npm install` or `npm run build` is needed. Every local file reference is relative, so the site works as a GitHub Pages project site beneath that path.

## IMPORTANT — testing vs replacing the current website

The account name is **nf-niloy**. Consequently, the repo `niloy.github.io` is a **project site**, **not** the special GitHub user site at `https://nf-niloy.github.io/`.

**Creating or publishing this repo will NOT remove, overwrite or unpublish the current homepage.** If you later prefer the new design and want it at `https://nf-niloy.github.io/`, an option is:

1. Rename the old repository `nf-niloy.github.io` to a backup name like `niloy-portfolio-archive` (so the source is retained).
2. Rename the new repository `niloy.github.io` to `nf-niloy.github.io`.
3. Recheck Settings → Pages (main, /(root)), wait for redeployment, and verify the root URL.

Do those steps **only after** testing and deciding to switch. GitHub Pages settings, existing redirects and custom domains may need attention on migration.

## Editing content later

- **Text, research details, projects, links:** `index.html`
- **Layout, color palette, responsiveness:** `assets/site.css`
- **Light/dark button and mobile menu:** `assets/site.js`
- **Photos:** `assets/img/`
- **Browser-tab icon:** `assets/favicon.svg`

All personal and project details were adapted from the existing public portfolio and project repositories. Review thesis status, supervisor, project descriptions and external links as your work changes. No thesis publications or experimental claims were invented.
