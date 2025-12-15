A high-performance, SEO-optimized, and multi-language website prototype built with **Next.js 16** (App Router) and **PayloadCMS 3.0** (Headless CMS). This project demonstrates a clean architecture, dynamic content management, and modern UI/UX practices.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 16, React 19, and PayloadCMS 3.
- **Headless CMS Integration**: Fully integrated PayloadCMS for managing content.
- **Multi-Language Support**: Native support for English (`en`), Spanish (`es`), and German (`de`) with localized routing.
- **Dynamic Content**: Modular content blocks (Hero, Features, Testimonials, CTA) managed via CMS.
- **Form Handling**: Contact form submissions are stored directly in PayloadCMS.
- **SEO Optimized**: Automatic sitemap generation, robots.txt, and dynamic meta tags.
- **Responsive Design**: Mobile-first approach using Tailwind CSS 4.
- **Media Management**: Image optimization and storage support (Vercel Blob).

## 🛠 Technology Stack

- **Frontend**: Next.js 16 (App Router), Tailwind CSS 4, Lucide React (Icons).
- **Backend**: PayloadCMS 3.68 (MongoDB Adapter).
- **Database**: MongoDB.
- **Storage**: Vercel Blob.
- **Deployment**: Vercel (recommended).

## 📂 Project Structure

- `src/app/(payload)`: PayloadCMS configuration, collections (Users, ContactSubmissions, etc.), and globals.
- `src/app/(web)`: Next.js frontend application with localized routing (`[lang]`).
- `src/app/(web)/components`: Reusable UI components (Hero, Navbar, Footer, etc.).
- `payload.config.ts`: Main configuration for PayloadCMS.

## ⚙️ Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- MongoDB (Local or Atlas)
- Bun / npm / pnpm / yarn

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd project
    ```

2.  **Install dependencies:**

    ```bash
    bun install
    # or
    npm install
    ```

3.  **Environment Variables:**

    Create a `.env` file in the root directory. You can copy the structure from `.env.example` if available, or use the following:

    ```env
    # Database
    DATABASE_URI=mongodb://localhost:27017/restroworks-project # Or your MongoDB Atlas URI

    # Payload
    PAYLOAD_SECRET=your_super_secret_key_here
    NEXT_PUBLIC_SERVER_URL=http://localhost:3000

    # Vercel Blob (Optional, for production media storage)
    BLOB_READ_WRITE_TOKEN=
    ```

4.  **Run the development server:**

    ```bash
    bun dev
    # or
    npm run dev
    ```

    The app should be running at `http://localhost:3000`.

### 🎛 Accessing the CMS

1.  Navigate to `http://localhost:3000/admin`.
2.  Create your first admin user when prompted.
3.  Start creating content!

## 📝 CMS Modeling & Content Management

This project uses a combination of **Collections** and **Globals** to structure content effectively.

### Globals

- **Home**: Manages the landing page content. It supports a modular "blocks" architecture where you can add/reorder sections like Hero, Features, Testimonials, and CTAs.
- **Footer**: Global footer settings.
- **Navbar**: Global navigation menu.
- **ContactPage**: Content for the Contact page.

### Collections

- **Users**: Admin users for the CMS.
- **ContactSubmissions**: Stores form submissions from the Contact page.
- **Posts & Categories**: Blog functionality (demonstration).
- **Media**: Manages uploaded images and assets.

### Localization

1.  In the Admin Panel, look for the "Locales" dropdown.
2.  You can switch between `en`, `es`, and `de` to enter translated content.
3.  The frontend automatically serves the correct content based on the URL path (e.g., `/de/contact`).

## 🔍 SEO & Optimization

- **Sitemap**: Automatically generated at `/sitemap.xml`.
- **Robots.txt**: Served at `/robots.txt`.
- **Metadata**: Dynamic title and description tags are fetched from the CMS for each page.

## 🏗 Architecture Notes

- **Bundler**: This project utilizes **Webpack** (via `next build --webpack`) instead of Turbopack to ensure maximum compatibility with PayloadCMS 3.0 and its admin UI components.
- **Monorepo Structure**: The codebase follows an integrated monorepo architecture. Both the **CMS** (Backend) and the **Web Application** (Frontend) reside in a single repository (`src/app/(payload)` and `src/app/(web)`). This allows for shared types, unified dependency management, and atomic deployments.

## ⚡ Pages & Rendering Strategies

To achieve the best balance between performance and dynamic content capability, we utilize **Incremental Static Regeneration (ISR)**. This ensures pages are served as static HTML (fast) but are updated in the background when content changes (dynamic).

| Page Type         | Route                       | Strategy | Revalidation | Description                                      |
| :---------------- | :-------------------------- | :------- | :----------- | :----------------------------------------------- |
| **Home**          | `/[lang]`                   | ISR      | **1 Day**    | Static landing page, refreshes daily.            |
| **Contact**       | `/[lang]/contact`           | ISR      | **1 Day**    | Static contact page, refreshes daily.            |
| **Blog Listing**  | `/[lang]/blog`              | ISR      | **5 Mins**   | Listing of latest posts, high freshness.         |
| **Blog Post**     | `/[lang]/blog/[slug]`       | ISR      | **5 Mins**   | Individual articles, rapid updates.              |
| **Admin**         | `/admin/*`                  | Dynamic  | N/A          | Fully dynamic Client/Server rendering (CSR/SSR). |
| **API**           | `/api/*`                    | Dynamic  | N/A          | Server-side API endpoints.                       |
| **Static Assets** | `sitemap.xml`, `robots.txt` | Static   | Build Time   | Generated at build time.                         |

## 🛠 Development Commands

### Common Commands

- **Dev Server**: `bun dev` (Runs Next.js + Payload)
- **Build**: `bun run build` (or `next build --webpack`)
- **Lint**: `bun lint`

### Type Generation

Since frontend and backend share the same codebase, you can generate TypeScript types directly from your Payload Collections to ensure full type-safety across the app.

```bash
bun payload generate:types
```

This will output `payload-types.ts` which you can import in your frontend components.

## 🔗 Live Demo

https://next-cms-payload-t2uf.vercel.app

## 🤝 Contribution

1.  Fork the project.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.
