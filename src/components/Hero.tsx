import { localesHomeData } from "@/app/locales/getData";
import { ArrowDown, BookA } from "lucide-react";

const avatars = [
  {
    alt: "User avatar 1",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_16ejYmtyJMAwB8F4-X7rvNGpEilHN7A1pgk5UM_yN9oH3sQqWcl43qOMzTBi7rW4hNIMRW4YWIQSktVo924zzcN5rqtSxhOLP9_ZPahuEjulMZ26Dk--fWP_zUBoBRoheANStKPkd_YU7Oun1Bccmyn16s8FdTRjdGoyCDkmqzen_ZiWzFX_iqGfW2398ANFYDk8gHyQechNRluZ3AmiDjitEBxLqx5LV-18h6AQomlfs3kUDDBt4pzLYNQVjhVAI2D9oFpd4z73",
  },
  {
    alt: "User avatar 2",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7YqhBh_Yue5n0W8uSmdddOy8oGDGJ64AswOh88Hwxq7obo40bFz9_QvD3QFrqLlM0Wn1P6XahkSwPNCi_TzQ_Xxz7ma1163s6eZW4Nz_ex-C_5pFqeyRsfA5Vs31SBOJ-EuiGVcJd9vW_E-8rBeGWebgWbiNsxJ8kt9IXjW3pGrACZrH4GfPnSLbNMoU3JSVzrqNtid75CCsAVSrPTZM_uQktoQBRHMTbOrw0YftxnHffPcy4t2MaJ7RYE6q1xKSbb4PIK1arWef",
  },
  {
    alt: "User avatar 3",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBG1vjKvR8sUUPFayUwkdmZYnz39JRY4tx09qBh-WcflWoDcJQShS5WTkuq9OzntYmlsg7Vu8unLtTu6GvRblhP8voSBFrP41zO1_RqyuFewjWxlsMN2HmozqLf54DCAUD1dyYgV0iSEG58BgoUZ9G1gqQC0GvKpqnzC7MT8kYHyuRU-KLlf0p6JnJWlFiWCPN52uynxNkTcCHkWAZrZwcHEaPP-6weu9J7GgopJDc-Xa66dFj3L-eJMmllyy_-gNmbgCfg9HKA40Va",
  },
];

function Hero({ hero }: { hero: (typeof localesHomeData)["en"]["hero"] }) {
  return (
    <section className="min-h-screen relative w-full overflow-hidden pt-28 sm:pt-16 sm:pb-2 px-4 pb-10 bg-background-dark flex justify-center items-center">
      <div className="hero-glow"></div>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 md:flex-row">
        <div className="flex flex-1 flex-col items-center sm:items-start gap-6 z-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface-dark px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide text-white">
              {hero.badge}
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-balance text-white md:text-5xl lg:text-6xl">
            {hero.title.part1}
            <span className="text-primary"> {hero.title.highlight} </span>
            {hero.title.part2}
          </h1>
          <p className="max-w-xl text-lg text-text-subtle md:text-xl text-balance">
            {hero.description}
          </p>
          <div className="flex gap-4 pt-2 flex-col justify-start w-full sm:flex-row sm:justify-start sm:items-center ">
            <button className="group flex h-12 min-w-[160px] cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-6 text-base font-bold text-[#111814] hover:brightness-110 transition-all">
              <span>{hero.buttons.primary}</span>
              <span className="material-symbols-outlined text-sm font-bold">
                <ArrowDown className="group-hover:translate-x-1 transition-transform duration-200 rotate-270" />
              </span>
            </button>
            <button className="group flex h-12 min-w-[160px] cursor-pointer items-center justify-center gap-2 rounded-full border border-surface-border bg-transparent px-6 text-base font-bold text-white hover:bg-surface-border transition-colors">
              <span>{hero.buttons.secondary}</span>
              <span className="material-symbols-outlined text-sm">
                <BookA className="text-text-subtle group-hover:scale-105 transition-transform duration-200 " />
              </span>
            </button>
          </div>
          <div className="flex items-center gap-4 text-sm text-text-subtle pt-4">
            <div className="flex -space-x-2">
              {avatars.map((avatar, index) => (
                <div
                  key={index}
                  className="h-8 w-8 rounded-full bg-gray-600 border-2 border-background-dark bg-cover bg-center"
                  data-alt={avatar.alt}
                  style={{ backgroundImage: `url('${avatar.url}')` }}
                />
              ))}
            </div>
            <p>{hero.trustedBy}</p>
          </div>
        </div>

        <div className="hidden sm:flex flex-1 w-full max-w-lg lg:max-w-full z-10 justify-center lg:justify-end">
          <div className="relative overflow-hidden rounded-2xl border border-surface-border bg-surface-dark shadow-2xl transition-transform hover:scale-[1.01]">
            <img
              alt="Happy woman working efficiently on a laptop with a modern CMS interface"
              className="h-auto w-full max-w-[550px] object-cover"
              src="/hero_image.gif"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background-dark/80 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
