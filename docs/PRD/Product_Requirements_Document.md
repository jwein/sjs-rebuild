# SJS Communications Website Rebuild
## Product Requirements Document (PRD)

**Version:** 2.0  
**Last Updated:** January 17, 2026  
**Product Owner:** Joshua Wein  
**Client:** Sarah Jess Spencer, SJS Communications

---

## 1. Executive Summary

### 1.1 Problem Statement
SJS Communications currently operates their website on Squarespace, which presents significant friction for content updates. The client—a solo communications consultant—needs to focus on client work, not wrestling with a CMS. Specific pain points include:

- **Laborious update process**: Simple content changes require navigating complex Squarespace interfaces
- **Static client logo wall**: Currently a single PNG image that requires graphic design skills to update
- **No scalable case study system**: Future growth requires showcasing client success stories

### 1.2 Proposed Solution
Rebuild the website using a modern static site generator with:
- **1:1 visual parity** with the current sjscomms.com design
- **Markdown/JSON-based content** that can be easily updated via AI assistance
- **Dynamic client logo component** that reads from a simple configuration file
- **Case study templates** ready for future content
- **Headless architecture** enabling a prompt → review → publish workflow

### 1.3 Success Metrics
| Metric | Current State | Target |
|--------|---------------|--------|
| Time to update client logo wall | 30+ minutes (design tool required) | < 2 minutes |
| Time to publish content change | 15-20 minutes | < 5 minutes |
| Case study creation time | N/A (no template) | < 10 minutes |
| Site performance (Lighthouse) | Unknown | 90+ |
| **Visual parity with current site** | N/A | 100% match |

---

## 2. User Personas

### 2.1 Primary User: Sarah Jess Spencer (Site Owner)
- **Role**: Founder, SJS Communications
- **Technical Skill**: Non-technical, comfortable with basic text editing
- **Goals**: 
  - Update website content quickly without technical assistance
  - Add new client logos as partnerships form
  - Publish case studies to demonstrate expertise
- **Frustrations**:
  - Current Squarespace workflow is time-consuming
  - Cannot easily update the scrolling logo animation
  - Feels dependent on technical help for simple changes

### 2.2 Secondary User: Site Visitors (Prospective Clients)
- **Role**: Biotech executives, communications directors
- **Goals**:
  - Understand SJS's value proposition quickly
  - Review credentials and testimonials
  - Contact Sarah for consulting engagement
- **Expectations**:
  - Professional, polished appearance befitting the biotech industry
  - Fast-loading, mobile-responsive experience
  - Clear calls-to-action

---

## 3. Visual Parity Requirements (CRITICAL)

> **See detailed specification**: `docs/PRD/Visual_Parity_Spec.md`

The rebuilt site MUST match the current www.sjscomms.com design exactly. Key elements:

### 3.1 Typography
- **Headings**: Serif font (Playfair Display or similar to match Orpheus Pro)
- **Body**: Clean sans-serif (DM Sans or similar to match Omnes Pro)
- **Accents**: Geometric sans for buttons/labels

### 3.2 Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Primary Teal | `#1399D7` | CTAs, accents, testimonials background |
| Secondary Teal | `#0D9488` | Hover states |
| White | `#FFFFFF` | Backgrounds, text on dark |
| Black | `#000000` | Body text |

### 3.3 Homepage Sections (Exact Order)
1. **Header** - Logo left, navigation right, sticky on scroll
2. **Hero** - Full-width background image, centered text, "GET STARTED" CTA
3. **Value Props** - 3 circular images with bold text labels
4. **Logo Wall** - Horizontal scrolling marquee of client logos
5. **About Preview** - Sarah's photo + "LET'S MEET" CTA
6. **Testimonials** - "CLIENT LOVE" heading, teal background
7. **Footer** - 3-column layout with logo, nav, contact

### 3.4 Required Assets
All assets extracted from current site and placed in `public/assets/images/`:
- `sjs-logo.png` - Header logo
- `sjs-logo-mobile.png` - Mobile/footer logo
- `value-prop-1.png`, `value-prop-2.png`, `value-prop-3.png` - Circular icons
- `sarah-headshot.jpg` - Sarah's professional photo
- `hero-background.jpg` - Hero section background
- `section-background.jpg` - About preview background

---

## 4. Feature Requirements

### 4.1 Core Pages (MVP)

| Page | Priority | Description |
|------|----------|-------------|
| Home | P0 | Hero, value props, logo wall, about preview, testimonials |
| Services | P0 | Detailed service offerings |
| About | P0 | Sarah's bio and company story |
| Contact | P0 | Contact form and information |
| Case Studies | P1 | Template-driven client success stories (content TBD) |

### 4.2 Key Components

#### 4.2.1 Dynamic Client Logo Wall (P0 - Critical)
**User Story**: As a site owner, I want to add new client logos by simply adding an image file and one line of config, so that I can keep my client roster current without design tools.

**Visual Requirements**:
- Horizontal scrolling marquee animation (matches current site)
- ~150px height
- Continuous smooth scroll (~20s cycle)
- Grayscale with color on hover (optional)

**Acceptance Criteria**:
- [ ] Logos read from `src/content/clients.json`
- [ ] Smooth scrolling animation matching current site
- [ ] Responsive across all device sizes
- [ ] New logos appear by adding image + config entry (no code changes)

#### 4.2.2 Value Propositions Section (P0)
**Visual Requirements**:
- 3-column layout (stacks on mobile)
- Circular images (500x500px displayed smaller)
- Bold uppercase text centered below each
- White/light background

**Content** (exact text from current site):
1. INDIVIDUAL / ATTENTION TO / CLIENTS
2. EXPERIENCED / COUNSEL FROM / A 25-YEAR / INDUSTRY VET
3. INGENUITY / CREATIVITY / INTEGRITY / ATTITUDE

#### 4.2.3 Testimonials Section (P0)
**Visual Requirements**:
- Section heading: "CLIENT LOVE"
- Teal background (`#1399D7`)
- White text
- Card-based or carousel layout

**Acceptance Criteria**:
- [ ] Testimonials stored in `src/content/testimonials.json`
- [ ] Matches visual style of current site
- [ ] Easy to add/remove/reorder

#### 4.2.4 Hero Section (P0)
**Visual Requirements**:
- Full-width background image
- Eyebrow text: "BIOTECHNOLOGY COMMUNICATIONS CONSULTING"
- Large serif headline
- Body copy with "drive results" hyperlink
- "GET STARTED" CTA button

#### 4.2.5 Header/Navigation (P0)
**Visual Requirements**:
- Logo on left
- Navigation links on right: Home | Services | About | Contact
- LinkedIn icon (optional)
- Mobile: Hamburger menu
- Sticky on scroll with subtle shadow

#### 4.2.6 Footer (P0)
**Visual Requirements**:
- 3-column layout
- Left: Logo + tagline
- Center: Navigation links + legal links
- Right: Contact info + location
- Bottom: Copyright

---

## 5. Content Management Workflow

### 5.1 AI-Assisted Update Flow
```
┌─────────────────────────────────────────────────────────────┐
│                    CONTENT UPDATE WORKFLOW                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. PROMPT                                                  │
│     Sarah describes change in natural language              │
│     "Add Voyager Therapeutics to the client logo wall"      │
│                           │                                 │
│                           ▼                                 │
│  2. AI GENERATES                                            │
│     AI assistant creates/modifies content files             │
│     - Adds entry to clients.json                            │
│     - Confirms image placement                              │
│                           │                                 │
│                           ▼                                 │
│  3. REVIEW                                                  │
│     Sarah reviews changes in preview                        │
│     - Local dev server or staging URL                       │
│     - Approve or request adjustments                        │
│                           │                                 │
│                           ▼                                 │
│  4. PUBLISH                                                 │
│     One-click deploy to production                          │
│     - Git commit + push triggers CI/CD                      │
│     - Site rebuilds in ~60 seconds                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 5.2 Content File Locations
| Content Type | File Location | Format |
|--------------|---------------|--------|
| Client logos | `/src/content/clients.json` | JSON |
| Testimonials | `/src/content/testimonials.json` | JSON |
| Case studies | `/src/content/case-studies/*.md` | Markdown |
| Site config | `/src/content/site-config.json` | JSON |

---

## 6. Technical Constraints & Decisions

### 6.1 Technology Stack
| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | Astro | Excellent for content sites, ships minimal JS, great DX |
| Styling | Tailwind CSS | Rapid development, consistent design system |
| Hosting | Vercel | Free tier sufficient, excellent CI/CD, preview deploys |
| Content | Markdown + JSON | AI-friendly, version controlled, no database needed |
| Forms | Formspree | Simple, no backend required |

### 6.2 Domain & Hosting Strategy
See `docs/PRD/Hosting_Strategy.md` for full details.

---

## 7. Design Requirements

### 7.1 Brand Alignment
The new site must **exactly match** SJS Communications' established brand:
- **Primary Color**: Teal/cyan (`#1399D7`)
- **Typography**: Serif headings, sans-serif body
- **Tone**: Confident, approachable, expert
- **Imagery**: Biotech/life sciences aesthetic

### 7.2 Must-Match Elements (from current site)
- [ ] Hero section with background image and "GET STARTED" CTA
- [ ] Value propositions with circular teal graphics
- [ ] Scrolling logo wall animation
- [ ] "CLIENT LOVE" testimonials on teal background
- [ ] Sarah's professional headshot
- [ ] Clean footer with 3-column layout

---

## 8. Out of Scope (v1.0)

- Blog/news section
- Client portal or login functionality
- E-commerce or payment processing
- Multi-language support
- Advanced analytics beyond basic page views

---

## 9. Acceptance Criteria for Launch

### Visual Parity Checklist
- [ ] Homepage matches current site layout exactly
- [ ] Typography feels consistent (serif headings, sans body)
- [ ] Color palette matches (teal primary)
- [ ] All sections present in correct order
- [ ] Mobile responsive with hamburger menu
- [ ] Logo wall scrolls horizontally
- [ ] Testimonials have teal background
- [ ] Footer has 3-column layout

### Functional Checklist
- [ ] Contact form submits successfully
- [ ] All navigation links work
- [ ] All pages load without errors
- [ ] Site passes Lighthouse 90+ performance
- [ ] Site passes basic accessibility audit

---

## 10. Timeline & Phases

### Phase 1: Visual Parity (Current Priority)
- Implement exact visual design from current site
- Use extracted assets
- Match typography, colors, layout

### Phase 2: Content Migration
- Migrate all text content
- Set up testimonials JSON
- Configure client logos

### Phase 3: Polish & Test
- Responsive testing
- Performance optimization
- Accessibility audit

### Phase 4: Soft Launch
- Deploy to Vercel staging
- Client review and approval

### Phase 5: Go Live
- DNS cutover
- Monitor and iterate
