import React, {useEffect} from 'react';
import "../styles/Movie.css";
import {IMAGE_API} from '../api';

const defaultImage = "https://images.unsplash.com/photo-1560109947-543149eceb16?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fG1vdmllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

const Movie = ({title, poster_path, vote_average, overview}) => {


    const setVoteClass = (vote) => {
        if(vote >= 8){
            return 'awesome';
        }else if(vote >= 6){
            return 'good';
        }else{
            return 'low';
        }
    }

    useEffect(() => {
        // alert("yes"); 
    }, [title]);

    function truncateString(string, limit) {
        if (string.length > limit) {
          return string.substring(0, limit) + "..."
        } else {
          return string
        }
      }

    // const overviewTruncate = truncateString(movies.overview , 150);
    return (
        <div className="movie">
            
            <img src={ ( poster_path ? IMAGE_API + poster_path : defaultImage)} alt="" />

            <div className="movie_info">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>
            <div className="movie_overview">
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>     
        </div>
    )
}

export default Movie
