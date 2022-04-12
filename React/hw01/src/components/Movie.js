import React from "react";

export const MovieList = (props) => {
    return(
        <div id="movie-list">
            <h2>Movie List</h2>

                {props.data.map((movie)=>{
                    return(
                        <ul>

                            <li>{movie.name}</li>
                            <li>{movie.date}</li>
                            <li>{movie.genre}</li>
                            <li>{movie.imdbUrl}</li>
                            <li>{movie.imgUrl}</li>
                            

                        </ul>
                    )
                })}
            
        </div>
    )
}

