import React from "react";
import angular from './Assests/angular-training.png';
import react from './Assests/python web.jpg';
import python from './Assests/full stack.jpg';
import amazon from './Assests/aws.jpg';
import php from './Assests/php.jpg';
import { Link } from "react-router-dom";
export default function Slider(){
    return(
        <>
        <div id="carouselExampleIndicators" className="carousel slide">
  {/* <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div> */}
  <div className="carousel-inner" data-bs-ride="carousel">
<div className="carousel-item active">
      <img src={angular} className="d-block" alt="Angular"/>
      <div className="imgCaption" >
        <h1>ANGULAR DEVELOPMENT COURSE</h1>
        <Link className="explore" to='./Angular'>EXPLORE COURSES</Link>
      </div>
    </div>
    <div className="carousel-item">
      <img src={react} className="d-block" alt="Reactjs Web Development"/>
      <div className="imgCaption" >
        <h1>REACTJS DEVELOPMENT COURSE</h1>
        <Link className="explore" to='./ReactJs'>EXPLORE COURSES</Link>
      </div>
    </div>
    <div className="carousel-item">
      <img src={python} className="d-block" alt="Python Web Development"/>
    <div className="imgCaption" >
      <h1>PYTHON DEVELOPMENT COURSE</h1>
      <Link className="explore" to='./'>EXPLORE COURSES</Link>
    </div>
  </div>
  <div className="carousel-item">
      <img src={amazon} className="d-block" alt="Amazon Web Development"/>
    <div className="imgCaption" >
      <h1>AMAZON WEB SERVICES COURSE</h1>
      <Link className="explore" to='./'>EXPLORE COURSES</Link>
    </div>
  </div>
  <div className="carousel-item">
      <img src={php} className="d-block" alt="PHP Web Development"/>
    <div className="imgCaption" >
      <h1>PHP WEB DEVELOPMENT COURSE</h1>
      <Link className="explore" to='./'>EXPLORE COURSES</Link>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  <Link className="contactus" to="/Form">CONTACT US</Link>
</div>
</div>

<div className="Nav-sub col-md-9 p-xs-20"> 
        <div className="container p-xs-0 text-md-center">
          <div className="row">
            <div className="col-md-3 Nav-sub1">
            
              <h5>Become an <br></br> <b>UI Developer</b></h5>
              <Link className="Nav-Link" to="/UI">Know more</Link>
            </div>
            <div className="Nav-sub2 col-md-3 ">
            <h5>Become an<br></br><b>ANGULAR DEVELOPER</b></h5>
              <Link className="Nav-Link2" to="/Angular">Know more</Link>
                        </div>

          <div className="Nav-sub3 col-md-3">
          <h5>Become a<br></br><b>REACT JS DEVELOPER</b></h5>
              <Link className="Nav-Link3" to="/Reactjs">Know more</Link>
          </div>
        </div>
            </div>
                </div>


    














        </>
    )
}