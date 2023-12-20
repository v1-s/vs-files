import Child2 from "./Child2";
import React from "react";
export default function Child1({fname}){
    console.log("Props1",fname);
    return(
        <>
        <div>
             <h1>{fname}child1 Component</h1>
             <Child2 value={fname}/>
        </div>
        </>
    )
}
