import { useState } from "react";
import "./App.css";

import Review from "../components/Review";
import Hero from "../components/Hero";
import VideoSection from "../components/VideoSection";
import CallToActionButton from "../components/CallToActionButton";
import MeetCoachKush from "../components/MeetCoachKush";
import PhotoTestimonials from "../components/PhotoTestimonials";
// import VideoTestimonialSection from "../components/VideoTestimonialSection"; // Removed as not in request
import FitDadWhySystemWorks from "../components/FitDadWhySystemWorks";
// import OurPromise from "../components/OurPromise"; // Removed as not in request
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";

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

        {/* Social Proof */}
        <PhotoTestimonials />

        {/* What You Will Get */}
        <FitDadWhySystemWorks />

        {/* CTA */}
        <div className="flex justify-center py-8">
          <CallToActionButton text="Apply for IRON DAD CLUB™" />
        </div>

        {/* About */}
        <MeetCoachKush />

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
