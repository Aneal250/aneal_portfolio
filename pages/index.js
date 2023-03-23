import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Anaele Nnaemeka</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* Header Section */}
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
        {/* About Me section */}

        <div class="block pt-12 md:flex">
          <div class="pb-6  md:p-0 w-2/12">
            <h2 class="font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase text-right pr-20">
              About Me
            </h2>
          </div>
          <div class="flex-none text-lg text-gray-600 font-light bg-white md:flex-1 ">
            <div class="mb-6">
              <p>
                Hi, I am a Software Engineer with extensive years of experience
                in developing and building interactive web applications using
                software Technologies such as HTML, CSS, JavaScript, React,
                Redux, Nextjs, NodeJs, ExpressJs, CMS and MongoDB. I decompose
                complex problems into logic and scalable UI components using
                JavaScript and TypeScript frameworks to build cutting edge Web
                Applications.
              </p>
            </div>
          </div>
        </div>

        {/* experience */}
        <div class="block pt-12 md:flex">
          <div class="pb-6  w-2/12 md:p-0">
            <h2 class="font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase text-right pr-20">
              Projects
            </h2>
          </div>
          <div class="flex-none text-lg text-gray-600 font-light bg-white md:flex-1 ">
            <div class="mb-6">
              <h3 class="font-semibold text-gray-900 pb-1 hover:underline hover:text-black">
                <a href="https://standupwizard.com/?ref=portfolio">
                  StandupWizard
                </a>
              </h3>
              <p class="text-md text-gray-600 font-light">
                Asynchronous standups for remote teams, directly in Slack
              </p>
            </div>
            <div class="mb-6">
              <h3 class="font-semibold text-gray-900 pb-1 hover:underline hover:text-black">
                <a href="https://extensionkit.io/?ref=portfolio">
                  ExtensionKit
                </a>
              </h3>
              <p class="text-md text-gray-600 font-light">
                Kit to jump-start your Chrome extension projects with a variety
                of battle-tested starter templates
              </p>
            </div>
            <div class="mb-6">
              <h3 class="font-semibold text-gray-900 pb-1 hover:underline hover:text-black">
                <a href="https://coursefacts.com/">Coursefacts</a>
              </h3>
              <p class="text-md text-gray-600 font-light">
                A platform where students can read and write university /
                college course reviews anonymously
              </p>
            </div>
            <div class="mb-6">
              <h3 class="font-semibold text-gray-900 pb-1 hover:underline hover:text-black">
                <a href="https://github.com/RyanFitzgerald/devblog">Dev Blog</a>
              </h3>
              <p class="text-md text-gray-600 font-light">
                An open-source and minimal personal blog template for developers
                built with Gatsby and React
              </p>
            </div>
            <div class="mb-6">
              <h3 class="font-semibold text-gray-900 pb-1 hover:underline hover:text-black">
                <a href="https://github.com/RyanFitzgerald/devportfolio">
                  Dev Portfolio
                </a>
              </h3>
              <p class="text-md text-gray-600 font-light">
                An open source and customizable single-page personal portfolio
                template for developers
              </p>
            </div>
          </div>
        </div>

        {/* The Blog */}
        <div class="block pt-12 md:flex">
          <div class="pb-6  w-2/12 md:p-0">
            <h2 class="font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase text-right pr-20">
              Latest Posts
            </h2>
          </div>
          <div class="flex-none text-lg text-gray-600 font-light bg-white md:flex-1 ">
            <div class="mb-6">
              <h3 class="font-semibold text-gray-900 pb-1 hover:underline hover:text-black">
                <a href="/blog/permanent-domain-redirect-aws/">
                  How to 301 Redirect to a new domain with AWS S3 &amp;
                  CloudFront
                </a>
              </h3>
              <p class="text-md text-gray-600 font-light">
                Learn how to setup a 301 redirect from an old domain to a new
                one over HTTPS
              </p>
            </div>
            <div class="mb-6">
              <h3 class="font-semibold text-gray-900 pb-1 hover:underline hover:text-black">
                <a href="/blog/understanding-use-effect/">
                  Understanding the useEffect Hook in React
                </a>
              </h3>
              <p class="text-md text-gray-600 font-light">
                useEffect is a React hook that lets you perform side effects
              </p>
            </div>
            <div class="mb-6">
              <h3 class="font-semibold text-gray-900 pb-1 hover:underline hover:text-black">
                <a href="/blog/tailwind-with-react/">
                  Tailwind + React: Setup and Design Patterns
                </a>
              </h3>
              <p class="text-md text-gray-600 font-light">
                How to setup and use Tailwind CSS in React apps
              </p>
            </div>
            <div class="mb-6">
              <h3 class="font-semibold text-gray-900 pb-1 hover:underline hover:text-black">
                <a href="/blog/error-tracking/">
                  Error Tracking in Chrome Extensions
                </a>
              </h3>
              <p class="text-md text-gray-600 font-light">
                How to track and fix errors that occur in Chrome extensions
              </p>
            </div>
            <div class="mb-6">
              <h3 class="font-semibold text-gray-900 pb-1 hover:underline hover:text-black">
                <a href="/blog/looking-back-100/">
                  Looking Back At My First 100 Digital Product Sales
                </a>
              </h3>
              <p class="text-md text-gray-600 font-light">
                How long they took to happen and where they came from
              </p>
            </div>
            <a class="text-gray-500 text-sm hover:text-black" href="/blog/">
              View all posts →
            </a>
          </div>
        </div>

        {/* Skills */}
        <div class="block pt-12 md:flex">
          <div class="pb-6  w-2/12 md:p-0">
            <h2 class="font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase text-right pr-20">
              Skills
            </h2>
          </div>
          <div class="flex-none text-lg text-gray-600 font-light bg-white md:flex-1 ">
            <div class="mb-6">
              <h3 class="font-semibold text-gray-900 pb-1 ">
                Languages &amp; Frameworks
              </h3>
              <p class="text-md text-gray-600 font-light">
                JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on
                Rails, PHP
              </p>
            </div>
            <div class="mb-6">
              <h3 class="font-semibold text-gray-900 pb-1 ">Databases</h3>
              <p class="text-md text-gray-600 font-light">
                MongoDB, PostreSQL, MySQL
              </p>
            </div>
            <div class="mb-6">
              <h3 class="font-semibold text-gray-900 pb-1 ">Other</h3>
              <p class="text-md text-gray-600 font-light">
                Docker, Amazon Web Services (AWS), CI / CD, Microservices, API
                design, Agile / Scrum
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
