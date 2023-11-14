import React from 'react'
import "../Intro/Intro.css"
import bg from "../../assets/varun.jpeg"
import { Link } from 'react-scroll'
import btnImg from "../../assets/hireme.png"
const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I am <span className="introName">Varun <br />MERN FullStack Developer</span></span>
                 <p className='introPara'>MERN full-stack learner  ,Proficient in React.js, Node.js,and Express.js, adept at<br/> building scalable  web applications.Demonstrated ability to integrate technical <br/>solutions. Committed to ongoing learning and ready to contribute to  <br/> dynamic development projects.</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire ME" className='btnImg' />Hire ME</button></Link>
            </div>
            <img src={bg} alt="" className="bg" />
        </section>
    )
}

export default Intro