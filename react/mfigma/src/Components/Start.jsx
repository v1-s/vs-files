import React from "react";
import Depbonus from './Assests/Depbs.png';
import Dep2 from './Assests/Dep2.png';
export default function Start(){
    return(
        <>
         <div className="Str col-lg-12 col-md-12">
            <h1>Start Small.Earn Big</h1>
            <h5>Deposit a minimum of 1000 and get a Deposit bonus + dedicated relationship manager.</h5>
            {/* <img src={Trade1} alt="Trade1"/> */}
        </div> 
        <div className="container5">
  <div className="row">
    <div className="col-sm-6">
      <div className="card">
        <img className="card-img-top" src={Depbonus} alt="Card image cap"/>
        <div className="card-body">
          <h3 className="card-title">Deposit<br></br> Bonus</h3>
          <p className="card-text">Our assets' liquidity is unmatched in the market, with a small bid-ask spread and a well-balanced order book.</p>
        </div>
      </div>
    </div>
    <div className="col-sm-6">
      <div className="card">
        <img className="card-img-top" src={Dep2} alt="Card image cap"/>
        <div className="card-body">
          <h3 className="card-title">Dedicated<br></br> Relationship Manager</h3>
          <p className="card-text">Our assets' liquidity is unmatched in the market, with a small bid-ask spread and a well-balanced order book.</p>
        </div>
      </div>
    </div>
  </div>
</div>


        </>
    )
}