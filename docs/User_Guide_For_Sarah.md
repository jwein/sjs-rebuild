# Website Update Guide for Sarah

**Your new website is designed to be updated with simple instructions — no technical knowledge required!**

---

## 🎯 The Big Picture

Your website content lives in simple text files. When you want to make a change, you describe what you want, and an AI assistant (or developer) makes the edit. Then the site automatically updates.

**Old way (Squarespace)**: Navigate menus → Find the right section → Edit in a complex interface → Publish

**New way**: "Add Voyager to the client logos" → Review the change → Approve → Done!

---

## 📝 Common Updates You'll Make

### Adding a New Client Logo

**What you provide**:
- The client's logo file (PNG or SVG, preferably on transparent background)
- The client's name
- Their website URL (optional)

**What you say**:
> "Add [Company Name] to the client logo wall. Here's their logo."

**What happens behind the scenes**:
1. Logo gets added to the assets folder
2. One line gets added to `clients.json`
3. Site rebuilds automatically (~60 seconds)
4. New logo appears in the scrolling wall!

---

### Adding a New Testimonial

**What you provide**:
- The quote text
- Person's name and title
- Their company

**What you say**:
> "Add this testimonial from John Smith, CEO of BioTech Corp: '[quote text]'"

**What happens**:
- New entry added to `testimonials.json`
- Appears on the site after rebuild

---

### Creating a Case Study

**What you provide**:
- Client name and industry
- The challenge they faced
- What SJS did to help
- The results (with numbers if possible!)
- A testimonial quote (optional)

**What you say**:
> "Create a new case study for [Client]. Here's the information: [details]"

**What happens**:
- New markdown file created from template
- Automatically appears on Case Studies page

---

### Updating Your Bio or Services

**What you say**:
> "Update my bio to include [new information]"
> "Add [new service] to the services page"
> "Change the tagline to [new tagline]"

---

## 🔄 The Workflow

```
   YOU                          AI/DEVELOPER                    WEBSITE
    │                               │                              │
    │  "Add XYZ client logo"        │                              │
    ├──────────────────────────────►│                              │
    │                               │                              │
    │                               │  Makes the edit              │
    │                               │         │                    │
    │   "Here's the preview"        │         │                    │
    │◄──────────────────────────────┤         │                    │
    │                               │         │                    │
    │   "Looks good!" ✓             │         │                    │
    ├──────────────────────────────►│         │                    │
    │                               │         │                    │
    │                               │  Publishes                   │
    │                               ├─────────────────────────────►│
    │                               │                              │
    │                               │         Live in ~60 seconds! │
    │◄─────────────────────────────────────────────────────────────┤
```

---

## ❓ FAQ

**Q: What if I make a mistake?**
A: Everything is version-controlled. We can undo any change instantly.

**Q: How fast do changes go live?**
A: About 60 seconds after approval.

**Q: Can I see changes before they go live?**
A: Yes! Every change gets a preview URL first.

**Q: What if I need to update something urgently?**
A: The process is the same — just note it's urgent. Updates can be live in under 5 minutes.

**Q: Do I need to learn any technical tools?**
A: No. You just describe what you want in plain English.

---

## 📞 Getting Help

For website updates, reach out to your developer with:
1. What you want to change
2. Any files needed (logos, images, etc.)
3. Timeline (routine vs. urgent)

That's it! The technical details are handled for you.

