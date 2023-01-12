/* eslint-disable import/no-anonymous-default-export */
export const IndustryExperience: IExperience[] = [
    {
        companyName: "Coinbase",
        position: "Blockchain Engineer, IC4",
        companyImage: "/images/coinbase.png",
        summaries: [
            "Assist asset additions for retail and pro trading platforms",
            "Responsible for ingesting on-chain activity and network incentives for financial fulfillments for L1 & L2 protocols",
            "Interface with network and token developers on open-source Rosetta specs",
        ],
        dates: {
            start: "Jun 2022",
            end: "Jan 2023",
        },
    },
    {
        companyName: "Amazon",
        position: "Software Engineer, SWE I",
        companyImage: "/images/amazon.png",
        summaries: [
            "Design policies and best-practices that protect customer health data",
            "Template microservice orchestrations and deploy mechanisms that uphold data governance tenets",
            "Automate load tests and determine benchmarks for hosted infrastructure for platform & product launches",
        ],
        dates: {
            start: "Aug 2020",
            end: "May 2022",
        },
    },
    {
        companyName: "IBM Blockchain Garage",
        position: "Software Engineer Intern",
        companyImage: "/images/ibm.svg",
        summaries: [
            "Integrated Hyperledger Fabric command line interface to interact with hosted blockchain network components",
            "Architected automated deployment pipeline to configure, build, and deploy chaincode onto an IBM Blockchain Platform instance",
            "Exercised IBM Design Thinking to onboard IBM Garage clientele onto IBM Blockchain Platform and benchmark continuous delivery toolchain",
        ],
        dates: {
            start: "Jun 2019",
            end: "Sep 2019",
        },
    },
    {
        companyName: "IBM Aspera",
        position: "Extreme Blue Intern",
        companyImage: "/images/aspera.svg",
        summaries: [
            "Designed Digital Asset Management (DAM) platform powered by Aspera and IBM's Hyperledger Fabric project",
            "Deployed Hyperledger Composer Blockchain application on IBM Cloud Foundry",
            "Developed RAILS app to interface with the DAM platform and Hyperledger Composer application",
            "Presented platform and use cases to IBM executives at Watson headquarters in New York",
        ],
        dates: {
            start: "Jun 2018",
            end: "Sep 2018",
        },
    },
];

export const AcademiaExperience: IExperience[] = [
    {
        companyName: "BlockLab, San Diego Supercomputer Center",
        position: "Research Advisor",
        companyImage: "/images/blocklab.png",
        summaries: [
            "Determine appropriate metrics to benchmark Layer 2 solutions on Layer 1 protocols",
            "Explore applications of Distributed Ledger Technology (DLT) for supply chain platforms",
            "Investigate the intersection between DLT and machine learning and report findings in published materials",
        ],
        dates: {
            start: "Aug 2019",
            end: "Present",
        },
    },
    {
        companyName: "Dorrestein Lab, Skaggs School of Pharmacy",
        position: "CS Researcher",
        companyImage: "/images/amazon.png",
        summaries: [
            "Created open-source modules for MZmine2 & OpenMS using Java and C++ frameworks (for proteogenetic data analysis)",
            "Designed automated workflows using Python scripts for spectrometry data processing for GNPS Data Analysis",
            "Deployed and scaled developed tools for large data sets (http://www.gnps.ucsd.edu)",
        ],
        dates: {
            start: "Mar 2017",
            end: "Jun 2020",
        },
    },
];

export type IExperience = {
    companyName: string;
    position: string;
    companyImage: string;
    summaries: string[];
    dates: {
        start: string;
        end: string;
    };
};
