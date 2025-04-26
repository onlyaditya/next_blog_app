"use client";

const API_URL = "https://blogs-app-backend-itdk.onrender.com/api/blogs";

export const getBlogs = () => {
  const blogs = fetch(API_URL)
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch blogs");
      return res.json();
    })
    .then((data) => data)
    .catch((err) => {
      console.error("Error fetching blogs:", err);
      return [];
    });

  console.log("Test : ", blogs);

  return blogs;
};

export const saveBlog = (newBlog) => {
  return fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBlog),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to save blog");
      return res.json();
    })
    .then((saved) => saved)
    .catch((err) => {
      console.error("Error saving blog:", err);
      return null;
    });
};
