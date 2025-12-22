// FitDadTimelineBlueprint.jsx
import React, { useEffect, useRef, useState } from "react";


const DEFAULT_DATA = {
  headingTop: "WHY THIS SYSTEM WORKS",
  headingBottom: "(And What You Get)",
  sub1: "This isn’t another diet or workout plan.",
  sub2:
    "It’s a personalized, lifestyle-based transformation system for parents and busy adults who want results that last.",
  listTitle: "Inside the FitDad Transformation Blueprint, You Get:",
  items: [
    "Personalized fat-loss system",
    "20–30 min home workouts",
    "Weekly 1-on-1 coaching",
    "Daily accountability & support",
    "Personalized Indian nutrition strategy",
    "Sleep & habit optimization",
    "Long-term health roadmap",
    "Outside eating & social life playbook",
    "Support for BP & blood sugar management",
  ],
  footer:
    "Built using science-backed principles followed by elite-level transformations.",
};

function DotIcon() {
  return (
    <span
      className="relative inline-flex h-6 w-6 items-center justify-center"
      aria-hidden="true"
    >
      <span className="absolute inset-0 rounded-full bg-blue-600/20 blur-[1px]" />
      <span className="h-3 w-3 rounded-full bg-blue-600 ring-4 ring-blue-50" />
    </span>
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
    <section className="relative w-full overflow-hidden bg-white">
      {/* background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute top-24 -right-24 h-96 w-96 rounded-full bg-sky-200/35 blur-3xl" />
        <div className="absolute bottom-[-160px] left-1/3 h-[520px] w-[520px] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.11)_1px,transparent_0)] [background-size:18px_18px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:py-16">
        {/* header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            <span className="block">{data.headingTop}</span>
            <span className="block text-blue-700">{data.headingBottom}</span>
          </h2>

          <p className="mt-4 text-base font-semibold text-slate-900 sm:text-lg">
            {data.sub1}
          </p>
          <p className="mt-2 text-base leading-relaxed text-slate-600">
            {data.sub2}
          </p>
        </div>

        {/* content */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-start">
          {/* left */}
          <div className="lg:col-span-4">
            <div className="rounded-3xl border border-blue-100 bg-white/70 p-6 shadow-sm backdrop-blur lg:sticky lg:top-6">
              <p className="text-sm font-extrabold text-slate-900">
                {data.listTitle}
              </p>

              <div className="mt-5 rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50 to-white p-4">
                <p className="text-sm leading-relaxed text-slate-700">
                  {data.footer}
                </p>
              </div>
            </div>
          </div>

          {/* right: timeline */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur">
              <ol className="relative">
                {/* spine */}
                <div
                  aria-hidden="true"
                  className="absolute left-[22px] top-0 h-full w-[2px] bg-gradient-to-b from-blue-200 via-slate-200 to-transparent"
                />

                {items.map((item, idx) => {
                  const n = String(idx + 1).padStart(2, "0");
                  const show = visible[idx];
                  const isLast = idx === items.length - 1;

                  return (
                    <li key={`${item}-${idx}`} className="relative pl-12 sm:pl-14">
                      {/* DOT moved OUTSIDE the card so it never overlaps on mobile */}
                      <div className="absolute left-[22px] top-6 z-10 -translate-x-1/2">
                        <DotIcon />
                      </div>

                      <div
                        ref={(el) => (itemRefs.current[idx] = el)}
                        data-idx={idx}
                        className={[
                          "relative z-20 flex items-start gap-3 sm:gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm",
                          "transition-all duration-700 ease-out will-change-transform",
                          "hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md",
                          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
                        ].join(" ")}
                      >
                        <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-sm font-extrabold text-white shadow-sm">
                          {n}
                        </div>

                        <div className="min-w-0">
                          <p className="text-sm font-extrabold text-slate-900 sm:text-base">
                            {item}
                          </p>
                        </div>
                      </div>

                      {!isLast && <div className="h-3" />}
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
