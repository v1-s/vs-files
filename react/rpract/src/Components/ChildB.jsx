import React from "react";
import Childd from './Childd';
export default function ChildB(props){
    console.log(props);
    return(
    <>
    <div>
        <h1>{props.fname}Child B component</h1>
        <Childd value={props.fname}/>
    </div>
    </>
    )
}