import React from "react";
import logo from "../assets/logologo.svg";
import "../styles/NavBar.scss";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="flex justify-between navbar">
      <div>
        <Link to="/">
        <img src={logo} alt="Crow Logo" className="logo" /></Link>
      </div>
      <div className="nav-menu">
        <Link to="/escrow">
          {" "}
          <span>Escrow Service</span>
        </Link>
        <Link to="/tutorial">
          {" "}
          <span>Tutorial</span>
        </Link>
        <Link to="/about">
          {" "}
          <span>About</span>
        </Link>
      </div>
      <div>
        <button className="mainbutton">Launch app</button>
      </div>
    </nav>
  );
};
