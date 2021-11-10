import React, {createContext, useState} from 'react';

export const MovieContext = createContext();

const MovieContextProvider = (props) => {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState();
    const [page, setPage] = useState(1);

    const getMovies = (movieContents) =>{
        setMovies(movieContents);
    }


    const changePage = (page) => {
        setPage(page)
    }

    const searchCat = (src) => {
        setSearch(src)
    }

    const value = {movies, page, search, searchCat, getMovies, changePage}

    return(
        <MovieContext.Provider value={value}>
            {props.children}
        </MovieContext.Provider>
    );
    
}

export default MovieContextProvider;