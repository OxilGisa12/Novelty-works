import React, { useState } from 'react';

const faqData = [
  {
    question: "What is Novelty Works Ltd?",
    answer: "Novelty Works Ltd is a Kigali-based technology firm dedicated to helping organizations across Rwanda and the wider East African region harness the full potential of digital technology. We design, build, and manage tailored technology solutions that solve real operational challenges — driving growth, improving efficiency, and enhancing the digital presence of our clients."
  },
  {
    question: "Who are you?",
    answer: "We are a lean, agile team of technology professionals combining deep local knowledge with internationally recognized tools and standards. Our client engagements are built on transparency, long-term partnership, and measurable outcomes rather than one-off transactions."
  },
  {
    question: "Why was Novelty Works founded, and how is it different from other local developers?",
    answer: "Novelty Works Ltd was founded with a clear conviction: technology only creates value when it is accessible, relevant, and well-supported. Too many organizations in Rwanda have invested in technology solutions that are either too complex to adopt, too expensive to maintain, or disconnected from local realities. Unlike firms that rely on generic, off-the-shelf products, Novelty Works delivers customized systems built around each client's unique context, budget, and goals."
  },
  {
    question: "Tell me about your team.",
    answer: "Novelty Works is led by a core team of two dedicated technology professionals, combining expertise across software engineering, cloud infrastructure, digital marketing, and IT consulting. We operate with a trusted network of specialist associates and partners, allowing us to scale delivery capacity for large or complex engagements without compromising quality or responsiveness."
  },
  {
    question: "Why choose Novelty Works?",
    answer: "We stand out by providing:\n• Customized Solutions, Not Off-the-Shelf Products\n• Reliable Technical Support & Long-Term Partnership\n• Cost-Efficient and Scalable Digital Systems\n• Locally Grounded Expertise with Global Standards"
  },
  {
    question: "How do you align with Rwanda's national priorities?",
    answer: "Novelty Works Ltd operates in direct alignment with Rwanda's national development priorities, including the Smart Rwanda Master Plan and the country's vision for a knowledge-based, digitally-enabled economy."
  },
  {
    question: "What is your commitment to clients?",
    answer: "We invite prospective clients, partners, and institutions to engage with us. Whether you are looking to digitize your operations, expand your online reach, migrate to the cloud, or build a custom software solution, Novelty Works Ltd has the expertise, commitment, and track record to make it happen — on time, within budget, and with lasting impact."
  }
];

export const FAQs = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([]); 

  const toggleFaq = (index: number) => {
    setOpenIndices((prev) => 
      prev.includes(index) 
        ? prev.filter((i) => i !== index) 
        : [...prev, index]
    );
  };

  return (
    <section className="bg-white pt-12 pb-24 px-6 md:px-12 text-gray-900 w-full">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10 tracking-tight text-[#112240]">
          FAQs
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div 
                key={index} 
                className={`overflow-hidden border rounded-2xl transition-all duration-300 ${
                  isOpen 
                    ? 'bg-[#112240] text-white border-transparent shadow-xl' 
                    : 'bg-white text-gray-900 border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)]'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left font-bold text-lg md:text-xl transition-colors cursor-pointer outline-none"
                >
                  <span className={isOpen ? 'text-white' : 'text-gray-900'}>
                    {faq.question}
                  </span>
                  <span className={`text-2xl font-light leading-none ${isOpen ? 'text-white' : 'text-gray-900'}`}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                
                {isOpen && (
                  <div className="p-6 pt-0 text-gray-200 text-base md:text-lg leading-relaxed border-t border-sky-500/30 whitespace-pre-line">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};