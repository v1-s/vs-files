import {Link} from 'react-router-dom';
export default function Homep(){
    return(
        <>
       <h1> Welcome to React</h1>
       <li>
       <Link to="/Contacts">Contacts</Link>
       </li>
       <li>
       <Link to="/Features">Features</Link>
       </li>
       <li>
       <Link to="/About">About</Link>
       </li>


       
       </>
    );
}