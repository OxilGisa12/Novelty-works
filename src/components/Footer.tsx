import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa6';

export const Footer = () => {
  return (
    <footer className="bg-[#112240] text-white py-16 px-6 md:px-12 w-full border-t border-sky-500/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        
        {/* Column 1: Company */}
        <div>
          <h3 className="font-bold text-white mb-6 tracking-tight text-base">Company</h3>
          <ul className="space-y-3 font-normal text-sm text-gray-400">
            <li><a href="/about" className="hover:text-sky-400 transition-colors">About</a></li>
            <li><a href="/about" className="hover:text-sky-400 transition-colors">Team</a></li>
            <li><a href="/reach-us" className="hover:text-sky-400 transition-colors">Hiring</a></li>
            <li><a href="/reach-us" className="hover:text-sky-400 transition-colors">Internship</a></li>
          </ul>
        </div>

        {/* Column 2: Privacy & Legal */}
        <div>
          <h3 className="font-bold text-white mb-6 tracking-tight text-base">Legal & Privacy</h3>
          <ul className="space-y-3 font-normal text-sm text-gray-400">
            <li><a href="/policies" className="hover:text-sky-400 transition-colors">Policies</a></li>
            <li><a href="/policies" className="hover:text-sky-400 transition-colors">Client Privacy</a></li>
            <li><a href="/policies" className="hover:text-sky-400 transition-colors">Copyright & Terms</a></li>
          </ul>
        </div>

        {/* Column 3: Contact & Location */}
        <div>
          <h3 className="font-bold text-white mb-6 tracking-tight text-base">Contact & Location</h3>
          <ul className="space-y-3 font-normal text-sm text-gray-400 mb-6 leading-relaxed">
            <li><a href="tel:+25079459000" className="hover:text-sky-400 transition-colors">+250 794 590 000</a></li>
            <li><a href="tel:+25079459000" className="hover:text-sky-400 transition-colors">info@noveltyworks.rw</a></li>
            <li><address className="not-italic">KN 3 Rd, Kigali, Rwanda,East Africa</address></li>
            <li><a href="/reach-us" className="hover:text-sky-400 transition-colors">Our Socials</a></li>
          </ul>

          {/* Social Media Icons using React Icons */}
          <div className="flex items-center space-x-5 mt-8">
            <a href="#" aria-label="Facebook" className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-sky-400 transition-colors">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Instagram" className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-sky-400 transition-colors">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#" aria-label="TikTok" className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-sky-400 transition-colors">
              <FaTiktok className="w-6 h-6" />
            </a>
            <a href="#" aria-label="WhatsApp" className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-sky-400 transition-colors">
              <FaWhatsapp className="w-6 h-6" />
            </a>
          </div>
        </div>

      </div>

      {/* Divider Line */}
      <div className="max-w-7xl mx-auto border-t border-sky-900 mb-12"></div>

      {/* Company Disclaimers & Legal Notice */}
      <div className="max-w-7xl mx-auto text-xs text-gray-400 space-y-4 leading-relaxed font-light">
        <p>
          <strong>Novelty Works LTD</strong> is a Kigali-based technology firm dedicated to helping organizations across Rwanda and the wider East African region harness the full potential of digital technology. We design, build, and manage tailored technology solutions that solve real operational challenges — driving growth, improving efficiency, and enhancing the digital presence of our clients.
        </p>
        <p>
          Unlike firms that rely on generic, off-the-shelf products, Novelty Works delivers customized systems built around each client's unique context, budget, and goals. Our work is grounded in local market expertise and executed to global technology standards, making us a trusted partner for businesses, cooperatives, government-linked institutions, and non-governmental organizations operating in Rwanda.
        </p>
        <p>
          <em>Note: Novelty Works is a legally registered corporate entity. Unauthorized reproduction, distribution, or infringement of our proprietary intellectual property will be strictly prosecuted to the full extent of the law.</em>
        </p>
        <p className="pt-4 border-t border-sky-900 flex flex-col md:flex-row justify-between items-center gap-2">
          <span>&copy; 2019&ndash;2026 Novelty Works LTD. All rights reserved.</span>
          <span>No customer support available at Our Location. Customer support details available on the website.</span>
        </p>
      </div>
      
    </footer>
  );
};