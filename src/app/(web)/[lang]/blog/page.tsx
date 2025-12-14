import { ArrowDown, RotateCw, Search } from "lucide-react";
import { getPosts } from "../../lib/payload";
import { LANGUAGES, SupportedLanguages } from "../../locales/data";
import Link from "next/link";
import { isCategory, isMedia, isUser } from "./types";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { data } from "./data";

export const revalidate = 300;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!LANGUAGES.map((lang) => lang.code).includes(lang)) {
    return {
      title: "Insights & Stories – Thoughts and Ideas on Building for the Web",
      description:
        "Read thoughts, lessons, and stories about building for the web, technology, and digital experiences in a simple and approachable way.",
    };
  }
  const contactPage = data[lang as SupportedLanguages];
  return {
    title: contactPage.seo.metaTitle,
    description: contactPage.seo.metaDescription,
    keywords: ["nextjs", "app-router", "seo"],
    applicationName: "NexuxCMS",
    authors: [{ name: "NexuxCMS", url: "https://nexuscms.com" }],
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    metadataBase: new URL("https://nexuscms.com"),
    openGraph: {
      title: "NexuxCMS — Contact",
      description: "A short CMS description",
      url: "https://nexuscms.com/",
      siteName: "NexuxCMS",
      images: [
        {
          url: "https://nexuscms.com/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "My App preview image",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "NexuxCMS — Contact",
      description: "A short CMS description",
      images: ["https://nexuscms.com/twitter-image.jpg"],
      site: "@nexuscms",
    },
  };
}

export async function generateStaticParams() {
  return LANGUAGES.map((lang) => ({ lang: lang.code }));
}

export default async function page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const posts = await getPosts(lang as SupportedLanguages);

  if (!posts) {
    return notFound();
  }

  const articles = posts.docs;
  const blogPage = data[lang as SupportedLanguages];
  return (
    <main className="grow max-w-7xl mx-auto px-4 md:px-8 pt-32 py-20">
      <section className="mb-12">
        <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-4">
          {blogPage.title.primary}{" "}
          <span className="text-primary">{blogPage.title.part2}</span>
        </h1>
        <p className="text-lg text-white/80 max-w-2xl">{blogPage.subtitle}</p>
      </section>

      <section className="pt-4 pb-6 mb-8 border-b border-surface-border/50">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          <div className="w-full md:w-[400px]">
            <label className="relative flex w-full items-center">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-text-secondary">
                <Search className="text-[20px]" />
              </div>
              <input
                type="text"
                placeholder="Find an article..."
                className="block w-full rounded-lg border-none bg-surface-dark py-3 pl-10 pr-3 text-white placeholder-text-secondary outline-none focus:outline-none focus:ring-2 focus:ring-primary focus:bg-surface-dark/80 transition-all font-sans text-sm"
              />
            </label>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            <button className="whitespace-nowrap h-9 px-4 rounded-full bg-primary text-black text-sm font-bold leading-normal transition-transform active:scale-95">
              All Posts
            </button>
            <button className="whitespace-nowrap h-9 px-4 rounded-full bg-surface-dark border border-surface-border text-text-secondary hover:text-white hover:border-white/20 text-sm font-medium leading-normal transition-all">
              Engineering
            </button>
            <button className="whitespace-nowrap h-9 px-4 rounded-full bg-surface-dark border border-surface-border text-text-secondary hover:text-white hover:border-white/20 text-sm font-medium leading-normal transition-all">
              Design
            </button>
            <button className="whitespace-nowrap h-9 px-4 rounded-full bg-surface-dark border border-surface-border text-text-secondary hover:text-white hover:border-white/20 text-sm font-medium leading-normal transition-all">
              Tutorials
            </button>
            <button className="whitespace-nowrap h-9 px-4 rounded-full bg-surface-dark border border-surface-border text-text-secondary hover:text-white hover:border-white/20 text-sm font-medium leading-normal transition-all">
              DevOps
            </button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {articles.map((article) => (
          <article
            key={article.id}
            className="group flex flex-col h-full bg-surface-dark rounded-xl overflow-hidden border border-surface-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
          >
            <Link href={`/${lang}/blog/${article.slug}`}>
              <div className="relative aspect-video w-full overflow-hidden bg-gray-800">
                {isMedia(article.featuredImage) && (
                  <img
                    src={article.featuredImage.url!}
                    alt={article.featuredImage.alt!}
                  />
                )}

                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 rounded bg-black/60 backdrop-blur-sm text-xs font-bold text-white border border-white/10 font-sans">
                    {isCategory(article.categories?.[0]) &&
                      article.categories?.[0].title}
                  </span>
                </div>
              </div>

              <div className="flex flex-col grow p-6">
                <div className="flex items-center gap-2 mb-3 text-xs font-medium text-text-secondary font-sans uppercase tracking-wider">
                  <time dateTime={article.publishedAt!}>
                    {new Date(article.publishedAt!).toLocaleDateString(
                      "en-US",
                      {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                      }
                    )}
                  </time>
                  <span className="text-primary">•</span>
                  {isUser(article.author) && <span>{article.author.name}</span>}
                </div>

                <h3 className="text-2xl font-bold leading-tight mb-3 text-white group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                <p className="text-text-secondary text-base leading-relaxed line-clamp-3 mb-6 grow font-sans font-normal">
                  {article.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-surface-border">
                  <div className="inline-flex items-center text-sm font-bold text-white group-hover:text-primary transition-colors gap-1 font-sans">
                    Read Article
                    <ArrowDown className="-rotate-90" />
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </section>

      <section className="mt-16 flex justify-center">
        <button className="bg-primary text-black hover:bg-white transition-colors duration-200 font-bold py-3 px-8 rounded-lg flex items-center gap-2">
          <span className="material-symbols-outlined">
            <RotateCw />
          </span>
          Load More Articles
        </button>
      </section>
    </main>
  );
}
