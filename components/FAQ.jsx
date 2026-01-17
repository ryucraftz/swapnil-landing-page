// FAQ.jsx
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import FadeIn from "./FadeIn";

export default function FAQ() {
  const faqs = [
    {
      question: "Will this work for my type of pain?",
      answer: "If your pain has lasted months or years, this approach helps identify and correct its root cause.",
    },
    {
      question: "What if I’ve already tried physiotherapy or exercise?",
      answer: "Most routines aren’t personalized. This program is built specifically around your movement patterns.",
    },
    {
      question: "Is this safe?",
      answer: "Yes. Recovery is progressive, controlled, and designed to avoid flare-ups or injury.",
    },
    {
      question: "Do I need to be fit or flexible?",
      answer: "No. This program is for recovery first, strength later.",
    },
  ];

  return (
    <section className="bg-transparent py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <FadeIn>
          <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <FAQItem faq={faq} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-blue-500 shadow-[0_4px_15px_rgba(37,99,235,0.15)] ring-1 ring-blue-500/20' : 'border-slate-200'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between bg-white px-4 py-3 sm:px-6 sm:py-4 text-left transition-colors hover:bg-slate-50"
      >
        <span className={`text-sm sm:text-base font-semibold transition-colors pr-4 ${isOpen ? 'text-blue-700' : 'text-slate-800'}`}>
          {faq.question}
        </span>
        {isOpen ? (
          <Minus className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
        ) : (
          <Plus className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400 flex-shrink-0" />
        )}
      </button>
      <div
        className={`bg-slate-50 px-4 sm:px-6 text-slate-600 text-sm sm:text-base transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 py-3 sm:py-4 opacity-100" : "max-h-0 py-0 opacity-0"
          }`}
      >
        {faq.answer}
      </div>
    </div>
  );
}
