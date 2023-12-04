import React from "react";
import Start from "./Assests/Start.png";
import Sta from "./Assests/Screenshot 2023-12-02 180405.png";
import fb from './Assests/fb.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from'@fortawesome/free-brands-svg-icons';
import {faTwitter} from'@fortawesome/free-brands-svg-icons';
import {faLinkedin} from'@fortawesome/free-brands-svg-icons';
{/* <FontAwesomeIcon icon="fa-brands fa-facebook-f" /> */}
export default function footer() {
  return (
    <>
      <div className="Footer">
        <div className="Ftitle">
          <h1>Get Started Now</h1>
        </div>
        <img src={Start} alt="Start" />
        <div className="Foot">
          <div className="Footitle">
            <h1>density</h1>
            <div className="Fgrid">
              <div className="row col-md-12">
                <div className="col-md-2">Blog</div>
                <div className="col-md-2">Fees</div>
                <div className="col-md-2">Leaderboard</div>
                <div className="col-md-2">Careers</div>

                <div className="col-md-2">Contact Us</div>
                <div className="col-md-2">Privacy Policy</div>
              </div>
            </div>
            <p id='Ftext'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi natus eius qui laudantium tempore asperiores tenetur
              deleniti error iste, illo repellat eum ipsa repellendus impedit
              exercitationem deserunt? Repudiandae, optio consequuntur!
            </p>
            <div className="Fgrid2">
              <div className="row col-md-12">
                 <div className="col-md-3"><FontAwesomeIcon icon={faFacebookF} size="xl"/></div> 
                <div className="col-md-3"><FontAwesomeIcon icon={faInstagram} size="xl"/></div>
                <div className="col-md-3"><FontAwesomeIcon icon={faTwitter} size="xl" /></div>
                <div className="col-md-3"><FontAwesomeIcon icon={faLinkedin} size="xl" /></div>
              </div>
            </div>
          </div>
       </div>
     </div>      
    </>
  );
}
