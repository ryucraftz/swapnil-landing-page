import { motion } from "framer-motion";
import RevealWords from "./RevealWords";

export default function Hero() {
  return (
    <div className="relative min-h-0 md:min-h-[55vh] flex items-center justify-center overflow-hidden py-6 md:py-16">

      {/* 🌟 Premium Aurora Background - Enriched Teal */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-teal-500/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-500/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/3 w-80 h-80 bg-teal-300/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000"></div>

      {/* 📱 Push down on mobile */}
      <div className="relative z-10 px-4 sm:px-6 text-center max-w-4xl mx-auto">
        {/* Soft Text Backglow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/50 blur-[80px] -z-10 rounded-full" />

        {/* Title */}
        <h1 className="font-extrabold leading-tight tracking-tight mx-auto text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-slate-900 mb-5 drop-shadow-sm px-2 sm:px-0">
          <RevealWords text="Fix chronic" delay={0.1} />
          <br className="md:hidden" />
          <RevealWords text="joint and body pain at the root" className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-500 font-black" delay={0.2} />
          {/* "so YOU can move..." */}
          <span className="block md:inline"> </span>
          <RevealWords text="so YOU can move, sit, walk, and sleep comfortably again" delay={0.3} />

          <br className="hidden md:block my-2" />

          <RevealWords text="without" delay={0.4} />
          <span className="inline-block w-2"></span>
          <RevealWords text="medication, surgery, or injury risk" className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500 italic" delay={0.5} />
        </h1>

        {/* Subheading */}
        <h2 className="my-6 text-lg sm:text-xl md:text-2xl font-medium text-slate-600 leading-relaxed max-w-4xl mx-auto">
          <RevealWords text="Even if you’re an" delay={0.6} />
          <span className="inline-block w-2"></span>
          <RevealWords text="entrepreneur or working professional (35–70)" className="font-bold text-slate-900" delay={0.7} />
          <br className="md:hidden" />
          <RevealWords text="and struggling with long-term back, knee, neck, shoulder, or joint pain," delay={0.8} />
          <br className="hidden md:block" />
          <RevealWords text="this is designed specifically for YOU." delay={0.9} />
        </h2>
      </div>
    </div>
  );
}
