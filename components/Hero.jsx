export default function Hero() {
  return (
    <div className="relative min-h-0 md:min-h-[60vh] flex items-center justify-center overflow-hidden py-12 md:py-20">

      {/* Decorative Blobs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-amber-600 rounded-full mix-blend-screen filter blur-[128px] opacity-10 animate-blob animation-delay-4000"></div>

      {/* 📱 Push down on mobile */}
      <div className="relative z-10 px-4 sm:px-6 text-center max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="font-extrabold leading-tight tracking-tight mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-100 mb-6 drop-shadow-lg">
          Lose post-30 belly fat and <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500">feel fit, strong, and energetic again</span> as a father
        </h1>

        {/* Subheading */}
        <h2 className="my-6 text-lg sm:text-xl md:text-2xl font-medium text-slate-400 leading-relaxed max-w-3xl mx-auto">
          Built for <span className="font-bold text-slate-100">working fathers</span> who want real fat loss and strength{" "}
          <span className="hidden sm:inline"> </span>
          without crash dieting, long workouts, or giving up family meals.
        </h2>
      </div>
    </div>
  );
}
