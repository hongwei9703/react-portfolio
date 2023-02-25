"use client"
import Head from "next/head";
import { BsFillMoonStarsFill, BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import Image from "next/legacy/image";
import { useEffect, useState } from "react";
import avatar from "../../public/avatar.png";
import { Typewriter } from "react-simple-typewriter";
// import resume from "../../public/HongWei_CV_2023.pdf";
import {RxDotFilled} from 'react-icons/rx'
import Experience from "../components/Experience";
import Form from "@/components/Form";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const slides = [
    {
      url: 'https://i.ibb.co/BL9PrQk/project.png',
      text : 'Theme Developing with Easystore',
    },
    {
      url: 'https://i.ibb.co/CVx0VQd/Project2.png',
      text : 'FindMeProp Project with Bluecrystal Solution'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className={darkMode ? "dark transition delay-150 duration-300 ease-in-out" : ""}>
      <Head />
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        {/* Bio section */}
        <section>
          <nav className=" py-10 mb-12 flex justify-between">
            <h1 className="text-xl dark:text-white">yanhongwei.</h1>
            <ul className="flex items-center">
              <li>
              <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=" cursor-pointer text-2xl dark:text-white"
                />
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
            <h3 className="text-3xl py-2 bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-teal-700 text-transparent font-bold md:text-3xl">I'm a passionate
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
              browser compatibility. I'm constantly learning and staying up-to-date on the latest
              web development technologies and frameworks.</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 pb-3 text-gray-600 dark:text-gray-400">
            <a href="https://www.instagram.com/_yanhongwei/" target="_blank" rel='noreferrer' className="instagram-icon"><AiFillInstagram /></a>
            <a href="https://www.linkedin.com/in/hongwei18/" target="_blank" rel='noreferrer' className="linkedin-icon"><AiFillLinkedin /></a>
          </div>
          
        </section>
        {/* Experience section */}
        <Experience />
        {/* Projects */}
        <section className="p-10 pt-0">
          <h3 className="text-2xl uppercase py-1 text-gray-500 tracking-[20px] dark:text-white m-auto text-center font-bold">
            Projects
          </h3>
          <div className="max-w-[1400px] h-[780px] w-full m-auto my-10 relative group">
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="w-full h-full rounded-2xl bg-center bg-cover duration-500 shadow-lg dark:shadow-blue-500/50">
            </div>
            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute  top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className="flex top-4 justify-center py-2 mt-4">
              {slides.map((slide, slideIndex) => (
                <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer">
                  <RxDotFilled />
                </div>
              ))}
            </div>
          </div>
          <div className="py-10 center m-auto text-center">
            <h4 className="text-2xl m-4">{slides[currentIndex].text}</h4>
            <p className="block text-xl">Showcase {currentIndex+1} of {slides.length}</p>
          </div>
        </section>
        <Form />
      </main>
      
    </div>
   
  );
}
