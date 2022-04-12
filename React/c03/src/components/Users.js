import React from "react";
import PropTypes from "prop-types";

export const Users =(props)=>{

    return(
        <div id="users">
            <p>Ime:{props.korisnik1.ime}</p>    
            <p>Username:{props.korisnik1.username}</p>    
            <p>Mail:{props.korisnik1.mail}</p>    
            <h4>{props.korisnik2}</h4>
        </div>
    )
}

Users.propTypes={
    korisnik1:PropTypes.object,
    korisnik2:PropTypes.number
}