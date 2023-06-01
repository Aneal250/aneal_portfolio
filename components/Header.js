import React from "react";
import Link from "next/link";

const Header = ({ blog }) => {
  return (
    <div className="block mb-6 md:flex">
      <div className=" w-2/12">
        <Link aria-current="page" className="" href="/">
          <img
            className="w-[150px] rounded-full transform transition-all duration-150 hover:scale-105"
            src="/img/Aneal_emekaH.png"
            alt="Anaele_Nnamekea"
          />
        </Link>
      </div>

      <div className="flex-none pt-6 md:pt-1 md:flex-1 ">
        <h1 className="text-5xl text-gray-900 font-bold leading-tight hover:text-black">
          <Link aria-current="page" className="" href="/">
            Anaele Nnaemeka
          </Link>
        </h1>

        <p className="text-gray-600">Frontend Software Engineer</p>
        <ul className="mt-6 uppercase tracking-wider">
          {blog && (
            <li className="inline list-none pr-4">
              <Link
                href={"/"}
                className="inline-block py-2 font-semibold text-xs text-gray-600 hover:text-black"
              >
                Profile
              </Link>
            </li>
          )}
          <li className="inline list-none pr-4">
            <a
              target="_blank"
              className="inline-block py-2 font-semibold text-xs text-gray-600 hover:text-black"
              href="https://twitter.com/Aneal250"
            >
              Twitter
            </a>
          </li>
          <li className="inline list-none pr-4">
            <a
              target="_blank"
              className="inline-block py-2 font-semibold text-xs text-gray-600 hover:text-black"
              href="https://github.com/Aneal250"
            >
              Github
            </a>
          </li>
          {!blog && (
            <li className="inline list-none pr-4">
              <Link
                href={"/blog/"}
                className="inline-block py-2 font-semibold text-xs text-gray-600 hover:text-black"
              >
                Blog
              </Link>
            </li>
          )}
          {blog && (
            <li className="inline list-none pr-4">
              <Link
                href={"/create_blog/"}
                className="inline-block py-2 font-semibold text-xs text-gray-600 hover:text-black"
              >
                new blog
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
