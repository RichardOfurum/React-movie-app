import './App.css';
import React, {useEffect, useState, useContext} from 'react';
import Movies from './components/Movies';
import axios from 'axios';
import Header from './components/Header';
import { MovieContext } from './context/MovieContext';
import MovieContextProvider from './context/MovieContext';
import SearchMovies from './components/SearchMovies';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



const App = () => {

  
  // const {movies} = useContext(MovieContext());
  
  // const [movies, setMovies] = useState([]);

  // async function getMovies(){
  //     try{
  //       const moviesResp = await fetch(FEATURED_API);
  //       const moviesJson = await moviesResp.json();
  //       setMovies(moviesJson.results);
  //       console.log(movies);
  //     }catch(e){
  //       console.log("error: ", e);
  //     }
  // }

  // const getMovies = () => {
  //     fetch(FEATURED_API)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setMovies(data.results);
  //     });
  //     console.log(movies);
  // }
  
  // const getMovies = () => {

  //   axios.get(FEATURED_API)
  //   .then(res => {
  //     const movieR = res.data;
  //     // setMovies(Object.entries(movieR));
  //     setMovies(movieR.results);
  //     // console.log(movieR);
  //   });

  // }


  // useEffect(() => {
  //   getMovies();
    
  // },[movies])

  return (
    
            <div className="app">
              <MovieContextProvider>

              <Router>
              <Header/>
                <Switch>
                  <Route exact path="/">
                      <Movies/>
                  </Route>
                  <Route path="/search">
                      <SearchMovies/>
                  </Route>
                  
                </Switch>
              
            </Router>

                
                
              </MovieContextProvider>

              
          </div>
    
       
    
  );
}

export default App;
