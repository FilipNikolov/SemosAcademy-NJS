import { func } from "prop-types";
import React,{useState,useEffect} from "react";
import { Todos } from "./components/Todos";

export function App() {
  const[car,setCar]=useState({model:"Bmw",year:2004});  
  const[days,setDays]=useState([
    "Monday","Tuesday","Wendsday"
  ]);
  const[person,setPerson]=useState({
    firstName:"1",
    lastName:"2"
  });

  const[todos,setTodos]=useState([
    {
      id:0,
      text:"Learn React",
      done:false,
    },
    {
      id:1,
      text:"Learn Programming",
      done:false,
    },
    {
      id:2,
      text:"Go to Sleep",
      done:false,
    },
  ])

  const [newTodo,setNewTodo]=useState();

  function addNewTodo(){
   if(newTodo.trim() !== ""){ 
     let newObject ={
      id:todos.lenght+1,
      text: newTodo,
      
    }
    setTodos([...todos,newObject]);
    setNewTodo('');
   }
   else{
     alert("Nema niso batee")
   }
  }

useEffect(()=>{
  console.log(car);
},[car])

useEffect(()=>{
  console.log(person);
},[person])


  function newCar(){
    setCar({
      ...car,
      year:2020
    })
  };

  function addDays(){
     setDays(["Sunday", ...days,"Thursday"])
  }

  return(
      <div id="app">
      
      <input
      type="text"
      placeholder="Enter FirstName"
      value={person.firstName}
      onChange={(e)=>{setPerson({...person,firstName:e.target.value})}}
      >
      </input>
      <input
      type="text"
      placeholder="Enter LastName"
      value={person.lastName}
      onChange={(e)=>{setPerson({...person,lastName:e.target.value})}}
      >
      </input>
      <h2>Car</h2>
        <p>Model:{car.model}</p>
        <p>Year:{car.year}</p>
        <button onClick={newCar}>Buy New Car</button>
        <ul>
          {days.map((day,i)=>{
            return(
            <li key={i}>{day}</li>
            )
          })}
        </ul>
      <button onClick={addDays}>Add Days</button>
      <br/>
      <input
      text="text"
      placeholder="Enter New Todo"
      value={newTodo}
      onChange={(e)=>{setNewTodo(e.target.value)}}
      /><button onClick={addNewTodo}>Add New Todo</button>
      <Todos listOfTodos={todos}/>
      </div>
    )
};