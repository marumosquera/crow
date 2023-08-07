import React from "react";
import "../styles/Footer.scss";
import logo from '../assets/logoblacklogo.svg';
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <nav className="flex justify-between footer">
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
      <div className="copyright">
      ©Copyright 2023, design by crow.
      </div>
    </nav>
  );
};
