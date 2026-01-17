import React from "react";
// import useRazorpay from "../src/hooks/useRazorpay"; // Removed Razorpay

const CALENDLY_LINK = "#"; // 🔴 TODO: Replace with actual Calendly link

const StickyBar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-xl p-4 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)] flex items-center justify-between border-t border-slate-200 lg:px-20 z-[1000] space-x-2 sm:space-x-6 active:bg-slate-50 transition-colors">
      {/* Left: Pricing */}
      <div className="flex flex-col items-start min-w-[140px]">
        <div className="flex items-baseline gap-2">
          <span className="text-slate-400 text-lg sm:text-xl font-medium line-through decoration-slate-400 decoration-2">
            ₹999
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600 text-2xl sm:text-3xl font-black drop-shadow-sm">
            FREE
          </span>
        </div>
        <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wide">
          Limited-time offer
        </div>
      </div>

      {/* Right: CTA */}
      <div className="flex items-center flex-1 justify-end relative">
        <a
          href={CALENDLY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-sm sm:text-base md:text-lg rounded-full shadow-lg shadow-red-200/50 hover:shadow-red-500/30 transition-all duration-300 transform hover:-translate-y-0.5 px-6 sm:px-8 py-3 whitespace-normal text-center max-w-[200px] sm:max-w-[300px] cursor-pointer block border border-red-500/20 hover:border-red-400/50 no-underline"
        >
          Book Your 1:1 FitDad Transformation Call
        </a>
      </div>
    </div>
  );
};

export default StickyBar;
