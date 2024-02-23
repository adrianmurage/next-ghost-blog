This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Env Variables

To add the environment variables, create a `.env.local` file in the root of the project.

The following values are needed:

1. `GHOST_CONTENT_API_KEY`
2. `GHOST_API_URL` - this value should not have a trailing slash.
3. `GHOST_SITE_TAG` - we assume that you're using Ghost CMS for multiple sites and this value helps you identify posts for this specific site. It can be found in the tag setting on your Ghost CMS dashboard.

## Analytics

This project uses simple Analytics by default. If you would like to change that, remove the line below in `app/layout.tsx`:

```JavaScript
    <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
```
