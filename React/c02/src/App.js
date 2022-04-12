import React from "react";
import { Welcome } from "./components/Welcome";
import { Comments } from "./components/Comments";
import { Student } from "./components/Student";
import { StudentClass } from "./components/StudentClass";
import { FruitList } from "./components/FruitList";

var name = 'Filip';
var lastname = 'Nikolov';
var age = 19;
var has_comments = true;
var student= {
  name:"Filip",
  lastname:"Nikolov",
  college: "Semos"
};
let listaNaOvosje =[
  "apple","orange","banana"
]

export function App(){
  return(
   <div id="app">
      <Welcome ime={'petar'} prezime={'tralevski'}/>
      <hr/>
      <p>Traleeeeee</p>
      <hr/>
      <Welcome ime={name} prezime={lastname} godini={age}/>
      <hr/>
      <Comments has_comments={has_comments} mutiple_comments={false}/>
      <hr/>
      <Student student={student}/>
      <hr/>
      <StudentClass student={student}/>
      <hr/>
      <FruitList listOfFruits={listaNaOvosje}/>
    </div>
  )
};
