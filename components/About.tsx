import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>

            <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                src='/images/abinesh.png'
                className='-mb-24 mt-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-72 md:h-72 xl:w-[500px] xl:h-[550px]'
            />

            <div className='space-y-10 px-0 md:px-10'>
                {/* <h4 className='text-4xl font-semibold'>
                    Here is a <span className='underline decoration-slate-300/50'>little</span> background
                </h4> */}
                <div>
                    <p className='font-light text-xl text-center italic'>
                        {"\"The goal is not to"}
                        <span className='text-orange-500 font-semibold opacity-80'>
                            {" coerce "}
                        </span>
                        customers to adopt new technologies, but to
                        <span className='text-orange-500 font-semibold animate-pulse' >
                            {" empower "}
                        </span>
                        {"them.\""}
                    </p>
                    <p className='text-right font-thin text-lg pt-5'>- Abinesh Sarvepalli</p>
                </div>


                <p className='text-lg font-light'>
                    I am deeply invested in the
                    <span className='text-orange-500 font-semibold'>
                        {" design "}
                    </span>
                    and
                    <span className='text-orange-500 font-semibold'>
                        {" performance "}
                    </span>
                    {"of microservice orchestrations. The challenge lies in effectively assessing the customer's interactions with the platform and architecting the individual services to optimize those interactions."}
                </p>

                <p className='text-lg font-light'>
                    {"I believe there is a future in web3.0 where networks can simultaneously protect"}
                    <span className='text-orange-500 font-semibold'>
                        {" customer anonymity "}
                    </span>
                    {"while preserving"}
                    <span className='text-orange-500 font-semibold'>
                        {" customer authenticity "}
                    </span>
                    {"— ie. adhering to Know-Your-Customer protocols."}
                </p>
            </div>
        </motion.div>
    )
}
