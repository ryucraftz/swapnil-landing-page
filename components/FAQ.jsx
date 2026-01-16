import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "Will this work if I’ve failed before?",
      answer: "Yes. Most fathers fail because plans don’t fit real life. This one does.",
    },
    {
      question: "Do I need to give up roti, rice, or Indian food?",
      answer: "No. The system is designed around normal Indian meals.",
    },
    {
      question: "How much time will this take daily?",
      answer: "20–30 minutes of training, plus simple daily habits.",
    },
    {
      question: "What if I have health issues like BP or diabetes?",
      answer: "The program is adjusted safely based on your condition.",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-slate-50"
      >
        <span className="text-base font-semibold text-slate-900">
          {faq.question}
        </span>
        {isOpen ? (
          <Minus className="h-5 w-5 text-slate-500" />
        ) : (
          <Plus className="h-5 w-5 text-slate-500" />
        )}
      </button>
      <div
        className={`bg-slate-50 px-6 text-slate-600 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        {faq.answer}
      </div>
    </div>
  );
}
