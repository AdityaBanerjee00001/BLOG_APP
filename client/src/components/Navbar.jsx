import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const Navbar = () => {
  const { authUser, logoutUser } = useAuthStore();

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 border-b border-gray-700 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent leading-none px-1">
            BLOG FLOW
          </h1>
        </Link>

        {/* Nav Links and Auth */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Nav Links */}
          <ul className="hidden sm:flex items-center gap-4 md:gap-6">
            <li>
              <Link
                to="/about"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
              >
                Our Story
              </Link>
            </li>
          </ul>

          {/* Auth Section */}
          {authUser ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
              >
                <div className="avatar">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full ring-2 ring-blue-500 dark:ring-purple-500 ring-offset-2 ring-offset-white dark:ring-offset-gray-900 overflow-hidden transition-transform duration-300 hover:scale-105">
                    <img
                      src={authUser?.avatar?.url || "https://placehold.co/400"}
                      alt="User avatar"
                      className="object-cover w-full h-full object-top"
                    />
                  </div>
                </div>
              </div>

              <ul
                tabIndex={0}
                className="dropdown-content menu bg-white dark:bg-gray-800 rounded-box z-[1] w-52 p-2 shadow-lg border border-gray-100 dark:border-gray-700 mt-2"
              >
                <li>
                  <Link
                    to="/profile"
                    className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={logoutUser}
                    className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-left w-full"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary bg-gradient-to-r from-blue-600 to-purple-600 border-none text-white hover:from-blue-700 hover:to-purple-700">
                Get Started
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
