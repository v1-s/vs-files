import React from 'react';
import logo from './logo.svg';

import './App.css';
import Row from './Components/Row/Row';
import requests from './Components/API/request';
import Navbar from './Components/Navbar/Navbar';
// let movies=[
// {title:"x",name:"y"},{title:"x",name:"y"},
// {title:"x",name:"y"}
  
// ]








function App() {
  return (<>
<Navbar/>
    <div className="App">
     <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title="Trending" fetchUrl={requests.fetchTrending}/>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  
    </>
  );
}

export default App;
