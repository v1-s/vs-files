import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import Grocery from './Assests/Grocery.png';
import Electronics from './Assests/Electronics.png';
import Fashion from './Assests/Fashion.png';
import Flight from './Assests/Flight.png';
import Home from './Assests/Home.png';
import Mobiles from './Assests/Mobiles.png';
import Twowheelers from './Assests/Two wheelers.png';
import Appliances from './Assests/Appliances.png';
import Toys from './Assests/Toys.png';
export default function MinSlider(){
    return(
        <>
         <div className="MinSlider">
             <div className="grid">
                <div className="row">
                    <div className="SlideItem col-md-1">
                        <div className="ImageSld">
                        <img src={Grocery} alt="Grocery"/>
                        </div>
                        <a href="#">Grocery</a></div>
                    <div className="SlideItem col-md-1">
                    <div className="ImageSld">
                    <img src={Mobiles} alt="Electronics" style={{marginTop:'18px'}}/>
                     </div><a href="#">Mobiles</a></div>
                    <div className="SlideItem col-md-1">
                    <div className="ImageSld">
    <img src={Fashion} alt="Electronics" style={{marginTop:'15px'}}/>
    </div> <button class="dropdown-btn" style={{border:"none",display:"inline",backgroundColor:'white'}}>
    <a href="#">Fashion</a><i className="arrow" style={{marginLeft:'6px'}}></i>
        </button>
        <div class="dropdown-content">
            <a href="#">Item 1</a>
            <a href="#">Item 2</a>
            <a href="#">Item 3</a>
        </div>
    </div>


                    <div className="SlideItem col-md-1">
                    <div className="ImageSld">
                    <img src={Electronics} alt="Electronics" style={{marginTop:'28px'}}/>
                    </div><a href="#">Electronics</a></div>
                    <div className="SlideItem col-md-1">
                    <div className="ImageSld">
                    <img src={Home} alt="Electronics"/>
                    <button class="dropdown-btn" style={{border:"none",display:"inline",backgroundColor:'white'}}><a href="#" style={{marginLeft:'-10px'}}>Home & Furniture</a>
                    <i className="arrow" style={{marginLeft:'-5px'}}></i>
        </button>
        <div class="dropdown-content">
            <a href="#">Item 1</a>
            <a href="#">Item 2</a>
            <a href="#">Item 3</a>
        </div>
        </div>
    </div>





                    <div className="SlideItem col-md-1">
                    <div className="ImageSld">
                    <img src={Appliances} alt="Electronics"/>
                    </div><a href="#">Appliances</a></div>
                    <div className="SlideItem col-md-1">
                    <div className="ImageSld">
                    <img src={Flight} alt="Electronics" style={{marginTop:'20px'}}/>
                    </div><a href="#">Travel</a></div>
                    <div className="SlideItem col-md-1">
                    <div className="ImageSld">
                    <img src={Toys} alt="Electronics"/>
                    </div>
                    <a href="#">Beauty,Toys&<br></br>More</a></div>
                    <div className="SlideItem col-md-1">
                    <div className="ImageSld">
                    <img src={Twowheelers} alt="Electronics" style={{marginTop:'20px'}}/>
                    </div><a href="#">Two Wheelers</a></div>
                </div>
             </div> 
             </div>
          
        </>
    )
}