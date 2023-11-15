import React from "react";
import { useState } from "react";
export default function Todo(){
    const [Text,setText]=useState('');
    const [List,setList]=useState([]);
    function Del(index){
            setList(List.filter(e=>e.id!==index))
    };
    function Add(){
        setList([...List,Text]);
        setText("");

    }
    function Todo(event){
            setText(event.target.value)
    }
   
    return(
        <div>
            <h1>TODO LIST</h1>
                 
                <input value={Text} onChange={Todo}/>
                <button onClick={Add}>+</button>
                <input type="Checkbox"></input>
                <button onClick={Del}>Delete</button>
          
            </div>
        })};
               
            
        </div>
    );
}