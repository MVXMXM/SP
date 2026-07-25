# Sebastian Piras — Photography

Portfolio site for Sebastian Piras, a New York based photographer and filmmaker — artist portraits, editorial photography, and film stills.

## Stack

Next.js (App Router) + React + TypeScript + Tailwind v4.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint    # lint
```

## Content

All content (sections, photos, bio, exhibitions, clients) lives in `app/data.ts`.

Images are currently **hotlinked** from `static.wixstatic.com` via the `wixImage` / `wixThumb` / `wixLogo` helpers in `app/data.ts`. Download and self-host them before treating this as a durable production site.
