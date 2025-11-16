import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }
  };

  return (
    <div className="relative font-sans bg-white min-h-screen">
      <section className="py-16 px-6 sm:px-12 md:px-24">
        {/* Header Section */}
        <div className="text-center mb-16 animate-slideInLeft">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-4 leading-tight tracking-tight
                         text-shadow-xl hover:text-[#8B2321] transition-colors duration-300">
            Contact Us
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto
                        animate-fadeIn delay-100 text-shadow-lg hover:text-gray-700 transition-colors duration-300">
            We'd love to hear from you! Get in touch with us.
          </p>
        </div>

        <div className="relative w-full md:w-3/4 max-w-5xl mx-auto flex flex-col md:flex-row gap-8 overflow-hidden z-10">
          {/* Left side with contact info */}
          <div className="w-full md:w-2/5 p-8 rounded-2xl text-white bg-[#8B2321] flex flex-col justify-center
                         shadow-xl border border-gray-200 animate-slideInLeft">
            <div className="space-y-8">
              {/* CALL */}
              <div className="flex items-center space-x-4 group cursor-pointer transform transition-all duration-300
                            hover:scale-105 hover:translate-x-2">
                <div className="p-3 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 transform transition-transform duration-300 group-hover:rotate-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-shadow-lg">CALL US</h4>
                  <p className="text-sm text-white/90 group-hover:text-white transition-colors">1 (234) 567-891, 1 (234) 987-654</p>
                </div>
              </div>
              {/* LOCATION */}
              <div className="flex items-center space-x-4 group cursor-pointer transform transition-all duration-300
                            hover:scale-105 hover:translate-x-2">
                <div className="p-3 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 transform transition-transform duration-300 group-hover:rotate-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-shadow-lg">LOCATION</h4>
                  <p className="text-sm text-white/90 group-hover:text-white transition-colors">Sweet Street, USA</p>
                </div>
              </div>
              {/* BUSINESS HOURS */}
              <div className="flex items-center space-x-4 group cursor-pointer transform transition-all duration-300
                            hover:scale-105 hover:translate-x-2">
                <div className="p-3 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 transform transition-transform duration-300 group-hover:rotate-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-shadow-lg">BUSINESS HOURS</h4>
                  <p className="text-sm text-white/90 group-hover:text-white transition-colors">Mon-Sat: 10am - 8pm, Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side with form */}
          <div className="w-full md:w-3/5 p-8 md:p-12 bg-gray-50 rounded-2xl shadow-xl border border-gray-200
                         animate-slideInRight">
            {submitSuccess && (
              <div
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative mb-6
                           animate-fadeIn shadow-lg transform transition-all duration-300"
                role="alert"
              >
                <span className="block sm:inline font-semibold">
                  ✓ Thank you for your message! We'll be in touch soon.
                </span>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-sm
                                               group-focus-within:text-[#8B2321] transition-colors duration-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white
                           focus:outline-none focus:border-[#8B2321] focus:ring-2 focus:ring-[#8B2321]/20
                           transition-all duration-300 placeholder:text-gray-400
                           hover:border-gray-400 transform hover:scale-[1.01]"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-2 animate-fadeIn flex items-center">
                    <span className="mr-1">⚠</span> {errors.name}
                  </p>
                )}
              </div>
              <div className="relative group">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-sm
                                               group-focus-within:text-[#8B2321] transition-colors duration-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter a valid email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white
                           focus:outline-none focus:border-[#8B2321] focus:ring-2 focus:ring-[#8B2321]/20
                           transition-all duration-300 placeholder:text-gray-400
                           hover:border-gray-400 transform hover:scale-[1.01]"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2 animate-fadeIn flex items-center">
                    <span className="mr-1">⚠</span> {errors.email}
                  </p>
                )}
              </div>
              <div className="relative group">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 text-sm
                                               group-focus-within:text-[#8B2321] transition-colors duration-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Enter your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white resize-none
                           focus:outline-none focus:border-[#8B2321] focus:ring-2 focus:ring-[#8B2321]/20
                           transition-all duration-300 placeholder:text-gray-400
                           hover:border-gray-400 transform hover:scale-[1.01]"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-2 animate-fadeIn flex items-center">
                    <span className="mr-1">⚠</span> {errors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 rounded-full text-white font-bold bg-[#8B2321]
                         hover:bg-[#6B1A19] transition-all duration-300 shadow-lg
                         transform hover:scale-105 hover:shadow-xl active:scale-95
                         cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#8B2321]/50"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
