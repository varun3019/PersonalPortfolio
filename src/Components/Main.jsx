import React from 'react'
import Navbar from './Navbar/Navbar'
import Intro from './Intro/Intro'
import About from './About/About'
import Portfolio from './Portfolio/Portfolio'
import Skill from './Skills/Skill';
import Fotter from './Footer/Fotter'
import Contact from './Contact/Contact'

const Main = () => {
    return (
        <div>
        <Navbar/>
        <Intro/>
        <About/>
        <Portfolio/>
        <Skill/>
        <Contact/>
        <Fotter/>
        </div>
    )
}

export default Main