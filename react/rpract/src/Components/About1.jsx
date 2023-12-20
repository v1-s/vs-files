import React, { createContext } from "react";
import { useState,useEffect } from "react";
import ChildC from './ChildC';
import axios from "axios";

export const TableContext=createContext();
export default function About(){
    const[data,setData] =useState();

    const fetchData =() =>{
    let Url="https://jsonplaceholder.typicode.com/todos"
    axios.get(Url).then(response =>{
        setData(response.data)
        console.log("response",data);
    }).catch(error =>{
        
        console.log(error);
    })
}
useEffect(()=>{
    fetchData();
},[]);
//   const data ="Vishnu123";
  
      return(
        <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
     <div className="container-fluid">
     <a className="navbar-brand" href="#">Navbar</a>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<TableContext.Provider value={data}>
<ChildC/>
</TableContext.Provider>
</>

    )
  
}



