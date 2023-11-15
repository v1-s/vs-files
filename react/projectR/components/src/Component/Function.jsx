import React, { useState } from "react";

export default function Header(){
    const [count,setCount]=useState(0);
   function increement(){
        setCount(count+1)
    };
    function decreement(){
        setCount(count-1)
    };
    function reset(){
       setCount(0)
    };
    return(
        <div>
            <p>{count}</p>
            <button onClick={increement}>Increement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decreement}>Decreement</button>
            
        </div>
    )
}