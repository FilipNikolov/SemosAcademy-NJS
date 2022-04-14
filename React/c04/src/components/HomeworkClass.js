// import React from "react";
// import PropTypes from "prop-types";
// export class HomeworkClass extends React.Component{

//     render(){
//         return(
//             <div id="homework">
//                 <h2>Domasna klasna </h2>
//                 {this.props.listanafilmovi.map((film,i)=>{
//                     return(
//                         <div key={i}>
//                             <h2>{film.name}</h2>
//                             <h2>{film.genre}</h2>
//                             <h2>{film.date}</h2>
//                             <h2><a href={film.imdbLink}>ImdbLiNK</a>/</h2>
//                             <h2></h2>
//                         </div>
//                     )
//                 })}
//             </div>
//         )
//     }
// };

// HomeworkClass.propTypes={
//     listanafilmovi:PropTypes.arrayOf(PropTypes.object).isRequired
// }