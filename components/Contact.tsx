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

            <div className='relative flex mt-28 px-8 md:px-10 text-2xl md:text-3xl justify-center text-center'>
                <p>
                    <span className='text-orange-500 font-semibold'>
                        {"I'm always looking to talk "}
                    </span>
                    about tech stacks, entrepreneurship, photography, travel, whatever it may be.
                </p>
            </div>

            <div className='flex flex-col space-y-12 text-2xl md:text-3xl font-semibold'>
                <motion.a
                    href='https://t.me/abipalli'
                    initial={{
                        x: -100
                    }}
                    whileInView={{
                        x: 0
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className='flex px-20 py-4 bg-orange-500 rounded-lg justify-center'
                >
                    <button>
                        Casual Chat @Telegram
                    </button>
                </motion.a>
{/*                 <motion.a
                    initial={{
                        x: 100
                    }}
                    whileInView={{
                        x: 0
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    href="https://calendly.com/abisarvepalli/recruiting"
                    className='flex px-20 py-4 bg-orange-500 rounded-lg animate-pulse justify-center'
                >
                    <button>
                        Recruiting
                    </button>
                </motion.a> */}
            </div>

            <div className='flex flex-col px-8 md:px-10 space-y-8 text-gray-200'>
                <p className='opacity-80 italic'>
                    * I hope to iterate this site to fully capture
                    <span className='text-orange-600 font-bold'>{" abinesh sarvepalli "}</span>
                </p>
            </div>
        </motion.div >
    )
}
