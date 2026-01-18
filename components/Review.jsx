import { Star } from "lucide-react";
import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedNumber = ({ value, duration = 2 }) => {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });

    return () => controls.stop();
  }, [value, duration, count]);

  return <span>{display.toLocaleString()}+</span>;
};

const Review = () => {
  return (
    <div className="w-full flex justify-center py-6">
      <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-6 sm:py-3 rounded-full bg-white backdrop-blur-md border border-slate-200 shadow-lg shadow-slate-200/50 hover:shadow-slate-300 transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-base text-slate-700">
          <div className="bg-slate-100 p-1 sm:p-1.5 rounded-full">
            <Star
              className="text-slate-900 fill-slate-900"
              size={14}
              strokeWidth={2.5}
            />
          </div>

          {/* Text + Animated 400 */}
          <span className="font-bold tracking-tight text-slate-900">Certified Coach</span>

          <span className="mx-1 sm:mx-2 text-slate-300">|</span>

          <span className="font-medium">
            Trusted by <span className="font-bold text-slate-900"><AnimatedNumber value={400} /></span> Executives
          </span>
        </div>
      </div>
    </div>
  );
};

export default Review;
