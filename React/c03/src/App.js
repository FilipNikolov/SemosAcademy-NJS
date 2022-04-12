import React from "react";
import { Users } from "./components/Users";
import { Comments } from "./components/Comments";
import { Car } from "./components/Car";

const user1={
  ime:"Filip",
  username:"filip_filip",
  mail:"filip_32@gmail.com"
};

const numId= 123;

let comments =[
  {
    author:"Filip",
    content:"This is my first comment"
  },
  {
    author:"Pero",
    content:"Second Comment"
  },
  {
    author:"Simon",
    content:"Nemoj Simo ne gi seci!"
  },
];

// var cifra = 5;
let registracija=[
  {grad:{naselba:"Chento",ulica:"Anton Popov"},oznaka:"SK4545AG"},
  {grad:{naselba:"Aerodrom",ulica:"JaneSandanski"},oznaka:"SK285AI"},
  {grad:{naselba:"SutoOrizari",ulica:"Neznam"},oznaka:"TE000ET" },
];

let cars = [
  {brand:"Ford",model:"Fiesta",year:2003, plates: registracija[0]},
  {brand:"Opel", model:"Corsa",year:2011,plates: registracija[1] },
  {brand:"Zastava", model:"101",year:1991,plates: registracija[2]},
];

export function App(){
return(
  <div id="app">
    <h2>App</h2>  
    <Users korisnik1={user1} korisnik2={numId}/>
    <Comments listOfComments={comments}/>
    <Car vozila={cars}/>

  </div> 
)

};