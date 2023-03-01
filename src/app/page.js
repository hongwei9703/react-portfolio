"use client"
import Head from "next/head";
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import Image from "next/legacy/image";
import { useState } from "react";
import avatar from "../../public/avatar.png";
import { Typewriter } from "react-simple-typewriter";
// import resume from "../../public/HongWei_CV_2023.pdf";
import Experience from "../components/Experience";
import Form from "@/components/Form";
import ResponsiveCarousel from "@/components/ResponsiveCarousel";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark transition delay-150 duration-300 ease-in-out" : ""}>
      <Head />
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section>
          <nav className=" py-10 mb-12 flex justify-between">
            <h1 className="text-xl dark:text-white">yanhongwei.</h1>
            <ul className="flex items-center">
              <li>
              <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=" cursor-pointer text-2xl dark:text-white"/>
              </li>
              <li>
                <a className="bg-gradient-to-r from-blue-500  to-blue-300 text-white px-4 py-2 border-none rounded-md ml-8" href="#" download>Resume</a>
              </li>
            </ul>
          </nav>
          <div className="mx-auto bg-gradient-to-b from-blue-300 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96 shadow-lg dark:shadow-blue-500/50">
            <Image alt="" src={avatar} layout="fill" objectFit="cover" />
          </div>
          <div className="text-center p-10 py-5">
            <h2 className="text-5xl py-2 text-blue-500 font-semibold">Hong Wei</h2>
            <h3 className="text-3xl py-2 bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-teal-700 text-transparent font-bold md:text-3xl">I&apos;m a passionate
            <Typewriter
              words={[' Frontend Developer', ' UI/UX Designer']}
              loop
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            /></h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl text-justify">I have experience with HTML, SASS/ SCSS, ReactJS,
              JavaScript and have a strong understanding of responsive web design and cross
              browser compatibility. I&apos;m constantly learning and staying up-to-date on the latest
              web development technologies and frameworks.</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 pb-3 text-gray-600 dark:text-gray-400">
            <a href="https://www.instagram.com/_yanhongwei/" target="_blank" rel='noreferrer' className="instagram-icon"><AiFillInstagram /></a>
            <a href="https://www.linkedin.com/in/hongwei18/" target="_blank" rel='noreferrer' className="linkedin-icon"><AiFillLinkedin /></a>
          </div>
        </section>
      </main>
      
    </div>
   
  );
}
