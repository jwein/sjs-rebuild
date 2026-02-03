# Technical Architecture Overview

## Technology Stack

```
┌─────────────────────────────────────────────────────────────┐
│                      ARCHITECTURE                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐     │
│  │   CONTENT   │    │    BUILD    │    │   DEPLOY    │     │
│  │             │    │             │    │             │     │
│  │  Markdown   │───▶│   Astro     │───▶│   Vercel    │     │
│  │  JSON       │    │   + Vite    │    │   CDN       │     │
│  │  Images     │    │             │    │             │     │
│  └─────────────┘    └─────────────┘    └─────────────┘     │
│        │                  │                  │              │
│        │                  │                  │              │
│        ▼                  ▼                  ▼              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                     GIT REPOSITORY                   │   │
│  │                                                     │   │
│  │  • Version control for all content                  │   │
│  │  • AI can read/write content files                  │   │
│  │  • Push triggers automatic deploy                   │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Project Structure

```
sjs-communications/
├── public/                     # Static assets (copied as-is)
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   ├── assets/                 # Processed assets (images, fonts)
│   │   ├── logos/             # Client logos for logo wall
│   │   └── images/            # Site images
│   │
│   ├── components/            # Reusable UI components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── LogoWall.astro     # Dynamic scrolling client logos
│   │   ├── Testimonials.astro
│   │   ├── CaseStudyCard.astro
│   │   └── ContactForm.astro
│   │
│   ├── content/               # EDITABLE CONTENT (AI-friendly)
│   │   ├── clients.json       # Client logo configuration
│   │   ├── testimonials.json  # Testimonial quotes
│   │   ├── site-config.json   # Global site settings
│   │   └── case-studies/      # Markdown case study files
│   │       └── _template.md   # Template for new case studies
│   │
│   ├── layouts/               # Page layouts
│   │   └── BaseLayout.astro
│   │
│   ├── pages/                 # Route pages
│   │   ├── index.astro        # Home
│   │   ├── services.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   └── case-studies/
│   │       ├── index.astro    # Case study listing
│   │       └── [...slug].astro # Dynamic case study pages
│   │
│   └── styles/                # Global styles
│       └── global.css
│
├── docs/                      # Project documentation
│   ├── PRD/
│   └── technical/
│
├── astro.config.mjs           # Astro configuration
├── tailwind.config.mjs        # Tailwind configuration
├── package.json
└── README.md
```

---

## Content Schema Definitions

### clients.json
```json
{
  "$schema": "Content schema for client logo wall",
  "clients": [
    {
      "name": "Company Name (required)",
      "logo": "/assets/logos/filename.png (required)",
      "url": "https://company.com (optional)",
      "active": true
    }
  ]
}
```

### testimonials.json
```json
{
  "$schema": "Content schema for testimonials",
  "testimonials": [
    {
      "quote": "Full testimonial text",
      "author": "Person Name",
      "title": "Job Title",
      "company": "Company Name",
      "image": "/assets/images/headshot.jpg (optional)"
    }
  ]
}
```

### Case Study Frontmatter
```yaml
---
title: "Case Study Title"
client: "Client Name"
industry: "Biotech / Pharma / etc"
services: ["Communications Strategy", "Investor Relations"]
challenge: "Brief challenge description"
results:
  - metric: "50%"
    description: "increase in media coverage"
  - metric: "3x"
    description: "improvement in stakeholder engagement"
publishDate: 2026-01-15
featured: true
---
```

---

## Component Specifications

### LogoWall Component

**Purpose**: Display scrolling marquee of client logos, easily updatable via JSON.

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| speed | number | 30 | Animation duration in seconds |
| pauseOnHover | boolean | true | Pause animation on hover |
| grayscale | boolean | true | Display logos in grayscale |
| colorOnHover | boolean | true | Show color on individual hover |

**Implementation Notes**:
- Pure CSS animation (no JavaScript required)
- Duplicated logo set for seamless infinite scroll
- Responsive: fewer visible logos on mobile
- Lazy loading for performance

```astro
<!-- Usage -->
<LogoWall speed={40} pauseOnHover={true} />
```

---

## Build & Deploy Pipeline

```
┌─────────────────────────────────────────────────────────────┐
│                    CI/CD PIPELINE                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  LOCAL DEVELOPMENT                                          │
│  ─────────────────                                          │
│  npm run dev                                                │
│  • Hot reload on file changes                               │
│  • Preview at localhost:4321                                │
│                                                             │
│           │                                                 │
│           ▼                                                 │
│                                                             │
│  GIT PUSH TO MAIN                                           │
│  ─────────────────                                          │
│  git add . && git commit && git push                        │
│                                                             │
│           │                                                 │
│           ▼                                                 │
│                                                             │
│  VERCEL AUTO-DEPLOY                                         │
│  ─────────────────                                          │
│  • Triggered automatically on push                          │
│  • Runs: npm install → npm run build                        │
│  • Deploys to CDN edge network                              │
│  • ~60 second total deploy time                             │
│                                                             │
│           │                                                 │
│           ▼                                                 │
│                                                             │
│  PREVIEW DEPLOYS (on PRs)                                   │
│  ─────────────────                                          │
│  • Every pull request gets unique preview URL               │
│  • Client can review before merging to production           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Performance Targets

| Metric | Target | Measurement |
|--------|--------|-------------|
| Lighthouse Performance | 90+ | CI check on every deploy |
| First Contentful Paint | < 1.5s | Web Vitals |
| Largest Contentful Paint | < 2.5s | Web Vitals |
| Cumulative Layout Shift | < 0.1 | Web Vitals |
| Total Page Weight | < 500KB | Build output |

---

## Security Considerations

- **No database**: Static site, no SQL injection risk
- **No user auth**: No credential storage
- **Form handling**: Via third-party (Formspree) with spam protection
- **HTTPS**: Automatic via Vercel
- **Headers**: Security headers configured in vercel.json

---

## Accessibility Requirements

- WCAG 2.1 AA compliance
- Semantic HTML structure
- Alt text for all images
- Keyboard navigation support
- Sufficient color contrast
- Skip navigation link

