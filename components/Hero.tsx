import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'

type HeroProps = {}

const Hero = (props: HeroProps) => {
    const [typewriterString, typewriterHelper] = useTypewriter({
        words: [
            'web@3.0',
            'productivity',
            'finance',
        ],
        loop: true,
        typeSpeed: 79,
        deleteSpeed: 100,
        delaySpeed: 2000
    })


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'
        >
            {/* <BackgroundCircles /> */}

            <motion.img
                className='rounded-full object-cover w-64 h-64 mx-auto'
                src="/images/profile.jpeg"
                alt="it's supposed to be a picture of me"
            />
            <div className='space-y-3 mb-8'>
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                    Software Engineer
                </h2>
                <h1 className="text-3xl lg:text-6xl font-semibold scroll-px-10 text-center">
                    <span className='text-3xl lg:text-6xl text-gray-300'>
                        abinesh::interest::
                    </span>
                    <span className=''>{typewriterString}</span>
                    <Cursor cursorColor='#f97316' />
                </h1>
            </div>

            <div className='flex md:flex-row flex-col z-10 space-y-3 md:space-y-0 md:space-x-3 justify-evenly'>
                <Link href={"#about"}>
                    <button className="heroButton">About</button>
                </Link>
                <Link href={"#experience"}>
                    <button className="heroButton">Experience</button>
                </Link>
                <Link href={"#involvements"}>
                    <button className="heroButton">Involvements</button>
                </Link>
                {/* <Link href={"#projects"}>
                    <button className="heroButton">Projects</button>
                </Link> */}
                <Link href={"#contact"}>
                    <button className="heroButton">Contact</button>
                </Link>
            </div>
        </motion.div >
    )
}

export default Hero
