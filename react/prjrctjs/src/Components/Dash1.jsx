import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import Popup from './Popup';
import {faMoneyBillTrendUp} from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import {faTags} from '@fortawesome/free-solid-svg-icons';
import {faUsers} from '@fortawesome/free-solid-svg-icons';
import Dashboard from './Dashboard';
export default function Dash1(){
    const navigate= useNavigate();
       const [showPopup, setShowPopup] = useState(false);
//   const [showPage1, setShowPage1] = useState(false);
  return(
    <>
  <div style={{width:"80%",marginLeft:"210px",marginTop:"-500px"}}>
    <div className="cont container-fluid">
        <div className="row" style={{marginLeft:"10px",marginRight:"10px"}}>
            <div className="c1 col-lg-3 col-md-6">
                <div className='card1'>
                    <div className='b1 col-md-9'style={{textAlign:'left'}}>
                    <FontAwesomeIcon icon={faMoneyBillTrendUp} size="xl" style={{backgroundColor:"green",color:'white',borderRadius:'50%',padding:"10px"}} />
         <h5>Total Revenues</h5>
         $2,23,4445   
                  <div className='bside col-md-6' style={{marginLeft:'160px'}}>
         
                  <span style={{backgroundColor:"silver",color:"greenyellow"}} >+4.5%</span>
                 </div>
                </div>
                    </div> 
            </div>
            <div className=" c1 col-lg-3 col-md-6">
            <div className='card2'>
                    <div className='b1 col-md-9'style={{textAlign:'left'}}>
                    <FontAwesomeIcon icon={faTags} size="xl"style={{backgroundColor:"wheat",color:'white',borderRadius:'50%',padding:"10px"}} />
         <h5>Total Transactions</h5>
         $2,23,4445   
                  <div className='bside col-md-6' style={{marginLeft:'160px'}}>
         
                  <span style={{backgroundColor:"silver",color:"greenyellow"}} >+4.5%</span>
                 </div>
                </div>
                    </div> 
            </div>
            <div className=" c1 col-lg-3 col-md-6"> 
            <div className='card3'>
                    <div className='b1 col-md-9'style={{textAlign:'left'}}>
                    <FontAwesomeIcon icon={faThumbsUp} size="xl"style={{backgroundColor:"orange",color:'white',borderRadius:'50%',padding:"10px"}} />
         <h5>Total Likes</h5>
         $2,23,4445   
                  <div className='bside col-md-6' style={{marginLeft:'160px'}}>
         
                  <span style={{backgroundColor:"silver",color:"greenyellow"}} >+4.5%</span>
                 </div>
                </div>
                    </div> 
            </div>
            <div className=" c1 col-lg-3 col-md-6"> 
            <div className='card1'>
                    <div className='b1 col-md-9'style={{textAlign:'left'}}>
                    <FontAwesomeIcon icon={faUsers} size="xl"style={{backgroundColor:"cornflowerblue",color:'white',borderRadius:'50%',padding:"10px"}} />
         <h5>Total Revenues</h5>
         $2,23,4445   
                  <div className='bside col-md-6' style={{marginLeft:'160px'}}>
         
                       <span style={{backgroundColor:"silver",color:"greenyellow"}} >+4.5%</span>
                 </div>
                </div>
                    </div> 
        </div>
        </div>
        <div className='row' style={{width:"98%",marginTop:'10px',marginLeft:"10px"}}>
        <div className="c1 col-lg-6 col-md-6">
                <div className='card1'>
                    <div className='b1 col-md-9'style={{textAlign:'left'}}>
                    <FontAwesomeIcon icon={faMoneyBillTrendUp} size="xl" style={{backgroundColor:"green",color:'white',borderRadius:'50%',padding:"10px"}} />
         <h5>Total Revenues</h5>
         $2,23,4445   
                  <div className='bside col-md-6' style={{marginLeft:'160px'}}>
         
                  <span style={{backgroundColor:"silver",color:"greenyellow"}} >+4.5%</span>
                 </div>
                </div>
                    </div> 
            </div>
            <div className="c1 col-lg-6 col-md-6">
                <div className='card1'>
                    <div className='b1 col-md-9'style={{textAlign:'left'}}>
                    <FontAwesomeIcon icon={faMoneyBillTrendUp} size="xl" style={{backgroundColor:"green",color:'white',borderRadius:'50%',padding:"10px"}} />
         <h5>Total Revenues</h5>
         $2,23,4445   
                  <div className='bside col-md-6' style={{marginLeft:'160px'}}>
         
                  <span style={{backgroundColor:"silver",color:"greenyellow"}} >+4.5%</span>
                 </div>
                </div>
                    </div> 
            </div>
            </div>


            <div className='row' style={{width:"98%",marginTop:'10px',marginLeft:"10px"}}>
        <div className="c1 col-lg-6 col-md-6">
                <div className='card1'>
                    <div className='b1 col-md-9'style={{textAlign:'left'}}>
                    <FontAwesomeIcon icon={faMoneyBillTrendUp} size="xl" style={{backgroundColor:"green",color:'white',borderRadius:'50%',padding:"10px"}} />
         <h5>Total Revenues</h5>
         $2,23,4445   
                  <div className='bside col-md-6' style={{marginLeft:'160px'}}>
         
                  <span style={{backgroundColor:"silver",color:"greenyellow"}} >+4.5%</span>
                 </div>
                </div>
                    </div> 
            </div>
            <div className="c1 col-lg-6 col-md-6">
                <div className='card1'>
   {/* <img src="..." class="card-img-top" alt="..."/>  */}
   <div className="card-body">
   <button onClick={()=>setShowPopup(true)} className="btn2">
        <FontAwesomeIcon icon={faPlus} size="xl" />
      </button>
       {showPopup && (
        <div className="popup">
          <button className="close" onClick={() => setShowPopup(false)}><FontAwesomeIcon icon={faXmark} size="xl" /></button>
          <Popup />
          </div> 
      )} 
    </div> 
   <h5 className="card-title">Add Profile</h5> 
            </div>
            </div>
            </div>












































</div>
</div>

        
           

































     {/* <div className="card">
   {/* <img src="..." class="card-img-top" alt="..."/>  */}
   {/* <div className="card-body">
   <button onClick={()=>setShowPopup(true)} className="btn2">
        <FontAwesomeIcon icon={faPlus} size="xl" />
      </button>
       {showPopup && (
        <div className="popup">
          <button className="close" onClick={() => setShowPopup(false)}><FontAwesomeIcon icon={faXmark} size="xl" /></button>
          <Popup />
          </div> 
      )} 
    </div> */}
   {/* <h5 className="card-title">Add Profile</h5>  */}

</>
)
       }