import { motion } from "framer-motion";
import { BadgeCheck, Play, Star } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden py-12 lg:py-20">

      {/* 🎨 Creative Background: Noise + Deep Aurora */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#f8fafc] opacity-80 mix-blend-overlay"></div>
        {/* Noise Texture for Premium Feel */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] mix-blend-multiply pointer-events-none">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>

        {/* Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-400/20 rounded-full blur-[100px] animate-blob mix-blend-multiply" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-amber-300/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply" />
        <div className="absolute top-[20%] right-[20%] w-[400px] h-[400px] bg-emerald-300/20 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT: Editorial Typography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Floating Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full px-4 py-2 mb-8 shadow-sm ring-1 ring-slate-100">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700">Certified Expert Coach</span>
              <span className="w-px h-3 bg-slate-300 mx-1"></span>
              <span className="text-xs font-medium text-slate-500">400+ Transformations</span>
            </div>

            <h1 className="font-headings font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-slate-900 mb-6 tracking-tight">
              Fix chronic <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-500 relative inline-block">
                joint and body pain at the root
                {/* Creative Underline */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-teal-200/50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span> so YOU can move, sit, walk, and sleep comfortably again
              <br className="hidden lg:block my-2" />
              without <span className="italic font-serif text-amber-600 font-medium">medication, surgery, or injury risk</span>
            </h1>

            <p className="text-lg sm:text-lg text-slate-600 leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0 font-sans">
              Even if you’re an <span className="font-bold text-slate-900">entrepreneur or working professional (35–70)</span> and struggling with long-term back, knee, neck, shoulder, or joint pain, this is designed specifically for YOU.
            </p>

            {/* Note: CTA Button is handled in separate component, usually injected here or users scroll down. 
                Assuming we want a button here for the Hero. Adding a placeholder or keeping it clean.
                Given previous file didn't have a button directly in Hero (it was likely below or separate), 
                I will add a sleek 'Read More' or 'Watch Video' indicator if needed, 
                but adhering to original content, just formatted better.
            */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <span className="w-8 h-px bg-slate-300"></span>
                Scroll to begin
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Creative Video/Visual Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Abstract Backdrop Shapes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-teal-500/10 rounded-full animate-[spin_60s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-amber-500/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />

            {/* The Card */}
            <div className="relative rounded-[2rem] overflow-hidden bg-slate-900 shadow-2xl shadow-teal-900/20 border-4 border-white/20 aspect-[4/3] group cursor-pointer">
              {/* Placeholder Content */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-700">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-4 ring-1 ring-white/20 group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
                <span className="text-white/80 font-medium tracking-wide">Watch the Breakdown</span>
              </div>

              {/* Creative Glass Overlay Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900/80 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900"></div>
                    <div className="w-8 h-8 rounded-full bg-slate-600 border-2 border-slate-900"></div>
                    <div className="w-8 h-8 rounded-full bg-slate-500 border-2 border-slate-900"></div>
                  </div>
                  <span className="text-white text-xs font-bold">Join 400+ FitDads</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
