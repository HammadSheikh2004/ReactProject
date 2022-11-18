import React from 'react'
import AboutImg from "../../src/Components/img/about.jpg";
import "../../src/Components/Styled/about.css";


const About = () => {
  return (
    <>
     <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img src={AboutImg} className='about-img img-fluid'  alt="" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="content">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima distinctio harum possimus quasi ab odit reiciendis minus, quos ut accusantium.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem saepe voluptates ullam natus esse id, molestias voluptas placeat eveniet repudiandae molestiae repellat accusantium ipsa maxime cum facilis labore officia at.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet totam cum quae itaque quo qui at adipisci porro ipsum a, dolorem harum, maiores similique laborum, vel quia deleniti molestias voluptatum odio sint! Dolores nisi adipisci reiciendis totam animi iste neque accusantium magnam voluptatem aliquam.</p>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default About;