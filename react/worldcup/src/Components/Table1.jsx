import React, { useState } from "react";
function Table1(props){
    const [hoverRowIndex,setHoverRowIndex]=useState(null);
    console.log("props",props);
    return(
        <div>
            {props?.data?.length > 0 ?
            <table>
                <tbody>
                <tr style={{backgroundColor:"rebeccapurple"}}>
                    <th style={{textAlign:"center"}}>Id</th>
                    <th style={{textAlign:"center"}}>title</th>
                </tr>
                {
                    props.data.map((item,index) =>{
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

    )
}
export default Table1