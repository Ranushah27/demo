# Maddy Cooks — Private Dining

A premium, editorial website for Maddy Cooks, a private dining brand built around Chef Maddy. Built with React, TypeScript, Vite and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Structure

- `src/config/` — all editable content lives here: chef bio, menus, gallery, testimonials, FAQ, occasions, booking form options, and site-wide settings (WhatsApp number, social links). Update these files rather than editing components directly.
- `src/components/` — UI building blocks, split into `layout/`, `home/`, `booking/` and shared `ui/` primitives.
- `src/pages/` — `Home.tsx` (single-page site) and `Enquire.tsx` (the multi-step "Build Your Dining Experience" enquiry form).
- `src/lib/` — form validation and the WhatsApp enquiry message builder.
- `public/images/` — Chef Maddy's portrait and dish photography sourced from @_maddy_cooks.

## Before launch

Several values are placeholders until the business provides real information — search for `[bracketed placeholders]` and `TODO` comments, most notably:

- `src/config/site.ts` — `WHATSAPP_NUMBER` (currently a placeholder), business email.
- `src/config/chef.ts` — chef bio, experience and philosophy copy.
- `src/config/faq.ts` — policy-dependent answers (pricing, payment, lead times, coverage area).
- `src/config/testimonials.ts` — real client testimonials.
