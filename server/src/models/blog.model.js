import mongoose, { Schema } from "mongoose";
const blogSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    coverImage: {
      type: String,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    tags: [
      {
        type: String,
      },
    ],

    isPublished: {
      type: Boolean,
      required: [true, "Is Published is Required"],
      default: false,
    },

    publishedAt: {
      type: Date,
    },

    views: {
      type: Number,
      default: 0,
    },

    readTime: {
      type: Number,
    },

    readers: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "like",
      },
    ],
  },
  { timestamp: true },
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
