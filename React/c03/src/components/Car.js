import React from "react";
import PropTypes from "prop-types";

export const Car = ({vozila})=>{
   console.log(vozila)
    return(
        <div id="car">
           <table border="1px   ">
               <thead>
                   <tr>
                       <th>
                           Brand
                       </th>
                       <th>
                           Model
                       </th>
                        <th>
                             Year
                         </th>
              <th>
                Naselba
              </th>
              <th>
                Ulica
              </th>
              <th>
                Registracija
              </th>
               </tr>
                </thead>
            <tbody>
            {vozila.map((vozilo, i)=>{
                return(
                    <tr key={i}>
                        <td >{vozilo.brand}</td>
                        <td >{vozilo.model}</td>
                        <td >{vozilo.year}</td>
                        <td>{vozilo.plates.grad.naselba}</td>
                        <td>{vozilo.plates.grad.ulica}</td>
                        <td>{vozilo.plates.oznaka}</td>
                    </tr>
                )
            })}
            </tbody>
           </table>
        </div>
    )
}

Car.propTypes={
    vozila:PropTypes.arrayOf(PropTypes.Object).isRequired
}