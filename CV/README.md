CV / Resume notes

This folder contains a small reusable resume template. Place your final PDF at `cv/resume.pdf` so the site's "Download Resume" button links to it.

Files:

- `resume-template.md` — A simple Markdown template with sections you can edit.
- `resume.html` — Printable HTML resume you can open in a browser and print to PDF (File → Print → Save as PDF).

How to generate `resume.pdf`:

1. Using the HTML template (recommended if you want control over layout):
   - Edit `cv/resume.html` with your details (or convert the Markdown to HTML), open it in your browser, and use Print → Save as PDF. Save the output to `cv/resume.pdf`.

2. Using Pandoc (Markdown → PDF via LaTeX):
   - Install pandoc and a LaTeX engine (e.g., TeX Live):

     ```bash
     # macOS (with Homebrew)
     brew install pandoc
     brew install --cask mactex
     ```

   - Convert:

     ```bash
     cd cv
     pandoc resume-template.md -o resume.pdf --pdf-engine=xelatex -V geometry:margin=1in
     ```

3. Using headless Chromium (automated PDF generation):

   ```bash
   # Example: using chrome headless
   npx playwright-cli print --to-pdf=cv/resume.pdf cv/resume.html
   ```

After generating `resume.pdf`, commit it to the repo (or add it during deployment). The site expects the file at `cv/resume.pdf` for the download button to work.

License / reuse

This template is intentionally simple. Copy and adapt the Markdown/HTML for your needs.
