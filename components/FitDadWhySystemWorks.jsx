import React, { useRef } from "react";
import FadeIn from "./FadeIn";

const DEFAULT_DATA = {
  headingTop: "WHAT YOU WILL GET",
  headingBottom: "",
  sub1: "A complete system to fix chronic pain at the root.",
  listTitle: "Inside The Pain Reset 90™",
  items: [
    {
      title: "1:1 Root-Cause Assessment",
      desc: "So YOU know exactly why you're in pain.",
    },
    {
      title: "Personalized Movement Plan",
      desc: "Stop doing generic routines that hurt.",
    },
    {
      title: "Weekly Private Sessions",
      desc: "Recover safely with expert guidance.",
    },
    {
      title: "Flare-Up Support",
      desc: "Never feel stuck or unsure what to do.",
    },
    {
      title: "Strength Progression",
      desc: "Move confidently without relapse.",
    },
  ],
  footer: "Built for entrepreneurs & professionals.",
};

function Card({ item, idx }) {
  const n = String(idx + 1).padStart(2, "0");

  return (
    <div className="relative flex-none w-[85vw] sm:w-auto sm:flex-1 group rounded-3xl bg-white p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between snap-center h-full min-h-[280px] sm:min-h-[320px]">
      {/* Number (Background) */}
      <span className="absolute right-4 top-2 text-8xl font-serif font-black text-slate-100/50 select-none -z-10 group-hover:text-teal-50 transition-colors duration-500">
        {n}
      </span>

      <div>
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-50 text-teal-600 font-bold mb-6 text-lg border border-teal-100">
          {n}
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 font-display leading-tight">
          {item.title}
        </h3>
      </div>

      <p className="text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-4 mt-auto">
        <span className="text-amber-500 font-bold mr-2">→</span>
        {item.desc}
      </p>

      {/* Active Indicator Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
  );
}

export default function FitDadTimelineBlueprint({ data = DEFAULT_DATA }) {
  const scrollContainer = useRef(null);

  return (
    <section className="relative w-full py-12 sm:py-24 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-slate-50/50 -z-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[400px] bg-teal-200/20 blur-[100px] -z-10 rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Compact Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <FadeIn>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 font-headings">
              {data.listTitle}
            </h2>
            <p className="text-lg font-medium text-slate-600">
              {data.sub1}
            </p>
          </FadeIn>
        </div>

        {/* CONTAINER: Flex Row on Desktop, Horizontal Scroll on Mobile */}
        {/* Desktop: Grid (5 cols) | Mobile: Flex (Overflow-x-scroll) */}
        <div
          ref={scrollContainer}
          className="flex gap-4 overflow-x-auto pb-8 sm:pb-0 snap-x snap-mandatory sm:grid sm:grid-cols-3 lg:grid-cols-5 sm:gap-6 sm:overflow-visible scrollbar-hide px-4 sm:px-0 -mx-4 sm:mx-0"
        >
          {/* Map Items */}
          {data.items.map((item, idx) => (
            <Card key={idx} item={item} idx={idx} />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center sm:hidden">
          <p className="text-xs text-slate-400 uppercase tracking-widest font-bold animate-pulse">
            ← Swipe to explore →
          </p>
        </div>

        <FadeIn delay={0.6} className="hidden sm:block mt-12 text-center">
          <p className="inline-block px-6 py-2 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-500 shadow-sm">
            "{data.footer}"
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
