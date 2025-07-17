import { FaChevronLeft, FaPlus } from "react-icons/fa";
import { useBlogStore } from "../store/useBlogStore";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AllBlogsContainer from "../components/AllBlogsContainer";

const BlogsPage = () => {
  const { getBlogs } = useBlogStore();

  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  return (
    <div className="max-w-7xl mx-auto min-h-screen px-4 py-12 bg-gray-900">
      {/* Header with Back and Create buttons */}
      <div className="flex items-center justify-between mb-8">
        <Link to="/">
          <button
            className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-lg
            bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
            hover:from-purple-600 hover:via-pink-600 hover:to-red-600
            transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <FaChevronLeft className="text-sm" />
            <span>Back</span>
          </button>
        </Link>

        <Link to="/blog/create">
          <button
            className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-lg
            bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500
            hover:from-green-600 hover:via-emerald-600 hover:to-teal-600
            transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <FaPlus className="text-sm" />
            <span>Create Blog</span>
          </button>
        </Link>
      </div>

      {/* Main Content Area */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-2xl border border-gray-700">
        <h2 className="text-3xl font-bold text-gray-100 mb-6">All Stories</h2>
        <AllBlogsContainer />
      </div>
    </div>
  );
};

export default BlogsPage;
