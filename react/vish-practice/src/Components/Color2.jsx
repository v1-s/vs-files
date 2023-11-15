import React from 'react';
import { useState } from 'react';
export default function ColorPicker(){
    const [Color,setColor]=useState('black');
    function change(event){
               setColor(event.target.value);
    };
    return(
        <div>
            <input value={Color} onChange={change} />
            <div style={{width:'100px',height:'100px',marginLeft:'550px',marginTop:'50px',backgroundColor:Color}} ></div>
        </div>
    )
}