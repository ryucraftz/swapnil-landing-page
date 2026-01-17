import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import useRazorpay from "../src/hooks/useRazorpay"; // Removed Razorpay

const CALENDLY_LINK = "#"; // 🔴 TODO: Replace with actual Calendly link

const StickyBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 600px (approx. past hero)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-xl p-4 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)] flex items-center justify-between border-t border-slate-200 lg:px-20 z-[1000] space-x-2 sm:space-x-6 active:bg-slate-50 transition-colors"
        >
          <div className="flex flex-col items-start min-w-0 shrink-0">
            <div className="flex items-baseline gap-1.5 sm:gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 text-xl sm:text-3xl font-black drop-shadow-sm">
                FREE
              </span>
            </div>
            <div className="text-[10px] sm:text-sm font-bold text-teal-700 uppercase tracking-wide truncate max-w-[120px] sm:max-w-none">
              Limited-time offer
            </div>
          </div>

          {/* Right: CTA */}
          <div className="flex items-center justify-end relative ml-2 sm:ml-0">
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-bold text-xs sm:text-base md:text-lg rounded-full shadow-lg shadow-teal-200/50 hover:shadow-teal-500/30 transition-all duration-300 transform hover:-translate-y-0.5 px-4 py-2.5 sm:px-8 sm:py-3 whitespace-normal text-center leading-tight max-w-[160px] sm:max-w-[300px] cursor-pointer block border border-teal-500/20 hover:border-teal-400/50 no-underline"
            >
              Book Your 1:1 FitDad Transformation Call
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyBar;
