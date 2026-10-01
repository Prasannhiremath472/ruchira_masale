# Ruchira Masale

Modern website for Ruchira Masale — authentic Kolhapuri spices, est. 1980.

## Stack

- `frontend/` — React + Vite, mobile-first, scroll-reveal animations
- `backend/` — Node.js + Express REST API (contact form delivery)

## Development

### Backend

```bash
cd backend
cp .env.example .env   # fill in SMTP_USER / SMTP_PASSWORD to enable real email delivery
npm install
npm run dev             # http://localhost:5000
```

Without SMTP credentials, submitted contact messages are logged to the console instead of emailed — useful for local development.

### Frontend

```bash
cd frontend
cp .env.example .env
npm install
npm run dev              # http://localhost:5173
```

## Content source

Branding, product catalog, and imagery were sourced from [ruchiramasale.com](https://ruchiramasale.com/) (logo, hero banners, and product photos are stored locally under `frontend/public/images/`).
