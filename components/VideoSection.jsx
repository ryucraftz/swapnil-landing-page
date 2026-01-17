// VideoSection.jsx
import React from "react";

export default function VideoSection() {

  return (
    <section className="bg-transparent flex flex-col items-center mt-[-10px] sm:mt-[-20px] relative z-20">
      {/* ✅ Wistia Video Placeholder */}
      <div className="w-full max-w-3xl px-2 sm:px-0">
        <div className="rounded-lg shadow-2xl shadow-slate-200 overflow-hidden bg-white aspect-video flex items-center justify-center border border-slate-100">
          <p className="text-slate-400 text-lg font-semibold">Video Placeholder</p>
        </div>
      </div>

      {/* Text line */}
      <div className="mt-5 px-4 w-full flex justify-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 backdrop-blur-md px-4 py-2 shadow-lg shadow-slate-200/50">
          <p className="text-center text-sm sm:text-base font-semibold text-slate-700">
            Watch how <span className="text-blue-600 font-bold">busy fathers</span> lose 10–15 kilos of fat while{" "}
            <span className="text-amber-600 font-bold">eating normal Indian food</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
