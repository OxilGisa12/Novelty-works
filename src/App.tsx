import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustTicker } from './components/TrustTicker';
import { InteractiveFeatures } from './components/InteractiveFeature';
import { MissionVision } from './components/MissionVision';
import { MemberReviews } from './components/MembersReviews';
import { FAQs } from './components/FAQs';
import { Footer } from './components/Footer';
import { AboutUs } from './pages/AboutUs';
import { OurProjects } from './pages/OurProjects';
import { Services } from './pages/Services';
import { Insights } from './pages/Insights';
import { ReachUs } from './pages/ReachUs';
import { Policies } from "./pages/Policies";

// Scroll to top helper to force page to start at the top or specific hash on navigation
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      }, 100); // 100ms delay allows the new page DOM to mount before scrolling
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
};

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_70%_50%,_#1A365D_0%,_#0A192F_100%)] text-white overflow-x-hidden flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        <Routes>
          {/* Home Page Route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <TrustTicker />
                <InteractiveFeatures />
                <div className="bg-white text-gray-900 w-full pt-16">
                  <MissionVision />
                  <MemberReviews />
                  <FAQs />
                </div>
              </>
            }
          />

          {/* Standalone Pages Routes */}
          <Route
            path="/about"
            element={
              <div className="pt-20 bg-white min-h-screen text-gray-900">
                <AboutUs />
              </div>
            }
          />
          <Route
            path="/our-projects"
            element={
              <div className="pt-20 bg-white min-h-screen text-gray-900">
                <OurProjects />
              </div>
            }
          />
          <Route
            path="/services"
            element={
              <div className="pt-20 bg-white min-h-screen text-gray-900">
                <Services />
              </div>
            }
          />
          <Route
            path="/insights"
            element={
              <div className="pt-20 bg-white min-h-screen text-gray-900">
                <Insights />
              </div>
            }
          />
          <Route
            path="/reach-us"
            element={
              <div className="pt-20 bg-white min-h-screen text-gray-900">
                <ReachUs />
              </div>
            }
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Policies Page: Pure white paper, no Navbar, no Footer, no dark gradient */}
        <Route path="/policies" element={<Policies />} />
        
        {/* All other routes render the MainLayout */}
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}