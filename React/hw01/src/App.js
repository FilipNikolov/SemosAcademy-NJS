import React from 'react';
import {MovieList} from './components/Movie';



export function App(){ 
  let listOfMovies = [
    {
      name: "The Batman",
      date: "2021",
      genre : "Action",
      imdbUrl: "https://www.imdb.com/title/tt1877830/?ref_=tt_mv_close",
      imgUrl:"https://www.imdb.com/title/tt1877830/mediaviewer/rm2474894849/"
    },
  
    {
      name: "The Shawshank Redemption",
      date: "1994",
      genre: "Drama",
      imdbUrl: "https://www.imdb.com/title/tt0111161/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=E16Z1WTA3N8D96AZGXS5&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_1",
      imgUrl:"https://www.imdb.com/title/tt0111161/mediaviewer/rm10105600/"
    },
  
    {
      name: "The godfather",
      date: "1971",
      genre: "Crime",
      imdbUrl: "https://www.imdb.com/title/tt0068646/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=E16Z1WTA3N8D96AZGXS5&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_2",
      imgUrl:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    },
  
    {
      name: "Inception",
      date: "2010",
      genre: "Adventure",
      imdbUrl: "https://www.imdb.com/title/tt1375666/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=E16Z1WTA3N8D96AZGXS5&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_13",
      imgUrl:"https://www.imdb.com/title/tt1375666/mediaviewer/rm3426651392/"
    },
  
    {
      name: "City Of God",
      date: "2002",
      genre: "Crime",
      imdbUrl: "https://www.imdb.com/title/tt0317248/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=E16Z1WTA3N8D96AZGXS5&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_24",
      imgUrl:"https://www.imdb.com/title/tt0317248/mediaviewer/rm1021136128/"
    },
  
  ]
  
  return(
    <div id="app">
      <MovieList data={listOfMovies}/>
  
    </div>
  )
};