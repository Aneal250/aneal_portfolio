import Header from "@/components/Header";
import React from "react";

const blog = () => {
  return (
    <div>
      <Header />

      <div class="block pt-12 md:flex">
        <div class="pb-6  md:p-0 w-2/12">
          <h2 class="font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase text-right pr-20">
            Blogs
          </h2>
        </div>
        <div class="flex-none text-lg text-gray-600 font-light bg-white md:flex-1 ">
          {/* Check out the Blogs */}
          <div class="mb-6 hover:border hover:rounded-xl p-4  cursor-pointer">
            <div>
              <h3 className="font-semibold text-gray-900 pb-1 hover:underline hover:text-black">
                Check Out things and Others
              </h3>
              <p>
                checking out things and every given technologies of life and
                other things that are better of given the scale.
              </p>
            </div>
          </div>

          <div class="mb-6 hover:border hover:rounded-xl p-4  cursor-pointer">
            <div>
              <h3 className="font-semibold text-gray-900 pb-1 hover:underline hover:text-black">
                Check Out things and Others
              </h3>
              <p>
                checking out things and every given technologies of life and
                other things that are better of given the scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blog;
