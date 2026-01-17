import React from "react";
import { motion } from "framer-motion";

export default function RevealWords({ text, className = "", delay = 0 }) {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: delay * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.span
            className={`inline-block mr-1 ${className}`} // inline-block to allow wrapping
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    variants={child}
                    className="inline-block mr-[0.25em] last:mr-0"
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
}
