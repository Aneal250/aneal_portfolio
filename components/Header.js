import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div class="block mb-6 md:flex">
      <div class=" w-2/12">
        <a aria-current="page" class="" href="/">
          <img
            class="w-[150px] rounded-full transform transition-all duration-150 hover:scale-105"
            src="/img/Aneal_emekaH.png"
            alt="Anaele_Nnamekea"
          />
        </a>
      </div>

      <div class="flex-none pt-6 md:pt-1 md:flex-1 ">
        <h1 class="text-5xl text-gray-900 font-bold leading-tight hover:text-black">
          <a aria-current="page" class="" href="/">
            Anaele Nnaemeka
          </a>
        </h1>

        <p class="text-gray-600">Full-Stack Developer</p>
        <ul class="mt-6 uppercase tracking-wider">
          <li class="inline list-none pr-4">
            <a
              class="inline-block py-2 font-semibold text-xs text-gray-600 hover:text-black"
              href="https://twitter.com/@rfitzio"
            >
              Twitter
            </a>
          </li>
          <li class="inline list-none pr-4">
            <a
              class="inline-block py-2 font-semibold text-xs text-gray-600 hover:text-black"
              href="https://github.com/ryanfitzgerald"
            >
              Github
            </a>
          </li>
          <li class="inline list-none pr-4">
            <Link
              href={"/blog/"}
              class="inline-block py-2 font-semibold text-xs text-gray-600 hover:text-black"
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
