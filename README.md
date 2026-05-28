# Vick Auto Repair INC — Website Redesign Demo

Modern, mobile-first redesign demo for **Vick Auto Repair INC**, a Queens-based auto repair shop in Fresh Meadows.

## Tech Stack

- React + Vite
- Tailwind CSS v4
- Lucide React icons

## Local Development

```bash
npm install
npm run dev
```

## GitHub Pages Deployment

This project uses **GitHub Actions** to build and deploy to the **`gh-pages` branch**.

### One-time GitHub setup

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Select branch: **`gh-pages`**, folder: **`/ (root)`**.
5. Save.

Every push to `main` triggers the workflow in `.github/workflows/deploy.yml`, which builds the site and updates `gh-pages`.

### Live URL

After deployment:

`https://astridbonoan.github.io/vick-autoshop.io-/`

## Business Info

- **Phone:** (718) 313-9722
- **Address:** 174-02 Horace Harding Expy, Fresh Meadows, NY 11365
- **Official site:** [vickautorepairinc.net](https://www.vickautorepairinc.net/)
