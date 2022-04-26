import { func } from "prop-types";
import React,{useState} from "react";
import { Items } from "./components/Items";
// import PropTypes from "prop-types";

export function App(){
 const[items,setItems]=useState([
   {id:0, item:'one', done:false},
   {id:1, item:'two', done:true},
   {id:2, item:'three', done:false},
 ]);
  const[newItem,setItem]=useState('');
 
 
  function markItemsAsDone(item){
    console.log(item)
    setItems([
      ...items.map(nesto=> (nesto.id === item.id) ? 
        {id:nesto.id,item:nesto.item, done: !nesto.done} 
        :
        nesto 
      )
    ])
  }
  function addNewItem(){
    if(newItem.trim() !== ""){
    let newObject = {
      id: items.length,
      item: newItem,
      done: false
    }
    setItems([...items,newObject]);
    setItem("");
  }
  else{
    alert("No Value has been entered\nPlease enter a value then submit the new Item")
  }
  }
 
 return(
    <div id='app'>
      <input type="text" placeholder="Enter Item"  value={newItem} onChange={(e)=>{setItem(e.target.value)}}/>
      <button onClick={addNewItem}>Add Item</button>
   <br/>
   <br/>
   <br/>
   <Items listOfItems={items} markItemsAsDone={markItemsAsDone}/>
    </div>
  )
}