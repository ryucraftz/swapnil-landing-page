export default function Hero() {
  return (
    <div className="relative bg-white min-h-0 md:min-h-[80vh] flex items-start justify-center overflow-hidden">
      {/* 📱 Push down on mobile */}
      <div className="relative px-2 sm:px-4 text-center max-w-5xl mt-1 md:mt-0">
        {/* Title */}
        <h1 className="font-bold leading-snug tracking-tight mx-auto text-lg sm:text-2xl md:text-3xl lg:text-4xl text-slate-900">
          Lose post-30 belly fat and <span className="text-sky-500">feel fit, strong, and energetic again</span> as a father
        </h1>

        {/* Subheading */}
        <h2 className="my-4 text-[15px] sm:text-sm md:text-base lg:text-lg font-medium text-slate-700 leading-snug mx-auto px-2 sm:px-6">
          Built for <span className="font-bold text-slate-900">working fathers</span>,
          who want real fat loss and strength
          <br className="hidden sm:block" />
          without crash dieting, long workouts, or giving up family meals
        </h2>
      </div>
    </div>
  );
}
