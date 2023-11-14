import React from 'react'
import "./navbar.css"
import logo from "../../assets/logo.png"
import { Link } from 'react-scroll'
import contactImg from "../../assets/contact.png"

const Navbar = () => {
    return (
      <nav className="navbar">
        <img src={logo} alt="Logo" className='logo' />
        <div className="desktopMenu">
        <Link activeClass="active" to ="intro" spy = {true} smooth= {true} offset = {-100} duration= {500} className="desktopMenuItems">Home</Link>
        <Link activeClass="active" to ="skills" spy = {true} smooth= {true} offset = {-50} duration= {500} className="desktopMenuItems">About</Link>
        <Link activeClass="active" to ="works" spy = {true} smooth= {true} offset = {-100} duration= {500} className="desktopMenuItems">Portfolio</Link>
        <Link activeClass="active" to ="about" spy = {true} smooth= {true} offset = {-100} duration= {500}className="desktopMenuItems">Skills</Link>
        </div>
        <button className="desktopMenuBtn" onClick={()=>{document.getElementById("contact").scrollIntoView({behavior:"smooth"})}}>
            <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button>
      </nav>
    )
}

export default Navbar