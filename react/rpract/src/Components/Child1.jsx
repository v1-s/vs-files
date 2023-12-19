import React from "react";
import Child2 from "./Child2";
export default function Child1(props){
    console.log("Props1",props);
    return(
        <>
        
        <div>
             <h1>child1 Component</h1>
             <Child2 value={props.value}/>
        </div>
        </>
    )
}
