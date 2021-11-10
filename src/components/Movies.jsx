import React, { useContext, useEffect } from 'react';
import "../styles/Movies.css";
import { MovieContext } from '../context/MovieContext';
import axios from 'axios';
import Movie from './Movie';
import  { MOVIE_API} from '../api';
import MoviePagination from './MoviePagination';
import Pagination from './Pagination';
import CircularProgress from '@material-ui/core/CircularProgress';





const Movies = () => {

    

    const {movies, getMovies, page} = useContext(MovieContext);
    

    
  
    useEffect(() => {


      axios.get(MOVIE_API + "&page=" + page)
      .then(res => {
        const movieR = res.data;
        // setMovies(Object.entries(movieR));
        getMovies(movieR.results);
        // console.log(movieR);
      });
        

    }, [movies]);
    

    
    return !movies ?(<CircularProgress disableShrink />) : (

      
        <div className="movies">
              
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

              {/* <MoviePagination/> */}
              <Pagination/>
             
        </div>
    )
}

export default Movies


