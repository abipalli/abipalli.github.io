import { motion } from 'framer-motion'
import React from 'react'
import Card from './Card'

type Props = {}

export default function Experience({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='section'
        >
            <h3 className="sectionTitle">Experience</h3>

            {/* Experience Cards */}
            <div className='w-full flex mt-32 space-x-5 px-20 overflow-x-scroll snap-x snap-mandatory'>
                <Card
                    companyName='Coinbase'
                    position='Blockchain Engineer, IC4'
                    companyImage='/images/coinbase.png'
                    tools={[]}
                    summaries={[
                        'Assist asset additions for retail and pro trading platforms',
                        'Responsible for ingesting on-chain activity and network incentives for financial fulfillments for L1 & L2 protocols',
                        'Interface with network and token developers on open-source Rosetta specs'
                    ]} dates={{
                        start: 'Jun 2022',
                        end: 'Jan 2023'
                    }}
                />

                <Card
                    companyName='Amazon'
                    position='Software Engineer, SWE I'
                    companyImage='/images/amazon.png'
                    tools={[]}
                    summaries={[
                        'Design policies and best-practices that protect customer health data',
                        'Template microservice orchestrations and deploy mechanisms that uphold data governance tenets',
                        'Automate load tests and determine benchmarks for hosted infrastructure for platform & product launches'
                    ]} dates={{
                        start: 'Aug 2020',
                        end: 'May 2022'
                    }}
                />

                <Card
                    companyName='IBM Blockchain Garage'
                    position='Software Engineer Intern'
                    companyImage='/images/ibm.svg'
                    tools={[]}
                    summaries={[
                        'Integrated Hyperledger Fabric command line interface to interact with hosted blockchain network components',
                        'Architected automated deployment pipeline to configure, build, and deploy chaincode onto an IBM Blockchain Platform instance',
                        'Exercised IBM Design Thinking to onboard IBM Garage clientele onto IBM Blockchain Platform and benchmark continuous delivery toolchain'
                    ]} dates={{
                        start: 'Jun 2019',
                        end: 'Sep 2019'
                    }}
                />

                <Card
                    companyName='IBM Aspera'
                    position='Extreme Blue Intern'
                    companyImage='/images/aspera.svg'
                    tools={[]}
                    summaries={[
                        'Designed Digital Asset Management (DAM) platform powered by Aspera and IBM\'s Hyperledger Fabric project',
                        'Deployed Hyperledger Composer Blockchain application on IBM Cloud Foundry',
                        'Developed RAILS app to interface with the DAM platform and Hyperledger Composer application',
                        'Presented platform and use cases to IBM executives at Watson headquarters in New York'
                    ]} dates={{
                        start: 'Jun 2018',
                        end: 'Sep 2018'
                    }}
                />
            </div>
        </motion.div>
    )
}
