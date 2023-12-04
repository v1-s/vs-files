import {React,useEffect, useState} from "react";
import Img1 from './Assests/image1.jpg';
import Img2 from './Assests/image2.jpg';
import Img3 from './Assests/image3.jpg';
import Img4 from './Assests/image4.jpg';
export default function Slider(){
    const[crntimg,setCrntimg] =useState(0);
    const images=[Img1,Img2,Img3,Img4];
    useEffect(() => {
        const timer = setTimeout(() => {
            setCrntimg((crntimg + 1) % images.length);
        }, 3000);
        return () => clearTimeout(timer); // This will clear the timer when the component unmounts or before starting a new timer
    }, [crntimg]); 
    // useEffect(() => {
    //     setTimeout(() => {
    //       setCrntimg((crntimg) => crntimg + 1);
    //     }, 3000);
    //   });
    const  Previous=()=>{
        setCrntimg((crntimg - 1 + images.length) % images.length);
     };
    const  Next=()=>{
        setCrntimg((crntimg + 1 + images.length) % images.length)
     }
     return(
        <>
        <div id ="Container">
            <button id="Prev" onClick={Previous}>Previous</button>
            <div id="Img">
           <img src={images[crntimg]} alt='/slider'/>
                {/* <img src={Img1} alt="Image1"/>
                <img src={Img2} alt="Image2"/>
                <img src={Img3} alt='Image3'/>
                <img src={Img4} alt='Image4'/> */}
            </div>
            <button id="Nxt" onClick={Next}>Next</button>
        </div>
        </>
     )
}     