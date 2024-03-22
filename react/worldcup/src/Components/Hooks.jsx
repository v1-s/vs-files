import React, { useContext } from "react";
import { useState,useEffect } from "react";
// import 'App.js';
import contextcreate from "./UseContext";
export default function Counter({contxtvalue}){
    // const contval=useContext(contextcreate);
    // console.log(contval.message);
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log(`Current Count:`,count,`(useEffect)`);
},[count]);
    function Increement(){
        setCount(count+1)
    }
    function Decreement(){
          
           if (count >0){
                    setCount(count-1)

           }
            }




    
    return(
        <>
        <div>
          
            {/* <h1>welcome {contval.message}</h1> */}
          <contextcreate.Consumer>
            {contxtvalue=>(
            <h1>welcome {contxtvalue.message}</h1>
            )}
            </contextcreate.Consumer>
            <h1>Counter: {count}</h1>
            <button onClick={Increement}> +</button>
            <button onClick={Decreement}>- </button>
        </div>
        </>
    )
}
