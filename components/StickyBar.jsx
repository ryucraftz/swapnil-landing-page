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
            <div className="text-[10px] sm:text-sm font-bold text-blue-800 uppercase tracking-wide truncate max-w-[120px] sm:max-w-none">
              Limited-time offer
            </div>
          </div>

          {/* Right: CTA */}
          <div className="flex items-center justify-end relative ml-2 sm:ml-0">
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-xs sm:text-base md:text-lg rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 px-4 py-3 sm:px-8 sm:py-3.5 whitespace-nowrap text-center leading-tight cursor-pointer block border border-white/20 ring-4 ring-orange-50/50 no-underline"
            >
              Book Your 1:1 Pain Reset Call
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyBar;
