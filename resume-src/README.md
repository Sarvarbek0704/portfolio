# Resume / CV generator

Generates the four PDFs served from `../public/`:

- `Sarvarbek-Sodiqov-Resume-en.pdf` / `-uz.pdf` — 1-page single-column
- `Sarvarbek-Sodiqov-CV-en.pdf` — 2-page single-column
- `Sarvarbek-Sodiqov-CV-uz.pdf` — 2-page dark-sidebar layout

All content (summary, work experience, skills, projects, education) lives in
`generate.mjs` (the `contact`, `L`, and `P` objects). Edit there, then rebuild.

## Rebuild

```bash
# 1) render the HTML
node resume-src/generate.mjs        # writes resume-src/out/*.html

# 2) print each to PDF with headless Chrome, then copy into public/
#    (PowerShell — Chrome needs a file:/// input URL and absolute output path)
```

PowerShell one-shot (run from the repo root):

```powershell
$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$wd = (Resolve-Path "resume-src\out").Path
foreach ($n in @("Resume-en","Resume-uz","CV-en","CV-uz")) {
  $out = Join-Path $wd "$n.pdf"
  $in  = "file:///" + ($wd -replace '\\','/') + "/$n.html"
  Start-Process $chrome -Wait -ArgumentList @(
    "--headless=new","--disable-gpu","--no-sandbox","--no-pdf-header-footer",
    "--print-to-pdf=$out",$in)
}
Copy-Item resume-src\out\Resume-en.pdf public\Sarvarbek-Sodiqov-Resume-en.pdf -Force
Copy-Item resume-src\out\Resume-uz.pdf public\Sarvarbek-Sodiqov-Resume-uz.pdf -Force
Copy-Item resume-src\out\CV-en.pdf    public\Sarvarbek-Sodiqov-CV-en.pdf    -Force
Copy-Item resume-src\out\CV-uz.pdf    public\Sarvarbek-Sodiqov-CV-uz.pdf    -Force
```

Notes:
- `--no-pdf-header-footer` removes Chrome's default date/URL header & footer.
- The CV-uz sidebar is `position: fixed` so it repeats on both pages; keep its
  content short enough to fit one page height (297mm) or it gets clipped.
- `photo.b64` is the base64 data-URI of `public/profile.jpg` used in the CV-uz
  sidebar. Regenerate it if the photo changes.
