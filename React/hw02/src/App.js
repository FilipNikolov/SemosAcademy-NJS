import React,{ useState } from 'react';
import './App.css'

export function App() {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [show, setShow]= useState(true);
    
    function AdjustedName(event) {
        setName(event.target.value)
    }

    function AdjustedLastname(event) {
        setLastname(event.target.value)
    }

    function AdjustedEmail(event) {
        setEmail(event.target.value)
    }

    function AdjustedPassword(event) {
        setPassword(event.target.value)
    }

    function AdjustedAge(event) {
        setAge(event.target.value)
    }
    
    return( 
    <div id="app">
         <h2>Informations</h2> 
    { show?<table id="table">
            <tr>
                <td><input type="text" placeholder='EnterName' onChange={AdjustedName} value={name}></input></td>
                <td><input type="text" placeholder='EnterLastName' onChange={AdjustedLastname} value={lastname}></input></td>
                <td><input type="text" placeholder='EnterEmail' onChange={AdjustedEmail} value={email}></input></td>
                <td><input type="password" placeholder='EnterPassword' onChange={AdjustedPassword} value={password}></input></td>
                <td><input type="text" placeholder='EnterAge' onChange={AdjustedAge} value={age}></input></td>
            </tr>
            <tr>
                <td><p>{name}</p></td>
                <td><p>{lastname}</p></td>
                <td><p>{email}</p></td>
                <td><p>{password}</p></td>
                <td><p>{age}</p></td>
            </tr>
        </table>:null
}
        <hr></hr>
        <button onClick={()=>setShow(true)}>Show</button>
        <button onClick={()=>setShow(false)}>Hide</button>
     </div>
    )
}   