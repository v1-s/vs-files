import React from "react";
import { useRef } from "react";
export default function Useref(){
    let ref= useRef(0);
     function handleClick(){
           ref.current=ref.current+1;
           alert(`clicked`+ref.current+`times`);
}
    return(
        <>
        <button onClick={handleClick}>
            CLick 
        </button>
        </>
    )
}