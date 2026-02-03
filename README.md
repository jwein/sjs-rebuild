# SJS Communications Website

A modern, AI-friendly website for SJS Communications, a biotechnology communications consulting agency.

## 🚀 Quick Start

```bash
# Install dependencies
npm install
# or
pnpm install

# Start development server
npm run dev
# or
pnpm dev

# Build for production
npm run build
# or
pnpm build

# Preview production build
npm run preview
# or
pnpm preview
```

## 📁 Project Structure

```
├── src/
│   ├── content/          # ✏️ EDIT THESE FILES to update content
│   │   ├── clients.json       # Client logos for logo wall
│   │   ├── testimonials.json  # Testimonial quotes
│   │   ├── site-config.json   # Site settings
│   │   └── case-studies/      # Case study markdown files
│   ├── components/       # Reusable UI components
│   ├── layouts/          # Page layouts
│   ├── pages/            # Site pages (routes)
│   └── styles/           # Global styles
├── public/               # Static assets (served at /)
│   └── assets/
│       ├── images/       # Site images
│       └── logos/        # Client logos
└── docs/                 # Project documentation
```

## ✏️ How to Update Content

### Add a Logo (LogoWall)

1. Add a logo image (transparent PNG or SVG) to `/public/assets/logos/`
2. Edit `/src/content/clients.json` and add an entry:
   ```json
   {
     "name": "New Client",
     "logo": "/assets/logos/new-client.png",
     "url": "https://client.com",
     "active": true
   }
   ```
3. Keep logos horizontally oriented where possible; target display height ~48–64px.
4. If a referenced file is missing, a placeholder will display until the logo is added.

### Adding a New Client Logo

1. Add the logo image to `/public/assets/logos/`
2. Edit `/src/content/clients.json`:

```json
{
  "name": "New Client Name",
  "logo": "/assets/logos/new-client.png",
  "url": "https://newclient.com",
  "active": true
}
```

3. Commit and push — the site will auto-deploy!

### Adding a Testimonial

Edit `/src/content/testimonials.json` and add a new entry:

```json
{
  "quote": "Testimonial text here...",
  "author": "Person Name",
  "title": "Job Title",
  "company": "Company Name",
  "image": null
}
```

### Creating a Case Study

1. Copy `/src/content/case-studies/_template.md`
2. Rename it (e.g., `client-name-project.md`)
3. Fill in the frontmatter and content
4. Set `draft: false` when ready to publish

## 🔧 Technology Stack

- **Framework**: [Astro](https://astro.build) - Fast, content-focused web framework
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- **Hosting**: [Vercel](https://vercel.com) - Automatic deployments
- **Content**: Markdown + JSON (no database required)

## 📚 Documentation

- [Product Requirements](/docs/PRD/Product_Requirements_Document.md)
- [Hosting Strategy](/docs/PRD/Hosting_Strategy.md)
- [Technical Architecture](/docs/technical/Architecture_Overview.md)
- [Progress Tracker](/docs/Phase_Progress.md)

## 🤖 AI-Assisted Workflow

This site is designed for easy updates via AI assistance:

1. **Prompt**: Describe what you want to change
2. **Review**: AI generates the content/code changes
3. **Publish**: Approve and push to deploy

All content files use simple JSON or Markdown formats that AI assistants can easily read and modify.

## 📝 License

Private - SJS Communications

