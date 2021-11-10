import React, { useContext, useEffect, useState } from 'react';
import "../styles/Pagination.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { MovieContext } from '../context/MovieContext';
import  { MOVIE_API} from '../api';
import { IconButton } from '@material-ui/core';


const Pagination = (postsPerPage, totalPosts) => {


    const {changePage} = useContext(MovieContext);
    const [numberOfPages, setNumberOfPages] = useState();
    const [pageNumbers, setPageNumbers] = useState(1); 

    const [next, setNext] = useState(true);
    const [back, setBack] = useState(true);
   

    async function getPageNumber() {
        try{
            const number = await fetch(MOVIE_API);
    
            const numberJson = await number.json(); 
            setNumberOfPages(numberJson.results.length);
            // console.log(number.length);
            
        }catch(e){
            console.log(e);
        }
      }

    getPageNumber();

    const prevPage = (e) =>{
      
        switch(pageNumbers){
            case 1: setBack(false); 
            break;
        
            default:setPageNumbers(prev => prev - 1);
                changePage(pageNumbers);
                window.scroll(0,0);
        }
            
    }

    const nextPage = () =>{
        switch(pageNumbers){
            case 500 : setNext(false); 
            break;
        
            default:setPageNumbers(prev => prev + 1);
                changePage(pageNumbers);
                window.scroll(0,0);
        }
    }

  

    const handleSubmit = (e) => {
        alert("yes");
        if(pageNumbers > 20 || pageNumbers < 1){
            setPageNumbers(1);
        }
        e.preventDefault();
        changePage(pageNumbers);
    }

    

 
    return (
        <div className="pagination">
            <IconButton> 
                <ArrowBackIosIcon onClick={(e) => prevPage(e)} className="nav"/>
            </IconButton>
            <IconButton> 
                <ArrowForwardIosIcon onClick={nextPage} className="nav"/>
            </IconButton>   
        </div>
    )
}

export default Pagination
