import type { MetadataRoute } from "next";
import { connectDB } from "./(web)/lib/mongo";
import { LANGUAGES } from "./(web)/locales/data";
import { Post } from "./(web)/lib/posts.model";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await connectDB();

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL!;
  const languages = LANGUAGES.map((l) => l.code);

  const sitemap: MetadataRoute.Sitemap = [];

  /* ----------------------------------
     Static localized pages
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
     Blog posts (slug is NOT localized)
  ----------------------------------- */

  const posts = await Post.find(
    {
      status: "published",
      publishedAt: { $lte: new Date() },
    },
    {
      slug: 1,
      updatedAt: 1,
    }
  ).lean();

  for (const post of posts) {
    for (const lang of languages) {
      sitemap.push({
        url: `${baseUrl}/${lang}/blog/${post.slug}`,
        lastModified: post.updatedAt,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return sitemap;
}
