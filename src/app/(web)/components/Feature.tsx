import Image from "next/image";
import { BlockMap } from "../[lang]/page";
import { Media } from "@/app/payload-types";

function Feature({ feature }: { feature: BlockMap["feature"] }) {
  return (
    <section className="w-full bg-background-dark py-20 px-4 border-t border-surface-border">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {feature?.title}
          </h2>
          <p className="mt-4 text-text-subtle max-w-2xl mx-auto">
            {feature?.description}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {feature?.cards?.map((card, index) => {
            const icon = card.icon as Media;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border border-surface-border bg-surface-dark p-8 transition-all hover:border-primary/50 hover:shadow-[0_0_30px_rgba(43,238,121,0.1)]"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-surface-border text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                  <Image
                    src={icon.url!}
                    alt={icon.alt!}
                    width={24}
                    height={24}
                  />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">
                  {card.title}
                </h3>
                <p className="text-text-subtle">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Feature;
