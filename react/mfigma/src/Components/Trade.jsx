import React from "react";
import Trade1 from './Assests/Trade1.png';
import Trade2 from './Assests/tr2.png';
import Share from './Assests/share.png';
export default function Trade(){
    return(
        <>
        <div className="Tr">
        <div className="Trade col-lg-12 col-md-12">
            <h1>Trade More.<span style={{color:"greenyellow"}}>Pay Less</span></h1>
            <h5>Our low Fees Supercharge Your Profits.</h5>
            <img src={Trade1} alt="Trade1"/>
        </div> 
        <div className="Trade1 col-lg-12 col-md-12">
            <h1>Explore the Markets <br></br>like it is your<span style={{color:"greenyellow"}}>Playground.</span></h1>
            <h5>Search for your favourite coins and stay ahead of the market.</h5>
            <img src={Trade2} alt="Trade2"/>
           
        </div>
        <button className="Trd">EXPLORE MARKETS</button>
        <div className="Trade3 col-lg-12 col-md-12">
        <h1><span style={{color:"greenyellow"}}>Unlock</span> New Frontiers</h1>
            <h5>Are you a stock trader looking for new opportunities to make money? We got you covered!</h5>
        </div>
        <div class="container4">
  <div class="row">
    <div class="col-md">
      <h5>Same<br></br> Strategies</h5>
    </div>
    <div class="col-md">
      <h5>Same<br></br> Indicators</h5>
    </div>
    <div class="col-md">
      <h5>Better <br></br>Leverage</h5>
    </div>
    <div class="col-md">
      <h5>24x7 <br></br>Trading</h5>
    </div>
  </div>
 </div>
 <div className="ImgTr col-lg-12 col-md-12">
<img  src={Share} alt="Image4"/>
</div>
        </div>
        </>
    )
}