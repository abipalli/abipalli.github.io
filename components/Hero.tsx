import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

type HeroProps = {};

const Hero = (props: HeroProps) => {
	const [typewriterString, typewriterHelper] = useTypewriter({
		words: [
			"web@3.0",
			"design::human",
			"data",
			"productivity",
			"photography",
			"music",
			"software",
		],
		loop: true,
		typeSpeed: 79,
		deleteSpeed: 50,
		delaySpeed: 2000,
	});

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="h-screen flex flex-col space-y-6 items-center justify-center text-center overflow-hidden px-5"
		>
			{/* <BackgroundCircles /> */}

			<motion.img
				className="rounded-full object-cover w-36 h-36 mx-auto sm:w-64 sm:h-64"
				src="/images/profile.jpeg"
				alt="it's supposed to be a picture of me"
			/>
			<div className="mb-8">
				<h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px]">
					ENGINEER
				</h2>
			</div>

			<div className="relative flex flex-col space-y-16">
				<div className="space-y-3 text-2xl sm:text-4xl lg:text-6xl">
					<h1 className="font-semibold scroll-px-10 text-center">
						<span className="text-gray-300">
							abinesh::interest::
						</span>
						<span>{typewriterString}</span>
						<Cursor cursorColor="#f97316" />
					</h1>
				</div>

				<div className="relative flex md:flex-row flex-col space-y-4 md:space-y-0 md:space-x-3 justify-center">
					<Link href={"#about"}>
						<button className="heroButton">About</button>
					</Link>
					<Link href={"#academia-experience"}>
						<button className="heroButton">Academia</button>
					</Link>
					<Link href={"#industry-experience"}>
						<button className="heroButton">Industry</button>
					</Link>
					{/* <Link href={"#projects"}>
                    <button className="heroButton">Projects</button>
                </Link> */}
					<Link href={"#contact"}>
						<button className="heroButton">Contact</button>
					</Link>
				</div>
			</div>
		</motion.div>
	);
};

export default Hero;
