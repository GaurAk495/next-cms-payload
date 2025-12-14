Total 26 paths

$ next build --webpack
▲ Next.js 16.0.10 (webpack)

- Environments: .env

Creating an optimized production build ...
✓ Compiled successfully in 13.9s
✓ Finished TypeScript in 8.3s  
 ✓ Collecting page data using 7 workers in 4.2s  
 ✓ Generating static pages using 7 workers (26/26) in 5.2s
✓ Collecting build traces in 5.9s  
 ✓ Finalizing page optimization in 5.9s

Route (app) Revalidate Expire
┌ ○ /
├ ○ /\_not-found
├ ● /[lang] 1d 1y
│ ├ /en 1d 1y
│ ├ /es 1d 1y
│ └ /de 1d 1y
├ ● /[lang]/blog 5m 1y
│ ├ /en/blog 5m 1y
│ ├ /es/blog 5m 1y
│ └ /de/blog 5m 1y
├ ● /[lang]/blog/[postslug] 5m 1y
│ ├ /en/blog/web-development-in-2026-beyond-frameworks 5m 1y
│ ├ /en/blog/why-developers-choose-next.js-for-modern-web-applications 5m 1y
│ ├ /en/blog/what-is-a-content-management-system-(cms) 5m 1y
│ └ [+6 more paths]
├ ● /[lang]/contact 1d 1y
│ ├ /en/contact 1d 1y
│ ├ /es/contact 1d 1y
│ └ /de/contact 1d 1y
├ ƒ /admin/[[...segments]]
├ ƒ /api/[...slug]
├ ƒ /api/graphql
├ ƒ /api/graphql-playground
├ ○ /robots.txt
└ ○ /sitemap.xml

○ (Static) prerendered as static content
● (SSG) prerendered as static HTML (uses generateStaticParams)
ƒ (Dynamic) server-rendered on demand
