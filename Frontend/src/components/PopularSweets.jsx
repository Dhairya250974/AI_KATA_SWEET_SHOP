import React, { useEffect, useState } from "react";
import { getSweets } from "../api/sweets";
import { useNavigate } from "react-router-dom";

const PopularSweets = ({text}) => {
  const [sweets, setSweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSweets = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log("Fetching sweets...");
        const res = await getSweets();
        console.log("Response received:", res);
        
        // Handle different response structures
        const sweetsData = res.data?.data || res.data || [];
        
        if (!Array.isArray(sweetsData)) {
          console.error("Invalid response format:", sweetsData);
          setError("Invalid data format received from server");
          setSweets([]);
          return;
        }

        if (sweetsData.length === 0) {
          console.log("No sweets found in database");
          setSweets([]);
          return;
        }

        // Sort by createdAt if available, otherwise by name
        const sortedSweets = sweetsData.sort((a, b) => {
          if (a.createdAt && b.createdAt) {
            return new Date(b.createdAt) - new Date(a.createdAt);
          }
          return (a.name || "").localeCompare(b.name || "");
        });

        // Get latest 4 sweets
        const latestFour = sortedSweets.slice(0, 4);
        console.log("Setting sweets:", latestFour.length);
        setSweets(latestFour);
      } catch (err) {
        console.error("Error fetching sweets:", err);
        console.error("Error details:", {
          message: err.message,
          response: err.response?.data,
          status: err.response?.status,
          config: err.config
        });
        
        let errorMessage = "Failed to load sweets";
        if (err.code === "ERR_NETWORK" || err.message === "Network Error") {
          errorMessage = "Cannot connect to backend server. Please check if the server is running.";
        } else if (err.response?.status === 404) {
          errorMessage = "API endpoint not found. Please check backend configuration.";
        } else if (err.response?.data?.error) {
          errorMessage = err.response.data.error;
        } else if (err.message) {
          errorMessage = err.message;
        }
        
        setError(errorMessage);
        setSweets([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSweets();
  }, []);

  return (
    <section className="py-16 px-6 sm:px-12 md:px-24 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 
                       text-gray-900 text-shadow-lg animate-slideInLeft
                       hover:text-[#8B2321] transition-colors duration-300">
          {text}
        </h2>
        
        {loading && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Loading sweets...</p>
          </div>
        )}

        {error && !loading && (
          <div className="text-center py-12">
            <p className="text-red-600 text-lg mb-4">⚠️ {error}</p>
            <p className="text-gray-600">Please check your backend connection.</p>
          </div>
        )}

        {!loading && !error && sweets.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No sweets available at the moment.</p>
          </div>
        )}

        {!loading && !error && sweets.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sweets.map((sweet, index) => (
            <div
              key={sweet._id}
              className="bg-gray-50 rounded-lg shadow-lg p-4 transform transition-all duration-300 
                         hover:scale-105 hover:shadow-xl cursor-pointer border border-gray-200
                         animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={sweet.image || "https://placehold.co/400x550/F5C7A9/8B2321?text=Sweet"}
                  alt={sweet.name}
                  className="w-full h-56 object-cover sm:h-64 transform transition-transform duration-500 
                           hover:scale-110"
                />
              </div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-gray-900 hover:text-[#8B2321] transition-colors">
                  {sweet.name}
                </h3>
                <p className="text-lg font-bold text-[#8B2321]">₹{sweet.price}</p>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Quantity: {sweet.quantity}
              </p>
              <div className="mt-4 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 sm:space-x-2">
                <span
                  className={`inline-block px-4 py-1 rounded-full font-semibold text-sm transition-all duration-300
                             ${sweet.quantity > 0 
                              ? "bg-[#FFDAB9] text-[#8B2321] hover:bg-[#FFC99A]" 
                              : "bg-red-100 text-red-700"}`}
                >
                  {sweet.quantity > 0 ? "In Stock" : "Out of Stock"}
                </span>
                <button
                  onClick={() => navigate(`/sweets/${sweet._id}`)}
                  disabled={sweet.quantity === 0}
                  className={`px-4 py-2 rounded-full font-bold transition-all duration-300 cursor-pointer
                             ${sweet.quantity > 0
                              ? "bg-[#8B2321] text-white shadow-lg transform hover:scale-110 hover:shadow-xl active:scale-95 hover:bg-[#6B1A19]"
                              : "bg-gray-400 text-gray-700 cursor-not-allowed opacity-50"}`}
                >
                  View
                </button>
              </div>
            </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularSweets;
