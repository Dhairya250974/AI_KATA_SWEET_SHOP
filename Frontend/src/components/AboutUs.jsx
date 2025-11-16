const AboutUs = () => {
  return (
    <div className="font-sans bg-white min-h-screen py-16 px-6 sm:px-12 md:px-24">
      {/* Hero Section */}
      {/* "About Us" Title Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-4 leading-tight tracking-tight
                       text-shadow-xl animate-slideInLeft hover:text-[#8B2321] transition-colors duration-300">
          About Us
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto
                      animate-fadeIn delay-100 text-shadow-lg hover:text-gray-700 transition-colors duration-300">
          We believe in the magic of a perfect sweet treat.
        </p>
      </div>

      {/* Our Story Section */}
      <div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0 md:space-x-12 mb-20">
        {/* Left Section - Hero Text */}
        <div className="w-full md:w-1/2 text-center md:text-left animate-slideInLeft">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight
                         text-shadow-lg hover:text-[#8B2321] transition-colors duration-300">
            Our Story, Our Sweetness
          </h1>
          <p className="text-gray-600 text-lg max-w-lg mx-auto md:mx-0
                        animate-fadeIn delay-200 text-shadow-lg hover:text-gray-700 transition-colors duration-300">
            Welcome to our little world of handcrafted treats. We’re a family of candy lovers who turned our passion into a craft—mixing tradition, creativity, and a whole lot of love to bring you sweets that feel just as good as they taste.
          </p>
        </div>

        {/* Right Section - Image & Statistics */}
        <div className="w-full md:w-1/2 flex flex-col items-center animate-slideInRight">
          <div className="w-full relative">
            <img
              src="https://placehold.co/800x600/FDF0D5/FDF0D5?text=A+Pile+of+Candy"
              alt="A large pile of assorted candies"
              className="w-full h-auto object-cover rounded-3xl shadow-2xl transform rotate-2
                         transition-all duration-500 hover:scale-105 hover:rotate-0 hover:shadow-3xl"
            />
            <img
              src="https://5.imimg.com/data5/AS/UH/DU/SELLER-8711856/sweet-shop-designing-service.jpeg"
              alt="Sweet Shop Interior"
              className="w-full h-auto object-cover rounded-3xl shadow-2xl absolute top-0 left-0 transform -rotate-6
                         transition-all duration-500 hover:scale-105 hover:rotate-0 hover:shadow-3xl z-10"
            />
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="relative bg-white py-16 px-6 sm:px-12 md:px-20 rounded-2xl shadow-xl border border-gray-200
                      animate-fadeIn mb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-5"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpath d='M0,50 Q10,60 20,50 T40,50 T60,50 T80,50 T100,50 V0 H0 Z' fill='%238B2321'/%3E%3C/svg%3E")`,
             }}>
        </div>
        <div className="relative z-10 text-center md:text-left mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-gray-900
                         text-shadow-xl animate-slideInLeft hover:text-[#8B2321] transition-colors duration-300">
            The Art of Confectionery
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 animate-fadeIn delay-100
                       text-shadow-lg hover:text-gray-700 transition-colors duration-300 leading-relaxed">
            From classic candies to unique creations, we take pride in our
            diverse selection. Each sweet is a small work of art, made to
            delight your senses and satisfy your cravings. We are constantly
            experimenting to bring you the next perfect treat.
          </p>
        </div>
      </div>

      {/* Why Us? Section */}
      <div className="text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight tracking-tight
                       text-shadow-xl animate-slideInLeft hover:text-[#8B2321] transition-colors duration-300">
          Why Choose Us?
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto
                      animate-fadeIn delay-100 text-shadow-lg">
          Discover what makes our sweet shop special
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Box 1 */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg transform transition-all duration-300 
                         hover:scale-110 hover:shadow-2xl cursor-pointer border border-gray-200
                         animate-fadeIn group"
               style={{ animationDelay: '0.1s' }}>
            <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
              🌟
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#8B2321] transition-colors duration-300">
              Quality Ingredients
            </h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              We use only the finest ingredients to craft our delicious treats.
            </p>
          </div>
          {/* Box 2 */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg transform transition-all duration-300 
                         hover:scale-110 hover:shadow-2xl cursor-pointer border border-gray-200
                         animate-fadeIn group"
               style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
              ❤️
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#8B2321] transition-colors duration-300">
              Handcrafted with Love
            </h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              Every sweet is made with care and passion by our dedicated team.
            </p>
          </div>
          {/* Box 3 */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg transform transition-all duration-300 
                         hover:scale-110 hover:shadow-2xl cursor-pointer border border-gray-200
                         animate-fadeIn group"
               style={{ animationDelay: '0.3s' }}>
            <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
              🎨
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#8B2321] transition-colors duration-300">
              Unique Flavors
            </h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              We constantly innovate to bring you unique and exciting flavor
              combinations.
            </p>
          </div>
          {/* Box 4 */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg transform transition-all duration-300 
                         hover:scale-110 hover:shadow-2xl cursor-pointer border border-gray-200
                         animate-fadeIn group"
               style={{ animationDelay: '0.4s' }}>
            <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
              😊
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#8B2321] transition-colors duration-300">
              Customer Delight
            </h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              Your happiness is our top priority, and we strive to provide the
              best service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
