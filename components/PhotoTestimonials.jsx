import React from "react";
import FadeIn from "./FadeIn";

export default function PhotoTestimonials({ hideHeader = false }) {
  return (
    <section className="relative bg-transparent py-10 sm:py-16 overflow-hidden">
      {/* minimal white theme */}

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        {!hideHeader && (
          <FadeIn className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm mb-6 max-[380px]:px-2">
              <span className="h-2 w-2 rounded-full bg-slate-900 shadow-[0_0_10px_rgba(15,23,42,0.2)]" />
              <p className="text-[10px] sm:text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-900">
                Social Proof
              </p>
              <span className="h-2 w-2 rounded-full bg-slate-400 shadow-[0_0_10px_rgba(148,163,184,0.2)]" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 mb-6">
              Trusted by <span className="text-slate-900 underline decoration-slate-300 underline-offset-4">entrepreneurs and professionals</span>
              <br />
              who lived with <span className="text-slate-500">chronic pain for months or years</span>
            </h2>

            <p className="mt-6 text-lg sm:text-xl font-medium text-slate-600 leading-relaxed max-w-3xl mx-auto">
              and <span className="text-slate-900 font-bold">returned to comfortable daily movement</span>{" "}
              through structured, personalized recovery.
            </p>
          </FadeIn>
        )}

        {/* Placeholder for Testimonials */}
        <div className="mt-8 sm:mt-12">
          <FadeIn delay={0.2} className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {/* Fake Photo 1 */}
              <div className="aspect-[4/5] rounded-2xl bg-slate-50 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-4">
                <span className="text-slate-200 font-bold text-4xl mb-2">?</span>
                <p className="text-slate-400 text-xs text-center font-medium">Transformation #1</p>
              </div>
              {/* Fake Photo 2 */}
              <div className="aspect-[4/5] rounded-2xl bg-white border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-4 relative">
                <span className="absolute -top-3 bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-full ring-1 ring-slate-900">AMAZING</span>
                <span className="text-slate-200 font-bold text-4xl mb-2">?</span>
                <p className="text-slate-400 text-xs text-center font-medium">Transformation #2</p>
              </div>
              {/* Fake Photo 3 */}
              <div className="hidden sm:flex aspect-[4/5] rounded-2xl bg-slate-50 border-2 border-dashed border-slate-200 flex-col items-center justify-center p-4">
                <span className="text-slate-200 font-bold text-4xl mb-2">?</span>
                <p className="text-slate-400 text-xs text-center font-medium">Transformation #3</p>
              </div>
            </div>
            <p className="text-slate-500 font-medium text-sm text-center mt-6 italic">
              (Live client transformation photos will be uploaded here)
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="mt-6 rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 shadow-xl text-center">
            <p className="text-sm sm:text-base font-semibold text-slate-800">
              You’re not “too late.”
              <span className="text-slate-600 block sm:inline">
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
