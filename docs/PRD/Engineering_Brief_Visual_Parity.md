# Engineering Brief: Visual Parity Gap Analysis

**Date:** January 23, 2026  
**From:** Product Manager  
**To:** Engineering Manager  
**Re:** Specific gaps between our build and www.sjscomms.com

---

## How to Use This Document

Each gap below includes:
- **What the original looks like** (from sjscomms.com screenshot)
- **What we currently have** (from our built output)
- **Exact fix required**

---

## GLOBAL LAYOUT GAPS

### Gap 0: Max Page Width Too Narrow
| Original | Our Build |
|----------|-----------|
| Max page width: **1400px** | `max-w-[1400px]` = **1400px** |

**Status:** ✅ Resolved in current build (all `src/components/*.astro` section containers use `max-w-[1400px]`).

**Fix Option A:** Update Tailwind config to extend `max-w-7xl`:
```js
// tailwind.config.cjs
theme: {
  extend: {
    maxWidth: {
      '7xl': '1400px', // Override default 1280px
    }
  }
}
```

**Fix Option B:** Replace `max-w-7xl` with `max-w-[1400px]` in all components.

---

### Gap 0b: Page Horizontal Padding Too Small
| Original | Our Build |
|----------|-----------|
| Page padding: **4vw** (~58px at 1440px) | `px-[4vw]` = **4vw** |

**Status:** ✅ Resolved in current build (all `src/components/*.astro` section containers use `px-[4vw]`).

**Fix:** Replace `px-6` with `px-[4vw]` in all section containers, OR add a custom class.

---

## HEADER GAPS

### Gap 1: Logo Too Small & Header Too Short
| Original | Our Build |
|----------|-----------|
| Logo height: **113px** (desktop), **75px** (mobile) | **113px / 75px** (`h-[113px]` desktop, `h-[75px]` mobile) |
| Header vertical padding: **3vw** (~43px at 1440px viewport) | `py-[3vw]` (desktop) |
| Mobile header padding: **6vw** | `py-[6vw]` (mobile) |

**File:** `src/components/Header.astro`

**Status:** ✅ Resolved in current build.

**Fix:** Increase logo size and header padding:
```diff
- <div class="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
+ <div class="mx-auto max-w-[1400px] px-[4vw] py-[3vw] md:py-[3vw] flex items-center justify-between">

- class="hidden md:block h-10 w-auto"
+ class="hidden md:block h-[113px] w-auto"

- class="md:hidden h-8 w-auto"
+ class="md:hidden h-[75px] w-auto"
```

For mobile, add responsive padding:
```diff
+ py-[6vw] md:py-[3vw]
```

---

### Gap 2: Missing "GET STARTED" Button
| Original | Our Build |
|----------|-----------|
| Teal pill button labeled "GET STARTED" after LinkedIn icon | ✅ Present in header nav |

**File:** `src/components/Header.astro`

**Status:** ✅ Resolved in current build.

**Fix:** Add a teal "GET STARTED" button to the right of the LinkedIn icon in the nav:
```html
<a href="/services" class="ml-4 px-6 py-2 rounded-full bg-[#1399D7] text-white text-sm font-semibold uppercase tracking-wide hover:bg-[#0d7ab3] transition">
  GET STARTED
</a>
```

---

### Gap 3: Missing Active Nav Underline
| Original | Our Build |
|----------|-----------|
| "HOME" has black underline when active | ✅ Active item underlines in current build |

**File:** `src/components/Header.astro`

**Status:** ✅ Resolved in current build.

**Fix:** Add underline to active nav item:
```css
/* Active state */
text-decoration: underline;
text-underline-offset: 8px;
text-decoration-thickness: 2px;
```

---

## HERO GAPS

### Gap 4: Portrait Shows Placeholder Instead of Sarah's Photo
| Original | Our Build |
|----------|-----------|
| Sarah's actual photo (grayscale) | Shows `portrait-placeholder.svg` |

**File:** `src/content/site-config.json` → `hero.portraitImage`

**Status:** ❌ Open. Current config points to `/assets/images/sarah-hero.jpg`, but `public/assets/images/sarah-hero.jpg` is missing, so the image fails to load and the `<img onerror>` falls back to `portrait-placeholder.svg`.

**Action:** 
1. Copy `docs/sjscomms_scrape/img/Sarah+Spencer-31.jpg` to `public/assets/images/sarah-hero.jpg`
2. (Optional) Keep `site-config.json` as-is; it already references `/assets/images/sarah-hero.jpg`.

---

### Gap 5: Portrait Has White Background Box
| Original | Our Build |
|----------|-----------|
| Photo floats directly on background, no visible container | ✅ No white “card” background in current build |

**File:** `src/components/Hero.astro`

**Status:** ✅ Resolved in current build.

**Fix:** Remove the white background and shadow from the portrait container:
```diff
- <div class="relative w-full max-w-[320px] ... overflow-hidden bg-white/90 shadow-xl ring-1 ring-black/5">
+ <div class="relative w-full max-w-[320px] ... overflow-hidden">
```

---

### Gap 6: Hero Background Image May Be Wrong
| Original | Our Build |
|----------|-----------|
| Blue fluid/water texture with dark blue on left edge | Using `/assets/images/hero-background.jpg` — verify this matches |

**Status:** ✅ Resolved. `public/assets/images/hero-background.jpg` matches `docs/sjscomms_scrape/img/SJS_home_header_background.jpg` (byte-identical).

---

### Gap 7: Teal Accent Bar Color
| Original | Our Build |
|----------|-----------|
| Solid bright teal/cyan (#1399D7 or similar) | Using `bg-brand-primary/95` |

**File:** `src/components/Hero.astro`

**Status:** ✅ Resolved. `brand.primary` is `#1399D7` in Tailwind, and the hero accent uses it.

**Fix:** Verify `brand-primary` is defined as `#1399D7` in Tailwind config, or use the hex directly:
```diff
- <div class="... bg-brand-primary/95 ...">
+ <div class="... bg-[#1399D7] ...">
```

---

## VALUE PROPS GAPS

### Gap 8: Need to Verify Value Prop Images Are Correct
| Original | Our Build |
|----------|-----------|
| Circular photos showing: microscope/lab, person, abstract | Using `value-prop-1.png`, `value-prop-2.png`, `value-prop-3.png` |

**Status:** ✅ Resolved. Our `value-prop-1/2/3.png` match the scraped originals (`SJS_01/02/03.png`, byte-identical).

---

## ABOUT PREVIEW GAPS

### Gap 9: Layout Order May Be Reversed
| Original | Our Build |
|----------|-----------|
| Need to verify: Image left, text right OR text left, image right | Text on LEFT, Photo on RIGHT |

**Action:** Scroll down on sjscomms.com to verify the "We're Small" section layout. If image should be on left:

**File:** `src/components/AboutPreview.astro`

**Fix:** Swap the grid column order.

---

## FOOTER GAPS

### Gap 10: Missing Logo in Footer
| Original | Our Build |
|----------|-----------|
| SJS logo image in footer | ✅ Present in current build |

**File:** `src/components/Footer.astro`

**Status:** ✅ Resolved in current build.

**Fix:** Add logo image:
```html
<img src="/assets/images/sjs-logo-mobile.png" alt="SJS Communications" class="h-12 w-auto mb-2">
```

---

### Gap 11: Missing LinkedIn Icon in Footer
| Original | Our Build |
|----------|-----------|
| LinkedIn icon in footer | ✅ Present in current build |

**File:** `src/components/Footer.astro`

**Status:** ✅ Resolved in current build.

**Fix:** Add LinkedIn icon to footer.

---

## COOKIE BANNER GAP

### Gap 12: No Cookie Consent Banner
| Original | Our Build |
|----------|-----------|
| Bottom-left popup with "Got it!" button | Not implemented |

**Status:** ❌ Open. Scraped site has cookie banner enabled (`cookieSettings.isCookieBannerEnabled: true`) with bottom-left “Got it!” CTA.

**Action:** Implement a cookie banner that matches:
- **Position**: Bottom-left popup
- **CTA text**: “Got it!”
- **Body**: “By using this website, you agree to our cookie policy…”

---

## PRIORITIZED FIX LIST

### Immediate (Do First)
1. **Fix Hero portrait asset** — `hero.portraitImage` points to `/assets/images/sarah-hero.jpg`, but that file is missing so the UI falls back to `portrait-placeholder.svg`.
2. **Implement cookie banner** — original has a bottom-left popup with “Got it!” and cookie-policy link.

### Verify / Remaining Parity Checks
3. **Verify About Preview layout direction** — confirm whether image/text order matches original.

---

## Asset Checklist

Copy these files from `docs/sjscomms_scrape/img/` to `public/assets/images/`:

| Source | Destination | Purpose | Status |
|--------|-------------|---------|--------|
| `Sarah+Spencer-31.jpg` | `sarah-hero.jpg` | Hero portrait | ❌ Missing in `public/` (needs copy) |
| `SJS_home_header_background.jpg` | `hero-background.jpg` | Hero background | ✅ Matches scraped original |
| `SJS_01.png` | `value-prop-1.png` | Value prop 1 | ✅ Matches scraped original |
| `SJS_02.png` | `value-prop-2.png` | Value prop 2 | ✅ Matches scraped original |
| `SJS_03.png` | `value-prop-3.png` | Value prop 3 | ✅ Matches scraped original |

---

## Current Status Snapshot (Against Scrape)

**Resolved in code (no further action):**
- Global width (`1400px`) + padding (`4vw`)
- Header logo sizes (113px desktop / 75px mobile) and padding (3vw desktop / 6vw mobile)
- Header “GET STARTED” button
- Active nav underline styling
- Hero background image matches scrape
- Value prop images match scrape
- Footer includes logo + LinkedIn

**Still open:**
- **Hero portrait asset missing** (`/assets/images/sarah-hero.jpg` missing in `public/`)
- **Cookie banner missing** (original has bottom-left popup with “Got it!”)
- **About Preview layout direction** (needs confirmation vs original)
