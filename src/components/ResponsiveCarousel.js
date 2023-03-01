import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const ResponsiveCarousel = () => {
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
)}

export default ResponsiveCarousel;