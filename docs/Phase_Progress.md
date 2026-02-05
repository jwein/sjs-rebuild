# SJS Communications Website Rebuild - Progress Tracker

**Project Start Date**: January 15, 2026  
**Target Launch Date**: TBD  
**Current Phase**: 1 - Visual Parity Implementation

---

## Phase Overview

```
┌────────────────────────────────────────────────────────────────┐
│  [■■■■■■■■□□] Phase 1: Visual Parity        ← CURRENT          │
│  [□□□□□□□□□□] Phase 2: Content Migration                       │
│  [□□□□□□□□□□] Phase 3: Polish & Test                           │
│  [□□□□□□□□□□] Phase 4: Soft Launch                             │
│  [□□□□□□□□□□] Phase 5: Go Live                                 │
└────────────────────────────────────────────────────────────────┘
```

---

## Phase 1: Visual Parity Implementation

**Goal**: Rebuild site to exactly match current www.sjscomms.com design

### Completed ✅
- [x] Initial project structure created
- [x] Product Requirements Document (PRD) drafted
- [x] Hosting strategy documented
- [x] Technical architecture defined
- [x] Astro + Tailwind initialized
- [x] Base layout, Header, Footer components created
- [x] Visual Parity Specification documented (`docs/PRD/Visual_Parity_Spec.md`)
- [x] Assets extracted from current site to `public/assets/images/`
- [x] Site config updated with correct content and asset paths

### Completed ✅
- [x] **Hero Portrait**: Fixed to use actual Sarah photo (not placeholder)
- [x] **Hero Portrait Background**: Removed unwanted white card effect
- [x] **Header Logo Size**: Updated to match original (113px desktop, 75px mobile)
- [x] **Header Padding**: Updated to match original (3vw desktop, 6vw mobile)
- [x] **Header GET STARTED Button**: Added teal pill CTA button
- [x] **Header Active Nav**: Changed from color change to black underline
- [x] **Global Layout**: Updated max-width from 1280px to 1400px
- [x] **Global Padding**: Updated from 24px to 4vw on all sections
- [x] **Footer Logo**: Added SJS logo to footer
- [x] **Footer LinkedIn**: Added LinkedIn icon and link
- [x] **Cookie Banner**: Implemented basic cookie consent banner

### In Progress 🔄
- [ ] **Services Page Visual Parity**: Compare against reference site
- [ ] **Contact Page Visual Parity**: Compare against reference site
- [ ] **Homepage Visual Parity**: Final review against reference

### Recently Completed ✅
- [x] **About Page**: Complete rebuild matching reference site
- [x] **Footer Component**: Complete rewrite with blue/navy sections
- [x] **DnaSection Component**: Rewrite as CTA buttons section
- [x] **About Preview Layout**: Verified and fixed
- [x] **Font Choices**: Using font-thin (100) for thin text where needed
- [x] **Contact Forms**: Simplified to mailto links (Services + Contact pages)

### Blocked ⏸️
- [ ] None currently

### Assets Status
| Asset | Status | Path |
|-------|--------|------|
| Header Logo | ✅ Extracted | `/assets/images/sjs-logo.png` |
| Mobile Logo | ✅ Extracted | `/assets/images/sjs-logo-mobile.png` |
| Value Prop 1 | ✅ Extracted | `/assets/images/value-prop-1.png` |
| Value Prop 2 | ✅ Extracted | `/assets/images/value-prop-2.png` |
| Value Prop 3 | ✅ Extracted | `/assets/images/value-prop-3.png` |
| Sarah Headshot | ✅ Extracted | `/assets/images/sarah-headshot.jpg` |
| Hero Background | ✅ Extracted | `/assets/images/hero-background.jpg` |
| Section Background | ✅ Extracted | `/assets/images/section-background.jpg` |
| Client Logos | ⚠️ Need individual files | `/assets/logos/` |
| Sarah Meet Section | ✅ Downloaded | `/assets/images/sarah-meet-section.jpg` |
| Sarah About Hero | ✅ Extracted | `/assets/images/sarah-headshot-about.jpg` |
| Carousel Images | ✅ Downloaded | `/assets/images/carousel-1.jpg` through `carousel-12.png` |
| Ethos Family | ✅ Downloaded | `/assets/images/ethos-family.jpg` |
| Gradient BG | ✅ Downloaded | `/assets/images/gradient-bg.jpg` |
| About Patient BG | ✅ Extracted | `/assets/images/about-patient-bg.png` |
| About Engineering BG | ✅ Extracted | `/assets/images/about-engineering-bg.jpg` |
| Sarah Contact | ✅ Extracted | `/assets/images/sarah-contact.jpg` |

---

## Phase 2: Content Migration

### Pages
- [ ] Home page content finalized
- [ ] Services page content
- [ ] About page content (full bio)
- [ ] Contact page content

### Components
- [ ] Testimonials JSON populated with all quotes
- [ ] Client logos JSON with all clients

---

## Phase 3: Polish & Test

- [ ] Responsive testing (mobile, tablet, desktop)
- [ ] Cross-browser testing
- [ ] Lighthouse performance audit (target: 90+)
- [ ] Accessibility audit (WAVE, axe)
- [ ] Content review with client
- [ ] SEO meta tags and OG images

---

## Phase 4: Soft Launch

- [ ] Deploy to Vercel
- [ ] Configure preview subdomain
- [ ] Client UAT (User Acceptance Testing)
- [ ] Iterate based on feedback
- [ ] Final sign-off

---

## Phase 5: Go Live

- [ ] DNS cutover preparation
- [ ] Update DNS records
- [ ] Verify SSL certificate
- [ ] Monitor for issues
- [ ] Cancel Squarespace hosting
- [ ] Post-launch documentation

---

## Visual Parity Checklist

### Homepage Sections
| Section | Matches Original? | Notes |
|---------|-------------------|-------|
| Header/Nav | ✅ Complete | Logo, GET STARTED button, active underline |
| Hero | ✅ Complete | Background image, typography, CTA |
| Value Props | ⚠️ Review | Circular images - verify colors |
| Logo Wall | ⚠️ Partial | Animation works, verify styling |
| DNA Video | ✅ Complete | "Creative Communications..." video section |
| About Preview | ✅ Complete | Layout fixed |
| Testimonials | ⚠️ Partial | Add heading, teal background |
| Footer | ✅ Complete | Two-section layout, logo, links |

### About Page Sections
| Section | Matches Original? | Notes |
|---------|-------------------|-------|
| Hero | ✅ Complete | White border, floating text box |
| Meet Sarah | ✅ Complete | Full-width photo, left-aligned heading |
| Core Philosophy | ✅ Complete | Thin black text on background |
| Carousel | ✅ Complete | 12 images, scroll arrows |
| Lab Scientists | ✅ Complete | Cropped image |
| Our Ethos | ✅ Complete | Left-aligned, thin font, family photo |
| Our Commitment | ✅ Complete | Gradient background, 3 cards |
| CTA Section | ✅ Complete | Two buttons on gradient background |

### Services Page Sections
| Section | Matches Original? | Notes |
|---------|-------------------|-------|
| Hero | ⚠️ Review | Need to compare |
| Expertise | ⚠️ Review | Need to compare |
| We Also Help With | ⚠️ Review | Need to compare |
| Company Description | ⚠️ Review | Need to compare |
| Sarah In Action | ⚠️ Review | Need to compare |
| Contact Section | ✅ Complete | Using mailto link |

### Typography
- [ ] Serif font for headings (Playfair Display or similar)
- [ ] Sans-serif for body (DM Sans or similar)
- [ ] Font sizes match original

### Colors
- [ ] Primary teal: `#1399D7`
- [ ] Testimonials section uses teal background
- [ ] CTAs are teal with white text

### Responsive
- [ ] Mobile hamburger menu
- [ ] Value props stack on mobile
- [ ] Proper spacing at all breakpoints

---

## Open Questions / Decisions Needed

| Question | Status | Decision |
|----------|--------|----------|
| Individual client logo files? | ⚠️ Using placeholders | Need from client |
| Contact form backend? | ✅ Using mailto | Simple mailto links for now, can upgrade later |
| Any case studies ready? | ❓ Pending | Phase 2 |
| Font licensing (if using premium)? | ✅ Using free alternatives | Playfair + DM Sans |
| About page visual parity? | ✅ Complete | All sections match reference |
| Footer visual parity? | ✅ Complete | Two-section layout implemented |

---

## Session Notes

### January 15, 2026
- Project initiated
- Created documentation structure
- Defined PRD, hosting strategy, and technical architecture

### January 17, 2026 (Morning)
- Initialized Astro + Tailwind project
- Created base components (Header, Footer, Hero, ValueProps, LogoWall, Testimonials)
- Scaffolded all pages

### January 17, 2026 (Afternoon)
- **Major pivot**: Site doesn't match original design
- Created Visual Parity Specification (`docs/PRD/Visual_Parity_Spec.md`)
- Extracted all assets from Squarespace HTML export
- Copied assets to `public/assets/images/`
- Updated `site-config.json` with correct content and paths
- Updated PRD to prioritize visual parity
- **Next session**: Implement visual parity for each component

### January 23, 2026
- Scraped live www.sjscomms.com site using `npm run scrape:sjscomms`
- Output saved to `docs/sjscomms_scrape/` (HTML, CSS, JS, images, fonts)
- PM conducted gap analysis comparing scrape vs. our Astro build
- Created Engineering Brief (`docs/PRD/Engineering_Brief_Visual_Parity.md`)
- **Key gaps identified**:
  - Hero: Mostly correct (portrait + "LEVEL UP WITH US" CTA are right); verify background
  - Header: Add "GET STARTED" teal pill CTA button; add active nav underline
  - About Preview: Reverse layout (image left, text right)
  - Value Props: Remove grayscale filter (original shows color images)
  - Cookie Banner: Not yet implemented
- **Next session**: Engineering to address Sprint 1 tasks from brief

### January 23, 2026 (Afternoon)
- PM conducted comprehensive gap analysis comparing scraped original vs. Astro build
- **Identified 10 additional critical gaps** not in previous brief:
  - Hero portrait still showing placeholder despite image being copied
  - Header missing "GET STARTED" button completely
  - Active nav styling wrong (color vs underline)
  - Footer missing logo and LinkedIn icon
  - Global layout issues (width, padding, logo size) still not fixed
  - Portrait has unwanted white background
  - About Preview layout may be wrong
  - Cookie banner not implemented
  - Font choices may not match original
  - Section backgrounds may be missing
- Updated Engineering Brief with comprehensive 22-point gap analysis
- **Implemented immediate fixes**:
  - Fixed hero portrait to use actual Sarah photo
  - Removed white background from hero portrait
  - Added "GET STARTED" button to header
  - Fixed active nav underline styling
  - Updated max page width to 1400px
  - Updated horizontal padding to 4vw
  - Increased logo sizes to match original
  - Increased header padding to match original
  - Added footer logo and LinkedIn icon
  - Created and implemented cookie banner component
- Site now much closer to 100% visual parity
- **Next**: Verify remaining layout details and section backgrounds

### February 3, 2026
- **Complete About Page Rebuild** to match reference site (sjscomms.com):
  - Hero section: Added white border frame, floating text box inside image area
  - Meet Sarah section: Full-width centered photo, left-aligned heading, Sarah Spencer subheading
  - Core Philosophy section: Thin black text on patient background image
  - "Sarah's Communication Strategies at Work" carousel: 12 images with horizontal scroll, prev/next arrows
  - Lab Scientists image section: Cropped to show faces-to-shoulders range
  - Our Ethos section: Left-aligned heading and body, ultra-light font weight (font-thin), family photo
  - Our Commitment section: CSS gradient background (blue-to-purple), 3 equal-height white cards

- **DnaSection Component Rewrite**:
  - Removed DNA heading text
  - Added gradient background image (gradient-bg.jpg)
  - Added two CTA buttons: "WORK WITH US" and "GET IN TOUCH"
  - Buttons styled as white pills with blue (#38bdf8) serif font text

- **Footer Component Complete Rewrite**:
  - Upper section (blue #1399D7): Logo circle, tagline, Navigation column, Contact column with LinkedIn
  - Lower section (dark navy #1a1a2e): Cookie Policy | Privacy Policy | Terms & Conditions links

- **New Images Downloaded**:
  - sarah-meet-section.jpg (Meet Sarah photo)
  - carousel-1.jpg through carousel-12.png (12 carousel images)
  - ethos-family.jpg (Our Ethos family photo)
  - gradient-bg.jpg (CTA section background)

- **Contact Forms Simplified**:
  - Removed complex form submissions (Formspree integration)
  - Services page: Replaced form with "SEND US AN EMAIL" mailto button
  - Contact page: Complete redesign with hero image, mailto button, and contact info
  - Can upgrade to Google Forms or Formspree later if needed

- **GitHub Pages Deployment Prepared**:
  - Updated astro.config.mjs with GitHub Pages base URL (/sjs-rebuild)
  - Created .github/workflows/deploy.yml for automatic deployments
  - Created .gitignore file
  - Ready to push to github.com/jwein/sjs-rebuild
