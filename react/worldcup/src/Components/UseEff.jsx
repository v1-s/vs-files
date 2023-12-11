import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import Table1 from './Table1';
export default function UseEff(){
    const[data,setData] =useState([]);
    useEffect(()=>{
        fetchData();
    },[])
        const fetchData =() =>{
        let Url="https://jsonplaceholder.typicode.com/todos"
        axios.get(Url).then(response =>{
            setData(response.data)
            console.log("response",data);
        }).catch(error =>{
            console.log(error);
        })
    }
    // useEffect(()=>{
    //     console.log("response",data);
    // },[data])
    return(
        <>
<Table1 data={data}></Table1>
        </>
    )
}