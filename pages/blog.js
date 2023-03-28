import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Layout from "@/components/layout";
import Link from "next/link";
import React from "react";

const blog = () => {
  return (
    <Layout>
      <Header blog={true} />

      <div class="block pt-9 md:flex">
        <div class="pb-6  md:p-0 w-2/12">
          <h2 class="font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase text-right pr-20">
            Blogs
          </h2>
        </div>
        <div class=" text-lg text-gray-600 font-light  ">
          {/* Check out the Blogs */}
          <Link href={`/123`}>
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
          </Link>

          <Link href={`/123`}>
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
          </Link>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default blog;
