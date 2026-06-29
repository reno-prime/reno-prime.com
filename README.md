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

## Quote Request Email

The quote form submits directly through the website backend and sends email with Resend.

Add these environment variables in Vercel before relying on the live quote form:

```bash
RESEND_API_KEY=your_resend_api_key
QUOTE_EMAIL_TO=general@renoprime.com
QUOTE_EMAIL_FROM=RenoPrime <quotes@reno-prime.com>
```

`QUOTE_EMAIL_FROM` should use a sender address verified in Resend. Until that is configured, the form will show a clear delivery error instead of opening the visitor's email app.

## Important Launch Note

The review form currently accepts photo uploads through the app backend. For production on Vercel, review submissions and uploaded photos should be connected to persistent storage or email delivery before relying on them as permanent records.
