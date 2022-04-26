import React from "react";

export const Items =({listOfItems,markItemsAsDone})=>{
  
    return(
     <div id='items'>
   
     <table border='1'>
            <thead>
        <tr> 
             <th>ID</th>
             <th>Item</th>
             <th>Completed</th>
             <th>Actions</th>
        </tr>
            </thead>
        <tbody>
           {listOfItems.map(item=>{
                   return(
                      <tr className={item.done ? "marked-done" : ""} key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.item}</td>
                          <td><input type={"checkbox"} value={item.done} checked={item.done} onChange={()=>{markItemsAsDone(item)}}></input></td>
                        <td><button>Edit</button><button onClick={()=>{deleteItem(item.id)}}>Delete</button></td>
                      </tr>
                      )
               })}
         
        </tbody>
     </table>
    </div>)
};