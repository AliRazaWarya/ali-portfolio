# Ali Raza — Portfolio

React + Vite + Tailwind + Framer Motion portfolio site.

## Run it locally

```bash
npm install
npm run dev
```

Open the link it prints (usually http://localhost:5173).

## Where to edit content

Everything you'll want to change lives in **`src/data/profile.js`** — name, bio,
projects, skills, experience, education, social links, email, phone. No design
code down there, just your data. Edit that file and the whole site updates.

## Add your photo and CV

Drop these two files into the `public/` folder with these exact names:

- `public/profile.jpg` — your photo (shown on the Home page)
- `public/Ali_Raza_CV.pdf` — your CV (the "Download CV" button links here)

## Make the contact form actually send you messages

The form on the Contact page needs a free endpoint to send to:

1. Go to https://formspree.io and sign up (free plan is enough)
2. Create a new form, copy the form ID it gives you
3. Open `src/pages/Contact.jsx`, find this line near the top:
   ```js
   const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
   ```
4. Replace `YOUR_FORM_ID` with your real ID

Messages submitted on the site will now land straight in your email.

## Deploy it (make it live)

**Option A — Vercel (recommended, easiest):**
1. Push this folder to a GitHub repo
2. Go to https://vercel.com, sign in with GitHub, click "New Project"
3. Select the repo, leave settings as default (Vercel auto-detects Vite) -> Deploy
4. You get a live URL in ~1 minute; every future `git push` auto-updates it

**Option B — GitHub Pages (like the reference site):**
1. `npm install -D gh-pages`
2. In `package.json`, add: `"homepage": "https://<username>.github.io/<repo-name>"`
3. Add to `package.json` scripts: `"predeploy": "npm run build", "deploy": "gh-pages -d dist"`
4. Run `npm run deploy`

## Build for production

```bash
npm run build
```

Output goes to the `dist/` folder.
