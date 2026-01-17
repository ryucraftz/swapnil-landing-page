import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative min-h-0 md:min-h-[60vh] flex items-center justify-center overflow-hidden py-12 md:py-20">

      {/* Decorative Blobs - Removed for Minimalist White Theme */}

      {/* 📱 Push down on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
        className="relative z-10 px-4 sm:px-6 text-center max-w-5xl mx-auto"
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-extrabold leading-tight tracking-tight mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6 drop-shadow-sm px-2 sm:px-0"
        >
          Fix chronic <span className="text-blue-700 underline decoration-blue-400 decoration-4 underline-offset-4">joint and body pain at the root</span> so YOU can move, sit, walk, and sleep comfortably again
          <br className="hidden md:block" />
          without <span className="text-blue-600 font-bold italic">medication, surgery, or injury risk</span>
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
