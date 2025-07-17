import toast from "react-hot-toast";
import { create } from "zustand";
import { axiosInstance } from "../api/axios";

export const useBlogStore = create((set) => ({
  blogs: [],
  authorBlogs: [],
  blog: null,
  isGettingBlogs: false,
  isGettingAuthorBlogs: false,
  isGettingBlog: false,

  getBlogs: async () => {
    set({ isGettingBlogs: true });
    try {
      const res = await axiosInstance.get(`/blog/allblogs`);
      set({ blogs: res.data.data });
    } catch (error) {
      toast.error(error.response.data.message || "Something went wrong");
    } finally {
      set({ isGettingBlogs: false });
    }
  },

  getAuthorBlogs: async () => {
    set({ isGettingAuthorBlogs: true });
    try {
      const res = await axiosInstance.get(`/blog/authorsblogs`);
      console.log(res.data.data);
      set({ authorBlogs: res.data.data });
    } catch (error) {
      toast.error(error.response.data.message || "Something went wrong");
    } finally {
      set({ isGettingAuthorBlogs: false });
    }
  },

  getBlogById: async (id) => {
    set({ isGettingBlog: true });
    try {
      const res = await axiosInstance.get(`/blog/${id}`);
      set({ blog: res.data.data });
    } catch (error) {
      toast.error(error.response.data.message || "Session expred");
    } finally {
      set({ isGettingBlog: false });
    }
  },
}));
