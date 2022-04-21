import React from "react";
import PropTypes from "prop-types";

export const Todos=(listOfTodos)=>{
    return(
       <or>
           {listOfTodos.map(todo=>{
                return(
                    <li key={todo.id}>
                        <span>{todo.text}</span>
                        <input 
                        type="checkbox"
                        value={todo.done}
                        checked={todo.done}
                        />
                    </li>
                )
               })
           }
       </or>
    )
};

Todos.propTypes ={
    listOfTodos:PropTypes.arrayOf(PropTypes.object),
}