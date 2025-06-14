import Blog from "../models/blog.model.js";
import User from "../models/user.model.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";

export const getAllBlogs = asyncHandler(async (req, res, next) => {});

export const getFeedBlogs = asyncHandler(async (req, res, next) => {});

export const getBlogById = asyncHandler(async (req, res, next) => {
  const blogId = req.params.id;
  const userId = req.id;
  const user = await User.findById(userId);
  const blog = await Blog.findById(blogId);
  if (!user) {
    throw new ApiError(404, "No user with this userId exists");
  }
  if (!blog) {
    throw new ApiError(404, "Blog not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, blog, `Fetched Blog: ${blog.title}`));
});

export const createBlogs = asyncHandler(async (req, res, next) => {
  const { title, description } = req.body;
  const userId = req.id;
  const user = await User.findById(userId);
  if (!user) {
    throw new ApiError(404, "No user with this userId exists");
  }
  if (!title || !description) {
    throw new ApiError(400, "All fields are required");
  }
  const existingBlog = await Blog.findOne({ title,author: userId });
  if (existingBlog) {
    throw new ApiError(400, "Blog with same title exists");
  }
  const newBlog = await Blog.create({ title, description, author: userId});
  user.blogs.push(newBlog._id);
  await user.save();
  return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        newBlog,
        `${user.username} created new blog ${newBlog.title}`,
      ),
    );
});

export const updateBlogs = asyncHandler(async (req, res, next) => {});

export const deleteBlogs = asyncHandler(async (req, res, next) => {});

export const toggleLike = asyncHandler(async (req, res, next) => {});

export const addComment = asyncHandler(async (req, res, next) => {});

export const getComment = asyncHandler(async (req, res, next) => {});
