import { motion } from 'framer-motion'
import React from 'react'
import Card from './Card'

type Props = {}

export default function Academia({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='section h-screen'
        >
            <h3 className="sectionTitle">Academia</h3>

            {/* Involvements Cards */}
            <div className='w-full flex mt-32 space-x-5 px-20 overflow-x-scroll snap-x snap-mandatory'>
                <div className="carousel-placeholder" />
                {
                    AcademiaExperience.map((involvement, index) => {
                        return (
                            <>
                                <Card
                                    key={index}
                                    companyName={involvement.companyName}
                                    position={involvement.position}
                                    companyImage={involvement.companyImage}
                                    summaries={involvement.summaries}
                                    dates={involvement.dates}
                                />
                            </>
                        )
                    })
                }
                <div className="carousel-placeholder" />
            </div>
        </motion.div>
    )
}

import { AcademiaExperience } from '../data/Experience';
