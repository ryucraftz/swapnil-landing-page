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
          className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-xl p-4 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)] flex items-center justify-center border-t border-slate-200 lg:px-20 z-[1000] space-x-2 sm:space-x-6 active:bg-slate-50 transition-colors"
        >


          {/* Right: CTA */}
          <div className="flex items-center justify-center relative ml-2 sm:ml-0">
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-xs sm:text-base md:text-lg rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 px-4 py-3 sm:px-8 sm:py-3.5 whitespace-nowrap text-center leading-tight cursor-pointer block border border-white/20 ring-4 ring-orange-50/50 no-underline group"
            >
              {/* Shimmer */}
              <div className="absolute inset-0 -translate-x-full animate-shimmer-slide bg-gradient-to-r from-transparent via-white/30 to-transparent z-10 pointer-events-none" />
              <span className="relative z-20">Book Your 1:1 Pain Reset Call</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyBar;
