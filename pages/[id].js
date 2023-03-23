import React from "react";

const SingleBlog = () => {
  return (
    <div className="flex flex-col items-center border">
      <img src="/img/bg_image.jpeg" className="img-full" />
      <hr />
      <h2>Welcome to the Blog</h2>
      <p>July 1, 2018</p>
      <p>
        Welcome to the new blog, I hope you enjoy your stay! This is an example
        of how you can control what excerpt shows up.
      </p>
      <p>Checkout things</p>
      <p>Lorem Isulum</p>
      <button>Continue Reading</button>
    </div>
  );
};

export default SingleBlog;
