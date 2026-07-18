# tekxio Marketing SPA — Design Spec

Date: 2026-07-18

## Purpose

Single-page marketing site for tekxio, an Estonia-based agency offering AI agent systems, AI security, and web app development. Domain `tekxio.com` (GoDaddy). Site must communicate a sharp, technical, security-forward positioning — a gap identified in market research where most Estonian AI/web agencies use vague "AI Development" labels and hide pricing.

## Market context (from research)

Scanned ~90 Estonia-facing web/AI agency listings across Sortlist, DesignRush, GoodFirms, Clutch, aisuperior, topinteractiveagencies, digitalagencynetwork. Findings:
- Most agencies bundle vague "AI Development" with generic web/mobile dev — few name specific capabilities (RAG, agents, LLMOps, computer vision).
- Almost none publish pricing; Code Gardens (from €500, transparent tiers) is the outlier.
- Masteralb is the closest tonal match: CLI-styled copy, technical-credible voice, AI-forward identity.
- Gap: nobody combines transparent starting-price tiers + named AI-agent/security depth + confident technical tone. tekxio should own that combination.

## Tech stack

- Vite + React + TypeScript + Tailwind CSS.
- Single-page app, no router — one `App` component composing section components, in-page anchor navigation (sticky nav bar scrolls to sections).
- No backend. Contact form submits via a generated `mailto:` link (see Contact section below) — no third-party form service, no analytics/tracking required by this spec.
- Dark, dev-tool aesthetic: dark background, monospace accents for headlines/CLI-style snippets, single accent color (electric/terminal-style — exact hex chosen during implementation), no light/dark toggle (dark only).

## Site structure (top to bottom)

### 1. Nav (sticky)
- tekxio wordmark (text-based, monospace treatment), left-aligned.
- Anchor links: Services, About, Contact.
- CTA button: "Contact" (also scroll-link).

### 2. Hero
- CLI-flavored headline treatment (e.g., styled like a terminal command/output), communicating: agentic AI systems, security-first, production-grade web apps.
- One-line value prop subheading.
- Two CTAs: "See Services" (scroll to Services), "Contact" (scroll to Contact).

### 3. Services
Three cards, each with 2-3 sub-capability bullets and a starting price placeholder:

1. **Agentic AI Systems** — multi-agent orchestration, LLMOps, RAG pipelines, conversational AI. Price: `{{PRICE_AGENTS}}`.
2. **AI Security** — architecture-level security review, evals, observability, informed by Stanford XACS134 practice. Price: `{{PRICE_SECURITY}}`.
3. **Web App Development** — full-stack, production-grade, deploy-ready. Price: `{{PRICE_WEBAPP}}`.

Price placeholders are literal template strings in source (e.g. `{{PRICE_AGENTS}}`) so they're trivially find-and-replaceable once real numbers are set; they render as visible "from €X"-style text in a clearly-marked placeholder style (e.g. a distinct muted color or `[TBD]` suffix) so nothing reads as a real committed price until swapped.

### 4. About (CEO)
Framed as "solo-led, agency voice" — site uses "we" for services/process copy, but this section spotlights Aun Raza by name as founder/CEO.

Content (from Aun's provided copy, reflowed for web, not altered in substance):
- Headshot: `aun-linkedin.jpeg` (copied into repo root, no space in filename), styled to match dark theme (e.g. duotone/border treatment consistent with palette).
- Pull-quote (large/styled): "Most AI engineers can build agents. Very few can secure them. I do both."
- Bio paragraph: current role architecting the CX automation layer at TON Foundation (1M+ users, 40+ Telegram channels — multi-agent orchestration, conversational AI, real-time data pipelines, LLMOps strategy, cross-functional engineering leadership), plus the "security isn't an afterthought" line.
- "8+ years shipping across industries" — four bullets exactly as provided:
  - AI/LLMOps: cut recruitment delivery time 50% (US HRTech, multi-agent hiring tools)
  - FinTech: reduced payment integration time 60% across 20+ providers (Paymob)
  - HealthTech: HIPAA-compliant AI pipelines for CCM/RPM automation, patient risk triage
  - PropTech: voice-driven AI agents for property management (Twilio + agentic workflows)
- AI Security credential line: Stanford-certified (XACS134), author of Secure AI Brief (1,000+ subscribers in first week).
- Closing line: "I take products from zero to production: architecture, agent design, deployment, evals, observability. The whole thing."
- Relocation note: "Open to relocation (GCC, Singapore, EU)."
- Links: email (`aunraza021@gmail.com`), personal site (`https://www.aunraza.space/`), LinkedIn (`https://www.linkedin.com/in/aunraz/`).
- Closing CTA line: "Building agentic systems that need to scale and survive security scrutiny? Let's talk."

### 5. Contact
- Fields: Name, Email, Company (optional), Interest (dropdown: Agentic AI Systems / AI Security / Web App Development / Other), Message.
- On submit: client-side JS builds a `mailto:aunraza021@gmail.com?subject=...&body=...` URL with URL-encoded field values folded into the subject/body, then navigates to it (opens the user's own mail client with the message pre-filled). No third-party service, no submission persisted anywhere in the app itself.
- Basic client-side validation (required fields, email format) before building the mailto link.

### 6. Footer
- tekxio wordmark + short tagline.
- Quick links: Services / About / Contact (repeat anchors).
- Email + LinkedIn icons (Aun's, since site is solo-led).
- `© 2026 tekxio`.

## Deployment

- Vercel, git-connected, deployed from this repo.
- Custom domain `tekxio.com` pointed via GoDaddy DNS once the Vercel project exists (exact A/CNAME records to be provided at that step — requires the user's own Vercel/GoDaddy account access, out of scope for this implementation).

## Testing / verification

No unit test framework — static marketing SPA with no business logic to unit test. Verification consists of:
- `npm run build` succeeds with no errors.
- Manual browser check of every section at mobile/tablet/desktop breakpoints.
- Confirm nav anchor links scroll correctly.
- Confirm the contact form's mailto link fires with correctly URL-encoded field values reflected in the resulting email draft.

## Out of scope

- Portfolio/case studies section (no completed tekxio projects yet).
- Blog/CMS.
- Light theme / theme toggle.
- Any backend, database, or third-party form/analytics service.
- Actual DNS configuration execution (spec covers what records are needed conceptually; user executes in GoDaddy/Vercel dashboards).
