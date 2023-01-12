import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { NextPage } from 'next'
import About from '../components/About'
import Experience from '../components/Experience'
import Calendly from '../components/Calendly'
import Involvements from '../components/Involvements'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap snap-mandatory overflow-y-scroll overflow-x-hidden z-0 '>
      <Head>
        <title>
          {"Abinesh Sarvepalli"}
        </title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className='snap-center'>
        <Hero />
      </section>

      {/* About */}
      <section id="about" className='snap-center'>
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className='snap-center'>
        <Experience />
      </section>

      {/* Involvements */}
      <section id="involvements" className='snap-center'>
        <Involvements />
      </section>

      {/* Projects */}
      {/* <section id='projects' className='snap-center'>
        <Projects />
      </section> */}

      {/* Contact Me */}
      <section id='contact' className='snap-center'>
        <Calendly />
      </section>
    </div>
  )
}

export default Home
