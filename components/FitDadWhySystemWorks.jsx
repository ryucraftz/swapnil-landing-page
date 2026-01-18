import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import FadeIn from "./FadeIn";

const DEFAULT_DATA = {
  headingTop: "WHAT YOU WILL GET",
  headingBottom: "",
  sub1: "A complete system to fix chronic pain at the root.",
  listTitle: "The Pain Reset 90™ Roadmap",
  items: [
    {
      title: "1:1 Root-Cause Assessment",
      desc: "We map your pain history to find the hidden triggers.",
    },
    {
      title: "Personalized Movement Plan",
      desc: "Stop guessing. Get a routine strictly for YOUR body.",
    },
    {
      title: "Weekly Private Sessions",
      desc: "Expert eyes on your form to ensure safe recovery.",
    },
    {
      title: "Flare-Up Support",
      desc: "Immediate course-correction so you never regress.",
    },
    {
      title: "Strength Progression",
      desc: "Rebuild your durability to live pain-free forever.",
    },
  ],
  footer: "Built for entrepreneurs & professionals.",
};

const Trunk = ({ items }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none">
      {/* Central SVG Trunk */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 50% 0 L 50% 100%"
          fill="none"
          stroke="url(#trunk-gradient)"
          strokeWidth="4"
          strokeLinecap="round"
          style={{ pathLength: scrollYProgress }}
          className="hidden md:block"
        />
        {/* Mobile Trunk (Left aligned) */}
        <motion.path
          d="M 20px 0 L 20px 100%"
          fill="none"
          stroke="url(#trunk-gradient)"
          strokeWidth="4"
          strokeLinecap="round"
          style={{ pathLength: scrollYProgress }}
          className="md:hidden"
        />

        <defs>
          <linearGradient id="trunk-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="50%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default function FitDadTreeTimeline({ data = DEFAULT_DATA }) {
  return (
    <section className="relative w-full py-16 sm:py-24 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-slate-50/50 -z-20" />
      <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-teal-100/30 blur-[120px] -z-10 rounded-full" />

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <FadeIn>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 font-headings">
              {data.listTitle}
            </h2>
            <p className="text-lg sm:text-xl font-medium text-slate-600">
              {data.sub1}
            </p>
          </FadeIn>
        </div>

        {/* TREE CONTAINER */}
        <div className="relative">
          <Trunk items={data.items} />

          <div className="space-y-12 sm:space-y-0 relative z-10">
            {data.items.map((item, idx) => {
              const n = String(idx + 1).padStart(2, "0");
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className="relative md:grid md:grid-cols-2 md:items-center md:gap-12 group"
                >
                  {/* CENTRAL NODE (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-8 h-8 z-20">
                    <div className="w-4 h-4 rounded-full bg-teal-400 ring-4 ring-white shadow-lg group-hover:scale-125 group-hover:bg-amber-300 transition-all duration-500" />
                  </div>

                  {/* MOBILE NODE (Left side) */}
                  <div className="md:hidden absolute left-4 flex items-center justify-center w-8 h-8 z-20 -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full bg-teal-400 ring-4 ring-white shadow-lg" />
                  </div>

                  {/* LEFT SIDE CONTENT (Desktop Only - Even Items) */}
                  <div
                    className={`
                    hidden md:block 
                    pl-0 text-right
                    ${isLeft ? "opacity-100" : "opacity-0 pointer-events-none"} 
                  `}
                  >
                    {isLeft && (
                      <FadeIn delay={idx * 0.1}>
                        <div
                          className={`
                                relative bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-teal-50/50 
                                transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/10
                                group-hover:border-teal-200
                            `}
                        >
                          {/* Connector Line (Right side of card) */}
                          <div className="absolute top-1/2 -right-12 h-[2px] w-12 bg-teal-100 -z-10" />

                          <span className="text-5xl font-serif font-black text-teal-100/80 mb-2 block group-hover:text-amber-100 transition-colors">
                            {n}
                          </span>
                          <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">
                            {item.title}
                          </h3>
                          <p className="text-slate-600 leading-relaxed text-base">
                            {item.desc}
                          </p>
                        </div>
                      </FadeIn>
                    )}
                  </div>

                  {/* RIGHT SIDE CONTENT (Mobile: All Items | Desktop: Odd Items) */}
                  <div
                    className={`
                    pl-12 md:pl-0 md:text-left
                    ${isLeft ? "md:hidden" : "block"}
                  `}
                  >
                    <FadeIn delay={idx * 0.1}>
                      <div
                        className={`
                            relative bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-teal-50/50 
                            transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/10
                            group-hover:border-teal-200
                        `}
                      >
                        {/* Connector Line (Left side of card - Desktop Only) */}
                        <div className="hidden md:block absolute top-1/2 -left-12 h-[2px] w-12 bg-teal-100 -z-10" />

                        <span className="text-5xl font-serif font-black text-teal-100/80 mb-2 block group-hover:text-amber-100 transition-colors">
                          {n}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-base">
                          {item.desc}
                        </p>
                      </div>
                    </FadeIn>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <FadeIn delay={0.6} className="mt-20 text-center">
          <p className="inline-block px-6 py-2 rounded-full bg-white/50 backdrop-blur border border-slate-200 text-sm font-semibold text-slate-500 italic">
            "{data.footer}"
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
