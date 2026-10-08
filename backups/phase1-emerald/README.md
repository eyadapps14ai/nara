# Nara Properties — Phase 1

A separate, local Next.js/TypeScript project. No BHB project files were accessed or modified. No internal property pages or live deployment are included.

## Preview

- Homepage: http://127.0.0.1:3000
- Brand comparison: http://127.0.0.1:3000/brand/index.html
- Development: `pnpm dev`
- Type check: `pnpm typecheck`
- Production export: `pnpm build` → `out/`
- Serve the export with `pnpm start` (the included static HTTP server).

Dependencies and exact versions are recorded in pnpm-lock.yaml. This environment uses the bundled Node executable because Node is not on the default shell PATH.

## Design

Architecture becomes identity: a fine-line architectural N, an emerald/ivory palette, Cormorant Garamond headlines and Manrope body typography. Generous space, editorial photography, and restrained interaction.

Colours: forest emerald #173E32; deep green #102C24; ivory #F6F4EE; green charcoal #233D32; champagne #C8B99B.

`public/brand/` contains three original logo directions and full-colour, white, dark and symbol-only SVG versions. Architectural Line is selected; Portico and Monolith are alternatives. The browser wordmark uses the locally hosted typefaces.

## Intro

A 6.2-second CSS/SVG sequence draws vertical and diagonal structures, moves them into an architectural N composition, dissolves into the identity, and fades into the homepage. No animation libraries, video or WebGL. Skip button and Escape close it. Session storage prevents repeated playback. Reduced-motion visitors receive the homepage immediately. Background content is inert during playback. A footer control replays the intro.

## Content provenance and missing information

Company services and public phone/email were checked against search-indexed official pages on 9 October 2026:
- https://naraproperties.co/
- https://naraproperties.co/services/
- https://naraproperties.co/contact-us/

Direct site fetch timed out. The contact page lists +971 523869408 and Info@naraproperties.co. Its address includes an inconsistent California/USA reference, so only Dubai, UAE appears here. Confirm the exact address and whether the published phone is WhatsApp-enabled.

All showcased properties are prominently labelled demonstration concepts. Photos show illustrative architecture/interiors, not Nara inventory. No prices, returns, affiliations, ratings or testimonials are claimed.

Needed before launch: approved inventory and availability; authentic listing photography and rights; property details and prices; confirmed office address and WhatsApp; relevant legal company particulars, brokerage registration and policies; approved brand and copy; domain and hosting arrangements.

## Photography and fonts

Unsplash image source IDs (illustrative editorial photography):
- Dubai: photo-1512453979798-5ea266f8880c
- Interior: photo-1600210492486-724fe5c67fb0
- Villa: photo-1613977257363-707ba9348227
- Architecture: photo-1486406146926-c627a92ad1ab

Downloaded from images.unsplash.com and converted locally to WebP; original downloads retained. Unsplash licence: https://unsplash.com/license . These are not listing photographs.

Cormorant Garamond and Manrope are open-source Google Fonts. Local font files avoid third-party requests. Licence copies are in public/fonts/.

## Validation

Production compilation and TypeScript passed. Desktop (1440px), tablet (768px) and mobile (390px) checks cover layout, navigation, category selection, intro skipping/replay, image rendering, and overflow. Contact links checked as destinations; no messages sent. No live inventory or contact form backend is part of this phase.
