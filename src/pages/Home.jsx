import React from 'react'
import Navbar from '../components/layout/Navbar'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Experience from '../sections/Experience'
import ScrollToTop from '../components/common/ScrollToTop'
import Certificates from '../sections/Certificates'
import WhyHireMe from '../sections/WhyHireMe'
import ProblemSol from '../sections/ProblemSol'

const Home = () => {
    return (
        <div className='h-fit'>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Certificates/>
            <Experience/>
            <ProblemSol/>
            <WhyHireMe/>
            <ScrollToTop/>
        </div>
    )
}

export default Home