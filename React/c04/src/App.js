import React,{useState} from "react";
import ClassComponent from "./components/ClassComponent";
// import { Homework } from "./components/Homework";
// import { HomeworkClass } from "./components/HomeworkClass";

// const movies =[
//   {
//     name:"Back to the future",
//     date:"1985",
//     genre:"scifi",
//     imdbLink:"https://www.imdb.com/?ref_=tt_mv_close",
//     imgUrl:"https://i.ytimg.com/vi/pA1s3XJ5d80/hqdefault.jpg",
//   },
//   {
//     name:"The Batman",
//     date:"2021",
//     genre:"Action",
//     imdbLink:"https://www.imdb.com/?ref_=tt_mv_close",
//     imgUrl:"https://i.ytimg.com/vi/pA1s3XJ5d80/hqdefault.jpg",
//   },
//   {
//     name:"Titanic",
//     date:"1999",
//     genre:"Drama",
//     imdbLink:"https://www.imdb.com/?ref_=tt_mv_close",
//     imgUrl:"https://i.ytimg.com/vi/pA1s3XJ5d80/hqdefault.jpg",
//   },
//   {
//     name:"Dumb and dumber",
//     date:"1994",
//     genre:"comedy",
//     imdbLink:"https://www.imdb.com/?ref_=tt_mv_close",
//     imgUrl:"https://i.ytimg.com/vi/pA1s3XJ5d80/hqdefault.jpg",
//   },
//   {
//     name:"Star Wars",
//     date:"2134",
//     genre:"Action",
//     imdbLink:"https://www.imdb.com/?ref_=tt_mv_close",
//     imgUrl:"https://i.ytimg.com/vi/pA1s3XJ5d80/hqdefault.jpg",
//   }
// ];


export function App(){
  const [username,setUsername]= useState('');
  const [password,setPassword]= useState('');
  
  const [promenliva1,setPromenliva1]= useState("Vrednost 1");
  
  function smeniVrednost(){
    setPromenliva1("Vrednost 2")
  }
  
  function vnesenInput(event){
    setUsername(event.target.value)
  }
  function vnesenPassword(event){
    setPassword(event.target.value)
  }
  return(
    <div id="app">
     <p>{promenliva1}</p>
      <button onClick={()=>{setPromenliva1("vrednostneso")}}>Smeni Vrednost</button>
      <h2>App</h2>
      <ClassComponent/>
      <input  type="text" placeholder="Enter Username" onChange={vnesenInput} value={username}></input>
      <p>{username}</p>
      <input type="password" placeholder="Enter Password" onChange={vnesenPassword} value={password}></input>
      <p>{password}</p>
    </div>
  )
  
}