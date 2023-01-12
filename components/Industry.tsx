import { motion } from 'framer-motion'
import React from 'react'
import Card from './Card'

type Props = {}

export default function Industry({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='section'
        >
            <h3 className="sectionTitle">Industry</h3>

            {/* Experience Cards */}
            <div className='w-full flex mt-32 space-x-5 px-20 overflow-x-scroll snap-x snap-mandatory'>
                <div className="carousel-placeholder" />
                {
                    IndustryExperience.map((experience, index) => {
                        return (
                            <Card
                                key={index}
                                companyName={experience.companyName}
                                position={experience.position}
                                companyImage={experience.companyImage}
                                summaries={experience.summaries}
                                dates={experience.dates}
                            />
                        )
                    })
                }
                <div className="carousel-placeholder" />
            </div>
        </motion.div>
    )
}

import { IndustryExperience } from '../data/Experience';
