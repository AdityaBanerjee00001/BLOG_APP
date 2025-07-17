import { FaHeart, FaComment, FaBookmark } from "react-icons/fa";
import PropTypes from "prop-types";

const BlogCard = ({ post }) => {
  return (
    <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-700">
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300"
            >
              #{tag}
            </span>
          ))}
        </div>

        <h3 className="text-lg md:text-xl font-bold text-gray-100 mb-3 line-clamp-2">
          {post.title}
        </h3>

        <p className="text-gray-400 mb-4 line-clamp-3 flex-1">
          {post.description}
        </p>

        <div className="flex items-center justify-between text-sm mt-auto">
          <div className="flex items-center space-x-3 text-gray-500">
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
            <span>{post.readTime} min read</span>
          </div>

          <div className="flex space-x-3 text-gray-400">
            <button className="hover:text-red-400 transition-colors">
              <FaHeart />
            </button>
            <button className="hover:text-blue-400 transition-colors">
              <FaComment />
            </button>
            <button className="hover:text-yellow-400 transition-colors">
              <FaBookmark />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    publishedAt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date),
    ]).isRequired,
    readTime: PropTypes.number.isRequired,
  }).isRequired,
};

export default BlogCard;
