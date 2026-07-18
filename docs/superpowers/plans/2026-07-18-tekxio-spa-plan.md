# tekxio Marketing SPA Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and verify a static, dark-themed marketing SPA for tekxio (Estonia-based AI/web agency) covering Hero, Services, About (CEO Aun Raza), Contact (mailto-based form), and Footer, per `docs/superpowers/specs/2026-07-18-tekxio-spa-design.md`.

**Architecture:** Vite + React + TypeScript + Tailwind CSS, single page, no router, in-page anchor navigation, no backend. Component per section under `src/components/`, service copy data-driven from `src/data/services.ts`, contact form builds a `mailto:` link client-side via a pure helper in `src/lib/mailto.ts`.

**Tech Stack:** Vite 5, React 18, TypeScript 5, Tailwind CSS 3.

**Note on testing approach:** Per the approved spec, this project deliberately has no unit test framework — it is a static marketing site with no business logic beyond one pure URL-building function. Verification steps below use `npm run build`, `grep` against build output, and manual dev-server/browser checks instead of a test runner. This is an intentional deviation from the default TDD step pattern, matching the spec's own "Testing / verification" section.

---

## File Structure

```
tekxio/tekxio/
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
├── README.md
├── public/
│   └── aun-linkedin.jpeg
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── data/
    │   └── services.ts
    ├── lib/
    │   └── mailto.ts
    └── components/
        ├── Nav.tsx
        ├── Hero.tsx
        ├── Services.tsx
        ├── ServiceCard.tsx
        ├── About.tsx
        ├── Contact.tsx
        └── Footer.tsx
```

---

### Task 1: Scaffold Vite + React + TypeScript project files

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `tsconfig.node.json`
- Create: `vite.config.ts`
- Create: `index.html`
- Create: `.gitignore`

- [ ] **Step 1: Write `package.json`**

```json
{
  "name": "tekxio",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.41",
    "tailwindcss": "^3.4.10",
    "typescript": "^5.5.4",
    "vite": "^5.4.0"
  }
}
```

- [ ] **Step 2: Write `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

- [ ] **Step 3: Write `tsconfig.node.json`**

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true
  },
  "include": ["vite.config.ts"]
}
```

- [ ] **Step 4: Write `vite.config.ts`**

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

- [ ] **Step 5: Write `index.html`**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>tekxio — Agentic AI systems, secured and shipped.</title>
    <meta
      name="description"
      content="tekxio builds agentic AI systems, secures them against real-world scrutiny, and ships production-grade web apps. Based in Estonia."
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 6: Write `.gitignore`**

```
node_modules
dist
.DS_Store
*.local
```

- [ ] **Step 7: Commit**

```bash
cd "/Users/sajjadzaidi/Desktop/tekxio/tekxio"
git add package.json tsconfig.json tsconfig.node.json vite.config.ts index.html .gitignore
git commit -m "chore: scaffold vite + react + typescript project files"
```

---

### Task 2: Install dependencies and verify dev server boots

**Files:** none (verification only)

- [ ] **Step 1: Install dependencies**

Run: `cd "/Users/sajjadzaidi/Desktop/tekxio/tekxio" && npm install`
Expected: exits 0, creates `node_modules/` and `package-lock.json`.

- [ ] **Step 2: Create placeholder `src/main.tsx` and `src/App.tsx` so the dev server has something to boot**

`src/main.tsx`:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

`src/App.tsx`:

```tsx
function App() {
  return <div>tekxio placeholder</div>;
}

export default App;
```

- [ ] **Step 3: Verify dev server boots and serves the placeholder**

Run: `cd "/Users/sajjadzaidi/Desktop/tekxio/tekxio" && npm run dev -- --port 5173 &`
Wait ~2 seconds, then: `curl -s http://localhost:5173/ | grep -q "root" && echo "OK: index served"`
Expected output: `OK: index served`
Then stop the server: `kill %1` (or `pkill -f "vite"`).

- [ ] **Step 4: Commit**

```bash
cd "/Users/sajjadzaidi/Desktop/tekxio/tekxio"
git add package-lock.json src/main.tsx src/App.tsx
git commit -m "chore: verify dev server boots with placeholder app"
```

Note: do not commit `package.json`/`node_modules` again — already committed in Task 1, `node_modules` is gitignored.

---

### Task 3: Configure Tailwind CSS and dark theme design tokens

**Files:**
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Create: `src/index.css`
- Modify: `src/main.tsx` (import the stylesheet)

- [ ] **Step 1: Write `tailwind.config.js`**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B0E14',
        surface: '#111620',
        border: '#1F2733',
        text: '#E6EDF3',
        muted: '#8B98A9',
        accent: '#00E5A0',
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 2: Write `postcss.config.js`**

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

- [ ] **Step 3: Write `src/index.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: dark;
}

html {
  scroll-behavior: smooth;
}

body {
  @apply bg-bg text-text;
}
```

- [ ] **Step 4: Import the stylesheet in `src/main.tsx`**

Modify `src/main.tsx` to add the CSS import:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

- [ ] **Step 5: Verify Tailwind classes render with dark theme colors**

Update `src/App.tsx` temporarily to use a themed class:

```tsx
function App() {
  return <div className="bg-bg text-accent p-8">tekxio placeholder</div>;
}

export default App;
```

Run: `cd "/Users/sajjadzaidi/Desktop/tekxio/tekxio" && npm run build`
Expected: build succeeds (exit 0), `dist/assets/*.css` exists.
Run: `grep -q "0B0E14" dist/assets/*.css && echo "OK: theme colors compiled"`
Expected output: `OK: theme colors compiled`

- [ ] **Step 6: Commit**

```bash
cd "/Users/sajjadzaidi/Desktop/tekxio/tekxio"
git add tailwind.config.js postcss.config.js src/index.css src/main.tsx src/App.tsx
git commit -m "feat: configure tailwind css with dark theme tokens"
```

---

### Task 4: Move headshot asset into `public/`

**Files:**
- Move: `aun-linkedin.jpeg` → `public/aun-linkedin.jpeg`

- [ ] **Step 1: Create `public/` and move the image**

```bash
cd "/Users/sajjadzaidi/Desktop/tekxio/tekxio"
mkdir -p public
git mv aun-linkedin.jpeg public/aun-linkedin.jpeg
```

- [ ] **Step 2: Verify the file is present at the new path**

Run: `test -f "/Users/sajjadzaidi/Desktop/tekxio/tekxio/public/aun-linkedin.jpeg" && echo "OK: image in public/"`
Expected output: `OK: image in public/`

- [ ] **Step 3: Commit**

```bash
cd "/Users/sajjadzaidi/Desktop/tekxio/tekxio"
git commit -m "chore: move headshot into public/ for direct static serving"
```

---

### Task 5: Build the Nav component

**Files:**
- Create: `src/components/Nav.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Write `src/components/Nav.tsx`**

```tsx
const links = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-lg font-bold text-text">
          tekxio<span className="text-accent">_</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-md border border-accent px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-bg"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Nav;
```

- [ ] **Step 2: Wire `Nav` into `App.tsx`**

```tsx
import Nav from './components/Nav';

function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Nav />
    </div>
  );
}

export default App;
```

- [ ] **Step 3: Verify build succeeds and nav markup is present**

Run: `cd "/Users/sajjadzaidi/Desktop/tekxio/tekxio" && npm run build`
Expected: exit 0.
Run: `grep -rq "tekxio_" dist/assets/*.js 2>/dev/null; grep -rlq "Contact" dist/assets/*.js && echo "OK: nav compiled"`
Expected output: `OK: nav compiled`

- [ ] **Step 4: Commit**

```bash
cd "/Users/sajjadzaidi/Desktop/tekxio/tekxio"
git add src/components/Nav.tsx src/App.tsx
git commit -m "feat: add sticky nav with anchor links"
```

---

### Task 6: Build the Hero component

**Files:**
- Create: `src/components/Hero.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Write `src/components/Hero.tsx`**

```tsx
function Hero() {
  return (
    <section
      id="top"
      className="scroll-mt-20 mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-32"
    >
      <div className="mb-6 inline-block rounded-md border border-border bg-surface px-4 py-3 font-mono text-sm text-accent">
        <span className="text-muted">$</span> tekxio deploy --agentic --secure
      </div>
      <h1 className="max-w-3xl text-4xl font-bold leading-tight text-text md:text-6xl">
        Agentic AI systems. Production-grade web apps.{' '}
        <span className="text-accent">Security built in, not bolted on.</span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">
        We build and ship AI agent systems, secure them against real-world
        scrutiny, and put production-grade web apps behind them — from
        Estonia, for teams anywhere.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#services"
          className="rounded-md bg-accent px-6 py-3 font-medium text-bg transition-opacity hover:opacity-90"
        >
          See Services
        </a>
        <a
          href="#contact"
          className="rounded-md border border-border px-6 py-3 font-medium text-text transition-colors hover:border-accent"
        >
          Contact
        </a>
      </div>
    </section>
  );
}

export default Hero;
```

- [ ] **Step 2: Wire `Hero` into `App.tsx`**

```tsx
import Nav from './components/Nav';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Nav />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
```

- [ ] **Step 3: Verify build succeeds and hero copy is present**

Run: `cd "/Users/sajjadzaidi/Desktop/tekxio/tekxio" && npm run build`
Expected: exit 0.
Run: `grep -rlq "deploy --agentic --secure" dist/assets/*.js && echo "OK: hero compiled"`
Expected output: `OK: hero compiled`

- [ ] **Step 4: Commit**

```bash
cd "/Users/sajjadzaidi/Desktop/tekxio/tekxio"
git add src/components/Hero.tsx src/App.tsx
git commit -m "feat: add hero section"
```

---

### Task 7: Build Services data, ServiceCard, and Services section

**Files:**
- Create: `src/data/services.ts`
- Create: `src/components/ServiceCard.tsx`
- Create: `src/components/Services.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Write `src/data/services.ts`**

```ts
export interface Service {
  id: string;
  title: string;
  bullets: string[];
  price: string;
}

export const services: Service[] = [
  {
    id: 'agentic-ai',
    title: 'Agentic AI Systems',
    bullets: [
      'Multi-agent orchestration & conversational AI',
      'LLMOps strategy & real-time data pipelines',
      'RAG pipelines built for production, not demos',
    ],
    price: '{{PRICE_AGENTS}}',
  },
  {
    id: 'ai-security',
    title: 'AI Security',
    bullets: [
      'Architecture-level security review, not an afterthought',
      'Evals & observability built into every agent',
      'Informed by Stanford XACS134 practice',
    ],
    price: '{{PRICE_SECURITY}}',
  },
  {
    id: 'web-apps',
    title: 'Web App Development',
    bullets: [
      'Full-stack, production-grade builds',
      'Deploy-ready from day one',
      'Built to carry the AI systems above',
    ],
    price: '{{PRICE_WEBAPP}}',
  },
];
```

- [ ] **Step 2: Write `src/components/ServiceCard.tsx`**

```tsx
import type { Service } from '../data/services';

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="rounded-lg border border-border bg-surface p-6">
      <h3 className="text-xl font-semibold text-text">{service.title}</h3>
      <ul className="mt-4 space-y-2">
        {service.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2 text-sm text-muted">
            <span className="text-accent">▹</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 font-mono text-sm text-muted">
        From <span className="text-accent">{service.price}</span>
      </p>
    </div>
  );
}

export default ServiceCard;
```

- [ ] **Step 3: Write `src/components/Services.tsx`**

```tsx
import { services } from '../data/services';
import ServiceCard from './ServiceCard';

function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-20 border-t border-border bg-surface/40 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-mono text-sm uppercase tracking-widest text-accent">
          Services
        </h2>
        <p className="mt-3 max-w-2xl text-3xl font-bold text-text md:text-4xl">
          Three things we do. Nothing vague about any of them.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
```

- [ ] **Step 4: Wire `Services` into `App.tsx`**

```tsx
import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';

function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Nav />
      <main>
        <Hero />
        <Services />
      </main>
    </div>
  );
}

export default App;
```

- [ ] **Step 5: Verify build succeeds and all three service titles compile in**

Run: `cd "/Users/sajjadzaidi/Desktop/tekxio/tekxio" && npm run build`
Expected: exit 0.
Run:

```bash
grep -rlq "Agentic AI Systems" dist/assets/*.js && \
grep -rlq "AI Security" dist/assets/*.js && \
grep -rlq "Web App Development" dist/assets/*.js && \
echo "OK: all three services compiled"
```

Expected output: `OK: all three services compiled`

- [ ] **Step 6: Commit**

```bash
cd "/Users/sajjadzaidi/Desktop/tekxio/tekxio"
git add src/data/services.ts src/components/ServiceCard.tsx src/components/Services.tsx src/App.tsx
git commit -m "feat: add services section with three service tiers"
```

---

### Task 8: Build the About (CEO) component

**Files:**
- Create: `src/components/About.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Write `src/components/About.tsx`**

```tsx
function About() {
  return (
    <section id="about" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[280px_1fr]">
        <div>
          <img
            src="/aun-linkedin.jpeg"
            alt="Aun Raza, Founder & CEO of tekxio"
            className="w-full rounded-lg border border-border object-cover grayscale"
          />
        </div>
        <div>
          <h2 className="font-mono text-sm uppercase tracking-widest text-accent">
            About
          </h2>
          <blockquote className="mt-4 border-l-2 border-accent pl-4 text-2xl font-semibold text-text md:text-3xl">
            &quot;Most AI engineers can build agents. Very few can secure
            them. I do both.&quot;
          </blockquote>
          <p className="mt-6 text-muted">
            Aun Raza, Founder &amp; CEO of tekxio, architects the CX
            automation layer at TON Foundation, serving 1M+ users across 40+
            Telegram channels — multi-agent orchestration, conversational AI,
            real-time data pipelines, and LLMOps strategy, alongside
            cross-functional engineering leadership. Security isn&apos;t an
            afterthought in his systems. It&apos;s part of the architecture.
          </p>

          <h3 className="mt-8 font-mono text-xs uppercase tracking-widest text-muted">
            8+ years shipping across industries
          </h3>
          <ul className="mt-4 space-y-3">
            <li className="text-sm text-muted">
              <span className="text-accent">AI/LLMOps —</span> Cut recruitment
              delivery time by 50% with multi-agent hiring tools (US HRTech)
            </li>
            <li className="text-sm text-muted">
              <span className="text-accent">FinTech —</span> Reduced payment
              integration time by 60% across 20+ providers at Paymob
            </li>
            <li className="text-sm text-muted">
              <span className="text-accent">HealthTech —</span> Built
              HIPAA-compliant AI pipelines for CCM/RPM automation and patient
              risk triage
            </li>
            <li className="text-sm text-muted">
              <span className="text-accent">PropTech —</span> Built
              voice-driven AI agents for property management automation
              (Twilio + agentic workflows)
            </li>
          </ul>

          <p className="mt-6 text-sm text-muted">
            <span className="text-accent">AI Security:</span> Stanford-certified
            (XACS134), author of Secure AI Brief with 1,000+ subscribers in
            its first week.
          </p>

          <p className="mt-6 text-muted">
            He takes products from zero to production: architecture, agent
            design, deployment, evals, observability. The whole thing.
          </p>

          <p className="mt-6 text-sm text-muted">
            📍 Open to relocation (GCC, Singapore, EU)
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <a
              href="mailto:aunraza021@gmail.com"
              className="text-accent hover:underline"
            >
              aunraza021@gmail.com
            </a>
            <a
              href="https://www.aunraza.space/"
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              aunraza.space
            </a>
            <a
              href="https://www.linkedin.com/in/aunraz/"
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              LinkedIn
            </a>
          </div>

          <p className="mt-8 text-lg font-medium text-text">
            Building agentic systems that need to scale and survive security
            scrutiny? Let&apos;s talk.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
```

- [ ] **Step 2: Wire `About` into `App.tsx`**

```tsx
import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Nav />
      <main>
        <Hero />
        <Services />
        <About />
      </main>
    </div>
  );
}

export default App;
```

- [ ] **Step 3: Verify build succeeds and key About copy compiles in**

Run: `cd "/Users/sajjadzaidi/Desktop/tekxio/tekxio" && npm run build`
Expected: exit 0.
Run:

```bash
grep -rlq "aunraza021@gmail.com" dist/assets/*.js && \
grep -rlq "XACS134" dist/assets/*.js && \
echo "OK: about section compiled"
```

Expected output: `OK: about section compiled`

- [ ] **Step 4: Commit**

```bash
cd "/Users/sajjadzaidi/Desktop/tekxio/tekxio"
git add src/components/About.tsx src/App.tsx
git commit -m "feat: add about section with CEO bio"
```

---

### Task 9: Build the mailto helper and Contact component

**Files:**
- Create: `src/lib/mailto.ts`
- Create: `src/components/Contact.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Write `src/lib/mailto.ts`**

```ts
export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
}

export function buildMailtoUrl(data: ContactFormData): string {
  const to = 'aunraza021@gmail.com';
  const subject = `tekxio inquiry: ${data.interest} — ${data.name}`;
  const bodyLines = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.company ? `Company: ${data.company}` : null,
    `Interest: ${data.interest}`,
    '',
    data.message,
  ].filter((line): line is string => line !== null);
  const body = bodyLines.join('\n');
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
```

Note: `encodeURIComponent` is used deliberately instead of `URLSearchParams` — `URLSearchParams` encodes spaces as `+`, which several mail clients render literally in `mailto:` links instead of decoding as a space. `encodeURIComponent` encodes spaces as `%20`, which mail clients handle correctly.

- [ ] **Step 2: Write `src/components/Contact.tsx`**

```tsx
import { useState, type FormEvent } from 'react';
import { buildMailtoUrl } from '../lib/mailto';

const interests = [
  'Agentic AI Systems',
  'AI Security',
  'Web App Development',
  'Other',
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [interest, setInterest] = useState(interests[0]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !message.trim()) {
      setError('Name and message are required.');
      return;
    }

    if (!EMAIL_PATTERN.test(email)) {
      setError('Enter a valid email address.');
      return;
    }

    setError('');
    window.location.href = buildMailtoUrl({
      name,
      email,
      company,
      interest,
      message,
    });
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border px-6 py-24"
    >
      <div className="mx-auto max-w-2xl">
        <h2 className="font-mono text-sm uppercase tracking-widest text-accent">
          Contact
        </h2>
        <p className="mt-3 text-3xl font-bold text-text md:text-4xl">
          Let&apos;s talk about what you&apos;re building.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm text-muted">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-md border border-border bg-surface px-4 py-2 text-text outline-none focus:border-accent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-muted">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-md border border-border bg-surface px-4 py-2 text-text outline-none focus:border-accent"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm text-muted">
              Company (optional)
            </label>
            <input
              id="company"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="mt-1 w-full rounded-md border border-border bg-surface px-4 py-2 text-text outline-none focus:border-accent"
            />
          </div>

          <div>
            <label htmlFor="interest" className="block text-sm text-muted">
              Interest
            </label>
            <select
              id="interest"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="mt-1 w-full rounded-md border border-border bg-surface px-4 py-2 text-text outline-none focus:border-accent"
            >
              {interests.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-muted">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 w-full rounded-md border border-border bg-surface px-4 py-2 text-text outline-none focus:border-accent"
            />
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <button
            type="submit"
            className="rounded-md bg-accent px-6 py-3 font-medium text-bg transition-opacity hover:opacity-90"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
```

- [ ] **Step 3: Wire `Contact` into `App.tsx`**

```tsx
import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Nav />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
```

- [ ] **Step 4: Verify build succeeds and the form compiles in**

Run: `cd "/Users/sajjadzaidi/Desktop/tekxio/tekxio" && npm run build`
Expected: exit 0.
Run: `grep -rlq "Let.*talk about what you" dist/assets/*.js && echo "OK: contact form compiled"`
Expected output: `OK: contact form compiled`

- [ ] **Step 5: Manually verify the mailto helper's encoding behavior**

Run this standalone Node check (does not require the dev server):

```bash
cd "/Users/sajjadzaidi/Desktop/tekxio/tekxio"
node --input-type=module -e "
function buildMailtoUrl(data) {
  const to = 'aunraza021@gmail.com';
  const subject = \`tekxio inquiry: \${data.interest} — \${data.name}\`;
  const bodyLines = [
    \`Name: \${data.name}\`,
    \`Email: \${data.email}\`,
    data.company ? \`Company: \${data.company}\` : null,
    \`Interest: \${data.interest}\`,
    '',
    data.message,
  ].filter((line) => line !== null);
  const body = bodyLines.join('\n');
  return \`mailto:\${to}?subject=\${encodeURIComponent(subject)}&body=\${encodeURIComponent(body)}\`;
}
const url = buildMailtoUrl({ name: 'Jane Doe', email: 'jane@example.com', company: 'Acme', interest: 'AI Security', message: 'Hi there' });
console.log(url.startsWith('mailto:aunraza021@gmail.com?subject=') && !url.includes(' ') ? 'OK: mailto url well-formed' : 'FAIL');
"
```

Expected output: `OK: mailto url well-formed`

- [ ] **Step 6: Commit**

```bash
cd "/Users/sajjadzaidi/Desktop/tekxio/tekxio"
git add src/lib/mailto.ts src/components/Contact.tsx src/App.tsx
git commit -m "feat: add contact form with mailto submission"
```

---

### Task 10: Build the Footer component

**Files:**
- Create: `src/components/Footer.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Write `src/components/Footer.tsx`**

```tsx
function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted md:flex-row">
        <div>
          <span className="font-mono text-text">tekxio_</span>
          <span className="ml-2">
            Agentic AI systems, secured and shipped.
          </span>
        </div>
        <div className="flex gap-6">
          <a href="#services" className="hover:text-text">
            Services
          </a>
          <a href="#about" className="hover:text-text">
            About
          </a>
          <a href="#contact" className="hover:text-text">
            Contact
          </a>
        </div>
        <div className="flex gap-4">
          <a href="mailto:aunraza021@gmail.com" className="hover:text-text">
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/aunraz/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-text"
          >
            LinkedIn
          </a>
        </div>
        <div>© 2026 tekxio</div>
      </div>
    </footer>
  );
}

export default Footer;
```

- [ ] **Step 2: Wire `Footer` into `App.tsx` (final composition)**

```tsx
import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Nav />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

- [ ] **Step 3: Verify build succeeds and footer copy compiles in**

Run: `cd "/Users/sajjadzaidi/Desktop/tekxio/tekxio" && npm run build`
Expected: exit 0.
Run: `grep -rlq "© 2026 tekxio" dist/assets/*.js && echo "OK: footer compiled"`
Expected output: `OK: footer compiled`

- [ ] **Step 4: Commit**

```bash
cd "/Users/sajjadzaidi/Desktop/tekxio/tekxio"
git add src/components/Footer.tsx src/App.tsx
git commit -m "feat: add footer and complete page composition"
```

---

### Task 11: Manual cross-browser verification pass

**Files:** none (verification only)

- [ ] **Step 1: Start the dev server**

Run: `cd "/Users/sajjadzaidi/Desktop/tekxio/tekxio" && npm run dev -- --port 5173 &`

- [ ] **Step 2: Open the app in a browser tool and check every section renders**

Navigate to `http://localhost:5173/`. Confirm, in order: sticky nav with Services/About/Contact links, Hero with two CTAs, Services with 3 cards showing distinct placeholder prices, About with Aun's headshot + bio + 4 industry bullets + working email/LinkedIn/aunraza.space links, Contact form with all 5 fields, Footer with links and copyright.

- [ ] **Step 3: Check responsive behavior**

Resize the browser viewport to mobile (375px), tablet (768px), and desktop (1280px) widths. Confirm the Services grid collapses to a single column on mobile, the About layout stacks the image above the text on mobile, and the nav's link row hides on mobile (leaving wordmark + Contact button only, per the `hidden md:flex` class on the link row).

- [ ] **Step 4: Check anchor scroll behavior**

Click each nav link (Services, About, Contact) and confirm the page scrolls to the correct section without the sticky nav overlapping the section heading (the `scroll-mt-20` classes on each section handle this offset).

- [ ] **Step 5: Check the contact form's mailto behavior**

Fill in Name, a valid Email, and a Message, leave Company blank, pick an Interest, and submit. Confirm the browser attempts to open a mail client (or shows the OS's "no mail app configured" behavior) rather than showing a validation error. Then submit with an invalid email (e.g. `notanemail`) and confirm the inline error "Enter a valid email address." appears instead.

- [ ] **Step 6: Stop the dev server**

Run: `kill %1` (or `pkill -f "vite"`)

- [ ] **Step 7: No commit for this task** — verification only, no files changed.

---

### Task 12: Production build and README

**Files:**
- Create: `README.md`

- [ ] **Step 1: Write `README.md`**

```md
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

## Pricing placeholders

Service card prices currently render as literal `{{PRICE_AGENTS}}` /
`{{PRICE_SECURITY}}` / `{{PRICE_WEBAPP}}` placeholders in
`src/data/services.ts` — replace with real starting-from figures before
going live.
```

- [ ] **Step 2: Run the full production build one final time**

Run: `cd "/Users/sajjadzaidi/Desktop/tekxio/tekxio" && npm run build`
Expected: exit 0, no TypeScript errors, `dist/` populated with `index.html` and `assets/`.

- [ ] **Step 3: Verify the built `dist/index.html` references the app bundle correctly**

Run: `grep -q "assets/index" dist/index.html && echo "OK: build references bundle"`
Expected output: `OK: build references bundle`

- [ ] **Step 4: Commit**

```bash
cd "/Users/sajjadzaidi/Desktop/tekxio/tekxio"
git add README.md
git commit -m "docs: add README with dev, build, and deployment instructions"
```

---

## Self-Review Notes

- **Spec coverage:** Nav/Hero/Services/About/Contact/Footer, dark dev-tool theme, price placeholders, mailto-only contact, Vercel/GoDaddy deployment note, and manual-verification-only testing approach are all covered by Tasks 1–12 and map 1:1 to the spec's "Site structure," "Deployment," and "Testing / verification" sections.
- **Placeholder scan:** The only `{{...}}` template strings are the intentional, spec-mandated price placeholders in `services.ts` — these are a designed feature (clearly-marked, find-and-replaceable), not a plan gap.
- **Type consistency:** `Service` interface (id/title/bullets/price) defined once in `src/data/services.ts` and consumed identically by `ServiceCard.tsx` and `Services.tsx`. `ContactFormData` interface defined once in `src/lib/mailto.ts` and consumed identically by `Contact.tsx`. No renamed fields across tasks.
