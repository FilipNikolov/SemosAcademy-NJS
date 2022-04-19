import React,{useState,useEffect} from "react";
import { Input } from "./Input";


export const Login =()=>{
  const[username,setUsername] = useState('');
  const[password,setPassword]=useState('');

useEffect(()=>{
    console.log(username);
    console.log(password)
});


    return(
  <div id="login">
     <form>
        <Input type='username' placeholder="Enter Username" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
        <Input type='password' name="password" placeholder="Enter Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
     </form>
    </div>

  )
};
