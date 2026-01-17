// FitDadTimelineBlueprint.jsx
import React, { useEffect, useRef, useState } from "react";
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

function DotIcon({ active }) {
  return (
    <div className="relative flex items-center justify-center">
      <div className={`absolute inset-0 rounded-full bg-teal-400 opacity-20 blur-md transition-all duration-500 ${active ? "scale-150 opacity-40" : "scale-100"}`} />
      <span className={`relative inline-flex h-4 w-4 rounded-full ring-2 ring-white transition-all duration-500 ${active ? "bg-amber-400 scale-125" : "bg-teal-200"}`} />
    </div>
  );
}

export default function FitDadTimelineBlueprint({ data = DEFAULT_DATA }) {
  const items = data.items || [];

  const [visible, setVisible] = useState(() => items.map(() => false));
  const itemRefs = useRef([]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const isMobile = mq.matches;

    // Desktop/tablet: show all
    if (!isMobile) {
      setVisible(items.map(() => true));
      return;
    }

    // Mobile: reveal as scroll
    setVisible(items.map(() => false));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = Number(entry.target.getAttribute("data-idx"));
          if (Number.isNaN(idx)) return;

          setVisible((prev) => {
            if (prev[idx]) return prev;
            const next = [...prev];
            next[idx] = true;
            return next;
          });
        });
      },
      { threshold: 0.22, rootMargin: "0px 0px -18% 0px" }
    );

    itemRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [items]);

  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-24">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 left-0 w-full h-[500px] bg-gradient-to-b from-teal-50/0 via-teal-50/50 to-teal-50/0 -z-10" />

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Header */}
        <FadeIn className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 font-headings">
            {data.headingTop}
          </h2>
          <p className="text-lg sm:text-xl font-medium text-slate-600 max-w-2xl mx-auto">
            {data.sub1}
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">

          {/* Sticky Summary Card (Left) */}
          <div className="lg:col-span-4 lg:sticky lg:top-8">
            <FadeIn>
              <div className="rounded-3xl bg-slate-900 text-white p-8 shadow-2xl shadow-slate-900/20 relative overflow-hidden group">
                {/* Abstract Shapes */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-teal-500/30 transition-colors duration-700" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl -ml-10 -mb-10 group-hover:bg-amber-500/30 transition-colors duration-700" />

                <h3 className="text-xl font-bold uppercase tracking-wider mb-2 font-display">
                  The System
                </h3>
                <div className="h-1 w-12 bg-teal-500 rounded-full mb-6" />

                <p className="text-3xl font-serif font-medium leading-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-emerald-100">
                  {data.listTitle}
                </p>

                <p className="text-slate-400 text-sm leading-relaxed border-t border-slate-700 pt-6 italic">
                  "{data.footer}"
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Timeline (Right) */}
          <div className="lg:col-span-8 relative">
            {/* The Spine */}
            <div className="absolute left-[19px] sm:left-[27px] top-4 bottom-12 w-[3px] bg-gradient-to-b from-teal-500 via-emerald-400 to-transparent rounded-full opacity-30" />

            <div className="space-y-8 sm:space-y-12">
              {items.map((item, idx) => {
                const n = String(idx + 1).padStart(2, "0");
                const show = visible[idx];

                return (
                  <div
                    key={idx}
                    ref={(el) => (itemRefs.current[idx] = el)}
                    data-idx={idx}
                    className="relative pl-12 sm:pl-20"
                  >
                    {/* Node */}
                    <div className="absolute left-0 sm:left-2 top-0 sm:top-2 w-10 sm:w-14 flex justify-center z-10">
                      <DotIcon active={show} />
                    </div>

                    {/* Card */}
                    <div className={`
                        relative group rounded-2xl p-6 sm:p-8 
                        bg-white/60 backdrop-blur-md border border-white/50 shadow-lg shadow-teal-900/5
                        transition-all duration-700 ease-out
                        hover:bg-white hover:shadow-xl hover:shadow-teal-900/10 hover:border-teal-200/50 hover:-translate-y-1
                        ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}
                    `}>
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center">
                        {/* Number Badge */}
                        <div className="flex-shrink-0">
                          <span className="text-4xl sm:text-5xl font-black text-slate-100 group-hover:text-teal-50 transition-colors font-serif">
                            {n}
                          </span>
                        </div>

                        {/* Content */}
                        <div>
                          <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 font-display">
                            {item.title}
                          </h4>
                          <p className="text-slate-600 text-base sm:text-lg leading-relaxed group-hover:text-slate-700">
                            <span className="text-amber-500 font-bold mr-2">→</span>
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
