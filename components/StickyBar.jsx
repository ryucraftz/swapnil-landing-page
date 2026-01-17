import React from "react";

import useRazorpay from "../src/hooks/useRazorpay";

const StickyBar = () => {
  const isLoaded = useRazorpay();

  const handlePayment = () => {
    if (!isLoaded) return;

    if (!import.meta.env.VITE_RAZORPAY_KEY_ID) {
      alert("Error: Razorpay Key ID is missing. Please check Vercel Environment Variables.");
      return;
    }

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: "50000",
      currency: "INR",
      name: "Iron Dad Club",
      description: "1:1 FitDad Transformation Call",
      image: "https://example.com/your_logo", // You might want to update this too
      handler: function (response) {
        alert(JSON.stringify(response));
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      notes: {
        address: "Iron Dad Club Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(JSON.stringify(response));
    });

    rzp1.open();
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-slate-950/80 backdrop-blur-xl p-4 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.5)] flex items-center justify-between border-t border-slate-800/50 lg:px-20 z-[1000] space-x-2 sm:space-x-6 active:bg-slate-900/90 transition-colors">
      {/* Left: Pricing */}
      <div className="flex flex-col items-start min-w-[140px]">
        <div className="flex items-baseline gap-2">
          <span className="text-slate-500 text-lg sm:text-xl font-medium line-through decoration-red-500 decoration-2">
            ₹199
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500 text-2xl sm:text-3xl font-black drop-shadow-sm">
            ₹9/-
          </span>
        </div>
        <div className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wide">
          Limited-time offer
        </div>
      </div>

      {/* Right: CTA */}
      <div className="flex items-center flex-1 justify-end relative">
        <button
          onClick={handlePayment}
          disabled={!isLoaded}
          className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-sm sm:text-base md:text-lg rounded-full shadow-lg shadow-red-900/20 hover:shadow-red-500/40 transition-all duration-300 transform hover:-translate-y-0.5 px-6 sm:px-8 py-3 whitespace-normal text-center max-w-[200px] sm:max-w-[300px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed h-full border border-red-500/20 hover:border-red-400/50"
        >
          Book Your 1:1 FitDad Transformation Call
        </button>
      </div>
    </div>
  );
};

export default StickyBar;
