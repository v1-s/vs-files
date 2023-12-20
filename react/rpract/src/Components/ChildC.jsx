import React from "react";
import {TableContext} from './About1';
import { useContext,useState } from "react";
export default function ChildC(){
    const data=useContext(TableContext)
    console.log("Props",data);
    const [hoverRowIndex,setHoverRowIndex]=useState(null);
    // console.log("props",data);
    return (
        <>
        <div>
            {data?.length > 0 ?
            <table>
                <tbody>
                <tr style={{backgroundColor:"rebeccapurple"}}>
                    <th style={{textAlign:"center"}}>Id</th>
                    <th style={{textAlign:"center"}}>title</th>
                </tr>
                {
                    data.map((item,index) =>{
                return(
                        <tr key={index}className="tabrow" style={{backgroundColor:index === hoverRowIndex ?'brown': index %2 ===0 ? "burlywood":"beige",border:"1px solid grey"}}
                       onMouseEnter={()=> setHoverRowIndex(index)}
                       onMouseLeave={()=>setHoverRowIndex(null)}>
                       <td style={{border:"1px solid blue",textAlign:"center"}}>{item.id}</td>
                       <td style={{border:"1px solid blue",textAlign:"center"}}>{item.title}</td>
                       </tr> 
                    )
                    })
                }
                </tbody>
             </table>:null}
        </div>
        </>
    )
}