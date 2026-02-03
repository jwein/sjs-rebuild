# SJS Communications - Visual Parity Specification

**Purpose**: This document captures the exact visual design, layout, and content structure of the current www.sjscomms.com Squarespace site to ensure 1:1 parity in the rebuild.

**Reference Files**: 
- `docs/SJS Communications.html` (saved homepage)
- `docs/SJS Communications_files/` (associated assets)

---

## 1. Typography

### Fonts (Adobe Typekit)
The original site uses premium Adobe Typekit fonts:
- **Orpheus Pro** (serif) - Used for headings (h1, h2, h3)
- **Omnes Pro** - Used for body text and UI elements
- **Futura PT** - Used for accent text

### Custom Fonts (Self-hosted)
- **Gallery Modern** - Custom display font for certain headings
- **Halimun** - Script/handwritten font for h4 elements
- **Gordita Light** - Used for paragraphs and buttons

### Font Strategy for Rebuild
Since Adobe Typekit fonts require licensing, use these alternatives:
- **Headings**: `Playfair Display` or `Cormorant Garamond` (serif, similar to Orpheus)
- **Body**: `DM Sans` or `Source Sans Pro` (clean sans-serif, similar to Omnes)
- **Accent**: `Montserrat` or `Poppins` (geometric sans, similar to Futura)

---

## 2. Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Teal/Cyan | `#1399D7` | Primary brand color, CTAs, accents |
| Dark Teal | `#0D9488` | Hover states, secondary elements |
| White | `#FFFFFF` | Backgrounds, text on dark |
| Black | `#000000` | Body text, borders |
| Light Gray | `#F7F7F7` | Section backgrounds |

### Section-Specific Colors
- Hero section: Gradient overlay on video/image background
- "What Sets Us Apart": White/light background
- Testimonials ("Client Love"): Teal/cyan background `#1399D7`
- Footer: Light gray background

---

## 3. Homepage Sections (Top to Bottom)

### 3.1 Header/Navigation
**Structure**:
- Left: SJS Communications logo (horizontal, teal text)
- Right: Navigation links + LinkedIn icon
- Navigation items: HOME | SERVICES | ABOUT | CONTACT
- Mobile: Hamburger menu

**Logo**: 
- File: `SJS_Communications_Main+Logo.png` (9KB, horizontal)
- Mobile: `SJS_Communications_Mobile+Logo.png` (31KB, stacked)

**Styling**:
- Sticky header on scroll
- White background with subtle shadow when scrolled
- Clean, minimal design

---

### 3.2 Hero Section
**Background**: 
- Desktop: Video background (DNA helix animation) OR large background image
- File: `SJS_home_header_background.jpg` (162KB)
- Mobile fallback: `SJS_Home_Helix_Mobile.png`

**Content**:
```
[Eyebrow - small caps]
BIOTECHNOLOGY COMMUNICATIONS CONSULTING

[Main Headline - large serif]
WE'RE BRINGING COMMUNICATIONS STRATEGY TO A WHOLE NEW LEVEL

[Body Copy]
SJS Communications is a biotechnology communications consulting agency. 
We were founded to assist clients with a variety of communications needs 
no matter what stage of development they are in. We're focused on providing 
creative and personalized services in the highly regulated biotech industry. 
Led by a seasoned veteran of the industry, SJS leverages our extensive 
experience to [drive results] that speak for themselves.

[CTA Button - teal background, white text]
GET STARTED
```

**Layout**:
- Full-width background
- Text centered or left-aligned
- Generous vertical padding
- "drive results" is a hyperlink to About page #driveresults anchor

---

### 3.3 Value Propositions ("What Sets Us Apart")
**Section Title**: None visible (implied by visual grouping)

**Layout**: 3-column grid with circular images above text

**Cards** (each has circular image + centered text below):

**Card 1**:
- Image: `SJS_01.png` (42KB) - teal circular graphic
- Alt text: "INDIVIDUAL ATTENTION TO CLIENTS"
- Text:
  ```
  INDIVIDUAL
  ATTENTION TO
  CLIENTS
  ```

**Card 2**:
- Image: `SJS_02.png` (44KB) - teal circular graphic
- Alt text: "EXPERIENCED COUNSEL FROM A 25-YEAR INDUSTRY VET"
- Text:
  ```
  EXPERIENCED
  COUNSEL FROM
  A 25-YEAR
  INDUSTRY VET
  ```

**Card 3**:
- Image: `SJS_03.png` (45KB) - teal circular graphic
- Alt text: "INGENUITY CREATIVITY INTEGRITY ATTITUDE"
- Text:
  ```
  INGENUITY
  CREATIVITY
  INTEGRITY
  ATTITUDE
  ```

**Styling**:
- White/light background
- Text is bold, uppercase, centered
- Images are 500x500px, displayed smaller
- Mobile: Stack vertically, images at ~50% width

---

### 3.4 Logo Wall (Client Logos)
**Implementation**: CSS-animated horizontal scroll (marquee)

**Original Implementation**:
```css
.slider {
  width: 100%;
  overflow: hidden;
}
.slider .slider-image {
  background-image: url('SJS_Logo_Wall.png');
  width: auto;
  height: 150px;
  background-size: 1250px 150px;
  animation: slide 20s linear infinite;
}
@keyframes slide {
  from { background-position-x: 0px; }
  to { background-position-x: -1250px; }
}
```

**Note**: Original uses a single PNG sprite (`SJS_Logo_Wall.png`) that scrolls. Our rebuild uses individual logos from JSON config for easier updates.

**Styling**:
- Height: ~150px
- Grayscale logos (or full color)
- Continuous horizontal scroll animation
- No visible section title

---

### 3.5 About Preview / "We're Small" Section
**Layout**: 2-column (text left, image right)

**Left Column**:
- Photo of Sarah: `Sarah+Spencer-31.jpg` (501KB)
- Caption below: "Sarah Jess Spencer, Founder"
- CTA Button: "LET'S MEET" (links to /about)

**Right Column** (or below on mobile):
```
[Subtitle/Caption]
And that's a great thing! Sarah Jess Spencer is the founder of SJS 
Communications, and she is the idea-machine behind every strategy 
that SJS plans and executes. You have her individual attention when 
you decide to work with SJS.
```

**Background**: 
- Image: `SJS_home_4_background.jpg` (113KB) - abstract teal/blue pattern
- Or solid teal section

---

### 3.6 Testimonials ("CLIENT LOVE")
**Section Title**: 
```
CLIENT LOVE
```
(Large heading, centered)

**Background**: Solid teal/cyan (`#1399D7`)

**Layout**: Carousel or stacked testimonial cards

**Testimonial Card Structure**:
```
"[Quote text - in quotation marks, italic or regular]"

— [Author Name]
[Title], [Company]
```

**Styling**:
- White text on teal background
- Cards may have white/light background with dark text
- Navigation dots or arrows for carousel

---

### 3.7 Footer
**Layout**: 3-column

**Column 1** (Left):
- Mobile logo: `SJS_Communications_Mobile+Logo.png`
- Tagline: "SJS Communications is a biotechnology communications consulting firm focused on bringing science to life."

**Column 2** (Center):
- Navigation heading
- Links: HOME, SERVICES, ABOUT, CONTACT
- Legal links: Privacy Policy, Terms & Conditions, Cookie Policy

**Column 3** (Right):
- Contact info
- Location
- Social links (LinkedIn icon)

**Bottom Bar**:
- Copyright: © 2026 SJS Communications. All rights reserved.

---

## 4. Other Pages

### 4.1 Services Page
- Hero with background image
- Service offerings in cards or sections
- CTA to contact

### 4.2 About Page
- Sarah's full bio
- "We're small, so you get senior attention" section
- Anchor: `#driveresults` for deep linking
- Photo of Sarah
- Company story

### 4.3 Contact Page
- Contact form (Name, Email, Company, Message)
- Direct contact info
- Location
- Background image: `SJS_contact_background_1_mobile.png`

---

## 5. Global UI Elements

### Buttons
**Primary Button**:
- Background: Teal (`#1399D7` or `#0D9488`)
- Text: White, uppercase, letter-spacing
- Padding: ~12px 24px
- Border-radius: 0 (square) or small radius
- Hover: Slightly darker teal

**Secondary Button**:
- Background: Transparent or white
- Border: 1px solid teal
- Text: Teal

### Links
- Color: Teal
- Hover: Underline or darker shade
- "drive results" link style: Bold, underlined

### Section Spacing
- Large vertical padding between sections (~80-120px desktop)
- Consistent horizontal gutters

---

## 6. Responsive Breakpoints

### Desktop (>1024px)
- Full multi-column layouts
- Large hero text
- Horizontal logo in header

### Tablet (768px - 1024px)
- 2-column layouts may become 1
- Slightly smaller text

### Mobile (<768px)
- Single column layouts
- Hamburger menu
- Stacked value prop cards at 50-70% width
- Mobile-specific background images
- Smaller typography

---

## 7. Assets to Extract/Recreate

### Must Have (from `docs/SJS Communications_files/`):
- [x] `SJS_Communications_Main+Logo.png` - Header logo
- [x] `SJS_Communications_Mobile+Logo.png` - Mobile/footer logo
- [x] `SJS_01.png` - Value prop icon 1
- [x] `SJS_02.png` - Value prop icon 2
- [x] `SJS_03.png` - Value prop icon 3
- [x] `Sarah+Spencer-31.jpg` - Sarah's headshot
- [x] `SJS_home_header_background.jpg` - Hero background
- [x] `SJS_home_4_background.jpg` - Section background

### Client Logos (need individual files):
- Vor Bio
- Audentes Therapeutics
- Voyager Therapeutics
- (Others as provided)

### Favicon:
- Source: `https://images.squarespace-cdn.com/.../favicon.ico`

---

## 8. Animation & Interactions

### Logo Wall
- Continuous horizontal scroll (marquee)
- Speed: ~20s for full cycle
- Pause on hover (optional)

### Page Transitions
- None required (static site)

### Hover Effects
- Buttons: Color shift
- Links: Underline
- Cards: Subtle shadow lift (optional)

### Scroll Animations
- Optional: Fade-in on scroll for sections
- Keep minimal for performance

---

## 9. SEO & Meta

### Title
```
SJS Communications
```

### Description
```
Biotechnology Communications Consulting
```

### OG Image
- Use hero image or branded social card
- Dimensions: 1200x630px recommended

---

## 10. Acceptance Criteria for Visual Parity

- [ ] Typography matches original feel (serif headings, clean sans body)
- [ ] Color palette matches (teal primary, white/gray backgrounds)
- [ ] Hero section has same content and visual weight
- [ ] Value props use circular images with bold text below
- [ ] Logo wall scrolls horizontally with smooth animation
- [ ] Testimonials section has teal background with "CLIENT LOVE" heading
- [ ] Footer has 3-column layout with logo, nav, and contact
- [ ] Mobile responsive with hamburger menu
- [ ] All CTAs styled consistently
- [ ] Sarah's headshot appears in About preview section
- [ ] Overall professional, biotech-industry aesthetic maintained

