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
        <Link className="desktopManuListItem">Home</Link>
        <Link className="desktopManuListItem">About</Link>
        <Link className="desktopManuListItem">Portfolio</Link>
        <Link className="desktopManuListItem">Clients</Link>
      </div>
      <button className="desktopMenuBtn">
        <img  className="desktopManuImg"  src={contectimg} alt="img" />Contect Me
       </button>
    </nav>
  );
};
export default Nav;
