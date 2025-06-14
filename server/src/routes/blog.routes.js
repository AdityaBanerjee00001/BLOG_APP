import { Router } from "express";
import { addComment, createBlogs, deleteBlogs, getAllBlogs, getBlogById, getComment, getFeedBlogs, toggleLike, updateBlogs } from "../controllers/blog.controller.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";

const blogRouter = Router();

blogRouter.get("/allblogs",isAuthenticated,getAllBlogs);
blogRouter.get("/feed",getFeedBlogs);
blogRouter.get("/:id",isAuthenticated,getBlogById);
blogRouter.post("/create",isAuthenticated,createBlogs);
blogRouter.put("/update", updateBlogs);
blogRouter.delete("/delete/:id",isAuthenticated,deleteBlogs);
blogRouter.post("/like/:id",isAuthenticated, toggleLike);
blogRouter.post("/comment/:id", addComment);
blogRouter.get("/comments",getComment);

export default blogRouter;