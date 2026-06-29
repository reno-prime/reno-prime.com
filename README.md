# RenoPrime Website

Premium bilingual website for RenoPrime residential renovations.

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS

## Local Development

```bash
pnpm install
pnpm dev
```

## Checks

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Deployment

Production domain: `https://reno-prime.com`

Deploy on Vercel by importing the GitHub repository, then add `reno-prime.com` in the Vercel project domain settings.

## Important Launch Note

The review form currently accepts photo uploads through the app backend. For production on Vercel, review submissions and uploaded photos should be connected to persistent storage or email delivery before relying on them as permanent records.
