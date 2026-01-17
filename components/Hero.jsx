import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative min-h-0 md:min-h-[55vh] flex items-center justify-center overflow-hidden py-6 md:py-16">

      {/* 🌟 Premium Aurora Background - Enriched Teal */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-teal-500/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-500/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/3 w-80 h-80 bg-teal-300/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000"></div>

      {/* 📱 Push down on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
        className="relative z-10 px-4 sm:px-6 text-center max-w-4xl mx-auto"
      >
        {/* Soft Text Backglow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/50 blur-[80px] -z-10 rounded-full" />

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-extrabold leading-tight tracking-tight mx-auto text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-slate-900 mb-5 drop-shadow-sm px-2 sm:px-0"
        >
          Fix chronic <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500 font-black">Back Pain</span> so YOU can move, sit, walk, and sleep comfortably again
          <br className="hidden md:block" />
          without <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500 italic">medication, surgery, or injury risk</span>
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="my-6 text-lg sm:text-xl md:text-2xl font-medium text-slate-600 leading-relaxed max-w-4xl mx-auto"
        >
          Even if you’re an <span className="font-bold text-slate-900">entrepreneur or working professional (35–70)</span> and struggling with long-term back, knee, neck, shoulder, or joint pain,
          <br className="hidden md:block" />
          this is designed specifically for YOU.
        </motion.h2>
      </motion.div>
    </div>
  );
}
