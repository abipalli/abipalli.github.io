import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            transition={{ duration: 1 }}
            className='section space-y-4'
        >
            <h3 className='absolute flex top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>

            <div className='space-y-8 mt-28 px-8 md:px-10 flex flex-col'>
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
                    className='relative md:flex md:flex-col w-32 h-32 object-cover rounded-full items-center hidden'
                />
            </div>

            <div className='space-y-2 mt-28 px-8 md:px-10 flex flex-col'>
                <div>
                    <p className='font-light text-xl sm:text-3xl text-centesr italic'>
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
                </div>
                <div className='flex justify-end'>
                    <p className='text-right font-thin text-lg sm:text-2xl pt-2 italic'>
                        - Abinesh Sarvepalli
                    </p>
                </div>
            </div>

            <div className='space-y-8 mt-28 px-8 md:px-10 flex flex-col'>
                <p className='sm:text-xl text-md font-light'>
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
                <p className='sm:text-xl text-md font-light'>
                    {"I believe there is a future in web3.0 where networks can simultaneously protect"}
                    <span className='text-orange-500 font-semibold'>
                        {" customer anonymity "}
                    </span>
                    {"while preserving"}
                    <span className='text-orange-500 font-semibold'>
                        {" authenticity "}
                    </span>
                    {"— ie. adhering to Know-Your-Customer protocols."}
                </p>
            </div>
        </motion.div>

        // <motion.div
        //     initial={{ opacity: 0 }}
        //     animate={{ opacity: 1 }}
        //     transition={{ duration: 1.5 }}
        //     className='flex flex-col relative h-screen md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
        // >
        //     <h3 className='relative flex top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
        //         About
        //     </h3>

        //     <motion.img
        //         initial={{
        //             x: -200,
        //             opacity: 0
        //         }}
        //         whileInView={{
        //             opacity: 1,
        //             x: 0
        //         }}
        //         transition={{ duration: 1.5 }}
        //         viewport={{ once: true }}
        //         src='/images/abinesh.png'
        //         className='-mb-24 mt-24 md:mb-0 w-32 h-32 items-center rounded-full object-cover md:rounded-lg md:w-72 md:h-72 xl:w-[500px] xl:h-[550px]'
        //     />

        //     <div className='space-y-8 mt-28 px-0 md:px-10'>
        //         {/* <h4 className='text-4xl font-semibold'>
        //                 Here is a <span className='underline decoration-slate-300/50'>little</span> background
        //             </h4> */}
        //         <div>
        //             <p className='font-light text-xl text-center italic'>
        //                 {"\"The goal is not to"}
        //                 <span className='text-orange-500 font-semibold opacity-80'>
        //                     {" coerce "}
        //                 </span>
        //                 customers to adopt new technologies, but to
        //                 <span className='text-orange-500 font-semibold animate-pulse' >
        //                     {" empower "}
        //                 </span>
        //                 {"them.\""}
        //             </p>
        //             <p className='text-right font-thin text-lg pt-2 italic'>- Abinesh Sarvepalli</p>
        //         </div>


        //         <p className='md:text-lg text-md font-light'>
        //             I am deeply invested in the
        //             <span className='text-orange-500 font-semibold'>
        //                 {" design "}
        //             </span>
        //             and
        //             <span className='text-orange-500 font-semibold'>
        //                 {" performance "}
        //             </span>
        //             {"of microservice orchestrations. The challenge lies in effectively assessing the customer's interactions with the platform and architecting the individual services to optimize those interactions."}
        //         </p>

        //         <p className='md:text-lg text-md font-light'>
        //             {"I believe there is a future in web3.0 where networks can simultaneously protect"}
        //             <span className='text-orange-500 font-semibold'>
        //                 {" customer anonymity "}
        //             </span>
        //             {"while preserving"}
        //             <span className='text-orange-500 font-semibold'>
        //                 {" customer authenticity "}
        //             </span>
        //             {"— ie. adhering to Know-Your-Customer protocols."}
        //         </p>
        //     </div>
        // </motion.div >
    )
}
