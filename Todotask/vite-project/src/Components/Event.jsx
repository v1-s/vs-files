import React, { useState } from "react";
export default function Click(){
    const [state,setState]=useState(0);
    const [factor,setFactor]=useState(1);
    const [text,setText]=useState("")
    function texthandler(e){
        setText(e.target.value)
        console.log(e)
    }
    function Add(){
    //   setState(state+1)
        setState(state+factor);
        // console.log("Hello")
    }
    function Sub(){
        // setState(state-1)
        setState(state-factor)
    }
    function AddFactor(){
        setFactor(factor+5)
    }
    function SubFactor(){
        setFactor(factor-5)
    }
    return(
        <>
        {/* <div>
            <h1>count:{state}</h1>
            <button onClick={Add}>Increement</button>
           <button onClick={Sub}>Decreement</button>
        </div>
        <div>
        <h1>count:{factor}</h1>
        <button onClick={AddFactor}>Increement</button>
           <button onClick={SubFactor}>Decreement</button>
        </div> */}

        <input type="text" onChange={texthandler} value={text}/>
        </>
    )
}