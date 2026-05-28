# Sarvarbek Sodiqov — Portfolio Website

Production-grade portfolio site built with **React 18 + Vite + TypeScript + Tailwind CSS**.

1. Push this folder to GitHub (e.g. `Sarvarbek0704/portfolio`)
2. Go to [vercel.com](https://vercel.com) and click **New Project**
3. Import the repo
4. Vercel auto-detects Vite — just click **Deploy**

That's it. The `vercel.json` handles SPA routing.

## Structure

```
portfolio/
├── public/
│   ├── profile.jpg                          # hero photo
│   └── Sarvarbek-Sodiqov-{CV,Resume}-{uz,en}.pdf
├── src/
│   ├── main.tsx                             # React entry
│   ├── App.tsx                              # Layout + all sections
│   ├── ProjectModal.tsx                     # Project detail modal
│   ├── content.ts                           # All text and project data (uz/en)
│   └── index.css                            # Tailwind + custom CSS
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── vercel.json
```

## Editing content

All texts and project data live in `src/content.ts`. To update a project description or add a new project, edit that file. To change language strings, edit the `t` object.
