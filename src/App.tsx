import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustTicker } from './components/TrustTicker';
import { InteractiveFeatures } from './components/InteractiveFeature';
import { MissionVision } from './components/MissionVision';
import { MemberReviews } from './components/MembersReviews';
import { FAQs } from './components/FAQs';
import { CompanyB } from './components/CompanyB';
import { Footer } from './components/Footer';

export default function App() {
  return (
    // so this is the blue background i made its invisible glass and stuck on the screen everyhting can pass through it it was green before btw
    <div className="min-h-screen bg-[radial-gradient(circle_at_70%_50%,_#1A365D_0%,_#0A192F_100%)] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustTicker />
      <InteractiveFeatures />
     
      <div className="bg-white text-gray-900 w-full pt-16">
         <MissionVision />
         <MemberReviews />
         <FAQs />
      </div>
    
      <Footer />
    </div>
  );
}