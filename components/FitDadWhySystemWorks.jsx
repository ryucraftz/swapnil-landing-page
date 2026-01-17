// FitDadTimelineBlueprint.jsx
import React, { useEffect, useRef, useState } from "react";
import FadeIn from "./FadeIn";

const DEFAULT_DATA = {
  headingTop: "WHAT YOU WILL GET",
  headingBottom: "",
  sub1: "Everything you need to lose fat and build strength without disrupting your life.",
  sub2: "",
  listTitle: "Inside the IRON DAD CLUB™, You Get:",
  items: [
    {
      title: "Complete Dad-Specific Assessment",
      desc: "So YOU get a plan built around your body, schedule, and stress",
    },
    {
      title: "Indian Fat Loss Nutrition Plan",
      desc: "So YOU lose belly fat while eating with your family",
    },
    {
      title: "20–30 Minute Home Workouts",
      desc: "So YOU stay consistent without exhausting your day",
    },
    {
      title: "Weekly 1:1 Coaching",
      desc: "So YOUR plan adapts as life changes",
    },
    {
      title: "Daily Accountability & Support",
      desc: "So YOU don’t fall off track during busy weeks",
    },
    {
      title: "Travel, Festival & Eating-Out Strategies",
      desc: "So fat loss continues even during real-life situations",
    },
  ],
  footer:
    "Built for fathers with jobs, stress, responsibilities, and real lives.",
};

function DotIcon() {
  return (
    <span
      className="relative inline-flex h-6 w-6 items-center justify-center"
      aria-hidden="true"
    >
      <span className="absolute inset-0 rounded-full bg-amber-500/20 blur-[2px]" />
      <span className="h-3 w-3 rounded-full bg-amber-500 ring-4 ring-amber-500/20" />
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
    <section className="relative w-full overflow-hidden bg-transparent">
      {/* background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="absolute top-24 -right-24 h-96 w-96 rounded-full bg-amber-600/10 blur-[100px]" />
        <div className="absolute bottom-[-160px] left-1/3 h-[520px] w-[520px] rounded-full bg-indigo-600/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:py-16">
        {/* header */}
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            <span className="block">{data.headingTop}</span>
            <span className="block text-amber-600">{data.headingBottom}</span>
          </h2>

          <p className="mt-4 text-base font-semibold text-slate-700 sm:text-lg">
            {data.sub1}
          </p>
          <p className="mt-2 text-base leading-relaxed text-slate-600">
            {data.sub2}
          </p>
        </FadeIn>

        {/* content */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-start">
          {/* left */}
          <div className="lg:col-span-4">
            <FadeIn delay={0.2} className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-xl backdrop-blur-xl lg:sticky lg:top-6">
              <p className="text-sm font-extrabold text-slate-500 uppercase tracking-wider">
                {data.listTitle}
              </p>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-4">
                <p className="text-sm leading-relaxed text-slate-500 italic">
                  {data.footer}
                </p>
              </div>
            </FadeIn>
          </div>

          {/* right: timeline */}
          <div className="lg:col-span-8">
            <FadeIn delay={0.4} className="rounded-3xl border border-slate-200 bg-white/40 p-6 shadow-lg backdrop-blur-md">
              <ol className="relative">
                {/* spine */}
                <div
                  aria-hidden="true"
                  className="absolute left-[22px] top-0 h-full w-[2px] bg-gradient-to-b from-amber-500/50 via-slate-300 to-transparent"
                />

                {items.map((item, idx) => {
                  const n = String(idx + 1).padStart(2, "0");
                  const show = visible[idx];
                  const isLast = idx === items.length - 1;

                  return (
                    <li key={idx} className="relative pl-12 sm:pl-14">
                      {/* DOT moved OUTSIDE the card so it never overlaps on mobile */}
                      <div className="absolute left-[22px] top-6 z-10 -translate-x-1/2">
                        <DotIcon />
                      </div>

                      <div
                        ref={(el) => (itemRefs.current[idx] = el)}
                        data-idx={idx}
                        className={[
                          "relative z-20 flex items-start gap-3 sm:gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-md",
                          "transition-all duration-700 ease-out will-change-transform",
                          "hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-amber-500/10 hover:bg-slate-50",
                          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
                        ].join(" ")}
                      >
                        <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-white text-sm font-extrabold text-amber-600 shadow-sm border border-slate-200">
                          {n}
                        </div>

                        <div className="min-w-0">
                          <p className="text-sm font-bold text-slate-900 sm:text-base">
                            {item.title}
                          </p>
                          <div className="mt-1 flex items-start gap-1 text-sm text-slate-600">
                            <span className="text-amber-600 font-bold">→</span>
                            <span>{item.desc}</span>
                          </div>
                        </div>
                      </div>

                      {!isLast && <div className="h-6" />}
                    </li>
                  );
                })}
              </ol>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
