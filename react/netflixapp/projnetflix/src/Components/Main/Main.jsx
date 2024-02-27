import React from "react";
import Row from "../Row/Row";
import Banner from "../Banner/Banner";

import requests from "../API/request";
import { useSearch } from '../../Context/SearchContext';

function Main() {
    const { flag } = useSearch();

    return(
        flag ? (<div></div>) :(
        <div>
            <Banner />
            <Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
            <Row title="Trending" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />    
        </div>)
    )
}
export default Main;