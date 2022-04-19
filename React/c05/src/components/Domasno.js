import React,{useState} from "react";

export const Domasno = () => {
    const[firstname,setFirstname]=useState("");
    const[lastname,setLastname]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[age,setAge]=useState("");
    const[showTableData,setShowTableData]=useState(false);
    return(
        <div id="domasno">
            <h2>domasno</h2>
            c
      
        <br>
        </br>
        <button onClick={()=>{setShowTableData(!showTableData)}}>{showTableData === true ?"Hide Table":"Show Table"}</button>
      { showTableData && <table border= '1'>
            <thead>
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Age</th>
                  </tr>
                <tr>
                    <th>{firstname}</th>
                    <th>{lastname}</th>
                    <th>{email}</th>
                    <th>{password}</th>
                    <th>{age}</th>
                </tr>
            </thead>
        </table>}
        </div>
    )
};