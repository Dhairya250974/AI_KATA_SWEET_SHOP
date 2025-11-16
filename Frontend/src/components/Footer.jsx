const Footer = () => {
  return (
    <footer className="font-sans bg-white body-font border-t border-gray-200 relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpath d='M0,50 Q10,60 20,50 T40,50 T60,50 T80,50 T100,50 V0 H0 Z' fill='%238B2321'/%3E%3C/svg%3E")`,
           }}>
      </div>

      {/* Newsletter Section */}
      <div className="relative z-10 pt-16 pb-12 px-6 sm:px-12 md:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-[#8B2321] to-[#6B1A19] rounded-3xl p-8 md:p-12 shadow-2xl
                          animate-fadeIn overflow-hidden relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <span className="text-5xl transform transition-transform duration-300 hover:rotate-12 hover:scale-125">
                    🍬
                  </span>
                  <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                    Stay Sweet!
                  </h2>
                </div>
                <p className="text-white/90 text-lg sm:text-xl max-w-md">
                  Subscribe to our newsletter and get the latest sweet treats, exclusive offers, and special discounts delivered to your inbox.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center w-full md:w-auto gap-3 min-w-[300px]">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow bg-white rounded-full border-2 border-white/20
                    focus:ring-4 focus:ring-white/30 focus:border-white
                    text-base outline-none text-gray-900 py-4 px-6 transition-all
                    duration-300 placeholder:text-gray-400 shadow-lg"
                />
                <button
                  className="inline-flex items-center justify-center text-white bg-white/20 backdrop-blur-sm 
                  border-2 border-white/30 py-4 px-8 rounded-full font-bold transition-all duration-300 
                  shadow-lg cursor-pointer hover:bg-white hover:text-[#8B2321] hover:border-white
                  transform hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Footer Content */}
      <div className="relative z-10 py-16 px-6 sm:px-12 md:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Brand Section */}
            <div className="md:col-span-4 animate-slideInLeft">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-5xl transform transition-transform duration-300 hover:rotate-12 hover:scale-125">
                  🍬
                </span>
                <h1 className="text-5xl font-extrabold text-[#8B2321]
                               hover:scale-105 transition-transform duration-300 cursor-default">
                  Sweeties
                </h1>
              </div>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Crafting delightful confections with love and passion. Every sweet tells a story, and we're here to make yours memorable.
              </p>
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600 hover:text-[#8B2321] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>1 (234) 567-891</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 hover:text-[#8B2321] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Sweet Street, USA</span>
                </div>
              </div>
            </div>

            {/* Links Grid */}
            <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                <h3 className="font-bold text-gray-900 mb-4 text-lg text-shadow-lg">Shop</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-600 hover:text-[#8B2321] transition-all duration-300 transform hover:translate-x-1 inline-block">All Sweets</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#8B2321] transition-all duration-300 transform hover:translate-x-1 inline-block">Categories</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#8B2321] transition-all duration-300 transform hover:translate-x-1 inline-block">Seasonal Treats</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#8B2321] transition-all duration-300 transform hover:translate-x-1 inline-block">New Arrivals</a></li>
                </ul>
              </div>
              <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                <h3 className="font-bold text-gray-900 mb-4 text-lg text-shadow-lg">Company</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-600 hover:text-[#8B2321] transition-all duration-300 transform hover:translate-x-1 inline-block">About Us</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#8B2321] transition-all duration-300 transform hover:translate-x-1 inline-block">Our Story</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#8B2321] transition-all duration-300 transform hover:translate-x-1 inline-block">Contact</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#8B2321] transition-all duration-300 transform hover:translate-x-1 inline-block">Careers</a></li>
                </ul>
              </div>
              <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                <h3 className="font-bold text-gray-900 mb-4 text-lg text-shadow-lg">Support</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-600 hover:text-[#8B2321] transition-all duration-300 transform hover:translate-x-1 inline-block">FAQs</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#8B2321] transition-all duration-300 transform hover:translate-x-1 inline-block">Shipping & Returns</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#8B2321] transition-all duration-300 transform hover:translate-x-1 inline-block">My Account</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#8B2321] transition-all duration-300 transform hover:translate-x-1 inline-block">Track Order</a></li>
                </ul>
              </div>
              <div className="animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                <h3 className="font-bold text-gray-900 mb-4 text-lg text-shadow-lg">Follow Us</h3>
                <div className="flex space-x-4 mb-6">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" 
                     className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center
                     text-gray-600 hover:text-white hover:bg-[#8B2321] transition-all duration-300
                     transform hover:scale-110 hover:-translate-y-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer"
                     className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center
                     text-gray-600 hover:text-white hover:bg-[#8B2321] transition-all duration-300
                     transform hover:scale-110 hover:-translate-y-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer"
                     className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center
                     text-gray-600 hover:text-white hover:bg-[#8B2321] transition-all duration-300
                     transform hover:scale-110 hover:-translate-y-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                </div>
                <p className="text-gray-500 text-sm">Mon-Sat: 10am - 8pm<br />Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="relative z-10 bg-gray-50 border-t border-gray-200 py-8 px-6 sm:px-12 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-gray-600">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} Sweeties. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="#" className="hover:text-[#8B2321] transition-all duration-300 transform hover:translate-x-1 inline-block">
                Cookies Policy
              </a>
              <a href="#" className="hover:text-[#8B2321] transition-all duration-300 transform hover:translate-x-1 inline-block">
                Legal Terms
              </a>
              <a href="#" className="hover:text-[#8B2321] transition-all duration-300 transform hover:translate-x-1 inline-block">
                Privacy Policy
              </a>
            </div>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 bg-[#8B2321] text-white flex items-center justify-center rounded-full 
                     shadow-lg cursor-pointer transition-all duration-300
                     hover:bg-[#6B1A19] hover:scale-110 hover:shadow-xl active:scale-95
                     transform hover:-translate-y-1 group"
            aria-label="Scroll to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transform transition-transform duration-300 group-hover:-translate-y-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
