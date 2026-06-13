import React from 'react';

export const Hero = () => {
  const handleScrollToFeature = (e: React.MouseEvent<HTMLAnchorElement>, featureId: string) => {
    e.preventDefault();
    
    // Update the URL hash
    window.location.hash = featureId;
    
    // Manually dispatch a hashchange event so the InteractiveFeatures component updates instantly
    window.dispatchEvent(new HashChangeEvent('hashchange'));
    
    // Smoothly scroll down to the InteractiveFeatures section
    const section = document.getElementById('interactive-features');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-8 max-w-7xl mx-auto">
      
      {/* Left Column: Text, Checks */}
      <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-white">
        
        {/* Massive Headline - Responsive text size prevents breaking on mobile screens */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95] font-['Abril_Fatface'] break-words">
          Rwanda’s #1 <br />
          choice for smart <br />
          digital solutions
        </h1>

        {/* Benefit Checkmarks List - Links styled with hoverable black background */}
        <ul className="space-y-4 max-w-xl">
          <li className="flex items-start gap-3 text-lg md:text-xl font-medium leading-loose">
            <span className="text-[#38bdf8] font-bold text-xl mt-0.5 shrink-0">✓</span>
            <span>
              <a 
                href="#software-dev" 
                onClick={(e) => handleScrollToFeature(e, 'software-dev')} 
                className="cursor-pointer hover:bg-black hover:text-white px-2.5 py-1.5 rounded-lg transition-colors duration-200"
              >
                Software Development
              </a> 
              {' & '}
              <a 
                href="#cloud-services" 
                onClick={(e) => handleScrollToFeature(e, 'cloud-services')} 
                className="cursor-pointer hover:bg-black hover:text-white px-2.5 py-1.5 rounded-lg transition-colors duration-200"
              >
                Cloud Services Management
              </a>
            </span>
          </li>
          <li className="flex items-start gap-3 text-lg md:text-xl font-medium leading-loose">
            <span className="text-[#38bdf8] font-bold text-xl mt-0.5 shrink-0">✓</span>
            <span>
              <a 
                href="#it-consultancy" 
                onClick={(e) => handleScrollToFeature(e, 'it-consultancy')} 
                className="cursor-pointer hover:bg-black hover:text-white px-2.5 py-1.5 rounded-lg transition-colors duration-200"
              >
                IT Services Consultancy
              </a>
              {' & '}
              <a 
                href="#digital-marketing" 
                onClick={(e) => handleScrollToFeature(e, 'digital-marketing')} 
                className="cursor-pointer hover:bg-black hover:text-white px-2.5 py-1.5 rounded-lg transition-colors duration-200"
              >
                Digital Marketing & Visibility
              </a>
            </span>
          </li>
          <li className="flex items-start gap-3 text-lg md:text-xl font-medium leading-loose">
            <span className="text-[#38bdf8] font-bold text-xl mt-0.5 shrink-0">✓</span>
            <span>
              <a 
                href="#corporate-tools" 
                onClick={(e) => handleScrollToFeature(e, 'corporate-tools')} 
                className="cursor-pointer hover:bg-black hover:text-white px-2.5 py-1.5 rounded-lg transition-colors duration-200"
              >
                Corporate Work Tools
              </a>
              {' & '}
              <a 
                href="#tech-integration" 
                onClick={(e) => handleScrollToFeature(e, 'tech-integration')} 
                className="cursor-pointer hover:bg-black hover:text-white px-2.5 py-1.5 rounded-lg transition-colors duration-200"
              >
                Technology Integration & Support
              </a>
            </span>
          </li>
        </ul>

        {/* Email Capture Form - Dark glass blue input field with responsive text */}
        <form className="flex flex-row items-center gap-3 w-full max-w-xl pt-2">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full text-sm sm:text-base px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-[#00D54B] transition-colors"
          />
          <button 
            type="submit" 
            className="flex items-center justify-center bg-[#0284c7] text-white text-lg font-bold px-8 py-4 rounded h-10 whitespace-nowrap hover:bg-[#0369a1] transition-colors shadow-sm cursor-pointer"
          >
            Contact Us
          </button>
        </form>

        {/* Disclaimer text */}
        <p className="text-xs text-gray-300 max-w-[500px] leading-relaxed opacity-90">
          "We don't just implement technology — we build partnerships. Every client's success is a direct measure of our own" ~ Novelty Works Ltd
          <span className="inline-flex items-center justify-center w-3.5 h-3.5 border border-gray-400 rounded-full text-[9px] cursor-pointer ml-1 hover:bg-white hover:text-black transition-colors">i</span>
        </p>

      </div>
      
    </div>
  );
};