import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import "../../src/Components/Styled/Header.css";
import Logo from "../Components/img/logo.png";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <NavLink className="navbar-brand logo" to="/home"><img src={Logo} alt="Logo" /></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          {/* <span className="navbar-toggler-icon"></span>  */}
          <i className="fa-solid fa-bars "></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" >About</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/courses">Courses</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
}



export default Header;