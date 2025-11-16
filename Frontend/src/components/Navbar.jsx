import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 bg-white text-gray-800 p-4 sm:px-12 md:px-24 shadow-xl rounded-2xl border border-gray-100">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 text-3xl font-extrabold tracking-wider
                     text-[#8B2321] transition-all duration-300
                     transform hover:scale-110 hover:rotate-1 active:scale-95
                     group cursor-pointer"
        >
          <span className="text-4xl transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125">
            🍬
          </span>
          <span className="relative font-bold">
            Sweeties
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B2321] to-[#FFDAB9] 
                           transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-[#8B2321] transition-colors">
            Home
          </Link>
          <Link to="/all-sweets" className="text-gray-700 hover:text-[#8B2321] transition-colors">
            All Sweets
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-[#8B2321] transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-[#8B2321] transition-colors">
            Contact
          </Link>

          {user ? (
            <>
              {user.role === "admin" && (
                <Link to="/admin" className="text-gray-700 hover:text-[#8B2321] transition-colors">
                  Admin
                </Link>
              )}
              <Link to="/profile" className="text-gray-700 hover:text-[#8B2321] transition-colors">
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="bg-[#8B2321] text-white px-4 py-2 rounded-full font-bold
                           hover:bg-[#6B1A19] transition-all duration-300 shadow-lg 
                           transform hover:scale-110 hover:shadow-xl cursor-pointer
                           active:scale-95"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-[#8B2321] text-white px-4 py-2 rounded-full font-bold
                           hover:bg-[#6B1A19] transition-all duration-300 shadow-lg
                           transform hover:scale-110 hover:shadow-xl active:scale-95"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-[#FFDAB9] text-[#8B2321] px-4 py-2 rounded-full font-bold
                           hover:bg-[#FFC99A] transition-all duration-300 shadow-lg
                           transform hover:scale-110 hover:shadow-xl active:scale-95"
              >
                Signup
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-gray-800 focus:outline-none transition-all duration-300
                       transform hover:scale-110 active:scale-95 hover:rotate-90"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white rounded-b-2xl ${
          isMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 pt-4">
          <Link onClick={toggleMenu} to="/" className="text-gray-700 hover:text-[#8B2321] transition-colors">
            Home
          </Link>
          <Link onClick={toggleMenu} to="/all-sweets" className="text-gray-700 hover:text-[#8B2321] transition-colors">
            All Sweets
          </Link>
          <Link onClick={toggleMenu} to="/about" className="text-gray-700 hover:text-[#8B2321] transition-colors">
            About
          </Link>
          <Link onClick={toggleMenu} to="/contact" className="text-gray-700 hover:text-[#8B2321] transition-colors">
            Contact
          </Link>

          {user ? (
            <>
              {user.role === "admin" && (
                <Link onClick={toggleMenu} to="/admin" className="text-gray-700 hover:text-[#8B2321] transition-colors">
                  Admin
                </Link>
              )}
              <Link onClick={toggleMenu} to="/dashboard" className="text-gray-700 hover:text-[#8B2321] transition-colors">
                Dashboard
              </Link>
              <Link onClick={toggleMenu} to="/profile" className="text-gray-700 hover:text-[#8B2321] transition-colors">
                Profile
              </Link>
              <button
                onClick={() => { handleLogout(); toggleMenu(); }}
                className="bg-[#8B2321] text-white px-4 py-2 rounded-full font-bold
                           hover:bg-[#6B1A19] transition-all duration-300 shadow-lg w-full
                           transform hover:scale-105 hover:shadow-xl active:scale-95"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                onClick={toggleMenu}
                to="/login"
                className="bg-[#8B2321] text-white px-4 py-2 rounded-full font-bold
                           hover:bg-[#6B1A19] transition-all duration-300 shadow-lg w-full text-center
                           transform hover:scale-105 hover:shadow-xl active:scale-95"
              >
                Login
              </Link>
              <Link
                onClick={toggleMenu}
                to="/register"
                className="bg-[#FFDAB9] text-[#8B2321] px-4 py-2 rounded-full font-bold
                           hover:bg-[#FFC99A] transition-all duration-300 shadow-lg w-full text-center
                           transform hover:scale-105 hover:shadow-xl active:scale-95"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
