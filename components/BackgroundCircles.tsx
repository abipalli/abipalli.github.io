import React, { Component, PropsWithRef } from 'react'
import { motion } from 'framer-motion'

type BackgroundCircleProps = {}

const BackgroundCircles = (props: BackgroundCircleProps) => {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.4, 0.8, 1]
            }}
            transition={{
                duration: 2.5
            }}
            className='z-0 relative flex justify-center items-center'
        >
            <div className='absolute mt-[185px] border border-orange-500 rounded-full mt-50 h-[300px] w-[300px] opacity-40 animate-ping' />
            <div className='absolute mt-[185px] border border-orange-500 rounded-full mt-50 h-[400px] w-[400px] opacity-5 animate-pulse' />
            <div className='absolute mt-[185px] border border-orange-500 rounded-full mt-50 h-[750px] w-[700px] opacity-20 animate-pulse' />
            <div className='absolute mt-[185px] border border-orange-500 rounded-full mt-50 h-[1000px] w-[1000px] opacity-20 animate-pulse' />
        </motion.div >
    )
}

export default BackgroundCircles
