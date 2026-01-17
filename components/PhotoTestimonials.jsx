import React from "react";
import FadeIn from "./FadeIn";

export default function PhotoTestimonials() {
  return (
    <section className="relative bg-transparent py-10 sm:py-16 overflow-hidden">
      {/* background accents */}
      <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-amber-600/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <FadeIn className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 backdrop-blur px-4 py-2 shadow-sm mb-6 max-[380px]:px-2">
            <span className="h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_10px_#f59e0b]" />
            <p className="text-[10px] sm:text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-600">
              Social Proof
            </p>
            <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 mb-6">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">working fathers</span>
            <br />
            who were <span className="text-slate-500">tired, overweight, and inconsistent</span>
          </h2>

          <p className="mt-6 text-lg sm:text-xl font-medium text-slate-600 leading-relaxed max-w-3xl mx-auto">
            and <span className="text-amber-600 font-bold">lost significant fat, regained energy, and built strength</span>{" "}
            <span className="hidden sm:inline"> </span>
            without crash dieting or long gym sessions.
          </p>
        </FadeIn>

        {/* Placeholder for Testimonials */}
        <div className="mt-8 sm:mt-12">
          <FadeIn delay={0.2} className="rounded-3xl border border-slate-200 bg-white/40 backdrop-blur-xl p-5 sm:p-8 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {/* Fake Photo 1 */}
              <div className="aspect-[4/5] rounded-2xl bg-white border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-4">
                <span className="text-slate-300 font-bold text-4xl mb-2">?</span>
                <p className="text-slate-400 text-xs text-center font-medium">Transformation #1</p>
              </div>
              {/* Fake Photo 2 */}
              <div className="aspect-[4/5] rounded-2xl bg-white border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-4 relative">
                <span className="absolute -top-3 bg-amber-400 text-black text-[10px] font-bold px-2 py-0.5 rounded-full ring-1 ring-amber-400">AMAZING</span>
                <span className="text-slate-300 font-bold text-4xl mb-2">?</span>
                <p className="text-slate-400 text-xs text-center font-medium">Transformation #2</p>
              </div>
              {/* Fake Photo 3 */}
              <div className="hidden sm:flex aspect-[4/5] rounded-2xl bg-white border-2 border-dashed border-slate-200 flex-col items-center justify-center p-4">
                <span className="text-slate-300 font-bold text-4xl mb-2">?</span>
                <p className="text-slate-400 text-xs text-center font-medium">Transformation #3</p>
              </div>
            </div>
            <p className="text-slate-500 font-medium text-sm text-center mt-6 italic">
              (Live client transformation photos will be uploaded here)
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="mt-6 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl p-4 sm:p-6 shadow-xl text-center">
            <p className="text-sm sm:text-base font-semibold text-slate-800">
              You’re not “too late.”
              <span className="text-amber-600 block sm:inline">
                {" "}
                You just need a system built for real life.
              </span>
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
