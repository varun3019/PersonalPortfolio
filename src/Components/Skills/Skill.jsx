import React from 'react'
import js from "../../assets/js.png"
import rea from "../../assets/react.png"
import ht from "../../assets/html.png"
import css from "../../assets/css.png"
import "./skill.css"

const Skill = () => {
    return (
        <section id="about">
            <h2 className="aboutTitle">My skills</h2>
            <div className="aboutBars">
                <img src={rea} alt="React" className="aboutImg" />
                <img src={js}  alt="Js" className="aboutImg" />
                <img src={ht} alt="html" className="aboutImg" />
                <img src={css}  alt="css" className="aboutImg" />
            </div>
        </section>
    )
}

export default Skill