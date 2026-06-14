
import { 
  FaBuilding, 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhone 
} from 'react-icons/fa';

export const ReachUs = () => {
  return (
    <div className="bg-white text-gray-900 py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16 min-h-[calc(100vh-80px)] flex flex-col justify-center">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold font-['Orpheus'] text-[#1E40AF]">Reach Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          We invite prospective clients, partners, and institutions to engage with us. Whether you are looking to digitize your operations, expand your online reach, migrate to the cloud, or build a custom software solution, Novelty Works Ltd has the expertise to make it happen.
        </p>
      </div>

      {/* Contact Info & Form Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Contact Details */}
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 space-y-8 h-full">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
            <p className="text-gray-600">Get in touch with our team in Kigali, Rwanda.</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-[#1E40AF]/10 rounded-xl border border-[#1E40AF]/20 text-[#1E40AF]">
                <FaBuilding className="text-xl" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Company</h4>
                <p className="text-lg font-semibold text-gray-900">Novelty Works Ltd</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-[#1E40AF]/10 rounded-xl border border-[#1E40AF]/20 text-[#1E40AF]">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Location</h4>
                <p className="text-lg text-gray-900">Kigali, Rwanda</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-[#1E40AF]/10 rounded-xl border border-[#1E40AF]/20 text-[#1E40AF]">
                <FaEnvelope className="text-xl" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Email</h4>
                <a href="mailto:info@noveltyworks.rw" className="text-lg text-[#1E40AF] hover:underline break-all">
                  info@noveltyworks.rw
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-[#1E40AF]/10 rounded-xl border border-[#1E40AF]/20 text-[#1E40AF]">
                <FaPhone className="text-xl" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Phone</h4>
                <a href="tel:+250780000000" className="text-lg text-[#1E40AF] hover:underline">
                  +250 780 000 000
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">Send Us a Message</h2>
            <p className="text-gray-600">We'll get back to you as soon as possible.</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <input 
                type="text" 
                placeholder="Your Names" 
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-[#1E40AF]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <input 
                type="email" 
                placeholder="name@example.com" 
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-[#1E40AF]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Message</label>
              <textarea 
                rows={4} 
                placeholder="How can we help you today?" 
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-[#1E40AF] resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full py-4 bg-[#1E40AF] text-white font-bold rounded-lg hover:bg-[#1E40AF]/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>

    </div>
  );
};