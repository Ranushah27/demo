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
- `src/lib/` — form validation, the WhatsApp enquiry message builder, and the Google Sheet logger.
- `public/images/` — Chef Maddy's portrait and dish photography sourced from @_maddy_cooks.
- `google-apps-script/` — the Apps Script + setup guide that logs every enquiry to a Google Sheet.

## How an enquiry reaches Chef Maddy

Submitting the "Build Your Dining Experience" form does two things:

1. **Logs the enquiry to a Google Sheet** (silent, best-effort — never blocks the customer) via `src/lib/sheetSync.ts`, so every enquiry is kept even if the customer doesn't complete step 2. See `google-apps-script/README.md` for the one-time setup; until `ENQUIRY_SHEET_WEBHOOK_URL` in `src/config/site.ts` is filled in, this step is skipped.
2. **Shows a "Continue on WhatsApp" button** that opens a pre-filled message to Chef Maddy's number (`WHATSAPP_NUMBER` in `src/config/site.ts`) for the customer to send. This is an enquiry, not a confirmed booking — WhatsApp doesn't allow a website to send that message silently on its own; only the official WhatsApp Business Platform (Meta) or a paid provider like Twilio can do that, and both require business verification and API credentials that only Chef Maddy can set up.

## Before launch

Several values are placeholders until the business provides real information — search for `[bracketed placeholders]` and `TODO` comments, most notably:

- `src/config/site.ts` — business email, `ENQUIRY_SHEET_WEBHOOK_URL` (Google Sheet logging, see above).
- `src/config/chef.ts` — chef bio, experience and philosophy copy.
- `src/config/faq.ts` — policy-dependent answers (pricing, payment, lead times, coverage area).
- `src/config/testimonials.ts` — real client testimonials.
