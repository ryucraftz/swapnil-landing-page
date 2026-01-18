import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative min-h-0 md:min-h-[55vh] flex items-center justify-center overflow-hidden py-10 md:py-20 lg:py-24">
      {/* 🌟 Global Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-30 z-0 pointer-events-none mix-blend-soft-light"></div>

      {/* 🌟 Premium Aurora Background - Enriched Teal & Amber */}
      <div className="absolute top-[-10%] left-[10%] w-[30rem] h-[30rem] bg-teal-500/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
      <div className="absolute top-[-5%] right-[10%] w-[25rem] h-[25rem] bg-cyan-400/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[35rem] h-[35rem] bg-amber-200/40 rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-4000"></div>

      {/* 📱 Push down on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 px-4 sm:px-6 text-center max-w-5xl mx-auto"
      >
        {/* Soft Text Backglow via Radial Gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-r from-white/60 to-white/30 blur-[60px] -z-10 rounded-full pointer-events-none" />

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-extrabold leading-snug tracking-tight mx-auto text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] text-slate-800 mb-6 drop-shadow-sm px-2 sm:px-0"
        >
          Fix chronic <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-500 to-teal-600 font-black animate-text-shimmer inline-block bg-[length:200%_auto]">Back Pain</span> so <span className="italic relative inline-block text-slate-900">YOU</span> can move, sit, walk, and sleep comfortably again
          <br className="hidden md:block" />
          {" "}without <span className="relative z-10 whitespace-normal sm:whitespace-nowrap inline-block"><span className="absolute inset-x-0 bottom-1 h-3 bg-amber-200/40 -z-10 skew-x-[-10deg] hidden sm:block"></span><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 italic font-bold">medication, surgery, or injury risk</span></span>
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="my-10 text-lg sm:text-xl md:text-2xl font-medium font-sans text-slate-600 leading-relaxed max-w-4xl mx-auto"
        >
          Even if you’re an <span className="font-bold text-slate-800 bg-amber-50/60 ring-1 ring-amber-100/50 px-2 py-0.5 rounded-md box-decoration-clone">entrepreneur or working professional (35–70)</span> and struggling with long-term back, knee, neck, shoulder, or joint pain,
          <br className="hidden md:block" />
          this is designed specifically for YOU.
        </motion.h2>
      </motion.div>
    </div>
  );
}
