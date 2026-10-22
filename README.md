# Sharon Jepngetich — Software Engineer Portfolio

A premium, black-themed personal developer portfolio built for **Sharon Jepngetich**, a Computer Science graduate and Software Engineer based in Kenya.

## Quick Start (Zero Build Required)

This portfolio is built with pure, modern web standards:
- **`index.html`** — Complete single-page semantic HTML structure.
- **`style.css`** — Pure Vanilla CSS with sleek dark theme palette (`#0B0B0B`, `#111111`, `#171717`, `#303030`, `#10B981`).
- **`script.js`** — Vanilla JavaScript for interactive project filtering, architecture deep dive modals, email clipboard copy, and contact form handling.

### How to Run Locally:
1. **Direct Browser Preview:** Simply double-click `index.html` or drag it into any web browser (Chrome, Firefox, Safari, Edge).
2. **Local HTTP Server (Optional):**
   ```bash
   python3 -m http.server 8080
   # Open http://localhost:8080 in your browser
   ```
3. **With Node / Vite (Optional):**
   ```bash
   npm install
   npm run dev
   ```

---

##  Project Structure

```
Porfolio/
├── index.html            # Main single-page portfolio
├── style.css             # Vanilla CSS design system & responsive layout
├── script.js             # Vanilla JS functionality (modals, filters, copy)
├── assets/               # Production project visual assets & portraits
│   ├── sharon-portrait.jpg
│   ├── clinic-backend.jpg
│   ├── sergoit-resort-showcase.jpg
│   ├── agrotrack-dashboard.jpg
│   ├── fastapi-rabbitmq.jpg
│   ├── lunalogic-showcase.jpg
│   ├── medilite-ai.jpg
│   └── check.svg
├── package.json          # Vite scripts (optional tooling)
└── README.md             # Project overview & deployment guide
```

---

##  Deploy in Seconds

### Option A: GitHub Pages
1. Initialize git and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete personal developer portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to **Settings > Pages > Branch: `main` > `/ (root)` > Save**. Your site is live!

### Option B: Netlify / Vercel
- Simply drag and drop the `Porfolio` folder into the Netlify dashboard or import the repository in Vercel. No build command needed.

---

##  Featured Engineering Projects

1. **Clinic Management & Patient Queue API** — Java 21 LTS, Spring Boot 3.3.5, PostgreSQL 16, Spring Security 6 JWT, Docker.
2. **Sergoit View Gardens** — Live resort platform (`sergoitviewgardens.com`) & AWS serverless feedback architecture (Lambda, API Gateway, DynamoDB, SQS, SES, SNS).
3. **AgroTrack Smart Soil Telemetry** — AWS CDK Python, Lambda, DynamoDB, Isolation Forest anomaly detection, SNS.
4. **FastAPI & RabbitMQ Microservice** — Asynchronous order queue processing, Docker, Kubernetes manifests, Jenkinsfile CI/CD.
5. **LunaLogic Tech Platform** — Production client engineering platform (`lunalogictech.com`), responsive web systems, managed DNS & cloud hosting.
6. **MediLite AI Symptom Checker** — Amazon Comprehend NLP clinical entity extraction, AWS Lambda, React.
