import { Metadata } from "next";
import { notFound } from "next/navigation";
import { LANGUAGES, localesHomeData } from "../locales/getData";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!LANGUAGES.map((lang) => lang.code).includes(lang)) {
    return {
      title: "FastCMS — Build high-performance websites with a modern CMS",
      description:
        "FastCMS lets teams create SEO-optimized, multi-language websites that load fast. Headless CMS + Next.js — deploy in minutes.",
    };
  }
  const data = localesHomeData[lang as keyof typeof localesHomeData];
  return {
    title: data.hero.title.part1 + " " + data.hero.title.highlight,
    description: data.hero.description,
    keywords: ["nextjs", "app-router", "seo"],
    applicationName: "NexuxCMS",
    authors: [{ name: "BuildCode Dev", url: "https://buildkube.com" }],
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      title: "NexuxCMS — Home",
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
      title: "NexuxCMS — Home",
      description: "A short CMS description",
      images: ["https://nexuscms.com/twitter-image.jpg"],
      site: "@nexuscms",
    },
  };
}

async function page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!LANGUAGES.map((lang) => lang.code).includes(lang)) {
    return notFound();
  }
  const data = localesHomeData[lang as keyof typeof localesHomeData];
  return (
    <>
      <Hero hero={data.hero} />
      <Feature feature={data.feature} />
      <Testimonials testimonials={data.testimonials} />
      <CTA cta={data.cta} />
    </>
  );
}

export default page;
