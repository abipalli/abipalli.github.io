import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			transition={{ duration: 1 }}
			className="section space-y-4 justify-center items-center flex"
		>
			<h3 className="sectionTitle">About</h3>

			<div className="space-y-2 mt-28 px-8 md:px-10 flex flex-col">
				<div>
					<p className="font-light text-xl sm:text-3xl text-center italic">
						{'"The goal is not to'}
						<span className="text-orange-500 font-semibold opacity-80">
							{" coerce "}
						</span>
						customers to adopt new technologies, but to
						<span className="text-orange-500 font-semibold animate-pulse">
							{" empower "}
						</span>
						{'them."'}
					</p>
				</div>
				<div className="flex justify-end">
					<p className="text-right font-thin text-lg sm:text-2xl pt-2 italic">
						- abinesh
					</p>
				</div>
			</div>

			<div className="space-y-8 mt-28 px-8 md:px-10 flex flex-col sm:text-xl text-md ">
				<p className="font-light">
					I am deeply invested in the
					<span className="text-orange-500 font-semibold">
						{" design "}
					</span>
					and
					<span className="text-orange-500 font-semibold">
						{" performance "}
					</span>
					{
						"of microservice orchestrations. The challenge lies in effectively assessing the customer's interactions with the platform and architecting the individual services to optimize those interactions."
					}
				</p>
				<p className="font-light">
					{
						"I believe there is a future in web3.0 where networks can simultaneously protect"
					}
					<span className="text-orange-500 font-semibold">
						{" customer anonymity "}
					</span>
					{"while preserving"}
					<span className="text-orange-500 font-semibold">
						{" authenticity "}
					</span>
					{"— ie. adhering to Know-Your-Customer protocols."}
				</p>
			</div>
		</motion.div>
	);
}
