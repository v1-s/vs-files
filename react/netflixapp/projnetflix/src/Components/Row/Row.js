import React from "react";
import axios from "../API/axios";
import {useState, useEffect} from "react";
import YouTube from 'react-youtube';
// @ts-ignore
import movieTrailer from 'movie-trailer';
import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/original"

function Row({title,fetchUrl, isLargeRow}){
  // let response = [];
  let [movies, setMovies] = useState([]);
  let [trailerUrl, setTrailerUrl] = useState("");
  const [showTrailer, setShowTrailer] = useState(false);
  // console.log(requests.fetchTrending);
  useEffect(()=> {
    axios.get(fetchUrl).then((response) => {
      console.log(response.data.results);
      // response = data;
      setMovies(response.data.results);
    })
  }, [])

  let handleClick = (movie) => {
    if(trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie.title || movie.name || '')
        .then( url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
          setShowTrailer(true);
        }).catch((error)=> console.log(error));
    }
  }
  const closeTrailer = () => {
    setShowTrailer(false);
    setTrailerUrl('');
  };

  const opts = {
    height: "390",
    width: "99%",
    playerVars: {
      autoplay: 0,
    },
  }

  return (
    <div className="row">
    <h2>
      {title}
    </h2>
    
    <div className='row_posters'>
        {
                movies.map((item)=>{
                    const isFirstPoster = title === 'Netflix Originals';
                    const cardHeight = isFirstPoster ? 'card-height-200' : 'card-height-100';
                    return(
                        <img 
                        className={`row_poster ${cardHeight}`}
                        src={`${base_url}${item.poster_path}`}
                        onClick={()=> handleClick(item)}
                        />)
                    })}
        </div>
        <div>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
         {/* <div className={`trailer ${showTrailer ? 'visible' : ''}`}>
         <div className="trailer_overlay" onClick={closeTrailer}></div>
         <div className="trailer_content">
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} onEnd={closeTrailer} />}
  </div>
</div> */}
        </div>
        )
      }
      
      // export let a = 10;
      // export let b = 20;
      
      //these exports which are named exports are exported as an object
      
      export default Row;










// import React from 'react';
// import axios from '../API/axios';
// import requests from '../API/request';
// import { useEffect, useState } from 'react';
// import YouTube from 'react-youtube';
// import movieTrailer from 'movie-trailer';
// import "./Row.css";
// const base_url ="https://image.tmdb.org/t/p/original";
// const API_KEY ='be9b148b5e71f06d7755a4b3e8f99846'
// function Row({title,fetchUrl}){
//     // let response=[];
//     let [movies,setMovies]=useState([]);
//     let [trailerUrl,setTrailerUrl]=useState("")
//     // console.log(props)
//     useEffect(()=>{
//         axios.get(fetchUrl).then((response)=>{
//             console.log(response.data.results);
//             // response =data;
//             setMovies(response.data.results);
//     })
// },[])

//     let handleClick =(movie)=>{
//         if(trailerUrl){
//             setTrailerUrl('');
//         } else{
//             movieTrailer(movie.title || movie.name || "").
//             then(url =>{
//                 const urlParams = new URLSearchParams(new URL(url).search)
//                 setTrailerUrl(urlParams.get('v'));

//             }).catch((error)=>console.log(error))
//         }
//         const opts = {
//             height: "390",
//             width: "99%",
//             playerVars: {
//               autoplay: 0,
//             },
//     }

//     }

//     return(
//         <>
      
//         <div className='row'>
//             <h2> {title} </h2>
//             <div className='row_posters'>
//             {
//                 movies.map((item,fetchUrl)=>{
//                     const isFirstPoster = title === 'Netflix Originals';
//                     const cardHeight = isFirstPoster ? 'card-height-200' : 'card-height-100';
//                     return(
//                         <img 
//                         className={`row_poster ${cardHeight}`}
//                         src={`${base_url}${item.poster_path}`}
//                         onClick={()=> handleClick(item)}
//                         />)
//                     })}
//                         </div>
//                         <div>
//           {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
//         </div>
//                     </div>
//                     </>
//                     )
//                 }
    

// export default Row;
