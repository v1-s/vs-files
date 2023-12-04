import React from "react";
import Img1 from './Assests/Screenshot 2023-12-02 180337.png';
import Img2 from './Assests/Screenshot 2023-12-02 180352.png';
import Img3 from './Assests/Screenshot 2023-12-02 180405.png';
export default function Content2(){
    return (
        <>
        <div className="box2">
        <div className="container1">
       <div className="row">
      <div className="col-lg-3 col-md-12">
      <div className="content2">00%</div>
      <span id="contr">Conversion Fees</span>
    </div>
    <div className="col-lg-3 col-md-12">
      <div className="content2">500Mn+</div>
      <span id="contr">Lifetime Volume Traded</span>
    </div>
    <div className="col-lg-3 col-md-12">
      <div className="content2">250+</div>
      <span id="contr">Total Tradable Pairs</span>
      
    </div>
    <div className="col-lg-3 col-md-12" style={{borderRight:'none'}}>
      <div className="content2">15000+</div>
      <span id="contr">Traders</span>
    </div>
    </div>
   </div>
   <div className="container3">
      <div className="con1 col-md-6 col-lg-12">
            <img src={Img1} alt="Image1"/>
      </div>
      <div className="con2 col-lg-6 col-lg-12">
            <img src={Img2} alt="Image2"/>
      </div>
      <div className="con3 col-md-6 col-lg-12">
            <img src={Img3} alt="Image3"/>
      </div>
      </div>
      </div>
        </>
    )
}