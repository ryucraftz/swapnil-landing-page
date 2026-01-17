import React from "react";
import FadeIn from "./FadeIn";

const DEFAULT_DATA = {
  headingTop: "WHAT YOU WILL GET",
  headingBottom: "",
  sub1: "A complete system to fix chronic pain at the root.",
  sub2: "",
  listTitle: "Inside The Pain Reset 90™",
  items: [
    {
      title: "1:1 Root-Cause Assessment",
      desc: "So YOU know exactly what’s creating your pain",
    },
    {
      title: "Personalized Movement Recovery Plan",
      desc: "So YOU stop doing generic routines that make pain worse",
    },
    {
      title: "Weekly Private Online Sessions",
      desc: "So YOU recover safely with expert guidance",
    },
    {
      title: "Flare-Up Support & Corrections",
      desc: "So YOU never feel stuck or unsure",
    },
    {
      title: "Structured Progression to Strength",
      desc: "So YOU move confidently without relapse",
    },
  ],
  footer:
    "Built for entrepreneurs and professionals who need results without the risk.",
};

function BentoCard({ item, idx, className = "", dark = false }) {
  const n = String(idx + 1).padStart(2, "0");

  return (
    <FadeIn delay={idx * 0.1} className={`relative group overflow-hidden rounded-[2rem] p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${className} ${dark ? 'shadow-2xl shadow-slate-900/20' : 'shadow-lg shadow-slate-200/50 border'}`}>
      {/* Number Watermark */}
      <span className={`absolute -right-4 -top-8 text-[8rem] font-serif font-black leading-none opacity-5 select-none transition-transform duration-700 group-hover:scale-110 ${dark ? 'text-white' : 'text-slate-900'}`}>
        {n}
      </span>

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="mb-4">
          <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold mb-4 ${dark ? 'bg-teal-500 text-white' : 'bg-slate-100 text-slate-700'}`}>
            {n}
          </div>

          <h3 className={`text-xl sm:text-2xl font-bold mb-2 font-display ${dark ? 'text-white' : 'text-slate-900'}`}>
            {item.title}
          </h3>
        </div>

        <p className={`text-sm sm:text-base font-medium leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
          {item.desc}
        </p>
      </div>

      {/* Hover Gradient Overlay */}
      {!dark && (
        <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
    </FadeIn>
  );
}

export default function FitDadTimelineBlueprint({ data = DEFAULT_DATA }) {
  const items = data.items || [];

  return (
    <section className="relative w-full py-16 sm:py-24 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-r from-teal-500/5 via-purple-500/5 to-amber-500/5 blur-3xl -z-10 rounded-full opacity-70" />

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Header - Centered & Compact */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 font-headings">
            {data.listTitle}
          </h2>
          <p className="text-lg sm:text-xl font-medium text-slate-600">
            {data.sub1}
          </p>
        </FadeIn>

        {/* BENTO GRID LAYOUT - Shorter & Creative */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 sm:gap-6 auto-rows-fr">

          {/* Item 1: Large Feature (Span 3) */}
          <BentoCard
            item={items[0]}
            idx={0}
            className="md:col-span-3 bg-slate-900 text-white"
            dark
          />

          {/* Item 2: Compact (Span 3) */}
          <BentoCard
            item={items[1]}
            idx={1}
            className="md:col-span-3 bg-white border-teal-100"
          />

          {/* Item 3: Tall/Vertical (Span 2) */}
          <BentoCard
            item={items[2]}
            idx={2}
            className="md:col-span-2 bg-white border-slate-100"
          />

          {/* Item 4: Tall/Vertical (Span 2) */}
          <BentoCard
            item={items[3]}
            idx={3}
            className="md:col-span-2 bg-gradient-to-br from-teal-50 to-emerald-50 border-teal-200"
          />

          {/* Item 5: Feature End (Span 2) */}
          <BentoCard
            item={items[4]}
            idx={4}
            className="md:col-span-2 bg-white border-amber-100"
          />
        </div>

        {/* Footer Note */}
        <FadeIn delay={0.6} className="mt-12 text-center">
          <p className="inline-block px-6 py-2 rounded-full bg-white/50 backdrop-blur border border-slate-200 text-sm font-semibold text-slate-500 italic">
            "{data.footer}"
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
