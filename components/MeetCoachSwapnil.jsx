import React from "react";
import { BadgeCheck, Globe2, Users, Timer, Target, Sparkles } from "lucide-react";
import FadeIn from "./FadeIn";

export default function MeetCoachSwapnil() {
  return (
    <section className="relative bg-transparent py-12 sm:py-16 overflow-hidden">
      {/* Minimalist no background accents */}

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto">
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 mb-4">
            Meet Your Coach <span className="text-slate-900 underline decoration-teal-500 underline-offset-4">Swapnil</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600">
            <span className="font-semibold text-slate-800">
              I work with entrepreneurs and professionals who are tired of managing pain and want to fix it properly.
            </span>
          </p>
        </FadeIn>

        {/* Main layout */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* LEFT: Photo card */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.2} className="relative h-full rounded-3xl border border-indigo-100 bg-white/80 backdrop-blur-2xl p-3 sm:p-4 shadow-2xl shadow-blue-900/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-900/20 hover:border-blue-300 group">
              <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 h-[300px] sm:h-[400px] flex items-center justify-center transition-colors group-hover:bg-blue-50/30">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:24px_24px]" />

                <p className="text-slate-400 font-medium relative z-10">Coach Photo Placeholder</p>

                {/* Top tags */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 border border-slate-200 shadow-sm ring-1 ring-slate-100">
                    <BadgeCheck className="h-4 w-4 text-amber-500" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      Certified Coach
                    </span>
                  </div>

                  <div className="hidden sm:inline-flex items-center gap-2 rounded-full bg-teal-600 px-3 py-1.5 border border-teal-700 shadow-sm">
                    <Sparkles className="h-4 w-4 text-white" />
                    <span className="text-xs sm:text-sm font-bold text-white">
                      The Pain Reset 90™
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="text-lg sm:text-xl font-extrabold text-slate-900">
                  Swapnil
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Movement Recovery Specialist
                </p>

                {/* stats */}
                <div className="mt-4">
                  <div className="grid grid-cols-2 gap-2 rounded-2xl bg-slate-50 border border-slate-100 p-2 sm:p-3 shadow-inner text-left">
                    <MiniStatOverlay
                      icon={<Users className="h-4 w-4" />}
                      label="Entrepreneurs & Professionals"
                    />
                    <MiniStatOverlay
                      icon={<Timer className="h-4 w-4" />}
                      label="Fix Root Causes"
                    />
                    <MiniStatOverlay
                      icon={<Target className="h-4 w-4" />}
                      label="Personalized Recovery"
                    />
                    <MiniStatOverlay
                      icon={<Globe2 className="h-4 w-4" />}
                      label="Online Sessions"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT: Story + Expertise */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.4} className="h-full rounded-3xl border border-indigo-100 bg-white/80 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl shadow-blue-900/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-900/20 hover:border-blue-300 group">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5 transition-colors group-hover:bg-blue-50/30 group-hover:border-blue-100">
                <p className="text-sm font-bold tracking-[0.18em] uppercase text-slate-500 group-hover:text-blue-600 transition-colors">
                  The story
                </p>

                {/* ✅ UPDATED STORY */}
                <div className="mt-3 space-y-3 text-slate-600 leading-relaxed">
                  <p>
                    I created <span className="font-bold text-slate-900">The Pain Reset 90™</span> because most pain solutions treat symptoms while ignoring faulty movement patterns.
                  </p>

                  <p>
                    This is not fitness. This is one-on-one movement recovery built around your body, your history, and your lifestyle.
                  </p>
                </div>
              </div>

              <div className="mt-7">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <h4 className="text-sm font-bold tracking-[0.22em] uppercase text-slate-800">
                    Expertise &amp; Experience
                  </h4>
                  <span className="rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
                    Root-Cause Assessment
                  </span>
                </div>

                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Bullet>My name is Swapnil</Bullet>
                  <Bullet>Fix chronic joint pain</Bullet>
                  <Bullet>No medication or surgery</Bullet>
                  <Bullet>Move comfortably again</Bullet>
                </ul>
              </div>

              <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                <p className="text-sm sm:text-base font-extrabold text-slate-800">
                  No generic routines.
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Just a system that corrects what’s causing the pain.
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
    <div className="flex items-center gap-1.5 sm:gap-2 rounded-xl border border-slate-200 bg-white/60 px-2 py-1.5 sm:px-2.5 sm:py-2 hover:bg-white transition-colors shadow-sm">
      <span className="text-amber-500 shrink-0">{icon}</span>
      <span className="text-[10px] sm:text-xs font-semibold text-slate-700 leading-snug">
        {label}
      </span>
    </div>
  );
}

function Bullet({ children }) {
  return (
    <li className="flex items-start gap-2 rounded-2xl border border-slate-200 bg-white/50 px-3 py-3 hover:border-slate-300 transition-colors">
      <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-400 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
      <span className="text-sm sm:text-base text-slate-700 leading-snug">
        {children}
      </span>
    </li>
  );
}
