import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { NextPage } from 'next'
import About from '../components/About'
import Industry from '../components/Industry'
import Contact from '../components/Contact'
import Academia from '../components/Academia'

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

      {/* Academia */}
      <section id="academia-experience" className='snap-center'>
        <Academia />
      </section>

      {/* Industry */}
      <section id="industry-experience" className='snap-center'>
        <Industry />
      </section>


      {/* Projects */}
      {/* <section id='projects' className='snap-center'>
        <Projects />
      </section> */}

      {/* Contact Me */}
      <section id='contact' className='snap-center'>
        <Contact />
      </section>
    </div>
  )
}

export default Home
