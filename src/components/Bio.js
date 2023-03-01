import React, { Component } from 'react';

import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import Image from "next/legacy/image";
import avatar from "../../public/avatar.png";
import { Typewriter } from "react-simple-typewriter";
// import resume from "../../public/HongWei_CV_2023.pdf";

class Bio extends Component {
	render() {
		return (
			<section>
				<div className="mx-auto bg-gradient-to-b from-blue-300 rounded-full h-80 relative overflow-hidden md:h-96 md:w-96 shadow-lg dark:shadow-blue-500/50">
					<Image alt="" src={avatar} layout="fill" objectFit="cover" />
				</div>
				<div className="text-center py-5">
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
		)

	}
}

export default Bio;