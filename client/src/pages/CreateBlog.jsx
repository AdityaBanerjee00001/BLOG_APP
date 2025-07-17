import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const CreateBlog = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section at Top */}
      <header className="pt-8 pb-12 px-4 text-center">
        <motion.h1
          className="text-5xl font-extrabold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Create Blog
          </span>
          <motion.span
            className="ml-5 inline-block"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
          >
            ✍️
          </motion.span>
        </motion.h1>
      </header>

      {/* Back Button - Top Left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute top-6 left-6"
      >
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-lg
            bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
            shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <FaChevronLeft className="text-sm" />
            <span>Back</span>
          </motion.button>
        </Link>
      </motion.div>

      {/* Content Area Below (Empty for now) */}
      <div className="px-6">
        {/* Your blog creation form/content would go here */}
      </div>
    </div>
  );
};

export default CreateBlog;
