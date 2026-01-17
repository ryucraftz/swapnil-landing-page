// MeetCoachDeepesh.jsx
import React from "react";
import { BadgeCheck, Globe2, Users, Timer, Target, Sparkles } from "lucide-react";
import FadeIn from "./FadeIn";

export default function MeetCoachDeepesh() {
  return (
    <section className="relative bg-transparent py-12 sm:py-16 overflow-hidden">
      {/* soft accents */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-28 right-0 h-72 w-72 rounded-full bg-amber-600/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto">
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white mb-4">
            Meet Your Coach <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Deepesh</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400">
            <span className="font-semibold text-slate-200">
              I work exclusively with working fathers who want to lose fat, regain energy, and feel strong again without sacrificing their family or career.
            </span>
          </p>
        </FadeIn>

        {/* Main layout */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* LEFT: Photo card */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.2} className="relative h-full rounded-3xl border border-slate-800 bg-slate-900/60 p-3 sm:p-4 shadow-2xl backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800 h-[400px] flex items-center justify-center">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                <p className="text-slate-500 font-medium relative z-10">Coach Photo Placeholder</p>

                {/* Top tags */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full bg-black/70 backdrop-blur px-3 py-1.5 border border-white/10 shadow-sm">
                    <BadgeCheck className="h-4 w-4 text-blue-400" />
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      ISSA Certified Coach
                    </span>
                  </div>

                  <div className="hidden sm:inline-flex items-center gap-2 rounded-full bg-amber-400 px-3 py-1.5 border border-amber-300 shadow-sm">
                    <Sparkles className="h-4 w-4 text-black" />
                    <span className="text-xs sm:text-sm font-bold text-black">
                      IRON DAD CLUB™
                    </span>
                  </div>
                </div>
              </div>

              {/* Removed duplicated tags */}

              <div className="mt-4 text-center">
                <p className="text-lg sm:text-xl font-extrabold text-white">
                  Deepesh
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  Fitness Coach &amp; Nutritionist
                </p>

                {/* stats */}
                <div className="mt-4">
                  <div className="grid grid-cols-2 gap-2 rounded-2xl bg-slate-950/50 backdrop-blur border border-white/5 p-3 shadow-inner text-left">
                    <MiniStatOverlay
                      icon={<Users className="h-4 w-4" />}
                      label="1200+ Transformations"
                    />
                    <MiniStatOverlay
                      icon={<Timer className="h-4 w-4" />}
                      label="8+ Years Coaching"
                    />
                    <MiniStatOverlay
                      icon={<Target className="h-4 w-4" />}
                      label="Specialised in coaching busy dads"
                    />
                    <MiniStatOverlay
                      icon={<Globe2 className="h-4 w-4" />}
                      label="Clients across 8+ countries"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT: Story + Expertise */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.4} className="h-full rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 shadow-xl backdrop-blur-xl">
              <div className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-4 sm:p-5">
                <p className="text-sm font-bold tracking-[0.18em] uppercase text-amber-500">
                  The story
                </p>

                {/* ✅ UPDATED STORY */}
                <div className="mt-3 space-y-3 text-slate-300 leading-relaxed">
                  <p>
                    <span className="font-bold text-white">IRON DAD CLUB™</span> exists because most fitness plans
                    are built for young, single people with unlimited time.
                  </p>

                  <p>
                    This system is built for fathers with jobs, stress, responsibilities, and real lives.
                  </p>
                </div>
              </div>

              <div className="mt-7">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <h4 className="text-sm font-bold tracking-[0.22em] uppercase text-blue-400">
                    Expertise &amp; Experience
                  </h4>
                  <span className="rounded-full bg-amber-500/10 border border-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-400">
                    Built for working fathers
                  </span>
                </div>

                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Bullet>My name is Deepesh</Bullet>
                  {/* Keeping some existing bullets or simplifying */}
                  <Bullet>Specialised in coaching working fathers</Bullet>
                  <Bullet>No crash dieting</Bullet>
                  <Bullet>No long gym sessions</Bullet>
                </ul>
              </div>

              <div className="mt-7 rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800 to-slate-900 p-4 shadow-lg">
                <p className="text-sm sm:text-base font-extrabold text-white">
                  No extremes. No guesswork.
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  Just a simple system you can follow alongside work + family — and actually sustain.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniStatOverlay({ icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/5 px-2.5 py-2 hover:bg-white/10 transition-colors">
      <span className="text-amber-400">{icon}</span>
      <span className="text-xs font-semibold text-slate-300 leading-snug">
        {label}
      </span>
    </div>
  );
}

function Bullet({ children }) {
  return (
    <li className="flex items-start gap-2 rounded-2xl border border-slate-700/50 bg-slate-800/30 px-3 py-3 hover:border-slate-600 transition-colors">
      <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-500 shrink-0 shadow-[0_0_8px_#3b82f6]" />
      <span className="text-sm sm:text-base text-slate-300 leading-snug">
        {children}
      </span>
    </li>
  );
}
