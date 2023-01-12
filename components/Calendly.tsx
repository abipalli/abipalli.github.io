import { motion } from 'framer-motion';
import Head from 'next/head';
import React, { Component } from 'react'
import { InlineWidget } from 'react-calendly'

type Props = {}

export default function Calendly({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{ duration: 1.5 }}
            className='relative section'
        >
            <h3 className='sectionTitle'>
                Calendly
            </h3>

            {/* <!-- Calendly inline widget begin --> */}
            <InlineWidget
                url="https://calendly.com/abisarvepalli/recruiting"
                styles={{
                    width: '75%', height: '580px'
                }}
                pageSettings={{
                    backgroundColor: 'rgb(36,36,36)',
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: '00a2ff',
                    textColor: '4d5055'
                }}
            />


            {/* <!-- Calendly inline widget end --> */}
        </motion.div >
    )
}
