// OurPromise.jsx
import React, { useEffect, useRef, useState } from "react";

/**
 * NEW look (not the previous card style):
 * - “Certificate / pledge” vibe with seal + paper fold
 * - Scroll reveal animation (no extra text added)
 * - Uses ONLY your data: title, line1, line2
 * - React + Vite + Tailwind ready
 */

const DEFAULT_DATA = {
  title: "Our Promise",
  line1: "I coach you until you hit your goal. No extra charge. No time limit.",
  line2: "Your success isn’t optional, it’s the system.",
};

function SealIcon({ className = "" }) {
  return (
    <svg
      className={`h-6 w-6 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2l8 4v7c0 5-3.4 9-8 9s-8-4-8-9V6l8-4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 12l2.4 2.4L15.8 9.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function OurPromise({ data = DEFAULT_DATA }) {
  const wrapRef = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.some((e) => e.isIntersecting);
        if (hit) setSeen(true);
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute top-24 -right-24 h-[520px] w-[520px] rounded-full bg-sky-200/35 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.10)_1px,transparent_0)] [background-size:18px_18px]" />
      </div>

      <div ref={wrapRef} className="relative mx-auto max-w-5xl px-4 py-10 sm:py-14">
        {/* “paper” */}
        <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
          {/* top ribbon */}
          <div aria-hidden className="h-2 w-full bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600" />

          {/* subtle paper texture */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(2,132,199,0.18)_1px,transparent_0)] [background-size:22px_22px]" />
          </div>

          {/* fold corner */}
          <div aria-hidden className="pointer-events-none absolute right-0 top-0">
            <div className="h-16 w-16 bg-gradient-to-bl from-slate-100 to-white" />
            <div className="absolute right-0 top-0 h-16 w-16 bg-[linear-gradient(135deg,transparent_50%,rgba(2,132,199,0.10)_50%)]" />
          </div>

          <div className="relative grid gap-6 p-6 sm:p-8 md:grid-cols-12 md:items-center">
            {/* left */}
            <div className="md:col-span-7">
              <h2
                className={[
                  "text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl",
                  "transition-all duration-700 ease-out",
                  seen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
                ].join(" ")}
              >
                {data.title}
              </h2>

              {/* animated underline (no extra text) */}
              <div className="mt-2">
                <svg
                  className="h-3 w-44"
                  viewBox="0 0 180 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8 C 35 2, 65 11, 95 6 C 120 2, 145 9, 177 4"
                    stroke="rgba(37,99,235,0.75)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    pathLength="100"
                    className={[
                      "transition-[stroke-dashoffset,opacity] duration-1000 ease-out",
                      seen ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                    style={{
                      strokeDasharray: 100,
                      strokeDashoffset: seen ? 0 : 100,
                    }}
                  />
                </svg>
              </div>

              <p
                className={[
                  "mt-5 text-lg font-extrabold leading-relaxed text-slate-900 sm:text-xl",
                  "transition-all duration-700 ease-out",
                  seen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
                ].join(" ")}
                style={{ transitionDelay: seen ? "120ms" : "0ms" }}
              >
                {/* highlight behind text */}
                <span className="relative inline">
                  <span
                    aria-hidden
                    className="absolute -inset-x-1 -inset-y-1 -z-10 rounded-xl bg-gradient-to-r from-blue-50 via-sky-50 to-white"
                  />
                  {data.line1}
                </span>
              </p>
            </div>

            {/* right: seal + statement */}
            <div className="md:col-span-5">
              <div
                className={[
                  "relative rounded-[24px] border border-blue-100 bg-gradient-to-b from-blue-50 to-white p-5 shadow-sm",
                  "transition-all duration-700 ease-out",
                  seen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
                ].join(" ")}
                style={{ transitionDelay: seen ? "240ms" : "0ms" }}
              >
                {/* seal */}
                <div className="absolute -right-4 -top-4">
                  <div className="relative grid place-items-center">
                    <div className="h-20 w-20 rounded-full bg-blue-600/10 blur-[1px]" />
                    <div className="absolute grid h-16 w-16 place-items-center rounded-full border border-blue-200 bg-white shadow-sm">
                      <div className="grid h-12 w-12 place-items-center rounded-full border-2 border-dashed border-blue-300 text-blue-700">
                        <SealIcon className="text-blue-700" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* quote marks (visual only) */}
                <div aria-hidden className="absolute left-4 top-3 text-5xl font-black text-blue-200">
                  “
                </div>

                <p className="relative pt-6 text-base font-extrabold leading-relaxed text-blue-900 sm:text-lg">
                  {data.line2}
                </p>

                <div aria-hidden className="mt-4 h-[2px] w-full bg-gradient-to-r from-blue-200 via-sky-200 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * { scroll-behavior: auto !important; }
        }
      `}</style>
    </section>
  );
}
