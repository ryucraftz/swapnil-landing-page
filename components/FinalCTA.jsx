import React from "react";
import CallToActionButton from "./CallToActionButton";
import FadeIn from "./FadeIn";

export default function FinalCTA() {
    return (
        <section className="bg-gradient-to-b from-slate-50 to-amber-50/50 pt-20 pb-32 sm:py-20 px-4 relative overflow-hidden">
            {/* Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-white/0 to-transparent pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <FadeIn>
                    <h2 className="text-slate-900 text-2xl sm:text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                        You don’t need another short burst of motivation.{" "}
                        <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">You need a system that fits your life as a father.</span>
                    </h2>
                    <p className="text-slate-600 text-lg sm:text-xl mb-10 leading-relaxed">
                        If you’re ready to lose belly fat, regain energy,{" "}
                        <br className="hidden sm:block" />
                        and become a stronger role model for your kids,{" "}
                        <br className="hidden sm:block" />
                        apply for IRON DAD CLUB™.
                    </p>
                    <div className="flex justify-center">
                        <CallToActionButton text="Apply Now" />
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
