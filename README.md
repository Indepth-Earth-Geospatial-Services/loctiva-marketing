# Loctiva Marketing Site

The public marketing site — landing page, product overview, pricing — deployed to **loctiva.com**.

Extracted from the main Loctiva app repo (which now handles only the product/dashboard, deployed to **command.loctiva.com**). This project is intentionally minimal: it has no auth, no DJI/backend integration, and no dashboard UI — just Next.js, React, and Tailwind.

## Development

```bash
pnpm install
pnpm dev
```

## Environment variables

| Variable | Purpose | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Used to resolve absolute OG/Twitter image URLs | `http://localhost:3000` |
| `NEXT_PUBLIC_COMMAND_APP_URL` | Where "Get Started" links to | `https://command.loctiva.com` |

For local testing against a command-app dev server running elsewhere, set `NEXT_PUBLIC_COMMAND_APP_URL=http://localhost:3001` (or whatever port it runs on) in `.env.local`.

## Deployment

Deploys as its own Vercel project, with `loctiva.com` attached as its production domain.
