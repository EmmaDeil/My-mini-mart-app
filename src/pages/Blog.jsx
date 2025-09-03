import React, { useState } from "react";

const BlogPost = ({ post }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img
          src={post.imageUrl}
          className="card-img-top"
          alt={post.title}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <div className="text-muted mb-2">
            <small>
              By {post.author} • {post.date}
            </small>
          </div>
          <p className="card-text">{post.content}</p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  const [posts] = useState([
    {
      id: 1,
      title: "Facility Management Best Practices",
      author: "Ladiel Team",
      date: "August 15, 2024",
      imageUrl: "/assets/img1.jpg",
      content:
        "Discover the best practices in modern facility management and how to implement them effectively...",
    },
    {
      id: 2,
      title: "Maintenance Solutions Guide",
      author: "Technical Team",
      date: "August 10, 2024",
      imageUrl: "/assets/img2.jpg",
      content:
        "A comprehensive guide to maintaining your facilities and equipment in top condition...",
    },
    {
      id: 3,
      title: "Sustainable Building Management",
      author: "Environmental Team",
      date: "August 5, 2024",
      imageUrl: "/assets/img3.jpg",
      content:
        "Learn about sustainable practices in building management and how to reduce your environmental impact...",
    },
  ]);

  return (
    <div className="container py-5">
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h1 className="display-4 mb-3">Latest Updates</h1>
          <p className="lead text-muted">
            Stay informed with our latest news and insights
          </p>
        </div>
      </div>

      <div className="row">
        {posts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>

      <div className="row mt-5">
        <div className="col-12 text-center">
          <button className="btn btn-outline-primary">Load More Posts</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
