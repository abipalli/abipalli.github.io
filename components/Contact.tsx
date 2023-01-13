import { motion } from 'framer-motion';
import Head from 'next/head';
import React, { Component } from 'react'
import { InlineWidget, PopupWidget } from 'react-calendly'

type Props = {}

export default function Contact({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{ duration: 1 }}
            className='h-screen relative flex flex-col max-w-full justify-evenly items-center'
        >
            <h4 className='sectionTitle'>
                Contact
            </h4>

            <div className='relative flex mt-28 px-8 md:px-10'>
                <p>
                    <span className='text-orange-500 font-semibold'>
                        {"I'm always looking to talk "}
                    </span>
                    about tech stacks, entrepreneurship, photography, travel, whatever it may be
                </p>
            </div>

            <div className='flex flex-col space-y-8'>
                <motion.button
                    initial={{
                        x: -100
                    }}
                    whileInView={{
                        x: 0
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className='px-20 py-4 bg-orange-500 rounded-md '
                >
                    Casual Chat
                </motion.button>
                <motion.button
                    initial={{
                        x: 100
                    }}
                    whileInView={{
                        x: 0
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className=' px-20 py-4 bg-orange-500 rounded-md animate-pulse'
                >
                    Recruiting
                </motion.button>
            </div>

            <div className='flex flex-col px-8 md:px-10 space-y-8 text-gray-200'>
                <p className='opacity-80 italic'>
                    * I hope to iterate this site to fully capture
                    <span className='text-orange-600 font-bold'>{" abinesh sarvepalli "}</span>
                </p>
            </div>

            {/* <div className='w-full flex mt-32 space-x-5 px-20 overflow-x-scroll snap-x snap-mandatory items-center justify-evenly h-[400px] mb-20'>
                <InlineWidget
                    url="https://calendly.com/abisarvepalli/recruiting"
                    styles={{
                        width: '100%',
                        height: '500px'
                    }}
                    pageSettings={{
                        backgroundColor: 'rgb(36,36,36)',
                        hideEventTypeDetails: false,
                        hideLandingPageDetails: false,
                        primaryColor: '00a2ff',
                        textColor: '4d5055'
                    }}
                />
            </div> */}



        </motion.div >
    )
}
