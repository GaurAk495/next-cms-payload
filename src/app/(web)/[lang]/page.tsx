import { Metadata } from "next";
import { notFound } from "next/navigation";
import { LANGUAGES, SupportedLanguages } from "../locales/data";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import { getData } from "../lib/payload";
import { Home } from "@/app/payload-types";

export function generateStaticParams() {
  return LANGUAGES.map((lang) => ({
    lang: lang.code,
  }));
}

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

  const data = (await getData("home", lang as SupportedLanguages)) as Home;
  return {
    title: data.title,
    description: data.description,
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

type HomeBlock = NonNullable<Home["layout"]>[number];

export type BlockMap = {
  hero?: Extract<HomeBlock, { blockType: "hero" }>;
  feature?: Extract<HomeBlock, { blockType: "feature" }>;
  testimonial?: Extract<HomeBlock, { blockType: "testimonial" }>;
  cta?: Extract<HomeBlock, { blockType: "cta" }>;
};

function mapHomeBlocks(layout: Home["layout"]): BlockMap {
  const result: BlockMap = {};

  for (const block of layout ?? []) {
    switch (block.blockType) {
      case "hero":
        result.hero = block;
        break;
      case "feature":
        result.feature = block;
        break;
      case "testimonial":
        result.testimonial = block;
        break;
      case "cta":
        result.cta = block;
        break;
    }
  }

  return result;
}

async function page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!LANGUAGES.map((lang) => lang.code).includes(lang)) {
    return notFound();
  }
  const home = (await getData("home", lang as SupportedLanguages)) as Home;
  const { hero, feature, testimonial, cta } = mapHomeBlocks(home.layout);
  return (
    <>
      {hero && <Hero hero={hero} />}
      {feature && <Feature feature={feature} />}
      {testimonial && <Testimonials testimonials={testimonial} />}
      {cta && <CTA cta={cta} />}
    </>
  );
}

export default page;
