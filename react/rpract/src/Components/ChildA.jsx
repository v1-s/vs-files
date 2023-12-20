import React from "react";
import ChildB from './ChildB';
export default function ChildA({value}){
    console.log(value);
    return(
        <>
        <div>
            <h1>{value}ChildA Component</h1>
             <ChildB fname={value}/>
        </div>
        </>
    )
}