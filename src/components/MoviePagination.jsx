import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import  { MOVIE_API} from '../api';
import "../styles/Pagination.css";
import { MovieContext } from '../context/MovieContext';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
      // backgroundColor: "white"
      
    },
    
  }
  
}));



export default function MoviePagination  ()  {

  const {changePage} = useContext(MovieContext);

  const [numberOfPages, setNumberOfPages] = useState();
    
  async function getPageNumber() {
    try{
        const number = await fetch(MOVIE_API);

        const numberJson = await number.json(); 
        setNumberOfPages(numberJson.results.length);
        // console.log(numberJson.results);
    }catch(e){
        console.log(e);
    }
  }

  const handleChange = (text) =>{
    // window.scroll(0,0);
    console.log(text);
    changePage(text);
  }

  getPageNumber();


    const classes = useStyles();

    return (
      <div className={classes.root} id="pages">
        <Pagination count={numberOfPages} shape="rounded" 
            onChange={(e) => handleChange(e.target.textContent)}
        />
      </div>
    )
}


