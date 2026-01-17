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
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50/50 px-4 py-2 shadow-sm mb-6 max-[380px]:px-2">
              <span className="h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.4)]" />
              <p className="text-[10px] sm:text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-amber-900">
                Social Proof
              </p>
              <span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.2)]" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 mb-6">
              Trusted by <span className="text-slate-900 underline decoration-blue-500 underline-offset-4">entrepreneurs and professionals</span>
              <br />
              who lived with <span className="text-slate-500">chronic pain for months or years</span>
            </h2>

            <p className="mt-6 text-lg sm:text-xl font-medium text-slate-600 leading-relaxed max-w-3xl mx-auto">
              and <span className="text-blue-700 font-bold">returned to comfortable daily movement</span>{" "}
              through structured, personalized recovery.
            </p>
          </FadeIn>
        )}

        {/* Placeholder for Testimonials */}
        <div className="mt-8 sm:mt-12">
          <FadeIn delay={0.2} className="rounded-3xl border border-indigo-100 bg-white/80 backdrop-blur-2xl p-5 sm:p-8 shadow-2xl shadow-blue-900/10 transition-all duration-500 hover:shadow-blue-900/20 hover:-translate-y-1">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {/* Fake Photo 1 */}
              <div className="aspect-[4/5] rounded-2xl bg-white border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-4 transition-transform hover:scale-[1.02] duration-300">
                <span className="text-slate-200 font-bold text-4xl mb-2">?</span>
                <p className="text-slate-400 text-xs text-center font-medium">Transformation #1</p>
              </div>
              {/* Fake Photo 2 */}
              <div className="aspect-[4/5] rounded-2xl bg-white border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-4 relative shadow-lg shadow-blue-500/10 transition-transform hover:scale-[1.02] duration-300">
                <span className="absolute -top-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full ring-1 ring-amber-400 shadow-md">AMAZING</span>
                <span className="text-slate-200 font-bold text-4xl mb-2">?</span>
                <p className="text-slate-400 text-xs text-center font-medium">Transformation #2</p>
              </div>
              {/* Fake Photo 3 */}
              <div className="hidden sm:flex aspect-[4/5] rounded-2xl bg-white border-2 border-dashed border-slate-200 flex-col items-center justify-center p-4 transition-transform hover:scale-[1.02] duration-300">
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
