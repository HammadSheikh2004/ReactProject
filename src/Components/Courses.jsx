import React from 'react'
import img1 from "../Components/img/course 1.jpg";
import img2 from '../Components/img/course 2.jpg';
import img3 from '../Components/img/course 3.jpg';
import img4 from '../Components/img/course  4.jpg';
import img5 from '../Components/img/course 5.png';
import img6 from '../Components/img/course 6.jpg';
import '../../src/Components/Styled/courses.css';
import { NavLink } from "react-router-dom";

let Data = [
  {
    title: "Our Courses",
    imgUrl: img1,
    desc: "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing.",
  },
  {
    title: "Our Courses",
    imgUrl: img2,
    desc: "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing.",
  },
  {
    title: "Our Courses",
    imgUrl: img3,
    desc: "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing.",
  },
  {
    title: "Our Courses",
    imgUrl: img4,
    desc: "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing.",
  },
  {
    title: "Our Courses",
    imgUrl: img5,
    desc: "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing.",
  },
  {
    title: "Our Courses",
    imgUrl: img6,
    desc: "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing.",
  },


];
const Courses = () => {
  return (
    <div className="container box-container">
      <div className="row">
        {
          Data.map((item, index) => (
            <div className="col-lg-4 col-md-4 col-sm-12" key={index}>
              <div className="box mb-3">
                <img src={item.imgUrl} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                  <NavLink to="/" className="btn course-btn">Go somewhere</NavLink>
                </div>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Courses