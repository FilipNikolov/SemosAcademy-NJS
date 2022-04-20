import React,{useState,useEffect} from "react";
import {Input} from "./Input";

export const Login =()=>{
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');

    return(
        <div id="login">
            <form onSubmit={handleSumbit}>
                <Input/>
                <Input/>
                <button className="ActionButtton">Sign In</button>
            </form>
        </div>
    )
};