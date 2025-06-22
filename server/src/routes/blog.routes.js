import { Router } from "express";
import {
  createBlogs,
  deleteBlogs,
  getAllBlogs,
  getBlogById,
  getFeedBlogs,
  previewBlog,
  publishBlog,
  toggleLike,
  updateBlogs,
} from "../controllers/blog.controller.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";

const blogRouter = Router();

blogRouter.get("/allblogs", isAuthenticated, getAllBlogs);
blogRouter.get("/feed", getFeedBlogs);
blogRouter.get("/:id", isAuthenticated, getBlogById);
blogRouter.post("/create", isAuthenticated, createBlogs);
blogRouter.put("/update/:id",isAuthenticated,updateBlogs);
blogRouter.delete("/delete/:id", isAuthenticated, deleteBlogs);
blogRouter.post("/like/:id", isAuthenticated, toggleLike);
blogRouter.put("/:id/publish", isAuthenticated, publishBlog);
blogRouter.put("/:id/preview", isAuthenticated, previewBlog);
export default blogRouter;
