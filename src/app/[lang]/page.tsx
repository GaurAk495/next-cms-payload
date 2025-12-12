import CTA from "@/components/CTA";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { localesHomeData } from "../locales/getData";

export const metadata: Metadata = {
  title: "FastCMS — Build high-performance websites with a modern CMS",
  description:
    "FastCMS lets teams create SEO-optimized, multi-language websites that load fast. Headless CMS + Next.js — deploy in minutes.",
};

const languages = ["en", "de", "es"];

async function page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!languages.includes(lang)) {
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
