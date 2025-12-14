import type { Metadata } from "next";
import { Spline_Sans } from "next/font/google";
import "./globals.css";
import { SupportedLanguages } from "../locales/data";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { getData } from "../lib/payload";
import { Navbar } from "@/app/payload-types";
import { Toaster } from "@/components/ui/sonner";
const splineSans = Spline_Sans({
  variable: "--font-spline",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FastCMS — Build high-performance websites with a modern CMS",

  description:
    "FastCMS lets teams create SEO-optimized, multi-language websites that load fast. Headless CMS + Next.js — deploy in minutes.",
  keywords: [
    "nexuscms",
    "cms",
    "content management system",
    "nextjs cms",
    "nextjs cms",
  ],
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

async function layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const header = (await getData(
    "navbar",
    lang as SupportedLanguages
  )) as Navbar;
  const footer = (await getData(
    "footer",
    lang as SupportedLanguages
  )) as Footer;
  return (
    <html lang={lang}>
      <body
        className={`${splineSans.className} antialiased bg-background-dark font-display text-white `}
      >
        <NavBar lang={lang} data={header} />
        {children}
        <Footer footer={footer} lang={lang} />
        <Toaster />
      </body>
    </html>
  );
}

export default layout;
