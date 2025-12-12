import { Mail, MapPin, Phone, SendHorizonal } from "lucide-react";
import { Metadata } from "next";
import { LANGUAGES, localeContactData } from "@/app/locales/getData";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!LANGUAGES.map((lang) => lang.code).includes(lang)) {
    return {
      title: "Contact Us — FastCMS",
      description:
        "Get in touch with the FastCMS team. Whether you need support, sales info, or partnership opportunities, we're here to help.",
    };
  }
  const data = localeContactData[lang as keyof typeof localeContactData];
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

async function page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!LANGUAGES.map((lang) => lang.code).includes(lang)) {
    return notFound();
  }
  const data = localeContactData[lang as keyof typeof localeContactData];
  return (
    <>
      <Contact data={data} />
    </>
  );
}

export default page;

function Contact({ data }: { data: (typeof localeContactData)["en"] }) {
  return (
    <main className="relative grow">
      <div className="absolute top-0 right-0 -z-10 h-full w-1/3 opacity-20 dark:opacity-10 bg-linear-to-bl from-primary to-transparent blur-3xl"></div>
      <section className=" overflow-hidden pt-32 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl text-balance font-display font-semibold tracking-tight sm:text-5xl lg:text-6xl mb-4">
              {data.hero.title.part1}{" "}
              <span className="text-primary">{data.hero.title.highlight}</span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">
              {data.hero.description}
            </p>
          </div>
        </div>
      </section>
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* <!-- Contact Form --> */}
            <ContactForm />
            {/* <!-- Contact Info Sidebar --> */}
            <div className="lg:col-span-5 xl:col-span-4 space-y-8">
              {/* <!-- Info Card --> */}
              <div className="rounded-2xl bg-surface-dark p-8 border border-primary/30">
                <h3 className="text-xl font-bold mb-6">{data.info.title}</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary">
                      <span className="material-symbols-outlined">
                        <Mail />
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">
                        {data.info.email.label}
                      </p>
                      <a
                        className="text-base font-semibold hover:text-primary transition-colors"
                        href={`mailto:${data.info.email.value}`}
                      >
                        {data.info.email.value}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary">
                      <span className="material-symbols-outlined">
                        <Phone />
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">
                        {data.info.phone.label}
                      </p>
                      <a
                        className="text-base font-semibold hover:text-primary transition-colors"
                        href={`tel:${data.info.phone.value}`}
                      >
                        {data.info.phone.value}
                      </a>
                      <p className="text-xs text-white mt-1">
                        {data.info.phone.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary">
                      <span className="material-symbols-outlined">
                        <MapPin />
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">
                        {data.info.visit.label}
                      </p>
                      <p className="text-base font-semibold">
                        {data.info.visit.value}
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="my-8 border-slate-200 dark:border-border-dark" />
                <div className="flex gap-4">
                  <Link
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111814] hover:bg-primary hover:text-slate-900 dark:hover:bg-primary dark:hover:text-slate-900 transition-all"
                    target="_blank"
                    href="#"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        clipRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                  <Link
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111814] hover:bg-primary hover:text-slate-900 dark:hover:bg-primary dark:hover:text-slate-900 transition-all"
                    target="_blank"
                    href="#"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </Link>
                  <Link
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111814] dark:bg-[#111814] hover:bg-primary hover:text-slate-900 dark:hover:bg-primary dark:hover:text-slate-900 transition-all"
                    target="_blank"
                    href="#"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        clipRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.373c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
              {/* <!-- Map --> */}
              <div className="h-64 w-full rounded-2xl overflow-hidden shadow-sm border border-primary/30 dark:border-border-dark relative bg-surface-dark group">
                <img
                  alt="Dark themed map showing Tech City location"
                  className="h-full w-full object-cover grayscale opacity-70 group-hover:opacity-60 transition-opacity duration-500"
                  data-location="Tech City"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu8W_vwoZtGvfct9s_gf-Ci7zuOvvTYmyDWayJ1UTRHUzrkVZkepD54A6y7EeSPFhSYN-czjfkQODE6JDnJNg6i2THRe39dHp_sGO1D_fhS6KHhc0r1Ofb5AKIZNao8whiG9chrIQHr7_5iXw4FpNxudC1MO0XCh0Qg-tP4EO4RX8TnVer_zIhBsnsL4ZqRxPQA8_C6qy-Rqn_mRYBZPMQn1hEWxAJniMtDr5YKINcaY6pWoEbAsOfxIN-yiA8UnzTwvTyNmXaWkDj"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-primary/90 rounded-full p-2 animate-bounce">
                    <span className="material-symbols-outlined text-black">
                      <MapPin />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactForm() {
  return (
    <div className="lg:col-span-7 xl:col-span-8">
      <div className="rounded-2xl  bg-surface-dark p-6 sm:p-10 shadow-sm border border-primary/30 dark:border-border-dark">
        <form action="#" className="space-y-8" method="POST">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                className="block text-sm font-medium text-slate-200"
                htmlFor="name"
              >
                Name
              </label>
              <div className="relative">
                <input
                  className="block w-full rounded-sm border-slate-300 dark:border-border-dark bg-[#111814] text-white shadow-sm focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary sm:text-sm py-3 px-4"
                  id="name"
                  name="name"
                  placeholder="Jane Doe"
                  type="text"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                className="block text-sm font-medium text-slate-200"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative">
                <input
                  className="block w-full rounded-sm border-slate-300 dark:border-border-dark bg-[#111814] text-white shadow-sm focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary sm:text-sm py-3 px-4"
                  id="email"
                  name="email"
                  placeholder="jane@example.com"
                  type="email"
                />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <label
              className="block text-sm font-medium text-slate-200"
              htmlFor="subject"
            >
              Subject
            </label>
            <div className="relative">
              <select
                className="block w-full rounded-sm border-slate-300 dark:border-border-dark bg-[#111814] text-white shadow-sm focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary sm:text-sm py-3 px-4"
                id="subject"
                name="subject"
              >
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Billing Question</option>
                <option>Partnership</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label
              className="block text-sm font-medium text-slate-200"
              htmlFor="message"
            >
              Message
            </label>
            <div className="relative">
              <textarea
                className="block w-full rounded-sm border-border-dark bg-[#111814] text-white shadow-sm focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary sm:text-sm py-3 px-4 resize-none"
                id="message"
                name="message"
                placeholder="Write your message here..."
                rows={6}
              ></textarea>
            </div>
          </div>
          <div className="pt-2">
            <button
              className="inline-flex w-full md:w-auto items-center justify-center rounded-sm bg-primary px-8 py-3.5 text-sm font-bold text-slate-900 shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200"
              type="submit"
            >
              Send Message
              <span className="material-symbols-outlined ml-2 text-[20px]">
                <SendHorizonal size={16} />
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
