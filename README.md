## Portfolio Website for MB-Consulting

My portfolio is a website to showcase my skills and projects as a Developer | DevOps | SRE and Coach. 
Inspired by [Kevin Clark](https://kevinclark.ca).

# Features

- (Kinda) responsive layout, works well on Desktop and decently on mobile.
- Dark mode support.

# Tech Stack (WIP)

The website is built in Next.js and deployed on [Vercel](https://vercel.com) I also used tailwindcss for styling (but don't ask me about that, I don't know much) and some awesome libs like react-cookie-consent :)

- [Next.js](https://nextjs.org) for building React Components.
- [tailwindcss](https://tailwindcss.com) for styling.
- [React Rough Notation](https://roughnotation.com) for Hero section highlighting.
- [React Cookie Consent](https://github.com/Mastermindzh/react-cookie-consent) for Cookies.
- [Vercel](https://vercel.com) for deployments and CI/CD.

# Deployment

Deployment is made in 3 steps.

- Login to [Vercel](https://vercel.com) with your GitHub account
- Project -> Deploy
- Wait for Vercel to deploy your project to production.

To configure a custom domain, bought outside Vercel, you need to change DNS in your as stated here: https://vercel.com/docs/concepts/projects/custom-domains
Tip: it can take up to 48 hours, use: https://www.whatsmydns.net/ to check if your DNS change propagated everywhere and don't worry if your site seems not responding, it's probably a DNS issue