"use client";

const BLOG_KEY = "blog-posts";

export const getBlogs = () => {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(BLOG_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const saveBlog = (newBlog) => {
  const current = getBlogs();
  const updated = [...current, { ...newBlog, id: Date.now().toString() }];
  localStorage.setItem(BLOG_KEY, JSON.stringify(updated));
};
