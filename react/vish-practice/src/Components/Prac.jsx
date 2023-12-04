import React, { useState } from "react";
import { ReactDOM } from "react-dom";
export default function Counter(){
    const[Count,setCount]=useState(0);
    function Incr(){
            setCount(prevCount=>prevCount + 1);
    }        
    function Decr(){
            setCount(preCount=>preCount-1);
    }
    return(
        <>
        <div>

            <h1>{Count}</h1>
            <button onClick={Incr}>SetIncreement</button>
            <button onClick={Decr}>Decreement</button>

        </div>
        </>
    )
}