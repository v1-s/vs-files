import React from "react";
export default function List({place,location}){
    return(
        <>

    {location>10 ? <h1>The place is {place} in {location}</h1>:""}
   

        </>
    )
}