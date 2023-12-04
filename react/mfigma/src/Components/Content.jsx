import React from "react";
import Logo from './Assests/Logo.png';
export default function Content(){
    return (
        <>
        

             <div className="box1">  
            <div className="content">
            <h1>It's time to trade,<br></br><span id="scont">the<span id="ftr"> future.</span></span></h1>
            <h3>Trade BTC,ETH Futures With 125x Leverage and Earn Rewards</h3>
            </div>
            <div className="box">
            <img src={Logo} alt="Image1"/>
            </div>
            </div> 
        
        </>
    )
}