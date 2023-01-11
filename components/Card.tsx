import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    companyImage: string;
    tools?: string[];
    summaries: string[];
    position: string;
    companyName: string;
    dates: {
        start: string
        end: string
    }
}

export default function Card({ companyImage, tools, summaries, position, companyName, dates }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[650px] sm:h-[650px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-scroll'>
            <motion.img
                initial={{
                    x: 1000,
                    opacity: 0
                }}
                animate={{
                    x: 0,
                    opacity: 1
                }}
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center bg-white'
                src={`${companyImage}`}
            />
            <div className='px-0 md:px-10'>
                <h4 className='text-2xl md:text-4xl font-light'>
                    {position}
                </h4>

                <p className='font-bold text-xl mt-1'>{companyName}</p>

                {
                    tools ?
                        <div className='flex space-x-2 my-2'>
                            {
                                tools?.map((tools, index) => {
                                    return (
                                        <p key={index}>Tool!</p>
                                    )
                                })
                            }
                        </div>
                        : undefined
                }

                <p className="uppercase py-5 text-gray-300">
                    {`${dates?.start} — ${dates?.end}`}
                </p>

                <div className='overflow-scroll'>
                    <ul className='list-disc space-y-2 ml-5 md:text-lg text-md'>
                        {
                            summaries?.map((summary, index) => {
                                return (
                                    <li key={index}>
                                        {summary}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            {/* <h3>ExperienceCard</h3> */}
        </article>
    )
}
