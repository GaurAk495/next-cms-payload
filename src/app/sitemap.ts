import { MetadataRoute } from "next";
import { LANGUAGES } from "./(web)/locales/data";
import { Post } from "./payload-types";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL!;
  const languages = LANGUAGES.map((l) => l.code);

  const sitemap: MetadataRoute.Sitemap = [];

  /* ----------------------------------
     Static localized pages
     (/en, /de, /es, etc.)
  ----------------------------------- */

  for (const lang of languages) {
    sitemap.push(
      {
        url: `${baseUrl}/${lang}`,
        changeFrequency: "yearly",
        priority: 1,
      },
      {
        url: `${baseUrl}/${lang}/contact`,
        changeFrequency: "yearly",
        priority: 0.6,
      },
      {
        url: `${baseUrl}/${lang}/blog`,
        changeFrequency: "weekly",
        priority: 0.8,
      }
    );
  }

  /* ----------------------------------
     Localized blog posts (Payload)
  ----------------------------------- */

  for (const lang of languages) {
    const res = await fetch(
      `${baseUrl}/api/posts?locale=${lang}&draft=false&limit=1000`,
      { next: { revalidate: 3600 } }
    );

    const { docs } = (await res.json()) as { docs: Post[] };

    for (const post of docs) {
      sitemap.push({
        url: `${baseUrl}/${lang}/blog/${post.slug}`,
        lastModified: new Date(post.updatedAt),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return sitemap;
}
