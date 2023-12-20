import React from "react";
import ChildA from "./ChildA";
import { useState,useEffect,useContext } from "react";
export default function Header(){

    const[value,setValue]=useState("intial");
    // const data="Hello";
    return(
        <>
        <div>
            <h1>{value}Main Component</h1>
            <ChildA value="hello"/>
        </div>
        </>
    )
}