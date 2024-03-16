import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import contectimg from './contact.png';
import "./Nav.css";

const Nav = () => {
  // Define useState hook at the top level of the component
  const [imgCls,setImgCls]=useState("d")
  const [navbar1,setnavbar1]=useState("navbar")
  const [navClass, setNavClass] = useState("hide");

  const toggleMenu = () => {
    // Toggle navClass state when the menu is clicked
    setNavClass(navClass === "hide" ? "mobNav" : "hide");
    setImgCls(imgCls === "hide" ? "d" : "hide");
    setnavbar1(navbar1==="navbar"?"navbar1":"navbar")
  };

  return (
    <nav  className={`${navbar1}`}>
      <img src={logo} alt="logo" className="logo" onClick={toggleMenu} />

      {/* Apply the navClass dynamically to toggle visibility */}
      <div className={`desktopMenu ${navClass}`}>
        <Link className="desktopManuListItem" to="/">Home</Link>
        <Link className="desktopManuListItem" to="/About">About</Link>
        <Link className="desktopManuListItem" to="/Skills">Skills</Link>
        <Link className="desktopManuListItem" to="/Contect">Contect</Link>
        <Link className="desktopManuListItem" to="/Projects">Projects</Link>
      </div>

      <button className={`desktopMenuBtn ${imgCls}`} >
        <img className='desktopManuImg'  src={contectimg} alt="img" /> <Link  className="contectLink" to="mailto:aanandchandel20@gmail.com" >Contect Me</Link>
      </button>
    </nav>
  );
};

export default Nav;
