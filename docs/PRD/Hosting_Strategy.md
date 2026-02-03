# Hosting Strategy: Squarespace Domain → New Platform

## Current Situation

- **Domain**: sjscomms.com (registered with Squarespace)
- **Current Host**: Squarespace
- **Goal**: Host new site elsewhere while domain remains at Squarespace (initially)

---

## Option Analysis

### Option 1: Keep Domain at Squarespace, Point DNS Elsewhere ✅ RECOMMENDED

**How it works**: Squarespace allows you to manage DNS records even if you're not using their website hosting. You simply update the A/AAAA records to point to your new host.

**Pros**:
- No domain transfer required
- Minimal disruption
- Can be done in phases
- Easy rollback if issues arise

**Cons**:
- Squarespace DNS management is basic
- Continued relationship with Squarespace for domain

**Steps**:
1. Build and deploy site to Vercel (get deployment URL)
2. In Squarespace DNS settings, add/update records:
   - A record → Vercel's IP
   - CNAME for www → cname.vercel-dns.com
3. Configure custom domain in Vercel dashboard
4. Wait for DNS propagation (up to 48 hours, usually faster)
5. Verify SSL certificate auto-provisions

### Option 2: Transfer Domain to Cloudflare

**How it works**: Transfer domain registration from Squarespace to Cloudflare Registrar, then use Cloudflare DNS + proxy.

**Pros**:
- Better DNS management
- Free CDN and DDoS protection
- At-cost domain renewal (no markup)
- More control over caching, redirects

**Cons**:
- Transfer takes 5-7 days
- Requires domain to be unlocked
- More complex setup

**Steps**:
1. Unlock domain in Squarespace
2. Get authorization code
3. Initiate transfer in Cloudflare
4. Approve transfer via email
5. Configure DNS once transfer completes

### Option 3: Transfer Domain to Vercel

**How it works**: Vercel offers domain registration. Transfer domain directly to them.

**Pros**:
- Single platform for hosting + domain
- Simplified SSL and DNS

**Cons**:
- Less flexibility if you change hosts later
- Vercel domains are more expensive than Cloudflare

---

## Recommended Approach: Phased Migration

```
┌─────────────────────────────────────────────────────────────┐
│                    MIGRATION PHASES                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  PHASE 1: DEVELOPMENT (Now)                                 │
│  ─────────────────────────                                  │
│  • Build site locally                                       │
│  • Deploy to Vercel with auto-generated URL                 │
│    (e.g., sjs-comms.vercel.app)                            │
│  • Client reviews on staging URL                            │
│                                                             │
│  PHASE 2: SOFT LAUNCH                                       │
│  ─────────────────────────                                  │
│  • Add subdomain: preview.sjscomms.com                      │
│  • Point subdomain to Vercel via CNAME                      │
│  • Final client approval on real subdomain                  │
│  • Old site remains live at sjscomms.com                    │
│                                                             │
│  PHASE 3: CUTOVER                                           │
│  ─────────────────────────                                  │
│  • Update A record for sjscomms.com → Vercel               │
│  • Update CNAME for www → Vercel                           │
│  • Monitor for issues                                       │
│  • Old Squarespace site becomes inaccessible               │
│                                                             │
│  PHASE 4: CLEANUP (Optional)                                │
│  ─────────────────────────                                  │
│  • Cancel Squarespace hosting subscription                  │
│  • Consider domain transfer to Cloudflare                   │
│  • Archive old site content                                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## DNS Records Reference

### For Vercel Hosting

```
Type    Name    Value                       TTL
─────────────────────────────────────────────────
A       @       76.76.21.21                 300
CNAME   www     cname.vercel-dns.com        300
```

### For Netlify Hosting (Alternative)

```
Type    Name    Value                       TTL
─────────────────────────────────────────────────
A       @       75.2.60.5                   300
CNAME   www     [your-site].netlify.app     300
```

---

## Squarespace DNS Configuration Steps

1. Log into Squarespace account
2. Go to **Settings** → **Domains** → **sjscomms.com**
3. Click **DNS Settings** or **Advanced DNS**
4. **Delete** existing Squarespace records (A, AAAA, CNAME for www)
5. **Add** new records per above
6. Save changes
7. Wait for propagation (check via `dig sjscomms.com` or dnschecker.org)

---

## Rollback Plan

If issues occur after cutover:

1. Log back into Squarespace DNS
2. Restore original Squarespace DNS records:
   ```
   A       @       198.185.159.144
   A       @       198.185.159.145
   A       @       198.49.23.144
   A       @       198.49.23.145
   CNAME   www     ext-cust.squarespace.com
   ```
3. Wait for propagation
4. Investigate and fix issues on Vercel
5. Re-attempt cutover

---

## Timeline Estimate

| Task | Duration |
|------|----------|
| Deploy to Vercel staging | 1 day |
| Configure subdomain for preview | 1 hour |
| Client review period | 3-5 days |
| DNS cutover | 1 hour (+ 24-48hr propagation) |
| Monitoring period | 1 week |

---

## Cost Comparison

| Platform | Hosting | Domain | Total Annual |
|----------|---------|--------|--------------|
| Squarespace (current) | ~$144/yr | ~$20/yr | ~$164/yr |
| Vercel (free tier) + Squarespace domain | $0 | ~$20/yr | ~$20/yr |
| Vercel + Cloudflare domain | $0 | ~$10/yr | ~$10/yr |

**Potential savings: $144-154/year**

