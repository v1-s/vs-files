import React from "react";
const API_KEY ='be9b148b5e71f06d7755a4b3e8f99846'

const requests={
        fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
        fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_network=123`,
        fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
        fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
        fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
        fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
        fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
        fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
        search:`/search/movie?api_key=${API_KEY}`
}
export default requests;