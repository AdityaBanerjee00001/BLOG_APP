import { Router } from "express";
import { addComment, createBlogs, deleteBlogs, getAllBlogs, getBlogById, getComment, getFeedBlogs, toggleLike, updateBlogs } from "../controllers/blog.controller.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";

const blogRouter = Router();

blogRouter.get("/allblogs",getAllBlogs);
blogRouter.get("/feed",getFeedBlogs);
blogRouter.get("/:id",isAuthenticated,getBlogById);
blogRouter.post("/create",isAuthenticated,createBlogs);
blogRouter.put("/update", updateBlogs);
blogRouter.delete("/delete", deleteBlogs);
blogRouter.post("/like/:id", toggleLike);
blogRouter.post("/comment/:id", addComment);
blogRouter.get("/comments",getComment);

export default blogRouter;