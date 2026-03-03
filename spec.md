# HAPP Dental Clinic

## Current State

New project — no existing code.

## Requested Changes (Diff)

### Add

**Multi-page dental clinic website with the following pages:**

1. **Homepage** — Full-screen hero, emotional connection section, "Why Patients Love Us" feature grid, Meet Dr. Reena section, Services grid, Hygiene & Safety section, Testimonials carousel, Location & Contact section, Final CTA section.
2. **About Us Page** — Story-driven narrative about HAPP Dental's founding, values, and commitment.
3. **Services Page** — Detailed cards for each service (root canal, cleaning, caps/crowns, fillings, gum treatment, pediatric, extraction) with what to expect, pain info, duration, and cost range.
4. **Testimonials Page** — Full reviews with trust badges.
5. **Contact Page** — Appointment form (Name, Phone, Issue, Preferred Time).

**Global UI elements:**
- Sticky navigation with logo and nav links
- Floating WhatsApp button (links to wa.me/918008491391)
- "Scared? Talk to us first." anxiety-reduction banner
- "We Explain Before We Treat" badge
- Footer with address, phone, hours

**Backend features:**
- Appointment booking form submissions (stored in canister)
- Contact form submissions (stored in canister)

### Modify

Nothing — new project.

### Remove

Nothing — new project.

## Implementation Plan

1. Generate brand assets (hero image, Dr. Reena placeholder, service icons)
2. Generate Motoko backend with appointment and contact form submission storage
3. Build React frontend with all 5 pages using React Router
4. Implement all homepage sections with animations and trust signals
5. Add floating WhatsApp button, FAQ accordion, and high-conversion features
6. Wire appointment form to backend canister
7. Deploy
