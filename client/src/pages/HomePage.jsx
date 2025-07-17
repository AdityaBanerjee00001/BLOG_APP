import Footer from "../components/Footer";
import anime from "../assets/anime.webp";
import { Link } from "react-router";
import { useAuthStore } from "../store/useAuthStore";

const HomePage = () => {
  const { authUser } = useAuthStore();

  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-gray-950 relative">
      {/* Hero Section */}
      <div className="w-full h-[610px]">
        <div className="mx-auto max-w-7xl h-full grid grid-cols-1 md:grid-cols-2">
          {/* Text Content */}
          <div className="flex flex-col justify-center col-span-1 px-10">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Human
            </h1>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
              stories & ideas
            </h1>
            <p className="text-lg sm:text-xl font-medium text-gray-700 dark:text-gray-300 pt-5 max-w-xl">
              A place to read, write, and deepen your understanding. Start
              reading.
            </p>

            {/* Primary Call-to-Action */}
            <div className="pt-6">
              {authUser ? (
                <Link to="/blog/create">
                  <button
                    className="inline-flex items-center px-6 py-3 rounded-full text-white font-semibold text-lg
                      bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
                      hover:from-purple-600 hover:via-pink-600 hover:to-red-600
                      transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    ✍️ Write Something...
                  </button>
                </Link>
              ) : (
                <Link to="/login">
                  <button
                    className="inline-flex items-center px-7 py-3 rounded-full text-white font-semibold text-lg
                      bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500
                      hover:from-green-600 hover:via-emerald-600 hover:to-teal-600
                      transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    🚀 Get Started
                  </button>
                </Link>
              )}

              <Link to="/blogs" className="ml-6">
                <button
                  className="inline-flex items-center px-6 py-3 rounded-full text-white font-semibold text-lg
                      bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
                      hover:from-purple-600 hover:via-pink-600 hover:to-red-600
                      transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  ✍️Explore Stories
                </button>
              </Link>
            </div>

            {/* Secondary Link (optional) */}
            {!authUser && (
              <div className="pt-4">
                <Link
                  to="/about"
                  className="text-base font-medium text-purple-600 dark:text-purple-400 hover:underline hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-200"
                >
                  Learn more about us →
                </Link>
              </div>
            )}
          </div>

          {/* Image Section */}
          <div className="hidden md:flex items-center justify-center col-span-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-yellow-800/90 shadow-yellow-800/90">
              <img
                src={anime}
                alt="anime illustration"
                className="w-[500px] h-[400px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
