# ODIN Software Solutions

Corporate website for ODIN Software Solutions: custom software, ERP, HR, CRM, LMS, education systems, and mobile applications.

## Development

```bash
npm ci
npm run dev
```

## Verification and production

```bash
npm run build
npm run start
```

The production build includes ESLint and TypeScript checks. Standalone checks are available through `npm run lint` and `npm run typecheck`.

## Editing the website

- `content/solutions.ts`: bilingual solution names, descriptions, workflow illustrations, project process, and FAQs.
- `components/sections/software-home.tsx`: homepage and shared marketing sections.
- `components/sections/company-pages.tsx`: solutions, individual solution pages, services, industries, and about.
- `components/contact/contact-form.tsx`: bilingual project inquiry email preparation.
- `components/layout/`: site navigation and footer.
- `app/globals.css`: light navy/blue identity, responsive rules, and locally hosted fonts.
- `lib/site.ts`: company name, contact email, domain, navigation, and metadata.
- `content/insights.ts`: existing English archive articles.
- `PRODUCT.md` and `DESIGN.md`: product context and implemented visual system.

The six solution detail routes are generated from the solution catalog. Unknown solution slugs return 404. The existing ERP demo remains a single product example. Existing case-study, legal, and article content is retained.

## Contact behavior

The inquiry form validates project details and prepares an email addressed to `hello@odin-ltd.com`. The visitor reviews it and explicitly opens their email app to send it. A copy-details action is also available. The page does not claim delivery.

There is currently no configured transactional email provider, inbox API, CRM webhook, or durable submission database. The old file-writing API has been retired: `POST /api/contact` returns 503 with email guidance and neither stores nor logs inquiry data. A real delivery integration can be added separately.

## Brand assets

The geometric ODIN mark lives in `components/ui/logo.tsx`; the matching favicon is `app/icon.svg`. The share image is `public/brand/og-software-solutions.png`. Manrope and Noto Sans Arabic are hosted in `public/fonts` with their SIL Open Font Licenses.

## Deployment

The existing GitHub repository is `mohammaddashraff/odin-corporate-site`. Vercel tracks the production branch `main`. Production domains are `odin-ltd.com` and `odin-corporate-site.vercel.app`.

A successful push to the connected branch should trigger Vercel. Check the resulting deployment and live domain after publishing. No new environment variables are needed for this rebrand.

## Analytics

No tracking runs by default. The existing `NEXT_PUBLIC_ENABLE_ANALYTICS` flag controls a placeholder only.
