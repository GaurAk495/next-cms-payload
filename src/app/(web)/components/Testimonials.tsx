import { BlockMap } from "../[lang]/page";
import { Quote } from "lucide-react";
import Image from "next/image";

function Testimonials({
  testimonials,
}: {
  testimonials: BlockMap["testimonial"];
}) {
  return (
    <section className="w-full py-16 sm:py-24  px-4 bg-[#0d1210]">
      <div className="mx-auto max-w-7xl flex flex-col items-center">
        <h2 className="mb-12 text-center text-2xl font-bold text-white md:text-3xl">
          {testimonials?.title}
        </h2>
        <div className="mb-8 flex flex-wrap justify-center gap-10 opacity-60 grayscale md:gap-16">
          <div className="flex items-center gap-2 text-xl font-bold text-white">
            <span className="material-symbols-outlined">
              <Image
                src="/testimonials/forest.svg"
                alt="Forest"
                width={24}
                height={24}
                className="icon-white"
              />
            </span>
            ACME Corp
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-white">
            <span className="material-symbols-outlined">
              <Image
                src="/testimonials/diamond.svg"
                alt="Diamond"
                width={24}
                height={24}
                className="icon-white"
              />
            </span>
            GemStone
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-white">
            <span className="material-symbols-outlined">
              <Image
                src="/testimonials/rocket_launch.svg"
                alt="Rocket"
                width={24}
                height={24}
                className="icon-white"
              />
            </span>
            SpaceFlow
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-white">
            <span className="material-symbols-outlined">
              <Image
                src="/testimonials/waves.svg"
                alt="Wave"
                width={24}
                height={24}
                className="icon-white"
              />
            </span>
            WaveTech
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-white">
            <span className="material-symbols-outlined">
              <Image
                src="/testimonials/forest.svg"
                alt="Forest"
                width={24}
                height={24}
                className="icon-white"
              />
            </span>
            GreenLeaf
          </div>
        </div>
        <div className="relative max-w-4xl rounded-xl border border-surface-border bg-surface-dark p-8 md:p-12 text-center">
          <span className="material-symbols-outlined absolute top-8 left-8 text-6xl text-surface-border opacity-50">
            <Quote className="text-primary rotate-180" />
          </span>
          <blockquote className="relative z-10 text-xl font-medium leading-relaxed text-white md:text-3xl">
            {testimonials?.quote}
          </blockquote>
          <div className="mt-8 flex flex-col items-center justify-center gap-2">
            <div
              className="h-12 w-12 rounded-full bg-cover bg-center"
              data-alt={`Portrait of ${testimonials?.author?.name}`}
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBygyUMSeOT2G-p4ZQGPOLtRvyoT1iwEo26bTQWsA32T_JCQteFNH0T-D9kKhXifoPbXufeYytpk_IPA9JqyzTLLnoYW5es1JHFJ9BNbl9BfSqM8Rl-GdTU5Wk49KbHzuw0VBCjU1qiyDpdI35iE5Vb4RXqJOorthoHRcf8xYz41rq3rFUo3B2xzjAciD3FT2aSXjEqN4pTotQIjCi7XVdOe6pFxX6M7_9cEGkUAeEcPDkDJ6WO-8zY-D-wPtMgA153Lrm43CN5Wdn_')`,
              }}
            ></div>
            <div className="text-base font-bold text-white">
              {testimonials?.author?.name}
            </div>
            <div className="text-sm text-text-subtle">
              {testimonials?.author?.role}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
