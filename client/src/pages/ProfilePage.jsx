import { useState, useEffect } from "react";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaEdit,
  FaBookmark,
  FaHeart,
  FaComment,
} from "react-icons/fa";
import anime from "../assets/anime.webp";
import { useBlogStore } from "../store/useBlogStore";
import { FiSettings } from "react-icons/fi";
import Avatar from "../components/Avatar";
import BlogContainer from "../components/BlogContainer";
import BlogCard from "../components/BlogCard";
import Tab from "../components/Tab";
import Loader from "../components/Loader";
import PropTypes from "prop-types";
import { useAuthStore } from "../store/useAuthStore";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("posts");

  const { getAuthorBlogs } = useBlogStore();

  const { authUser, isgettingProfile } = useAuthStore();

  useEffect(() => {
    if (authUser) {
      getAuthorBlogs();
    }
  }, [authUser, getAuthorBlogs]);

  if (isgettingProfile) return <Loader />;
  if (!authUser) return <div className="text-center py-10">User not found</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-8">
      {/* Profile Header */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8 relative">
        {/* COVER PHOTO */}
        <div className="aspect-auto relative w-full h-[160px] sm:h-[220px] md:h-[300px] lg:h-[360px] overflow-hidden rounded-t-xl">
          <img
            src={anime}
            alt="Cover"
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        <div className="relative px-4 sm:px-6 pb-6 sm:pb-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col sm:flex-row sm:items-end">
              <div
                className="absolute -top-20 left-4 sm:left-6 rounded-full shadow-xl z-10
    border-[6px] border-white dark:border-gray-900
    ring-4 ring-purple-500 ring-offset-2 ring-offset-white dark:ring-offset-gray-900
    transition-all duration-300 hover:scale-105 hover:ring-purple-400 overflow-hidden"
                style={{ width: "120px", height: "120px" }}
              >
                <Avatar
                  src={authUser.avatar.url}
                  alt={`${authUser.firstname} ${authUser.lastname}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-24 sm:mt-0 sm:ml-36">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  {authUser.firstname} {authUser.lastname}
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                  @{authUser.username}
                </p>
              </div>
            </div>

            <div className="mt-6 sm:mt-0 flex space-x-3">
              <button className="p-2 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                <FiSettings className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 gap-3 sm:gap-4">
            <span>{`Joined ${new Date(authUser.updatedAt).toLocaleDateString(
              "en-US",
              { month: "long", year: "numeric" }
            )}`}</span>
          </div>

          <div className="mt-4 flex flex-wrap gap-4 sm:gap-6">
            <div className="flex items-center space-x-1">
              <span className="font-semibold text-gray-900 dark:text-white">
                {authUser.following?.length || 0}
              </span>
              <span className="text-gray-600 dark:text-gray-400">
                Following
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="font-semibold text-gray-900 dark:text-white">
                {authUser.followers?.length || 0}
              </span>
              <span className="text-gray-600 dark:text-gray-400">
                Followers
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="font-semibold text-gray-900 dark:text-white">
                {authUser.blogs?.length || 0}
              </span>
              <span className="text-gray-600 dark:text-gray-400">Posts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="mb-6 border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-2 sm:space-x-8 overflow-x-auto pb-2 scrollbar-hide">
          <Tab
            active={activeTab === "posts"}
            onClick={() => setActiveTab("posts")}
            icon={<FaEdit className="mr-1 sm:mr-2" />}
            className="text-sm sm:text-base"
          >
            Posts
          </Tab>
        </nav>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {authUser.blogs.length > 0 ? (
          <BlogContainer />
        ) : (
          <div className="text-center py-12 col-span-full">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              No posts yet
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              When {authUser.firstname} creates posts, they'll appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

ProfilePage.propTypes = {
  username: PropTypes.string,
};

export default ProfilePage;
