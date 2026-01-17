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
          className="fixed bottom-4 left-4 right-4 sm:left-1/2 sm:-translate-x-1/2 sm:w-auto sm:max-w-4xl bg-slate-900/90 backdrop-blur-xl border border-teal-500/20 rounded-full p-2 pl-6 shadow-[0_8px_30px_rgba(0,0,0,0.4)] flex items-center justify-between z-[1000] gap-4"
        >
          <div className="flex flex-col items-start min-w-0 shrink-0">
            <div className="flex items-baseline gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300 text-lg sm:text-2xl font-black drop-shadow-sm">
                FREE
              </span>
              <span className="text-slate-400 text-xs sm:text-sm font-medium hidden sm:inline-block">
                Limited-time offer
              </span>
            </div>
          </div>

          {/* Right: CTA */}
          <div className="flex items-center justify-end">
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-white font-bold text-xs sm:text-base rounded-full shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 transition-all duration-300 transform hover:-translate-y-0.5 px-5 py-2.5 sm:px-8 sm:py-3 whitespace-nowrap text-center leading-tight border border-teal-400/20 no-underline"
            >
              Book Your 1:1 Call
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyBar;
