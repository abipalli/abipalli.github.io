
import React, { PropsWithoutRef } from 'react';
import * as TfIcons from 'react-icons/tfi';
import * as BsIcons from 'react-icons/bs';

import { motion } from 'framer-motion';

type HeaderProps = {

}

const Header = (props: PropsWithoutRef<HeaderProps>) => {
    return (
        <header className='sticky top-0 flex justify-between max-w-7xl mx-auto z-20 items-center p-8 text-orange-400 font-semibold text-2xl'>

            {/* LHS */}
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
                className="flex flex-row items-center justify-between"
            >
                {/* Social Icons */}
                <a className="headerButton" href="https://github.com/abipalli">
                    <TfIcons.TfiGithub color="orange" title="GitHub" />
                </a>
                <a className="headerButton" href="https://linkedin.com/in/abisarvepalli">
                    <TfIcons.TfiLinkedin color="orange" title="LinkedIn" />
                </a>
            </motion.div>

            {/* RHS */}
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
                className='flex flex-row align-middle'
            >
                <a className="headerButton" href="#contact">
                    <BsIcons.BsTelephoneFill color="orange" title="Calendly" />
                </a>
                <a className="headerButton" href="https://t.me/abipalli">
                    <BsIcons.BsTelegram color="orange" title="Telegram" />
                </a>
            </motion.div>
        </header>
    )
}

export default Header
