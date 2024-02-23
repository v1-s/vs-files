import React, { useState } from "react";
export default function Click(){
    const [state,setState]=useState(0);
    function Add(){
    //   setState(state+1)
    setState("hello");
        // console.log("Hello")
    }
    function Sub(){
        // setState(state-1)
        setState("hiii")
    }
    return(
        <>
        <div>
            <h1>count:{state}</h1>
            <button onClick={Add}>Increement</button>
           <button onClick={Sub}>Decreement</button>
        </div>
        </>
    )
}