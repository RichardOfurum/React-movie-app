export const FEATURED= "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
export const IMAGE_API = "https://image.tmdb.org/t/p/w1280";
export const SEARCH = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

export const MOVIE_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1";

// async function getPageNumber() {
//     try{
//         const number = await fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1");

//         const numberJson = await number.json();
//         return numberJson.results.length; 
//         // setPages(numberJson.results.length);
//         // console.log(numberJson.results);
//     }catch(e){
//         console.log(e);
//     }
//   }

// export const pageNum = getPageNumber();