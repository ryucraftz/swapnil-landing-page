import { useState } from "react";
import "./App.css";

import Review from "../components/Review";
import Hero from "../components/Hero";
import VideoSection from "../components/VideoSection";
import CallToActionButton from "../components/CallToActionButton";
import MeetCoachDeepesh from "../components/MeetCoachDeepesh";
import PhotoTestimonials from "../components/PhotoTestimonials";
// import VideoTestimonialSection from "../components/VideoTestimonialSection"; // Removed as not in request
import FitDadWhySystemWorks from "../components/FitDadWhySystemWorks";
// import OurPromise from "../components/OurPromise"; // Removed as not in request
import FAQ from "../components/FAQ";
import StickyBar from "../components/StickyBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="pb-28 sm:pb-32">
        <Review />
        <Hero />
        {/* VSL */}
        <VideoSection />

        {/* CTA 1 */}
        <div className="flex justify-center py-6 sm:py-8">
          <CallToActionButton text="Book Your 1:1 FitDad Transformation Call" />
        </div>

        {/* Social Proof */}
        <PhotoTestimonials />

        {/* CTA 2 */}
        <div className="flex justify-center py-6 sm:py-8">
          <CallToActionButton text="Book Your 1:1 FitDad Transformation Call" />
        </div>

        {/* What You Will Get */}
        <FitDadWhySystemWorks />

        {/* CTA 3 (Existing) */}
        <div className="flex justify-center py-8">
          <CallToActionButton text="Book Your 1:1 FitDad Transformation Call" />
        </div>

        {/* About */}
        <MeetCoachDeepesh />

        {/* CTA 4 */}
        <div className="flex justify-center py-6 sm:py-8">
          <CallToActionButton text="Book Your 1:1 FitDad Transformation Call" />
        </div>

        {/* FAQS */}
        <FAQ />

        {/* Final CTA */}
        <FinalCTA />
      </div>

      <StickyBar />
    </>
  );
}

export default App;
