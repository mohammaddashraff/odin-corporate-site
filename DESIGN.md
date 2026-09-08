---
name: ODIN Software Solutions
description: Professional light identity with navy typography, blue actions, and clear geometric workflows.
colors:
  blue: "#245de8"
  blue-hover: "#1545bd"
  bg: "#ffffff"
  panel: "#f4f7fc"
  pale-bg: "#f7f9fd"
  text: "#102747"
  muted: "#53647b"
  stroke: "#dce4ef"
  button-border: "#c5d1e2"
  field-border: "#bac8dc"
  error: "#b42318"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(3rem, 5.45vw, 4.8rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(2rem, 3.7vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "21px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "-0.018em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "15px"
    lineHeight: 1.9
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1.5
  navigation:
    fontFamily: "Manrope, sans-serif"
    fontSize: "13px"
    fontWeight: 600
  arabic-body:
    fontFamily: "Noto Sans Arabic, sans-serif"
rounded:
  control: "6px"
  button: "7px"
  panel: "12px"
  visual: "13px"
spacing:
  container-mobile: "20px"
  container-desktop: "32px"
  section: "96px"
  section-mobile: "62px"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.bg}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "14px 23px"
  button-primary-hover:
    backgroundColor: "{colors.blue-hover}"
  button-secondary:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "14px 23px"
  button-secondary-hover:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.blue}"
  text-link:
    textColor: "{colors.blue}"
    typography: "{typography.label}"
  field:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    padding: "13px"
    width: "100%"
  surface:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.text}"
    rounded: "{rounded.panel}"
  navigation-link:
    typography: "{typography.navigation}"
    padding: "20px 0"
---

# Design System: ODIN Software Solutions

## Overview

**Creative North Star: "Software shaped around your work"**

The confirmed identity is professional and light: white and pale blue surfaces, navy typography, blue actions, generous whitespace, and a flat geometric eye mark. Manrope gives the English interface a direct, rounded character; Noto Sans Arabic supports the Arabic reading direction.

The implemented system uses clear type hierarchy, thin dividers, and restrained containers. Geometry explains connected work, while real product screenshots appear as explicitly identified product examples. The values above describe the built interface, extracted from `app/globals.css`, `tailwind.config.ts`, and the current shared components.

**Key Characteristics:**

- White and pale surfaces with navy text and blue actions.
- Generous section spacing and flat, divided content.
- A geometric eye mark and connected workflow illustration.
- English and Arabic layouts with visible keyboard focus.
- Brief state transitions and a static reduced-motion presentation.

## Colors

The palette combines a vivid primary blue with cool neutrals. Frontmatter values are normative; these names describe their application.

### Primary

- **Action Blue** (`blue`): primary buttons, links, selected explorer tabs, focus outlines, logo accents, and the closing project CTA.
- **Deep Action Blue** (`blue-hover`): primary button hover and prepared-email feedback.

### Neutral

- **White** (`bg`): page background, controls, and text on blue or navy.
- **Pale Panel** (`panel`): forms, custom-solution callouts, reusable surfaces, and secondary button hover.
- **Pale Page** (`pale-bg`): hero and footer backgrounds.
- **Navy Ink** (`text`): principal text; also the background of workflow illustrations and process sections.
- **Muted Slate** (`muted`): supporting copy, labels, and metadata.
- **Cool Divider** (`stroke`): header, rows, FAQs, and surface borders.
- **Button Border** and **Field Border**: distinct control outlines that remain visible on white.
- **Error Red** (`error`): invalid field borders and adjacent error messages; a status color, not a brand accent.

The CSS `silver` alias currently equals `muted`; it is not a separate palette decision. RGB custom properties support Tailwind opacity utilities and mirror the corresponding root colors. Local illustration tints remain component details. Sidecar tonal ramps are generated preview aids, not additional implemented tokens.

## Typography

English uses locally served Manrope with a sans-serif fallback. Arabic body copy switches to locally served Noto Sans Arabic. Font files use `font-display: swap`. Logo lettering and short Latin solution identifiers retain Manrope.

- **Display:** the homepage heading uses the display role. Internal page and contact headings use their own nearby clamps; this is not a single forced size across every route.
- **Headline:** section headings use the headline role and balanced text wrapping.
- **Title:** solution headings use the title role; process headings use the same size with a lighter weight (600).
- **Body:** standard explanatory copy uses the body role with a maximum measure of (66ch). Hero copy is slightly larger (16px) with the same line height.
- **Label:** buttons and prominent links use the label role. Field labels are smaller (12px), with weight (700).
- **Navigation:** compact navigation uses its own lighter role.

At widths up to (700px), section headings become (33px), standard body copy becomes (14px), and the home display uses `clamp(42px, 10.9vw, 66px)`. The intermediate home display sizes are (57px) at up to (1100px) and (48px) at up to (900px).

**The Reading Direction Rule.** Preserve the Arabic heading override: zero letter spacing and line height (1.55). Keep the wordmark and email/telephone fields left-to-right, and mirror directional arrows.

## Layout

The shared container is centered, full width, and capped at (80rem). Horizontal padding uses the container spacing values; the desktop padding begins at Tailwind's `md` breakpoint (768px). The standard section spacing is vertical only.

Desktop compositions use asymmetric two-column layouts with generous gaps: the homepage hero uses (1.12fr / 1fr), and contact uses (0.9fr / 1.1fr). The solution index uses three columns; process steps use four. Content rows are separated by rules, with no default enclosing card.

- At up to (1100px), gaps and large hero details tighten.
- At up to (900px), navigation becomes a disclosed menu; solution and process grids become two columns.
- At up to (700px), hero, contact, featured product, FAQ, and most detail layouts stack. The solution explorer stays within (500px), and section spacing uses the mobile value.
- At up to (380px), solution and form grids become one column.
- At (1450px) and above, homepage hero vertical padding becomes (92px).

The sticky header is (92px) tall at desktop, then (80px) and (76px) in the two mobile layouts. Language and menu controls provide a minimum (44px) target.

## Elevation & Depth

Depth comes primarily from pale backgrounds, navy sections, and thin borders. Buttons, forms, workflow steps, and the reusable surface are flat. The ERP screenshot alone receives the established image shadow (`0 12px 24px #1c3d6620`) within its pale frame.

Tailwind also retains a hover shadow (`0 16px 30px #1c3d6628`) used by the older service-grid component. It is not the default treatment of the current solution rows.

**The Flat Surface Rule.** Keep current content rows and forms flat; preserve screenshot elevation where it is already used.

## Shapes

Controls use modest curved corners, with separate established values for fields, buttons, panels, and the solution visual. Dividers and control borders are (1px). The explorer tab tray uses (9px) corners and individual tabs use (5px); workflow nodes are circular. The approved eye logo is a circular navy optical seal with a white lens and blue focal point, served as a transparent PNG.

## Components

### Buttons and links

Primary and secondary buttons share a minimum height (52px), an arrow gap (18px), and the frontmatter padding. The header variant is more compact, with minimum height (44px) and padding (10px 17px). Contact form buttons fill the available width.

Primary hover deepens the blue. Secondary hover changes its border and text to blue over a pale panel. The closing blue CTA uses a contextual white button with blue text. Background, text, and border changes last (0.2s). Text links underline on hover with an offset (5px).

Internal buttons use a horizontal arrow. External links open a new tab with a diagonal arrow and `noopener noreferrer`. Visible focus uses a blue outline (3px) offset by (5px).

### Navigation and identity

The white sticky header has a bottom divider. Navigation becomes blue on hover and for the current route. The mobile menu uses divided full-width rows, exposes its expanded state, closes on navigation, and returns focus to its trigger when dismissed with Escape.

The logo combines the approved illustrated optical seal, navy OSS lettering with a blue period, an optional slash and product identifier, and the lowercase odin software solution descriptor. Preserve the full lockup left-to-right in both languages. The compact treatment reduces both the type and mark for navigation; product pages use the catalog short name automatically. Company pages and the footer omit the product suffix.

### Cards, surfaces, and rows

Solution links are flat rows with a top divider, a heading and diagonal arrow, descriptive copy, and a lower text link. Hover changes the heading and arrow to blue. Callouts and forms use pale panels with rounded corners. The generic surface adds a divider-colored border and explicitly has no shadow.

### Inputs and feedback

Inputs, selects, and textareas have white backgrounds, visible borders, and the frontmatter padding. The field text is (13px). Focus keeps the global blue outline with a closer offset (2px). Errors combine a red outline with descriptive text and `aria-describedby`; validation focuses the first invalid field.

The form prepares an email for review. Its status explicitly says the email has not been sent, then offers an email-app link and a copy action. Copy failure reveals a selectable read-only draft. No disabled or sending-state design is implemented.

### Solution explorer

Six tab controls select an illustrative workflow. The active tab is blue with white text; inactive hover is white. The tab list supports arrow keys, Home, End, roving focus, and Arabic-aware arrow direction. Its panel links to the selected solution.

The navy visual contains three connected white workflow rows with numbered circles. Selection remounts the visual and reveals the rows over (0.4s), using `cubic-bezier(0.16, 1, 0.3, 1)`, with delays of (0.055s) and (0.11s). The visual labels itself as an illustrative workflow.

### FAQ

Native `details` and `summary` elements create flat, divided questions. The blue plus becomes a minus when open. Answers use muted text with generous line spacing. Keyboard focus follows the global rule.

## Do's and Don'ts

### Do:

- Do preserve the light navy-and-blue identity and the ODIN Software Solutions wordmark.
- Do reuse the established type hierarchy, flat dividers, and pale surfaces.
- Do retain Arabic typography, reading direction, arrow mirroring, and visible keyboard focus.
- Do identify illustrative workflows and actual product screenshots accurately.
- Do preserve reduced-motion support: animations stop and scrolling becomes immediate.
- Do describe the contact action as preparing an email for the visitor to review and send.

### Don't:

- Don't promote the older ERP-only identity into the company-wide visual system.
- Don't add default shadows to the current forms or solution rows.
- Don't apply Latin letter spacing to Arabic headings.
- Don't present an illustrative workflow as a captured product interface.
- Don't add client logos, testimonials, performance figures, or commercial promises without verified product evidence.
