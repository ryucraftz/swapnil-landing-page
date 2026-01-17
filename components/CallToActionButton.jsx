import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const CALENDLY_LINK = "#"; // 🔴 TODO: Replace with actual Calendly link

export default function CallToActionButton(props) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Magnetic pull strength (higher divisor = weaker pull)
    x.set(distanceX / 6);
    y.set(distanceY / 6);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="py-4 px-4 sm:px-0 flex justify-center cursor-pointer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.a
        href={CALENDLY_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="
          relative inline-flex w-full sm:max-w-md
          items-center justify-center text-center overflow-hidden group
          rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-bold tracking-wide
          shadow-[0_0_20px_rgba(20,184,166,0.4)]
          px-8 sm:px-12 py-4 sm:py-5
          text-sm sm:text-base md:text-lg
          whitespace-nowrap
          transition-all duration-300 ease-out
          max-[380px]:text-[13px] max-[380px]:px-5
          border border-transparent hover:border-amber-400/50
          no-underline
        "
        whileTap={{ scale: 0.96 }}
      >
        {/* Aura Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400/0 via-teal-100/30 to-teal-400/0 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" />

        <span className="relative z-10 drop-shadow-md">{props.text || "Apply for The Pain Reset 90™"}</span>

        {/* Shine Effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
      </motion.a>

    </motion.div>
  );
}
