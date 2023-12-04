import { Link } from "react-router-dom";
import logo from "./Assests/logo1.jpg";
import fb from "./Assests/fb.png";
import linkedin from "./Assests/linkedin.png";
import twitter from "./Assests/twitterr.jpg";
import insta from "./Assests/instag.png";
import yt from "./Assests/youtube.png";
import msg from "./Assests/msg icon.jpg";
import wtsapp from "./Assests/wtsapp.jpg";
import tel from "./Assests/telephone.png";

export default function Footer() {
  return (
    <>
      <div className="footer-main p-xs-20">
        <div className="container p-xs-0 text-md-center">
          <div className="row">
            <div className="col-md-3 mt-2">
              <img src={logo} />
              <p className="foo-content">
                AchieversIT - Provides a wide group of opportunities for
                freshers and Experienced candidate who can develop their skills
                and build their career opportunities across multiple Companies
              </p>
            </div>
            <div className="foo-link col-md-3 mt-4">
              <h5 style={{ color: "grey" }}>COMPANY</h5>
              <div className="foo-l">
                <Link className="foot-link" to="/">
                  Home
                </Link>
                <br></br>
                <Link className="foot-link" to="/Corporate">
                  Corporate Training
                </Link>
                <br></br>
                <Link className="foot-link" to="/Placements">
                  Placements
                </Link>
                <br></br>
                <Link className="foot-link" to="/Internship">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="col-md-3 mt-4">
              <h5 style={{ color: "grey" }}>TRENDING COURSES</h5>
              <div className="foo-course">
                <Link className="foot-course" to="/UI">
                  UI Development Course
                </Link>
                <br></br>
                <Link className="foot-course" to="/Angular">
                  Angular Js Course
                </Link>
                <br></br>
                <Link className="foot-course" to="/Reactjs">
                  React Js Course
                </Link>
                <br></br>
                <Link className="foot-course" to="/Internship">
                  Digital Marketing Course
                </Link>
                <br></br>
                <Link className="foot-course" to="/Internship">
                  Python Course
                </Link>
              </div>
            </div>
            <div className="col-md-3 mt-4">
              <h5 style={{ color: "grey" }}>CONTACT INFO</h5>
              <div className="foo-contact">
                <div className="foo-contact1">
                  #63, 1st Floor, 16th Main, 8th Cross,BTM 1st Stage, Bangalore,
                  India - 560029.
                </div>
                <div className="foo-contact2">India : +91 8431-040-457</div>
                <div className="foo-contact3">info@achieversit.com</div>
              </div>
            </div>
          </div>

          <div
            className="hbrk"
            style={{ width: "100%", height: "1px", backgroundColor: "white" }}
          ></div>
          <div className="foo2">
            <div className="row">
              <div className="foo-icons col-md-12">
                <ul className="icons">
                  <li>
                    <img
                      src={fb}
                      alt="Facebook"
                      style={{ width: "40px", height: "40px" }}
                    />
                  </li>
                  <li>
                    <img
                      src={linkedin}
                      alt="linkedin"
                      style={{ width: "40px", height: "40px" }}
                    />
                  </li>
                  <li>
                    <img
                      src={twitter}
                      alt="twitter"
                      style={{ width: "40px", height: "40px" }}
                    />
                  </li>
                  <li>
                    <img
                      src={insta}
                      alt="instagram"
                      style={{ width: "40px", height: "40px" }}
                    />
                  </li>
                  <li>
                    <img
                      src={yt}
                      alt="instagram"
                      style={{ width: "40px", height: "40px" }}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
 {/*   ------------------------------Footer--------------------------------------------      */}
          <footer className="foo-policy">
            <div className="row">
              <div className="col-md-6">
                <p className="copyright-notice">
                  Copyright © 2020 AchieversIT. All Rights Reserved
                </p>
              </div>
              <div className="col-md-6 text-center">
                <ul className="foot-terms-xs">
                  <Link className="foo-terms" to="/privacy-policy">
                    Privacy Policy
                  </Link>
                  <Link className="foo-terms" to="/terms-of-use">
                    Terms Of Use
                  </Link>
                  <Link className="foo-terms" to="/refund-policy">
                    Refund Policy
                  </Link>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </div>
      {/* -------------------------------------footer ---------------------------------------- */}
        <div className="footer-bottom">
            <div className="row col-md-12 justify-content-between">
                <div className="d-flex col-md-6 p-3">
                <img src={tel} alt="Telephone Icon" style={{width:"60px",height:"60px",marginLeft:"50px"}} />
                    <Link className="foo-contacts1" to="/">Call us on:+91 8431-040-457/<br></br>815100080 </Link>
                </div>
                <div className="d-flex col-md-3 p-3">
                    <img src={msg} alt="Message Icon" style={{width:"60px",height:"50px",marginLeft:"-90px"}} />
                    <Link className="foo-contacts2" to="/Form">Request A Call Back</Link>
                </div>
                <div className="d-flex col-md-3 p-3">
                <img src={wtsapp} alt="Whatsapp Message Icon" style={{width:"60px",height:"50px",marginLeft:"-60px"}} />
                    <a className="foo-contacts3" href="https://www.whatsapp.com/">Chat with us</a>
                    
                </div>
             </div>
        </div>
    {/*------------------------------     Scroll   ----------------------------------------             */}
        {/* <div className="scroll">
            <button type="button">
                <Link className="scroll-top" to="/"></Link>
            </button>
        </div> */}




    </>
  );
}
