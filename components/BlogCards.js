import React from "react";
import Link from "next/link";

const BlogCards = () => {
  return (
    <Link href={`/123`}>
      <div className="flex flex-col items-center border">
        <img src="/img/bg_image.jpeg" className="img-full" />
        <h2>Welcome to the Blog</h2>
        <p>July 1, 2018</p>
        <p>
          Welcome to the new blog, I hope you enjoy your stay! This is an
          example of how you can control what excerpt shows up.
        </p>
        <button>Continue Reading</button>
      </div>
    </Link>
  );
};

export default BlogCards;
