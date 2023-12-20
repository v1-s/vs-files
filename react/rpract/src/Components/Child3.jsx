import {fname} from './About';
import React from "react";
import { useContext } from "react";
export default function Child3(){
    const data=useContext(fname)
    console.log("Props",data);
    return (
        <>
        <h1 >{data} Child3 Component</h1>
        </>
    )
}