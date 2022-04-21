import React,{useState,useEffect} from "react";
import {Input} from "./Input";
import { DropDownOption } from "./DropDownOption";
import { func } from "prop-types";

export const Login =()=>{
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const[comment,setComment]=useState('');
    const[fieldType,setFieldType]=useState('');
    const[app, setApp]=useState('');

    let socialLogins= [
        {
            name:"facebook",
            value:"facebook"
        },
        {
            name:"instagram",
            value:"instagram"
        },
        {
            name:"snapchat",
            value:"snapchat"
        }
    ];

    function setToggle(){
        setFieldType(
            fieldType === "password" ? "text" : "password"
        )
    };

    function handleChange(e){
        setApp(e.target.value)
    }

    function handleSubmit(event){
        event.preventDefault();
        alert(`Username: ${username}\nPassword: ${password}\nApp : ${app}`)
    };

    return(
        <div id="login">
            <form onSubmit={handleSubmit}>
                <Input
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e)=>{setUsername(e.target.value)}}
                name="username"
                />
                <Input
                type={fieldType}
                placeholder="Enter Password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                />
                <Input
                type="text"
                placeholder="Insert a comment"
                value={comment}
                onChange={(e)=>{setComment(e.target.value)}}
                />
                <select defaultValue={''} onChange={handleChange}>
                <option value="" disabled>Select your option</option>
                {socialLogins.map((network, i)=>{
                    return(
                        <DropDownOption
                        key={i}
                        name={network.name}
                        value={network.value}
                        />
                       )
                })}
                </select>
                <button className="action-button">Sign In</button>
           
            </form>
        </div>
    )
};