import { motion } from "framer-motion";
// import useRazorpay from "../src/hooks/useRazorpay"; // Removed Razorpay

const CALENDLY_LINK = "#"; // 🔴 TODO: Replace with actual Calendly link

export default function CallToActionButton(props) {
  return (
    <motion.div
      className="py-4 px-4 sm:px-0 flex justify-center"
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
          rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-bold tracking-wide
          shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_35px_rgba(34,211,238,0.6)] hover:scale-105
          px-8 sm:px-12 py-4 sm:py-5
          text-sm sm:text-base md:text-lg
          whitespace-nowrap
          transition-all duration-300 ease-out
          max-[380px]:text-[13px] max-[380px]:px-5
          cursor-pointer
          border border-transparent hover:border-amber-400 hover:shadow-[0_0_35px_rgba(251,191,36,0.6)]
          no-underline
        "
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
      >
        <span className="relative z-10">{props.text || "Apply for The Pain Reset 90™"}</span>

        {/* Shine Effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
      </motion.a>

    </motion.div>
  );
}
