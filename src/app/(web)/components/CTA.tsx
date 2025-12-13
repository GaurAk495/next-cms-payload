import { BlockMap } from "../[lang]/page";
import React from "react";

function CTA({ cta }: { cta: BlockMap["cta"] }) {
  return (
    <section className="w-full px-4 py-20 bg-background-dark">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-linear-to-br from-primary via-[#1fa855] to-[#102217] p-10 text-center shadow-2xl md:p-20 relative">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"
          data-alt="Abstract geometric cube pattern"
        ></div>
        <h2 className="relative z-10 mb-6 text-4xl font-black text-[#111814] md:text-6xl tracking-tight">
          {cta?.title}
        </h2>
        <p className="relative z-10 mb-10 text-lg font-medium text-[#111814]/80 md:text-xl max-w-2xl mx-auto">
          {cta?.description}
        </p>
        <div className="relative z-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="h-14 min-w-[180px] rounded-full bg-[#111814] px-8 text-lg font-bold text-white transition-transform hover:scale-105 shadow-xl">
            {cta?.buttons?.primary}
          </button>
          <button className="h-14 min-w-[180px] rounded-full border-2 border-[#111814] px-8 text-lg font-bold text-[#111814] transition-colors hover:bg-[#111814]/10">
            {cta?.buttons?.secondary}
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
