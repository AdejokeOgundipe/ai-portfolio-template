# ai-portfolio-template
Reusable Portfolio Template

This repository contains a minimal, reusable static portfolio template focused on AI / ML engineers and researchers. It uses Tailwind CSS via CDN so the template is easy to fork and customize without a build step.

How to use
----------

1. Open `site/index.html` and replace placeholder tags like `{{YOUR_NAME}}`, `{{SHORT_BIO}}`, `{{EMAIL}}`, `{{SITE_URL}}`, and any `{{PROJECT_*}}` placeholders with your content.
2. Replace `{{OG_IMAGE_URL}}` with a public image URL for social previews (recommended 1200x630 px).
3. Optionally add a `favicon.ico` at the repo root or update the `<link rel="icon">` in the head.
4. Preview locally by opening `site/index.html` in your browser (no server required). For a local dev server, run `python -m http.server` in the `site` folder or use any static file server.

Preview (recommended)
---------------------

To run a quick local server (recommended so relative paths like `/favicon.ico` resolve correctly):

```bash
cd site
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

If you prefer a live-reloading experience and have Node.js installed, you can use a simple server like `live-server`:

```bash
# install once
npm install -g live-server

# run from the `site` folder
cd site
live-server --port=8000
```

Customizing
-----------

- The template uses Tailwind via CDN for convenience. For production or advanced customization, integrate Tailwind via npm and build a compiled stylesheet.
- Add or remove project cards in the `#projects` section. Each card is a simple HTML block and is easy to templatize for static site generators.
- The header includes a small JS file (`site/scripts.js`) that implements a mobile navigation toggle and a persistent dark-mode toggle. Modify as needed.

Contributing
------------

See `CONTRIBUTING.md` for contribution guidelines and `CODE_OF_CONDUCT.md` for behavior expectations.

License
-------

This project includes a `LICENSE` file. Fork and reuse according to its terms.
