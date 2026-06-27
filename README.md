# Bizh Mining Enterprise Website

Bizh Mining (PTY) Ltd is a premium mining consultancy website built with **Next.js 16**, **Tailwind CSS**, and **Framer Motion**. The site presents a luxury, enterprise-grade experience with cinematic hero visuals, polished service pages, and an optimized contact section.

## SEO Summary

- **Title:** Bizh Mining (PTY) Ltd | Underground & Surface Mining Consultancy
- **Description:** Bizh Mining (PTY) Ltd is a South African mining consultancy delivering sustainable underground and surface mining solutions that increase production, improve safety, and reduce operational costs.
- **Keywords:** mining consultancy, underground mining, surface mining, mine planning, mineral exploration, technical services, South Africa mining, mining engineering, mining advisory, sustainable mining
- **Primary target audience:** mining operators, project owners, technical leadership, investors, and mining development teams.

## Key Features

- Cinematic hero layout with continuous Ken Burns background animation using the existing hero image.
- Responsive enterprise design across mobile, tablet, and desktop.
- Hero sections and content cards optimized for readability, contrast, and premium visual balance.
- Polished contact section with map integration and accessible form experience.
- Services pages for Exploration, Mine Planning & Engineering, and Technical Services.
- Clean preloader experience with a branded logo pulse and smooth fade transition.

## Project Structure

- `app/` — Next.js App Router entry points and page routing
- `components/` — reusable UI sections and page components
- `public/images` — hero and background images
- `public/VIDEOS` — video asset directory (not used in the current hero)
- `app/globals.css` — global Tailwind and utility styles
- `app/layout.tsx` — root layout with preloader integration

## Pages / Sitemap

- `/` — Home page
- `/services/exploration` — Mineral Exploration
- `/services/mine-planning-engineering` — Mine Planning & Engineering
- `/services/technical-services` — Technical Services

## Local Development

```bash
pnpm install
pnpm run dev
```

Open `http://127.0.0.1:3000` or `http://localhost:3000` in your browser.

## Production Build

```bash
pnpm run build
pnpm run start
```

## Recommended Deployment

This site is ready for deployment to platforms that support Next.js, such as Vercel, Netlify, or a custom Node.js host.

## SEO Optimization Tips

- Use descriptive image alt text for all key visuals. The hero and contact background already have rich atmosphere and should be described clearly.
- Keep the page meta description up to date and aligned with the brand message.
- Use concise, keyword-rich headings in the service pages.
- Submit the `sitemap.xml` to Google Search Console after deployment.

## Notes for Production

- Update the `sitemap.xml` domain values to your final production domain if needed.
- Ensure the `metadata` values in `app/layout.tsx` remain consistent with the published website.
- The current design already prioritizes high-contrast white text and gold accents over dark backgrounds.

## Contact

For design updates, site refinements, or deployment assistance, review the `components/contact.tsx` and `components/contact-map.tsx` files.
