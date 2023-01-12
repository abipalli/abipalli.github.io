import { motion } from 'framer-motion'
import React from 'react'
import Card from './Card'

type Props = {}

export default function Involvements({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='section h-screen'
        >
            <h3 className="sectionTitle">Involvements</h3>

            {/* Involvements Cards */}
            <div className='w-full flex mt-32 space-x-5 px-20 overflow-x-scroll snap-x snap-mandatory'>
                <Card
                    companyName='BlockLab, San Diego Supercomputer Center'
                    position='Industry Research Advisor'
                    companyImage='/images/blocklab.png'
                    tools={[]}
                    summaries={[
                        'Determine appropriate metrics to benchmark Layer 2 solutions on Layer 1 protocols',
                        'Explore applications of Distributed Ledger Technology (DLT) for supply chain platforms',
                        'Investigate the intersection between DLT and machine learning and report findings in published materials'
                    ]} dates={{
                        start: 'Aug 2019',
                        end: 'Present'
                    }} />

                <Card
                    companyName='Dorrestein Lab, Skaggs School of Pharmacy'
                    position='Computer Science Researcher'
                    companyImage='/images/amazon.png'
                    tools={[]}
                    summaries={[
                        'Created open-source modules for MZmine2 & OpenMS using Java and C++ frameworks (for proteogenetic data analysis)',
                        'Designed automated workflows using Python scripts for spectrometry data processing for GNPS Data Analysis',
                        'Deployed and scaled developed tools for large data sets (http://www.gnps.ucsd.edu)'
                    ]} dates={{
                        start: 'Mar 2017',
                        end: 'Jun 2020'
                    }} />
            </div>
        </motion.div>
    )
}
