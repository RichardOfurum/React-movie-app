import React, {useContext, useState, useEffect} from 'react';
import "../styles/SearchMovies.css";

import { MovieContext } from '../context/MovieContext';
import {SEARCH} from '../api';
import Movie from "./Movie";
import {useHistory} from "react-router-dom";

const SearchMovies = () => {
    const {search} = useContext(MovieContext);
    const [movies, setMovies] = useState([]);
    const history = useHistory();

    const getSearchedMovies = async () => {
        try{
            const getSMovies = await fetch(SEARCH + search );
            const getSMoviesJson = await getSMovies.json();
            setMovies(getSMoviesJson.results);
            console.log(getSMoviesJson);
        }catch(e){
            console.log("error " + e);
        }
    }

    useEffect(() =>{
        getSearchedMovies();
        if(!search){
            history.goBack();
        }
        console.log(movies);
    }, [movies])

    
    return (
        <div className="search_movies">
            <h1> Result: <span> {search} </span> </h1>
            <div className="movies_container">
                  {
                      movies.map((movie) => (
                          <Movie
                              key={movie.id}
                              title={movie.title}
                              poster_path={movie.poster_path}
                              overview={movie.overview}
                              vote_average={movie.vote_average}
                          />
                      ))
                  }
              </div>
        </div>
    )
}

export default SearchMovies
