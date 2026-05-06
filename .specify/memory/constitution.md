# Static Web App Constitution

## Core Principles

### I. Static-First Rendering

All user-facing pages and content should be generated at build time whenever possible. Use Next.js static rendering and `next export` as the default delivery model, with server-side logic limited to edge functions or API routes only when truly required.

### II. Component-Driven, Accessible UI

Build the site with reusable, well-encapsulated React components and styles. Prioritize accessibility, responsive design, and performance by keeping markup semantic, minimizing client-side JavaScript, and ensuring UI behavior works without heavy runtime dependencies.

### III. CDN-Ready Deployment

The application must be deployable as a static asset bundle to a CDN or static hosting platform. Optimize assets, cache static pages aggressively, and avoid Next.js features that require a full Node server unless there is a clear, justified need.

## Constraints and Requirements

- Use Next.js for static builds, with `getStaticProps`, `getStaticPaths`, or the App Router equivalent to pre-render pages.
- Prefer file-based routes and static metadata to support SEO and fast initial render.
- Limit runtime dependencies and dynamic rendering; dynamic behavior should degrade gracefully.
- Test build output as a static site to verify it can be served from static hosting.

## Quality Gates

- Every release candidate must pass a successful static build and deployment validation.
- Pages should meet performance and accessibility standards, including Lighthouse checks for core web vitals.
- New UI components must include documentation and, where applicable, automated tests for behavior and accessibility.

## Governance

The constitution is the baseline for static web app design in this repository. Any exception or deviation requires explicit justification in the implementation plan and review approval.

**Version**: 1.0.0 | **Ratified**: 2026-05-06 | **Last Amended**: 2026-05-06
