import React from 'react'
import Navbar from '../components/layout/Navbar'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Experience from '../sections/Experience'
import ScrollToTop from '../components/common/ScrollToTop'
import Certificates from '../sections/Certificates'

const Home = () => {
    return (
        <div className='h-fit'>
            <Hero />
            <About />
            <Projects />
            <Certificates/>
            <Skills />
            <Experience/>
            <ScrollToTop/>
        </div>
    )
}

export default Home