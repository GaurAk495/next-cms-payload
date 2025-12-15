import { getPostBySlug, getPosts } from "@/app/(web)/lib/payload";
import { LANGUAGES, SupportedLanguages } from "@/app/(web)/locales/data";
import {
  ArrowDown,
  ArrowUpLeft,
  Bookmark,
  Link,
  Reply,
  Share,
  ThumbsUp,
} from "lucide-react";
import { Category, Media, User } from "@/app/payload-types";
import { formateDate } from "@/app/(web)/lib/utils";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { proseClass } from "../data";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; postslug: string }>;
}): Promise<Metadata> {
  const { lang, postslug } = await params;
  if (!LANGUAGES.map((lang) => lang.code).includes(lang)) {
    return {
      title: "Insights & Stories – Thoughts and Ideas on Building for the Web",
      description:
        "Read thoughts, lessons, and stories about building for the web, technology, and digital experiences in a simple and approachable way.",
    };
  }
  const postData = await getPostBySlug(postslug, lang as SupportedLanguages);
  const post = postData.docs[0];
  const featuredImage = post.featuredImage as Media;
  return {
    title: post.seo?.metaTitle,
    description: post.seo?.metaDescription,
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
      title: postData.docs[0].seo?.metaTitle!,
      description: postData.docs[0].seo?.metaDescription!,
      url: "https://nexuscms.com/",
      siteName: "NexuxCMS",
      images: [
        {
          url: featuredImage.url!,
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
      title: postData.docs[0].seo?.metaTitle!,
      description: postData.docs[0].seo?.metaDescription!,
      images: [featuredImage.url!],
      site: "@nexuscms",
    },
  };
}

export async function generateStaticParams() {
  const languages = LANGUAGES.map((lang) => lang.code as SupportedLanguages);

  const params: { lang: string; postslug: string }[] = [];

  for (const lang of languages) {
    const posts = await getPosts(lang);
    const docs = posts.docs;

    for (const doc of docs) {
      params.push({
        lang,
        postslug: doc.slug,
      });
    }
  }

  return params;
}

async function page({
  params,
}: {
  params: Promise<{ lang: string; postslug: string }>;
}) {
  const { lang, postslug } = await params;
  const postData = await getPostBySlug(postslug, lang as SupportedLanguages);

  const post = postData.docs[0];
  const category = post.categories as Category[];
  const author = post.author as User;
  const avatar = author.avatar as Media;
  const featuredImage = post.featuredImage as Media;
  return (
    <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 lg:px-8 py-24">
      <article className="flex flex-col items-center">
        <div className="w-full max-w-[960px] flex flex-col items-center gap-6 mb-8">
          <div className="flex flex-wrap justify-center gap-2 items-center text-sm">
            <a
              className="text-secondary-text hover:text-white transition-colors"
              href="#"
            >
              Home
            </a>
            <span className="text-secondary-text">/</span>
            <a
              className="text-secondary-text hover:text-white transition-colors"
              href="#"
            >
              Blog
            </a>
            <span className="text-secondary-text">/</span>
            <span className="text-primary font-medium">
              {category[0].title}
            </span>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/10 border border-primary/20 px-4">
            <p className="text-primary text-xs font-bold uppercase tracking-wider">
              {category[0].title}
            </p>
          </div>
          <h1 className="text-white text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] text-center max-w-4xl tracking-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full overflow-hidden border border-[#28392f]">
                <img
                  alt="Portrait of Sarah Jenkins smiling warmly"
                  className="h-full w-full object-cover"
                  data-alt="Portrait of Sarah Jenkins smiling warmly"
                  src={avatar.url!}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-sm font-medium">
                  {author.name}
                </span>
                <span className="text-secondary-text text-xs">
                  {author.position}
                </span>
              </div>
            </div>
            <div className="w-px h-8 bg-[#28392f]"></div>
            <div className="flex flex-col justify-center">
              <span className="text-secondary-text text-sm">
                {formateDate(post.publishedAt!)}
              </span>
              <span className="text-secondary-text text-xs">2 min read</span>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1080px] mb-12 relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-primary to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <img
            alt="Computer screen displaying code in a dark room with neon lighting"
            className="relative w-full h-auto aspect-video object-cover rounded-xl shadow-2xl border border-[#28392f]"
            data-alt="Computer screen displaying code in a dark room with neon lighting"
            src={featuredImage.url!}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full max-w-[1080px]">
          <aside className="hidden lg:flex lg:col-span-2 flex-col items-end pt-2">
            <div className="sticky top-32 flex flex-col gap-4">
              <p className="text-secondary-text text-xs font-bold uppercase tracking-wider mb-2 text-right w-full">
                Share
              </p>
              <button className="group flex h-10 w-10 items-center justify-center rounded-full bg-[#28392f] hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-white group-hover:text-background-dark text-[20px]">
                  <Share />
                </span>
              </button>
              <button className="group flex h-10 w-10 items-center justify-center rounded-full bg-[#28392f] hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-white group-hover:text-background-dark text-[20px]">
                  <Link />
                </span>
              </button>
              <button className="group flex h-10 w-10 items-center justify-center rounded-full bg-[#28392f] hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-white group-hover:text-background-dark text-[20px]">
                  <Bookmark />
                </span>
              </button>
              <div className="w-px h-12 bg-[#28392f] my-2 mx-auto"></div>
              <button className="group flex h-10 w-10 items-center justify-center rounded-full bg-transparent border border-[#28392f] hover:border-primary transition-colors">
                <span className="material-symbols-outlined text-secondary-text group-hover:text-primary text-[20px]">
                  <ThumbsUp />
                </span>
              </button>
            </div>
          </aside>
          <div className="col-span-1 lg:col-span-8">
            <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-p:text-[#e5e5e5] prose-p:leading-8 prose-p:font-light prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-white">
              <RichText data={post.content} className={proseClass} />
            </div>

            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-[#28392f]">
              <span className="text-sm text-secondary-text mr-2 self-center">
                Tags:
              </span>
              <a
                className="px-3 py-1 rounded-md bg-[#28392f] text-white text-sm hover:bg-primary hover:text-background-dark transition-colors"
                href="#"
              >
                React
              </a>
              <a
                className="px-3 py-1 rounded-md bg-[#28392f] text-white text-sm hover:bg-primary hover:text-background-dark transition-colors"
                href="#"
              >
                JavaScript
              </a>
              <a
                className="px-3 py-1 rounded-md bg-[#28392f] text-white text-sm hover:bg-primary hover:text-background-dark transition-colors"
                href="#"
              >
                Trends
              </a>
              <a
                className="px-3 py-1 rounded-md bg-[#28392f] text-white text-sm hover:bg-primary hover:text-background-dark transition-colors"
                href="#"
              >
                AI
              </a>
            </div>

            <div className="mt-12 p-8 bg-surface-dark rounded-xl border border-[#28392f] flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="shrink-0">
                <img
                  alt="Sarah Jenkins"
                  className="w-24 h-24 rounded-full object-cover ring-2 ring-primary/50"
                  data-alt="Sarah Jenkins portrait"
                  src={avatar.url!}
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-white text-xl font-bold mb-1">
                  {author.name}
                </h3>
                <p className="text-primary text-sm mb-3">{author.position}</p>
                <p className="text-secondary-text text-sm leading-relaxed mb-4">
                  {author.bio}
                </p>
                <div className="flex justify-center md:justify-start gap-4">
                  <a
                    className="text-white hover:text-primary transition-colors text-sm font-medium flex items-center gap-1"
                    href="#"
                  >
                    Follow on X
                    <span className="material-symbols-outlined text-[16px]">
                      <ArrowUpLeft className="rotate-y-180" />
                    </span>
                  </a>
                  <a
                    className="text-white hover:text-primary transition-colors text-sm font-medium flex items-center gap-1"
                    href="#"
                  >
                    LinkedIn
                    <span className="material-symbols-outlined text-[16px]">
                      <ArrowUpLeft className="rotate-y-180" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <section className="mt-16" id="comments">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                Comments
                <span className="text-base font-normal text-secondary-text">
                  (12)
                </span>
              </h3>
              <div className="bg-surface-dark p-6 rounded-xl border border-[#28392f] mb-10">
                <label className="block mb-2 text-sm font-medium text-white">
                  Join the discussion
                </label>
                <textarea
                  className="w-full bg-background-dark border border-[#28392f] rounded-lg p-4 text-white focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-y min-h-[100px]"
                  placeholder="Share your thoughts..."
                ></textarea>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-xs text-secondary-text">
                    Markdown is supported.
                  </p>
                  <button className="bg-primary text-background-dark font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-colors">
                    Post Comment
                  </button>
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                    JD
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-white font-bold text-sm">
                        John Doe
                      </span>
                      <span className="text-secondary-text text-xs">
                        2 hours ago
                      </span>
                    </div>
                    <p className="text-[#e5e5e5] text-sm leading-relaxed mb-2">
                      Great article! I think the section on Server Components is
                      particularly relevant. We've been experimenting with them
                      in our latest project and the performance gains are real.
                    </p>
                    <button className="text-secondary-text hover:text-white text-xs font-medium flex items-center gap-1 transition-colors">
                      <span className="material-symbols-outlined text-[14px]">
                        <Reply />
                      </span>
                      Reply
                    </button>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-linear-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-sm">
                    MK
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-white font-bold text-sm">
                        Mike K.
                      </span>
                      <span className="text-secondary-text text-xs">
                        5 hours ago
                      </span>
                    </div>
                    <p className="text-[#e5e5e5] text-sm leading-relaxed mb-2">
                      I'm still skeptical about the AI generation part. It feels
                      like we're just shifting the bug creation process from
                      manual to automated 😅
                    </p>
                    <button className="text-secondary-text hover:text-white text-xs font-medium flex items-center gap-1 transition-colors">
                      <span className="material-symbols-outlined text-[14px]">
                        reply
                      </span>
                      Reply
                    </button>
                    <div className="flex gap-4 mt-4 pt-4 border-t border-[#28392f]/50">
                      <div className="shrink-0 w-8 h-8 rounded-full overflow-hidden">
                        <img
                          alt="Sarah"
                          className="w-full h-full object-cover"
                          data-alt="Sarah Jenkins avatar"
                          src={avatar.url!}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-white font-bold text-sm">
                            {author.name}
                          </span>
                          <span className="bg-primary/20 text-primary text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">
                            Author
                          </span>
                          <span className="text-secondary-text text-xs">
                            4 hours ago
                          </span>
                        </div>
                        <p className="text-[#e5e5e5] text-sm leading-relaxed">
                          Haha, valid point Mike! That's exactly why the
                          "review-first" mentality is so critical. We can't
                          trust the output blindly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="hidden lg:block col-span-2"></div>
        </div>
      </article>
      <section className="mt-24 border-t border-[#28392f] pt-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Read Next</h2>
          <a
            className="text-primary hover:text-white transition-colors text-sm font-medium flex items-center gap-1"
            href="#"
          >
            View all posts
            <span className="material-symbols-outlined text-[18px]">
              <ArrowDown />
            </span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a className="group flex flex-col gap-4" href="#">
            <div className="overflow-hidden rounded-xl h-48 w-full border border-[#28392f]">
              <img
                alt="Futuristic neon console interface"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-alt="Futuristic neon console interface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzkyQioGG7k7YrXUmJDKvG-7Rs4dgwmeRWA8Zp0xI8ZJr_S9rmdLM8wtdMACBt9TJPfobL7iVeH-RHx1r4Y5k2rYXQvTZzDpYy_FMagfBQ4dw6YvFTybJS3ot6lAh_F5UH0JFob-TJpumCiq7lEjyyX8HLCo1SACAfaVBYB2rq618-KlbxL0rbRFt8DvPFSahvbEyCqn1GqXmCoa1MgZxIlT2MXdxluW32CVEMwUXNPrnQTMmxXqLXBQEEnqzYAsie7cIOZ_gCpUJJ"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-primary text-xs font-bold uppercase tracking-wider">
                Design
              </div>
              <h3 className="text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                Principles of Dark Mode UI Design
              </h3>
              <p className="text-secondary-text text-sm line-clamp-2">
                How to create accessible and beautiful dark themes for your
                applications without straining user eyes.
              </p>
            </div>
          </a>
          <a className="group flex flex-col gap-4" href="#">
            <div className="overflow-hidden rounded-xl h-48 w-full border border-[#28392f]">
              <img
                alt="Cybersecurity lock symbol glowing on a circuit board"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-alt="Cybersecurity lock symbol glowing on a circuit board"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3XNJ4SzlrkrXXfbCFBpOj8fpu1GsMGSDcv-UNjH5dEd3q7Jm034M1lir7IKPdSt0p3Grc8aZCdyEc-u04UelfP-K_0H9vFVK66KCsrd8ohllqr_WjBUrW0tjfqobTgCZ5upZEU4kigT8Z4bkcVh12whXkvIA8f0pw14_TRHJhB0UuYkfkqE1FU0A8ei5efgnYMPTnQNxd904Yl5qzhelv6jSkwhkFlQzjXaoDTzRsqS9dJfrivzS24vqMRVIiqVn93CPrgxofoJku"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-primary text-xs font-bold uppercase tracking-wider">
                Security
              </div>
              <h3 className="text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                Protecting Your API Keys in 2024
              </h3>
              <p className="text-secondary-text text-sm line-clamp-2">
                Best practices for managing environment variables and secrets in
                modern frontend frameworks.
              </p>
            </div>
          </a>
          <a className="group flex flex-col gap-4" href="#">
            <div className="overflow-hidden rounded-xl h-48 w-full border border-[#28392f]">
              <img
                alt="People collaborating in a modern tech office"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-alt="People collaborating in a modern tech office"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCGBuPp-wUlm5n2660o8yEYGYT3SGHdGjaY-o27worBQVhbrQSuvPgyQWqVz0jnLsEYQ9x8qwaNnSfdq33sEQMo7360gmJLws5JZsm9iyLX2RBmkwbYWW1tMgAPQ2_7b_Oj0DenKFIg6BwPknm-_VCDViaVQEF7mf1QnHRDwAlSpAOWm-xG--PTaTDVIbRr0Y5d0u-tzRM577w1mXJowm90q_mU6CbOUSVUY2nzYOR7yp4YedqOtImhEst_TfrBlzN3f54-qdKFpmw"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-primary text-xs font-bold uppercase tracking-wider">
                Career
              </div>
              <h3 className="text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                From Junior to Senior: The Soft Skills
              </h3>
              <p className="text-secondary-text text-sm line-clamp-2">
                Why technical ability is only half the battle when climbing the
                engineering ladder.
              </p>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}

export default page;
