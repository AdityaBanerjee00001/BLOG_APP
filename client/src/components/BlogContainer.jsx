import { useBlogStore } from "../store/useBlogStore";
import BlogCard from "./BlogCard";
const BlogContainer = () => {
  const { authorBlogs } = useBlogStore();
  console.log("My Blogs:", authorBlogs);

  return (
    <div>
      {authorBlogs.map((blog) => (
        <BlogCard key={blog._id} post={blog} />
      ))}
    </div>
  );
};
export default BlogContainer;
