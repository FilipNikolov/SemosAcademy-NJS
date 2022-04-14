import React from "react";
import PropTypes from "prop-types";

export const MovieList = (props) => {
    return(
        <div id="movie-list">
            <h2>Movie List</h2>

                {props.data.map((movie, i)=>{
                    return(
                        <ul key={i}  type="none">

                            <li><span>Title:</span> {movie.name}</li>
                            <li><span>Date:</span> {movie.date}</li>
                            <li><span>Genre:</span> {movie.genre}</li>
                            <li><span>imdbUrl:</span>
                               
                                <a href={movie.imdbUrl} target="_blank">
                                IMDB Link
                                </a>
                            </li>
                            <li>
                                <span>ImgUrl:</span>
                                <img src={movie.imgUrl} width="50px"/>
                            </li>
                            
                        </ul>
                    )
                })}
        </div>
    )
}

MovieList.propTypes={
    data:PropTypes.arrayOf(PropTypes.object).isRequired
};