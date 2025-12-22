import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Review from '../components/Review'
import Hero from '../components/Hero'
import VideoSection from '../components/VideoSection'
import CallToActionButton from '../components/CallToActionButton'
import MeetCoachKush from '../components/MeetCoachKush'
import PhotoTestimonials from '../components/PhotoTestimonials'
import VideoTestimonialSection from '../components/VideoTestimonialSection'
import FitDadWhySystemWorks from '../components/FitDadWhySystemWorks'
import OurPromise from '../components/OurPromise'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Review />
      <Hero />
      <VideoSection />
      <CallToActionButton />
      <PhotoTestimonials />
      <MeetCoachKush />
      <VideoTestimonialSection />
      <FitDadWhySystemWorks />
      <OurPromise />
      <CallToActionButton />
    </>
  )
}

export default App
