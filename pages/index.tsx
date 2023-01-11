import bcrypt from "bcryptjs";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import About from "../components/About";
import Academia from "../components/Academia";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Industry from "../components/Industry";

const Home: NextPage = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(true);
	const [isModalLoading, setModalLoading] = useState(false);

	const router = useRouter();

	const checkAuthentication = async (password: string) => {
		console.log("password", password);
		const storedPassword = process.env.NEXT_PUBLIC_PASSWORD;
		// const salt = process.env.NEXT_PUBLIC_SALT;
		if (storedPassword) {
			try {
				setModalLoading(true);

				// Check if the user is already authenticated
				const isAuthenticated = bcrypt.compareSync(
					password,
					storedPassword
				);
				console.log("isAuthenticated", isAuthenticated);

				if (isAuthenticated) {
					setIsAuthenticated(true);
				}
			} catch (e) {
				console.error(e);
			} finally {
				setModalLoading(false);
			}
		}
		const salt = bcrypt.genSaltSync(10);
		const pwd = bcrypt.hashSync("stinglike.abi", 8);
		console.log("SAVE PASS", pwd);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		// Check the password and set isAuthenticated state
		checkAuthentication(e.target.value);
	};

	if (isAuthenticated) {
		return (
			// Your existing JSX for the authenticated user
			<div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap snap-mandatory overflow-y-scroll overflow-x-hidden z-0 ">
				<div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap snap-mandatory overflow-y-scroll overflow-x-hidden z-0 ">
					<Head>
						<title>{"abinesh"}</title>
					</Head>

					{/* Header */}
					<Header />

					{/* Hero */}
					<section id="hero" className="snap-center">
						<Hero />
					</section>

					{/* About */}
					<section id="about" className="snap-center">
						<About />
					</section>

					{/* Academia */}
					<section id="academia-experience" className="snap-center">
						<Academia />
					</section>

					{/* Industry */}
					<section id="industry-experience" className="snap-center">
						<Industry />
					</section>

					{/* Projects */}
					{/* <section id='projects' className='snap-center'>
            <Projects />
          </section> */}

					{/* Contact Me */}
					<section id="contact" className="snap-center">
						<Contact />
					</section>
				</div>
			</div>
		);
	}

	return (
		<div className="password-modal">
			<form onSubmit={handleSubmit}>
				<label>
					Password:
					<input type="password" name="password" />
				</label>
				<button
					onClick={handleSubmit}
					disabled={isModalLoading}
					type="submit"
				>
					{isModalLoading ? "Loading..." : "Submit"}
				</button>
			</form>
		</div>
	);
};

export default Home;
