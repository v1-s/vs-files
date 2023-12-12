import React, { useState } from "react";


import axios from "axios";
export default function Quotes(){
    const [quotetext,setQuotetext]=useState(false);
        let Url="'https://healthruwords.p.rapidapi.com/v1/quotes/"

        axios.get(Url).then(response =>{
            console.log(response.json())
            // setQuotetext(response.json())

            // console.log("response",quotetext);
        }).catch(error =>{
            console.log(error);
        })

    return(
        <>
        <div className="container">
            <div className="in-box">
                
            </div>
        </div>
        </>
    )
}