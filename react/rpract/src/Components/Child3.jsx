import React from "react";

export default function Child3(props){
    console.log("Props",props);
    return (
        <>
        <h1 >{props.value} Child3 Component</h1>
        </>
    )
}