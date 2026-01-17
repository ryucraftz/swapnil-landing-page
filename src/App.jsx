import { useState, useEffect } from "react";
import "./App.css";

import Review from "../components/Review";
import Hero from "../components/Hero";
import VideoSection from "../components/VideoSection";
import CallToActionButton from "../components/CallToActionButton";
import MeetCoachSwapnil from "../components/MeetCoachSwapnil";
import PhotoTestimonials from "../components/PhotoTestimonials";
import FitDadWhySystemWorks from "../components/FitDadWhySystemWorks";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import StickyBar from "../components/StickyBar";
import ThankYou from "../components/ThankYou";
import ThankYouStickyBar from "../components/ThankYouStickyBar";

function App() {
  const [isThankYou, setIsThankYou] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/thank-you") {
      setIsThankYou(true);
    }
  }, []);

  if (isThankYou) {
    return (
      <>
        <ThankYou />
        <ThankYouStickyBar />
      </>
    );
  }

  return (
    <>
      <div className="pb-28 sm:pb-32">
        <Review />
        <Hero />
        {/* VSL */}
        <VideoSection />

        {/* CTA 1 */}
        <div className="flex justify-center py-6 sm:py-8">
          <CallToActionButton text="Apply for The Pain Reset 90™" />
        </div>

        {/* Social Proof */}
        {/* Explicitly confusing prop naming fixed by just not passing it for default behavior */}
        <PhotoTestimonials />

        {/* CTA 2 */}
        <div className="flex justify-center py-6 sm:py-8">
          <CallToActionButton text="Apply for The Pain Reset 90™" />
        </div>

        {/* What You Will Get */}
        <FitDadWhySystemWorks />

        {/* CTA 3 (Existing) */}
        <div className="flex justify-center py-8">
          <CallToActionButton text="Apply for The Pain Reset 90™" />
        </div>

        {/* About */}
        <MeetCoachSwapnil />

        {/* CTA 4 */}
        <div className="flex justify-center py-6 sm:py-8">
          <CallToActionButton text="Apply for The Pain Reset 90™" />
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
