import React from "react";
import "./Nav.css";
import { Link } from "react-scroll";
import logo from "./logo.png";
import contectimg from './contact.png'
const Nav = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopManuListItem">Home</Link>
        <Link className="desktopManuListItem" activeClass="active" to='aboutMe' spy={true} smooth={true} offset={-50} duration={500}>About</Link>
        <Link className="desktopManuListItem"activeClass="active" to='skills' spy={true} smooth={true} offset={-40  } duration={500} >Skills</Link>
        <Link className="desktopManuListItem"activeClass="active" to='contectme' spy={true} smooth={true} offset={-100} duration={500}>Contect</Link>
      </div>
      <button className="desktopMenuBtn">
        <img  className="desktopManuImg"  src={contectimg} alt="img" />Contect Me
       </button>
    </nav>
  );
};
export default Nav;
