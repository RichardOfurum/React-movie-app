import React, {useState, useContext} from 'react'
import "../styles/Header.css";
import {SEARCH} from "../api";
import { MovieContext } from '../context/MovieContext';
import { useHistory, Link } from "react-router-dom";

const Header = () => {
    const {movies, getMovies, searchCat} = useContext(MovieContext);
    const [searchTerm, setSearchTerm] = useState();
    const [activeSearch, setActiveSearch] = useState(false);
    const history = useHistory();

    const searchMovie = async (value) =>{
        try{
            console.log(SEARCH+value)
            const result = await fetch(SEARCH + value);
            const movie = await result.json();
            // setSearchTerm(movie.results);
            getMovies(movie.results);
            console.log([movies]);
        }catch{

        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        searchMovie(searchTerm);
        setActiveSearch(true);
        searchCat(searchTerm);
        history.push("/search");
        // getMovies(searchTerm);
    }


    return  (
        <header className="header">
            <Link to="/"> 
                <h4>MoviesList.com</h4>
            </Link>
            

            <form onSubmit={handleSubmit}> 
                <input 
                    type="search" 
                    placeholder="search" 
                    className="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </form>

        
         
        </header>
    )
}

export default Header
