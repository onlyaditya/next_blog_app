/blog-app
├── /app
│ ├── /blog
│ │ ├── /[slug] ← Dynamic route for individual blog post
│ │ │ └── page.jsx
│ │ └── page.jsx ← Blog list page
│ ├── /about
│ │ └── page.jsx
│ ├── /contact
│ │ └── page.jsx
│ └── page.jsx ← Home page
├── /components
│ ├── BlogCard.jsx
│ ├── Header.jsx
│ └── Footer.jsx
├── /lib
│ ├── markdown.js ← Parser for markdown (remark/gray-matter)
│ └── posts.js ← Helper to read all posts
├── /public
├── /styles
│ └── globals.css
├── next.config.js
├── package.json
└── README.md
