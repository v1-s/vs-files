import Child3 from './Child3';
import React from 'react';
export default function Child2(props){
    console.log("Props2",props)
    return(
        <>
        <h1> {props.value}Child2 components</h1>
        <Child3 value={props.value}/>
        </>
    )
}