import React from "react";
import Mk from './Assests/mike.png';
import Li from './Assests/sharelink.png';
import PR from './Assests/Person.png';
import Tr from './Assests/Trl.png';
import D1 from './Assests/den1.png';
import D2 from './Assests/den2.png';
import D3 from './Assests/den3.png';
export default function Earn(){
    return(
        <>
        <div className="Econtainer">
       <img className='Mimage' src={Mk} alt="Mk"/>
       <div className="Etext">
       <h1>Earn Money.<span style={{color:"greenyellow"}}>The Easy Way.</span></h1>
       <h5>No Complexity of Trading Fee,generate volume and win</h5>
       </div>
       <div className="cntr9 col-md-9">
    <div className="Dr row">
      <div className="Tcon1 col-md-3">
        <img src={Li} alt="BImae1"/>
        <h5>Share Your Referral Link</h5>
      </div>
      <div className="Tcon1 col-md-3">
      <img src={PR} alt="Imge3"/>
      <h5>Invite Friends To Trade on Density</h5>
      </div>
      <div className="Tcon1 col-md-3">
      <img src={Tr} alt="Imge3"/>
      <h5>Trade & Earn</h5>
      </div>
      
</div>
</div>
 <button id='Tbtn'>START EARNING NOW</button>
</div>
{/* ------------------------------------------------------------------- */}
            <div className="Trcont">
                <div className="Ttitle">
                <h1>Trade Together.<span style={{color:'greenyellow'}}>Thrive Together.</span></h1>
                <h5>Join the fun filled community on platform.</h5>
            </div>
            <div className="Trcontainer">
       <div className="row">
      <div className="col-lg-3 col-md-12">
      <div className="Tcontent2">10,000+</div>
      <span id="contr">Traders</span>
    </div>
    <div className="col-lg-3 col-md-12">
      <div className="Tcontent2">100Mn</div>
      <span id="contr">Daily Volume Traded</span>
    </div>
    <div className="col-lg-3 col-md-12">
      <div className="Tcontent2">Daily</div>
      <span id="contr">Trade Analysis</span>
      
    </div>
    <div className="col-lg-3 col-md-12" style={{borderRight:'none'}}>
      <div className="Tcontent2">Live</div>
      <span id="contr">Signals</span>
    </div>
    </div>
    </div>
    <button id='Tjtn'>JOIN COMMUNITY</button>
    </div>

{/* ------------------- */}
            <div className="Vcont">
                <h1>Meet the <span style={{color:'greenyellow'}}>Visionaries</span><br></br>behind Density.</h1>
                <div className="cntr9 col-md-9">
    <div className="Dr row">
      <div className="Vcon1 col-md-3">
      <h5>Akash Neeraj<br></br> Mittal</h5>
      <span id='Tsub'>CEO,Density</span>
        <img src={D1} alt="BImae1" style={{marginLeft:'91px'}}/>
        
      </div>
      <div className="Vcon1 col-md-3">
      <h5>Bhupendra <br></br> Bhule</h5>
      <span id='Tsub'>CTO,Density</span>
      <img src={D2} alt="Imge3" style={{marginLeft:'91px'}}/>
      
      </div>
      <div className="Vcon1 col-md-3">
      <h5>Deepak <br></br> Vasman</h5>
      <span id="Tsub">CBO,Density</span>
      <img src={D3} alt="Imge3"style={{marginLeft:'91px'}}/>
   
      </div>
      
</div>
</div>
            </div>
       </>
    )
}