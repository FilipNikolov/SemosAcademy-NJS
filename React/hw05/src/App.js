import React,{useState,useEffect} from "react";
import ReactDOM from "react";
import { Item } from "./components/Item";

export function App(){
  const[newItem,setNewItem]=useState("");
  const[items,setItems]=useState([]);
  const[count,setCount]=useState(0);
  const[editing,setEditing]=useState(false);
  const[editingItem,setEditingItem]=useState({});

  useEffect(()=>{
    setCount([...items.filter(item=> item.done)].length);
  },[items]);

  function addItem(){
    let itemObject={
      id:Math.floor(Math.random()*100),
      text:newItem,
      done:false
    }
    setItems([...items,itemObject]);
    setNewItem("");
  }

  function markDone(item){
    setItems([...items.map(elem=>elem.id === item.id ? 
      {
        id:elem.id,
        text:elem.text,
        done:!elem.done
      } :
      elem
      )])
  }

  function deleteItem(id){
    setItems([...items.filter(item=> item.id !== id)])
  }

  function editItem(item){
    setEditingItem(item);
    setEditing(!editing);
  }

  function updateItem(){
    setItems([...items.map(item=> item.id === editingItem.id
      ?
      {
        id:item.id,
        text:editItem.text,
        done:item.done
      }
      :
      item
      )])
      setEditing(false);
    }

  return(
    <div id="app">
      <input 
      type="text"
      placeholder="Enter new Item"
      value={newItem}
      onChange={(e)=>{setNewItem(e.target.value)}}/>
      <button onClick={addItem}>Add Item</button>
      <br/>
      <br/>
      {items.length > 0 && <p>Number of completed Items: {count}</p>}
      <Item
        listOfItems={items}
        markDone={markDone}
        deleteItem={deleteItem}
        editing={editing}
        setEditing={editItem}
        editingItem={editingItem}
        setEditingItem={(e)=>{setEditingItem({...editItem, text:e.target})}}
      />
    </div>
  )
}