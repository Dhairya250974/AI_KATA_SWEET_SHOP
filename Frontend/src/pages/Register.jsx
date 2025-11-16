import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser, loginUser } from "../api/auth";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    
    // Frontend validation
    if (username.length < 3) {
      setError("Username must be at least 3 characters long");
      setLoading(false);
      return;
    }
    
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      setLoading(false);
      return;
    }
    
    try {
      console.log("Attempting registration...");
      const res = await registerUser(username, password);
      console.log("Registration response:", res.data);
      
      // Check if registration was successful and token is provided
      if (res.data.token && res.data.user) {
        login(res.data.user, res.data.token);
        
        if (res.data.user.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else if (res.data.user) {
        // If user created but no token, try to login
        try {
          const loginRes = await loginUser(username, password);
          if (loginRes.data.token && loginRes.data.user) {
            login(loginRes.data.user, loginRes.data.token);
            
            if (loginRes.data.user.role === "admin") {
              navigate("/admin");
            } else {
              navigate("/");
            }
          }
        } catch (loginErr) {
          // Registration succeeded but auto-login failed
          setError("Registration successful! Please login.");
          setTimeout(() => navigate("/login"), 2000);
        }
      } else {
        setError("Registration failed: Invalid response from server");
      }
    } catch (err) {
      console.error("Registration error:", err);
      console.error("Error details:", {
        message: err.message,
        response: err.response?.data,
        status: err.response?.status
      });
      
      let errorMessage = "Registration failed";
      if (err.code === "ERR_NETWORK" || err.message === "Network Error") {
        errorMessage = "Cannot connect to server. Please check if the backend is running.";
      } else if (err.response?.data?.error) {
        errorMessage = err.response.data.error;
      } else if (err.response?.data?.message) {
        errorMessage = err.response.data.message;
      } else if (err.message) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen bg-[#FDF0D5] font-sans overflow-hidden">
      <div className="flex w-full flex-col md:flex-row items-center justify-center p-8 md:p-10">
        {/* Left section with hero text */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 text-center md:text-left">
          <div className="max-w-md">
            <h1 className="text-6xl md:text-7xl font-extrabold text-[#8B2321] mb-4">
              Sweet.
            </h1>
            <p className="text-gray-600 max-w-sm mx-auto md:mx-0">
              Your one-stop shop for all things sweet and delicious. Manage your
              inventory, track sales, and delight your customers with ease.
            </p>
          </div>
        </div>

        {/* Right section with registration form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md bg-white p-8">
            <h2 className="text-4xl font-extrabold text-[#8B2321] text-center mb-2">
              Sign Up
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Create your new account.
            </p>

            {error && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
                role="alert"
              >
                <span className="block sm:inline">{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="sr-only" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B2321] focus:border-[#8B2321] transition-all"
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B2321] focus:border-[#8B2321] transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 font-semibold transition-colors ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#8B2321] hover:bg-[#6B1A19] cursor-pointer"
                } text-white rounded-full shadow-lg transform hover:scale-105 active:scale-95`}
              >
                {loading ? "Signing up..." : "Sign Up"}
              </button>
              <p className="text-center text-gray-600 text-sm">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-[#8B2321] font-semibold cursor-pointer underline"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
