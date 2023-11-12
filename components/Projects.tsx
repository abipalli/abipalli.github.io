import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function Projects({ }: Props) {
    const projects: any[] = [
        {

        },
        {

        },
        {

        },
        {

        }
    ]

    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{ duration: 1.5 }}
            className='section'
        >
            <h3 className='sectionTitle'>Projects</h3>

            <div className='relative w-full overflow-x-scroll snap snap-mandatory z-20 flex flex-row space-x-5 px-20'>
                {/* projects */}
                {projects.map((project, index) => (
                    <div key={index} className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[650px] sm:h-[650px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-scroll'>
                        <div>
                            <h4>Case Study {index + 1} of {projects.length}</h4>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full absolute top-[30%] bg-orange-500/20 left-0 h-[500px] -skew-y-12' />
        </motion.div>
    )
}
