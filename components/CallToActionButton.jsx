import { motion } from "framer-motion";
// import useRazorpay from "../src/hooks/useRazorpay"; // Removed Razorpay

const CALENDLY_LINK = "#"; // 🔴 TODO: Replace with actual Calendly link

export default function CallToActionButton(props) {
  return (
    <motion.div
      className="py-4 px-4 sm:px-0 flex justify-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.a
        href={CALENDLY_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="
          relative inline-flex w-full sm:max-w-md
          items-center justify-center text-center
          rounded-full bg-blue-600 text-white font-bold tracking-wide
          shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]
          px-8 sm:px-12 py-4 sm:py-5
          text-sm sm:text-base md:text-lg
          whitespace-nowrap
          transition-all duration-300 ease-out
          max-[380px]:text-[13px] max-[380px]:px-5
          cursor-pointer
          border border-transparent hover:bg-blue-700
          no-underline
        "
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
      >
        {props.text || "Apply for The Pain Reset 90™"}
      </motion.a>

    </motion.div>
  );
}
