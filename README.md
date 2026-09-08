# OSS. | Odin Software Solutions

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
- `components/sections/software-preview.tsx`: six labeled software concepts and a visibility-aware, pausable solution tour.
- `components/sections/software-stories.tsx`: real ERP screen gallery, industry scenarios, and interactive integration map.
- `components/sections/company-pages.tsx`: solutions, individual solution pages, services, industries, and about.
- `components/contact/contact-form.tsx`: bilingual project inquiry email preparation.
- `components/layout/`: site navigation and footer.
- `app/globals.css`: light navy/blue identity, responsive rules, and locally hosted fonts.
- `app/home-experience.css`: richer workspace previews, visual sections, and motion with a reduced-motion fallback.
- `lib/site.ts`: company name, contact email, domain, navigation, and metadata.
- `content/insights.ts`: existing English archive articles.
- `PRODUCT.md` and `DESIGN.md`: product context and implemented visual system.

The six solution detail routes are generated from the solution catalog. Unknown solution slugs return 404. The existing ERP demo remains a single product example. Existing case-study, legal, and article content is retained.

## Contact behavior

The inquiry form validates project details and prepares an email addressed to `help@odin-ltd.com`. The visitor reviews it and explicitly opens their email app to send it. A copy-details action is also available. The page does not claim delivery.

There is currently no configured transactional email provider, inbox API, CRM webhook, or durable submission database. The old file-writing API has been retired: `POST /api/contact` returns 503 with email guidance and neither stores nor logs inquiry data. A real delivery integration can be added separately.

## Brand assets

The approved flat hexagonal Odin Eye lives in `public/brand/oss-geometric-eye.png`; its raster master is `public/brand/source/oss-geometric-eye-master.png`. PNG icons and an Apple touch icon use the same artwork on white. The shared `brand-artwork` class clips the exterior white margin to the hexagonal outline and blends the open eye center with light page backgrounds. The center has no navy backing; lower-right facets use the same blue family as the left, with no turquoise. `app/opengraph-image.tsx` renders the company share image with the local brand artwork and fonts.

`components/ui/logo.tsx` provides `OdinMark`, a linked `Logo`, and the unlinked `BrandLockup`. Text stays live and the lockup stays left-to-right in both languages. General pages and the footer use OSS.; product pages display OSS. / ERP, LMS, CRM, or the catalog's corresponding `short` name. The company descriptor is `odin software solution`, as approved.

```tsx
<Logo product="ERP" compact />
<BrandLockup product="LMS" />
<BrandLockup product="CRM" descriptor={false} mark={false} className="brand-inline" />
```

Add a solution with its `slug` and `short` identifier in `content/solutions.ts`; the header, cards, detail pages, and previews automatically use that identifier. `lib/brand.ts` holds the shared asset paths and route lookup. No per-product logo file is needed. Real archived product screenshots retain their original pixels.

Manrope and Noto Sans Arabic are hosted in `public/fonts` with their SIL Open Font Licenses.

## Deployment

The existing GitHub repository is `mohammaddashraff/odin-corporate-site`. Vercel tracks the production branch `main`. Production domains are `odin-ltd.com` and `odin-corporate-site.vercel.app`.

A successful push to the connected branch should trigger Vercel. Check the resulting deployment and live domain after publishing. No new environment variables are needed for this rebrand.

## Analytics

No tracking runs by default. The existing `NEXT_PUBLIC_ENABLE_ANALYTICS` flag controls a placeholder only.
