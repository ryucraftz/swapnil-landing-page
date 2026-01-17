import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Home, BookOpen, Layers, MessageCircle } from "lucide-react";

export default function FloatingNav() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show when scrolling up or at the very top relative to action
            if (currentScrollY < lastScrollY || currentScrollY < 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const navItems = [
        { name: "Home", icon: <Home className="w-5 h-5" />, href: "#" },
        { name: "System", icon: <Layers className="w-5 h-5" />, href: "#" },
        { name: "Success", icon: <BookOpen className="w-5 h-5" />, href: "#" },
        { name: "Contact", icon: <MessageCircle className="w-5 h-5" />, href: "#" },
    ];

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-6 inset-x-0 mx-auto z-50 flex justify-center pointer-events-none"
                >
                    <div className="flex items-center gap-1 p-2 rounded-full bg-white/70 backdrop-blur-lg border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.12)] pointer-events-auto">
                        {navItems.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.href}
                                className="group relative flex items-center justify-center p-3 rounded-full hover:bg-white/50 transition-colors"
                                aria-label={item.name}
                            >
                                <div className="relative z-10 text-slate-600 group-hover:text-teal-600 transition-colors duration-300">
                                    {item.icon}
                                </div>

                                {/* Tooltip on hover (Desktop) */}
                                <span className="absolute bottom-full mb-2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0 duration-200 pointer-events-none whitespace-nowrap hidden sm:block">
                                    {item.name}
                                </span>

                                {/* Active Indicator (Optional logic could go here) */}
                            </a>
                        ))}

                        {/* CTA Button */}
                        <div className="pl-2 border-l border-slate-200 ml-1">
                            <button className="bg-teal-600 hover:bg-teal-500 text-white rounded-full px-4 py-2 text-sm font-bold shadow-md hover:shadow-lg transition-all">
                                Book Call
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
