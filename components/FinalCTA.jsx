import React from "react";
import CallToActionButton from "./CallToActionButton";
import FadeIn from "./FadeIn";

export default function FinalCTA() {
    return (
        <section className="bg-slate-900 pt-20 pb-32 sm:py-20 px-4 relative overflow-hidden">
            {/* Dark Mode Gradient Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[100px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/20 blur-[100px] rounded-full mix-blend-screen" />
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <FadeIn>
                    <h2 className="text-white text-2xl sm:text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                        You don’t need another temporary fix.{" "}
                        <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300 underline decoration-blue-400 underline-offset-4">You need a system that corrects what’s causing the pain.</span>
                    </h2>
                    <p className="text-slate-300 text-lg sm:text-xl mb-10 leading-relaxed">
                        If you’re ready to move comfortably again,{" "}
                        <br className="hidden sm:block" />
                        apply for The Pain Reset 90™.
                    </p>
                    <div className="flex justify-center">
                        <CallToActionButton text="Apply for The Pain Reset 90™" />
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
