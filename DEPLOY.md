# Deploying DTF-ISMS to Vercel (free plan)

This is a React + Vite single-page app. Vercel detects Vite automatically:
- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Install command:** `npm install`

`vercel.json` in the project root adds an SPA fallback so client-side routes
(e.g. `/request-proposal`) don't 404 on refresh or direct visit.

## Option A — Vercel CLI (fastest, no GitHub needed)

1. Install the CLI once (global):
   ```bash
   npm i -g vercel
   ```
2. From the project folder:
   ```bash
   cd E:\veenit_project
   npm install          # make sure deps (incl. react-router-dom) are installed
   npm run build        # optional local check; should finish with no errors -> dist/
   vercel               # first run: log in + link project (accept the defaults)
   vercel --prod        # promote to a production URL
   ```
   The CLI prints the live URL (e.g. `https://veenit-project.vercel.app`).
   Choose the **Hobby (free)** scope when prompted.

## Option B — GitHub + Vercel dashboard

1. Create a **new empty GitHub repo** (private or public), e.g. `dtf-isms`.
2. In the project folder, push the code:
   ```bash
   cd E:\veenit_project
   git init
   git add .
   git commit -m "DTF-ISMS website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/dtf-isms.git
   git push -u origin main
   ```
   (`node_modules` and `dist` are already excluded by `.gitignore`.)
3. Go to https://vercel.com → **Add New… → Project** → **Import** your repo.
4. Vercel auto-fills: Framework **Vite**, Build `npm run build`, Output `dist`.
   Leave them as-is and click **Deploy**.
5. When it finishes, Vercel shows the live `*.vercel.app` URL.

## After deploying — quick checks
- Home page loads, hero video plays (muted, looping).
- Click **Request For Proposal** → lands on `/request-proposal`.
- Refresh the `/request-proposal` page directly → still loads (no 404) thanks to `vercel.json`.
- Test on a phone or Chrome DevTools device mode.

No paid plan or add-ons are required — the Hobby (free) tier covers this site.
