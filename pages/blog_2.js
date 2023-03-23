import BlogCards from "@/components/BlogCards";
import React from "react";

const blog = () => {
  return (
    <div className="flex flex-col  items-center">
      <div>
        <img src="/img/logo_ryna.jpg" className="rounded-full w-[200px]" />
      </div>
      <p className="block">Anaele Nnaemeka</p>
      <p>Full Stack Developer</p>
      <div className="flex">
        <button>Website</button>
        <button>Twitter</button>
        <button>Github</button>
        <button>LinkedIn</button>
      </div>

      <div>
        <BlogCards />
      </div>
    </div>
  );
};

export default blog;
