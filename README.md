# tekxio

Marketing SPA for tekxio — agentic AI systems, AI security, and web app
development, built from Estonia.

## Development

```bash
npm install
npm run dev
```

Visit http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Deployment

Deployed via Vercel, connected to this git repo. Point `tekxio.com`'s DNS
(GoDaddy) at the A/CNAME records Vercel provides once the project exists
there. Full design rationale in
`docs/superpowers/specs/2026-07-18-tekxio-spa-design.md`.
