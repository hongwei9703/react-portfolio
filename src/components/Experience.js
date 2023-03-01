import React, {Component} from 'react';
import Image from "next/legacy/image";
import { SiReact, SiSass, SiJavascript, SiTailwindcss, SiCss3, SiVisualstudiocode, SiAdobeillustrator, SiAdobexd, SiAdobephotoshop, SiHtml5 } from "react-icons/si";
import coding from "../../public/coding.png";
import design from "../../public/design.png";
import { FaFigma } from 'react-icons/fa'

class Experience extends Component {
	render() {
		return (
			<section className="lg:p-10 sm:p-0">
				<h3 className="md:text-2xl uppercase py-1 text-gray-500 tracking-[10px] sm:text-xl dark:text-white m-auto text-center font-bold">Experiences</h3>
				<div className="max-w-[1400px] m-auto lg:flex gap-10">
					<div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 dark:shadow-blue-500/50">
						<Image src={coding} width={100} height={100} alt="coding" />
						<h3 className="text-lg pt-8 pb-2 font-bold">
							Coding
						</h3>
						<p className="py-2 text-justify">I&apos;ve developed and deployed fully responsive websites and mobile applications (Android & iOS) using ReactJS and React Native. I&apos;m currently active in using the following programming languages.</p>
						<h4 className="text-blue-700 font-bold pt-5">Skills & Tools</h4>
						<div className="flex gap-4 m-auto justify-center text-5xl my-4">
							<SiHtml5 className="fill-orange-400" />
							<SiCss3 className="fill-blue-600" />
							<SiJavascript className="fill-yellow-400" />
							<SiSass className="fill-pink-500" />
							<SiTailwindcss className="fill-blue-400" />
							<SiReact className="fill-blue-600" />
							<SiVisualstudiocode className="fill-blue-500" />
						</div>
					</div>
					<div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1 dark:shadow-blue-500/50">
						<Image src={design} width={100} height={100} alt="design" />
						<h3 className="text-lg pt-8 pb-2 font-bold">
							Web Designs and Graphic Designs
						</h3>
						<p className="py-2 text-justify">
							6 Design Principles I&apos;ve learned so far: <span className="font-bold text-blue-500">Balance, Hierarchy, Propotion, Contrast, Repitition, White Space</span>.
							Years of experience in designing from Graphics Design to Web Design.
						</p>
						<h4 className="text-blue-700 font-bold pt-5">Skills & Tools</h4>
						<div className="flex gap-4 m-auto justify-center text-5xl my-4">
							<SiAdobeillustrator className="fill-orange-600" />
							<SiAdobephotoshop className="fill-blue-800" />
							<FaFigma />
							<SiAdobexd className="fill-pink-700" />
						</div>
					</div>
				</div>
			</section>
		)

	}
}

export default Experience;