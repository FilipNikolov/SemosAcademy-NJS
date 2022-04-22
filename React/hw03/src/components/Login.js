import React,{useState,useEffect} from "react";
import {Input} from "./Input";
import { Dropdown } from "./Dropdown";
import { func } from "prop-types";

export const Login =()=>{
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const[fieldType,setFieldType]=useState('password');
    const[comment,setComment]=useState('');
    const[longComment,setLongComment]=useState(false);
    const [selectedOption,setSelectedOption] = useState('Facebook');
    const elements=[
        {value:'Facebook',name:'Facebook'},
        {value:'Instagram',name:'Instagram'},
        {value:'Snapchat',name:'Snapchat'},
    ];

    useEffect(()=>{
        console.log('Username:', username);
        console.log('Password:',password);
        console.log('Comment:', comment);
        console.log('App', selectedOption);
    },[username,password,comment,selectedOption]);

    function setToggle(){
        setFieldType(
            fieldType ==="password" ? "text" : "password"
        )
    };

    function handleSubmit(event){
        event.preventDefault();
        alert(`Username: ${username}\nPassword: ${password}\nComment: ${comment}\nSelectedApp: ${selectedOption}`)
    };

    return(
        <div id='login'>
            <form onSubmit={handleSubmit}>
            <Input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}
            />
            <Input
            type={fieldType}
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            setToggle={setToggle}
            mouseDown={()=>{setFieldType("text")}}
            mouseUp={()=>{setFieldType("password")}}
            />
            <Input
            type="text"
            name="comment"
            placeholder="Insert a comment"
            value={comment}
            onChange={(e)=>{setComment(e.target.value)}}
            renderTextArea={longComment}
            changeInput={()=>{setLongComment(!longComment)}}
            />
            <Dropdown elements={elements} onChange={(e)=>{setSelectedOption(e.target.value)}}/>
            <button className="action-button">Sign in</button>
            </form>
        </div>
    )
}