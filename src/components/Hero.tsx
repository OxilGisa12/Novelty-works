import React from 'react';

export const Hero = () => {
  const handleScrollToFeature = (e: React.MouseEvent<HTMLAnchorElement>, featureId: string) => {
    e.preventDefault();
    window.location.hash = featureId;
    window.dispatchEvent(new HashChangeEvent('hashchange'));
    const section = document.getElementById('interactive-features');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-6 sm:px-8 max-w-7xl mx-auto">
      
      {/* Left Column: Text - Uses responsive constraints to keep it compact on mobile but wide on desktop */}
      <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-white max-w-xl lg:max-w-2xl mx-auto lg:mx-0">
        
        {/* Massive Headline - Responsive sizing keeping it tight on mobile */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] font-['Abril_Fatface']">
          Rwanda’s #1 <br />
          choice for smart <br />
          digital solutions
        </h1>

        {/* Links List - Permanently underlined for mobile visibility using blue accents */}
        <ul className="space-y-4">
          <li className="flex items-start gap-3 text-base md:text-lg font-medium leading-relaxed pl-0">
            <span>
              <a 
                href="#software-dev" 
                onClick={(e) => handleScrollToFeature(e, 'software-dev')} 
                className="cursor-pointer underline underline-offset-4 decoration-[#3B82F6] hover:decoration-blue-400 transition-colors"
              >
                Software Development
              </a> 
              {' & '}
              <a 
                href="#cloud-services" 
                onClick={(e) => handleScrollToFeature(e, 'cloud-services')} 
                className="cursor-pointer underline underline-offset-4 decoration-[#3B82F6] hover:decoration-blue-400 transition-colors"
              >
                Cloud Services Management
              </a>
            </span>
          </li>
          <li className="flex items-start gap-3 text-base md:text-lg font-medium leading-relaxed pl-0">
            <span>
              <a 
                href="#it-consultancy" 
                onClick={(e) => handleScrollToFeature(e, 'it-consultancy')} 
                className="cursor-pointer underline underline-offset-4 decoration-[#3B82F6] hover:decoration-blue-400 transition-colors"
              >
                IT Services Consultancy
              </a>
              {' & '}
              <a 
                href="#digital-marketing" 
                onClick={(e) => handleScrollToFeature(e, 'digital-marketing')} 
                className="cursor-pointer underline underline-offset-4 decoration-[#3B82F6] hover:decoration-blue-400 transition-colors"
              >
                Digital Marketing & Visibility
              </a>
            </span>
          </li>
          <li className="flex items-start gap-3 text-base md:text-lg font-medium leading-relaxed pl-0">
            <span>
              <a 
                href="#corporate-tools" 
                onClick={(e) => handleScrollToFeature(e, 'corporate-tools')} 
                className="cursor-pointer underline underline-offset-4 decoration-[#3B82F6] hover:decoration-blue-400 transition-colors"
              >
                Corporate Work Tools
              </a>
              {' & '}
              <a 
                href="#tech-integration" 
                onClick={(e) => handleScrollToFeature(e, 'tech-integration')} 
                className="cursor-pointer underline underline-offset-4 decoration-[#3B82F6] hover:decoration-blue-400 transition-colors"
              >
                Technology Integration & Support
              </a>
            </span>
          </li>
        </ul>

        {/* Email Capture Form - Stacking on mobile, row on larger screens */}
        <form className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-xl pt-2">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full text-sm sm:text-base px-4 py-3.5 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-[#3B82F6] transition-colors"
          />
          <button 
            type="submit" 
            className="flex items-center justify-center bg-[#3B82F6] text-white text-base font-bold px-8 py-4 rounded-lg whitespace-nowrap hover:bg-blue-600 transition-colors shadow-sm cursor-pointer"
          >
            Get started
          </button>
        </form>

        {/* Disclaimer text */}
        <p className="text-xs text-gray-400 max-w-[500px] leading-relaxed pt-2">
          "We don't just implement technology — we build partnerships. Every client's success is a direct measure of our own" ~ Novelty Works Ltd
          <span className="inline-flex items-center justify-center w-3.5 h-3.5 border border-gray-400 rounded-full text-[9px] cursor-pointer ml-1 hover:bg-white hover:text-black transition-colors">i</span>
        </p>

      </div>
      
    </div>
  );
};