import React from 'react';
import SearchResults from '../../Components/SearchResults/SearchResults';
import Navbar from '../../Components/Navbar/Navbar';


function Search() {
    return(
        <div>
            <Navbar/>
            <SearchResults/>
        </div>
    )
   
   
}
console.log(Search); 
export default Search;