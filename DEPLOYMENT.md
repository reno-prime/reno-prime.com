# RenoPrime Launch Checklist

## 1. GitHub

1. Create a new GitHub repository, for example `renoprime-website`.
2. Push this project to the repository.

## 2. Vercel

1. Log in to Vercel.
2. Import the GitHub repository.
3. Keep the default Next.js settings:
   - Framework preset: Next.js
   - Build command: `pnpm build`
   - Install command: `pnpm install`
4. Deploy.

## 3. Domain

1. In Vercel, open the project settings.
2. Go to Domains.
3. Add `reno-prime.com`.
4. Follow Vercel's DNS instructions at the domain registrar.
5. Wait for verification and SSL.

## 4. Forms

The quote form opens an email request to `general@renoprime.com`.

The review form has a backend route, but uploaded reviews/photos need persistent production storage before launch if they must be saved permanently. Recommended options:

- Send review submissions to email.
- Store reviews in a database.
- Store uploaded photos in cloud storage.
