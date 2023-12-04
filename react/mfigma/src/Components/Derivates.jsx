import React from "react";
import D1 from './Assests/Drt1.png';
import Dl1 from'./Assests/Dlogo.png';
import D2 from './Assests/Drtve2.png';
import Dl2 from './Assests/Dlo2.png';
import D3 from './Assests/Drt3.png';
import Dl3 from './Assests/Dlo3.png';
import B1 from './Assests/L1.png';
import B2 from './Assests/L2.png';
import B3 from './Assests/L3.png';
import B4 from './Assests/L4.png';
import B5 from './Assests/L5.png';
import B6 from './Assests/L6.png';
import B7 from './Assests/L7.png';
import P1 from './Assests/P1.png';
import P2 from './Assests/P2.png';
import P3 from './Assests/P3.png';
import P4 from './Assests/P4.png';
import P5 from './Assests/P5.png';
import P6 from './Assests/P6.png';
import P7 from './Assests/P7.png';
import P8 from './Assests/P8.png';


export default function Derivative(){
    return(
        <>
      <div className="Der col-md-6 col-lg-12">
  <div className="Dtitle">
    <h1>Derivates made simple<br></br> <span style={{marginLeft:"70px"}}>in <span style={{color:"greenyellow"}}>3 easy ways</span></span> </h1>
  </div>
  <div className="container6">
    <div className="Dr row">
      <div className="con1 col-md-5">
        <img src={D1} alt="Imae1"/>
      </div>
      <div className="Dcont col-md-4">
      <img src={Dl1} alt="Imge3"/>
        <h3>Create an Account</h3>
        <h5>Register & Complete Your Verification in less than 2 minutes </h5>
        <button className="DTrd">TRADE NOW</button>
      </div>
        <hr style={{color:'silver',margin:"60px",width:"500px"}}></hr><br></br>

    <div className="con1 col-md-5"style={{paddingTop:'30px'}}>
        <img src={D2} alt="Imge1"/>
      </div>
      <div className="Dcont col-md-4">
      <img src={Dl2} alt="Imae4"/>
        <h3>Deposit Funds</h3>
        <h5>Add funds quickly using a variety of payment methods.</h5>
        <button className="DTrd">TRADE NOW</button>
      </div>
      <hr style={{color:'silver',margin:"50px",width:"500px"}}></hr><br></br>
    <div className="con1 col-md-5"style={{paddingTop:'30px'}}>
        <img src={D3} alt="Imae4"style={{marginLeft:"20px"}}/>
      </div>
      <div className="Dcont col-md-4">
      <img src={Dl3} alt="Imge5"/>
        <h3>Become a Trader</h3>
        <h5>Choose Your Trading Pair & Trade Seamlessly</h5>
        <button className="DTrd">TRADE NOW</button>
      </div>
    </div>

    </div>
</div>

<div className="container7">
    <h1>Backend by the Best.</h1>
    <div className="Dr row">
      <div className="Bcon1 col-md-1">
        <img src={B1} alt="BImae1"/>
      </div>
      <div className="Bcon1 col-md-1">
      <img src={B2} alt="Imge3"/>
      </div>
      <div className="Bcon1 col-md-1">
      <img src={B3} alt="Imge3"/>
      </div>
      <div className="Bcon1 col-md-1">
      <img src={B4} alt="Imae3"/>
      </div>
</div>
<div className="Dr1 row">
      <div className="Bcon1 col-md-1">
        <img src={B5} alt="BImage1"/>
      </div>
      <div className="Bcon1 col-md-2">
      <img src={B6} alt="Imge3"/>
      </div>
      <div className="Bcon1 col-md-1">
      <img src={B7} alt="Imge3"/>
      </div>
</div>
</div>
<div className="container8">
    <div className="Dr row">
      <div className="Bcon1 col-md-1">
        <img src={P1} alt="BImage1"/>
      </div>
      <div className="Bcon1 col-md-1">
      <img src={P2} alt="Image3"/>
      </div>
      <div className="Bcon1 col-md-1">
      <img src={P3} alt="Image3"/>
      </div>
      <div className="Bcon1 col-md-1">
      <img src={P4} alt="Image3"/>
      </div>
      <div className="Bcon1 col-md-1">
      <img src={P5} alt="Image3"/>
      </div>
</div>
<div className="Dr1 row">
      <div className="Bcon1 col-md-1">
        <img src={P6} alt="BImage1"/>
      </div>
      <div className="Bcon1 col-md-1">
      <img src={P7} alt="Image3"/>
      </div>
      <div className="Bcon1 col-md-1">
      <img src={P8} alt="Image3"/>
      </div>
</div>
</div>
 </>
    )
}