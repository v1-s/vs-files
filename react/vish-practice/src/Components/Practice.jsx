import React from "react";
import { ReactDOM } from "react-dom";
export default function Calender(){
            const date =new Date();
            const hrs = date.getHours();
            let timeofdday="";
            if(hrs<12){
                    timeofdday="morning" ;   
            } else if(hrs===12){
                timeofdday="afternoon";
            }
            else {
                timeofdday="night";
            }    




    return(
        <>
        <h1>Hello Good {timeofdday}!</h1>
        </>
    )
};