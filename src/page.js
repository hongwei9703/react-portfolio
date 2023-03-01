"use client"
import Head from "next/head";
import { useState } from "react";
import Experience from "@/components/Experience";
import ResponsiveCarousel from "@/components/ResponsiveCarousel";
import Bio  from "@/components/Bio";
import { BsFillMoonStarsFill } from 'react-icons/bs'
export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark transition delay-300 duration-300 ease-in-out" : ""}>
      <Head />
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <nav className=" py-10 mb-12 flex justify-between">
					<h1 className="text-xl dark:text-white">yanhongwei.</h1>
					<ul className="flex items-center">
						<li>
							<BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=" cursor-pointer text-2xl dark:text-white" />
						</li>
						<li>
							<a className="bg-gradient-to-r from-blue-500  to-blue-300 text-white px-4 py-2 border-none rounded-md ml-8" href="#" download>Resume</a>
						</li>
					</ul>
				</nav>
        <Bio />
        <Experience />
        <ResponsiveCarousel />
      </main>

    </div>

  );
}
