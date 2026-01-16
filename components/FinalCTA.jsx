import React from "react";
import CallToActionButton from "./CallToActionButton";

export default function FinalCTA() {
    return (
        <section className="bg-slate-900 py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-white text-3xl sm:text-4xl font-extrabold mb-6 leading-tight">
                    You don’t need another short burst of motivation.
                    <br className="hidden sm:block" />
                    <span className="text-sky-400">You need a system that fits your life as a father.</span>
                </h2>
                <p className="text-slate-300 text-lg sm:text-xl mb-8 leading-relaxed">
                    If you’re ready to lose belly fat, regain energy,
                    <br className="hidden sm:block" />
                    and become a stronger role model for your kids,
                    <br className="hidden sm:block" />
                    apply for IRON DAD CLUB™.
                </p>
                <div className="flex justify-center">
                    <CallToActionButton text="Apply Now" />
                </div>
            </div>
        </section>
    );
}
