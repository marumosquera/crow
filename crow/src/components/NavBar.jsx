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
        <Link to="https://crow-app-l3ru.vercel.app/">
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
      <a href="https://crow-app-l3ru.vercel.app/create">
              {" "}
              <button className="mainbutton">Launch App</button>
            </a>
       
      </div>
    </nav>
  );
};
