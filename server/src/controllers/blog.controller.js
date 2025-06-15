import Blog from "../models/blog.model.js";
import Like from "../models/like.model.js";
import User from "../models/user.model.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";

export const getAllBlogs = asyncHandler(async (req, res, next) => {
  const userId = req.id;

  const user = await User.findById(userId);
  if (!user) {
    throw new ApiError(404, "No user with this userId exists");
  }

  const blogs = await Blog.find({});

  return res.status(200).json(new ApiResponse(200, blogs, `All Blogs Fetched`));
});

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
  const existingBlog = await Blog.findOne({ title, author: userId });
  if (existingBlog) {
    throw new ApiError(400, "Blog with same title exists");
  }
  const newBlog = await Blog.create({ title, description, author: userId });
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

export const updateBlogs = asyncHandler(async (req, res, next) => {
  const { title, description, content, tags, isPublished } = req.body;
  const blogId = req.params.id;
  const userId = req.id;
  const blog = await Blog.findById(blogId);
  if (!blog) {
    throw new ApiError(404, "Blog not found");
  }
  if (blog.author.toString() !== userId) {
    throw new ApiError(403, "You are not authorized to update this blog");
  }
  let coverImageUrl;
  if (req.files && req.files.coverImage) {
    console.log(req.files);
    coverImageUrl = req.files.coverImage[0].path;
  }
  if (coverImageUrl) {
    if (blog.coverImage) {
      await deleteOnCloudinary(blog.coverImage.public_id);
    }
    const result = await uploadOnCloudinary(coverImageUrl, "blog-covers");
    blog.coverImage.url = result.secure_url;
    blog.coverImage.public_id = result.public_id;
  }
  if (title) blog.title = title;
  if (description) blog.description = description;
  if (content) blog.content = content;
  if (tags)
    blog.tags = Array.isArray(tags)
      ? tags
      : tags.split(",").map((tag) => tag.trim());
  if (isPublished !== undefined) {
    blog.isPublished = isPublished;
    if (isPublished && !blog.publishedAt) {
      blog.publishedAt = new Date();
    }
  }
  if (content) {
    const wordsPerMinute = 50;
    const wordCount = content.trim().split(/\s+/).length;
    blog.readTime = Math.ceil(wordCount / wordsPerMinute);
  }
  await blog.save();
  return res
    .status(200)
    .json(new ApiResponse(200, blog, "Blog updated successfully"));
});
export const deleteBlogs = asyncHandler(async (req, res, next) => {
  const blogId = req.params.id;
  const userId = req.id;
  const blog = await Blog.findOne({ _id: blogId, author: userId });
  if (!blog) {
    throw new ApiError(404, "Blog not found");
  }
  await Blog.deleteOne({ _id: blogId, author: userId });

  await User.findByIdAndUpdate(userId, { $pull: { blogs: blogId } });
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Blog Deleted Successfully"));
});

export const toggleLike = asyncHandler(async (req, res, next) => {
  const userId = req.id;
  const blogId = req.params.id;
  const user = await User.findById(userId);
  if (!user) {
    throw new ApiError(404, "No user with this userId exists");
  }
  const blog = await Blog.findById(blogId);
  if (!blog) {
    throw new ApiError(404, "No blog with this id exists");
  }
  const existingLike = await Like.findOne({
    user: userId,
    target: "blog",
    targetId: blogId,
  });
  let message;
  if (existingLike) {
    // To UnLike
    await Like.deleteOne({
      user: userId,
      target: "blog",
      targetId: blogId,
    });
    await blog.updateOne({
      $pull: { likes: existingLike._id },
    });

    message = `${user.username} unliked the blog`;
  } else {
    // To Like
    const newLike = await Like.create({
      user: userId,
      target: "blog",
      targetId: blogId,
    });
    await blog.updateOne({
      $push: { likes: newLike._id },
    });
    message = `${user.username} liked the blog`;
  }
  return res.status(200).json(new ApiResponse(200, null, message));
});
