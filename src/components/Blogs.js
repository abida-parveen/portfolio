import React, { useEffect, useState } from "react";
import { blogData } from "../helper/blogData";
import "../styles/blogs.css";
import Card from "./Card";

const Blogs = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSize(window.innerWidth);
    });
  }, []);

  return (
    <section className="blog_section container">
      <h2>Jessica's Blogs</h2>
      <div className="card_container">
        {blogData
          .filter((item) => size < 576 ? item.key < 5 : item.key)
          .map((item) => (
            <Card key={item.key} {...item} />
          ))}
        {size < 576 && <button className="button">Load More</button>}
      </div>
    </section>
  );
};

export default Blogs;
