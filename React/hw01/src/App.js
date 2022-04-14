import React from 'react';
import {MovieList} from './components/Movie';
import './App.css'


export function App(){ 
  let listOfMovies = [
    {
      name: "The Batman",
      date: "2021",
      genre : "Action",
      imdbUrl: "https://www.imdb.com/?ref_=tt_mv_close",
      imgUrl: "https://m.media-amazon.com/images/M/MV5BOGE2NWUwMDItMjA4Yi00N2Y3LWJjMzEtMDJjZTMzZTdlZGE5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg"
    },
  
    {
      name: "The Shawshank Redemption",
      date: "1994",
      genre: "Drama",
      imdbUrl: "https://www.imdb.com/title/tt0111161/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=E16Z1WTA3N8D96AZGXS5&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_1",
      imgUrl:"https://i.ytimg.com/vi/19THOH_dvxg/movieposter_en.jpg"
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
      imdbUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
      imgUrl:"https://i1.sndcdn.com/artworks-M8sixZ5Kw7M7Ev8k-LRujGw-t500x500.jpg"
    },
  
    {
      name: "City Of God",
      date: "2002",
      genre: "Crime",
      imdbUrl: "https://www.imdb.com/title/tt0317248/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=E16Z1WTA3N8D96AZGXS5&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_24",
      imgUrl:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7ac46233747000.56b87bc07c3bd.jpg"
    },
  
  ]
  
  return(
    <div id="app">
      <MovieList data={listOfMovies}/>
  
    </div>
  )
};