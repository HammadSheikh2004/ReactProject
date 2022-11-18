import React from 'react'
import { NavLink } from 'react-router-dom';
import "../../src/Components/Styled/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6">
          <h4>quick links</h4>
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
    

        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="box">
            <h4>about company</h4>
            <p>03062378119</p>
            <p>karachi pakistan</p>
            <p>hammadsheikh5237@gmail.com</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="box">
            <div className="social-links">
              <h4>social links</h4>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="box">
            <div className="news-letter">
              <h4>news letter</h4>
              <form action="">
                <input type="search" name="" id="search" className="search-form" />
              </form>

              <NavLink tp="/"><button className="search-btn">submit now</button></NavLink>
            </div>
          </div>
        </div>



        <div className="credit text-center">
          <p>@copyright 2022, credit by <span>M.hammad sheikh</span>  | all right reserved.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer