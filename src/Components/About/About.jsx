import React from 'react'
import "./about.css"
import UIDesign from "../../assets/ui-design.png"
import Webesign from "../../assets/website-design.png"

const About = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I Do</span>
            <span className="skillDesc">As a beginner Front-End Developer, I'm skilled in creating basic websites using CSS, HTML, and JavaScript. I'm also familiar with building simple interactive features using React. Eager to grow my skills and contribute to user-friendly web experiences.</span>
            <div className="skillBars">
                <div className="SkillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus totam mollitia possimus vitae harum assumenda! Qui, corrupti similique harum voluptatibus quaerat repellat quae eaque apeAbout</p>
                    </div>
                </div>
                <div className="SkillBar">
                    <img src={Webesign} alt="Webesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsam est quasi dolorum neque ut nisi tempore ab aut? Eaque, facilis soluta perspiciatis aspernatur sed rerum aliquid accusantium repellat! Officia?</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About