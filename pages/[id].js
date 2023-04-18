import React from "react";

const SingleBlog = () => {
  return (
    <div className="flex flex-col items-center border">
      <img src="/img/closure.jpeg" className="img-full" />
      <hr />
      <div className="mx-auto">
        <p>
          Closures in JavaScript are one of those concepts that many struggle to
          get their heads around. In the following article, I will explain in
          clear terms what a closure is, and I’ll drive the point home using
          simple code examples.
        </p>
        <h6>What is a closure?</h6>
        <p>
          A closure is a feature in JavaScript where an inner function has
          access to the outer (enclosing) function’s variables — a scope chain.
        </p>
        <p>The closure has three scope chains:</p>
        <ul>
          <li>
            it has access to its own scope — variables defined between its curly
            brackets
          </li>
          <li>it has access to the outer function’s variables </li>
          <li>it has access to the global variables</li>
        </ul>
        <p>
          To the uninitiated, this definition might seem like just a whole lot
          of jargon!
        </p>
      </div>
    </div>
  );
};

export default SingleBlog;
