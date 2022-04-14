// import React from "react";
// import PropTypes from "prop-types";


// export const Homework=({listanafilmovi})=>{
//     return(
//         <div id="Homework">
//             {listanafilmovi.map((film,i)=>{
//                 return(
//                     <div key={i}>
//                         <h2>{film.name}</h2>
//                         <h3>{film.genre}</h3>
//                         <h3>{film.date}</h3>
//                         <h3><a href={film.imdbLink} target="_blank">imdbLink</a></h3>
//                         <h3><img src={film.imgUrl} alt={film.name}/></h3>
//                     </div>
//                 )
//             })}
//         </div>
//     )

// };  

// Homework.propTypes={
//     listanafilmovi:PropTypes.arrayOf(PropTypes.object).isRequired
// }