import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const reviews = [
  {
    id: 1,
    stars: '★★★★★',
    text: '“Thanks to their Google Workspace consolidation and data centralization, we saw a 43% productivity increase within 12 months. Highly professional productivity systems setup!”',
    source: 'Tasks Africa CBC',
    link: 'https://www.tasksafrica.org/',
  },
  {
    id: 2,
    stars: '★★★★★',
    text: '“They built a nationwide student fellowship platform and digital communication infrastructure for us, establishing a reliable, country-wide communication channel for our students.”',
    source: 'RNSA-Intagamburuzwa',
    link: 'https://rnsa-intagamburuzwa.rw/',
  },
  {
    id: 3,
    stars: '★★★★',
    text: '“Their digital marketing strategy and SEO campaign gave us a huge visibility boost, leading to a 17% increase in sales per quarter. Excellent work!”',
    source: 'Biokube Rwanda',
    link: 'https://www.biokube.com/where-to-buy-biokube/',
  },
  {
    id: 4,
    stars: '★★★★★',
    text: '“Harmonizing our inventory system and setting up real-time business activity tracking streamlined our operations completely. Live monitoring has been a game changer.”',
    source: 'Umutaka Ltd',
    link: '#',
  }
];

export const MemberReviews = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      
      const maxScroll = scrollWidth - clientWidth;
      const scrollPercentage = maxScroll > 0 ? scrollLeft / maxScroll : 0;

      if (scrollPercentage < 0.33) {
        setActiveDot(0);
      } else if (scrollPercentage < 0.66) {
        setActiveDot(1);
      } else {
        setActiveDot(2);
      }
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const width = Math.min(scrollContainerRef.current.clientWidth * 0.85, 392);
      scrollContainerRef.current.scrollBy({ left: -width, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const width = Math.min(scrollContainerRef.current.clientWidth * 0.85, 392);
      scrollContainerRef.current.scrollBy({ left: width, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-24 px-6 md:px-12 text-gray-900 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading - Removed whitespace-nowrap and added a responsive break so it wraps gracefully on small screens */}
        <div className="w-full mb-16 px-4">
          <h2 className="text-[28px] xs:text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 text-center leading-snug max-w-xl mx-auto">
            Clients experiences <br className="xs:hidden" />& feedbacks
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto w-full">
          
          {/* Scrollable Row */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-8 overflow-x-auto scroll-smooth pb-8 pt-2 px-4 -mx-4 md:px-0 md:mx-0 cursor-grab active:cursor-grabbing"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {reviews.map((review) => (
              <div 
                key={review.id} 
                className="flex-none w-[82vw] sm:w-[360px] bg-white border border-gray-100/80 rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.10)] flex flex-col justify-between h-[420px]"
              >
                <div>
                  {/* Star Rating */}
                  <div className="text-amber-500 text-2xl mb-5 tracking-widest">
                    {review.stars}
                  </div>
                  {/* Review Text */}
                  <p className="text-gray-800 leading-relaxed font-medium text-base break-words">
                    {review.text}
                  </p>
                </div>
                {/* Source with clickable link */}
                <div className="mt-6 text-sm font-bold text-gray-900 truncate">
                  <a 
                    href={review.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-amber-500 transition-colors underline underline-offset-4 inline-block max-w-full truncate"
                  >
                    {review.source}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8 max-w-xs mx-auto">
            <button 
              onClick={scrollLeft}
              className="p-3.5 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer text-gray-600 font-bold shadow-sm"
            >
              ←
            </button>
            
            {/* Active/Inactive Pagination Dots */}
            <div className="flex gap-2 items-center">
              <span className={`w-2.5 h-2.5 rounded-full transition-colors ${activeDot === 0 ? 'bg-amber-500' : 'bg-gray-300'}`}></span>
              <span className={`w-2.5 h-2.5 rounded-full transition-colors ${activeDot === 1 ? 'bg-amber-500' : 'bg-gray-300'}`}></span>
              <span className={`w-2.5 h-2.5 rounded-full transition-colors ${activeDot === 2 ? 'bg-amber-500' : 'bg-gray-300'}`}></span>
            </div>
            
            <button 
              onClick={scrollRight}
              className="p-3.5 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer text-gray-600 font-bold shadow-sm"
            >
              →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};