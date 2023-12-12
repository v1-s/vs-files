import React from "react";
import {Link} from 'react-router-dom';
export default function Mbox(){
    return(
        <>
        <div className='grt'>
            <li>Profile</li>
            <li>Settings</li>
            <li><Link className="lead" to ="/">Logout</Link></li>
          </div>
        </>
    )
}