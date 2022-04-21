import React, { useState } from 'react';

export const Domasno = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [showTableData,setShowTableData] = useState(false);

    return (
        <div id="domasno">
            <h2>Domasno</h2>
            <input
                type="text"
                placeholder='Enter First Name'
                value={firstName}
                onChange={(e) => { setFirstName(e.target.value) }}
            />
            <br />
            <br />
            <input
                type="text"
                placeholder='Enter Last Name'
                value={lastName}
                onChange={(e) => { setLastName(e.target.value) }}
            />
            <br />
            <br />
            <input
                type="email"
                placeholder='Enter E-mail'
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
            />
            <br />
            <br />
            <input
                type="password"
                placeholder='Enter Password'
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
            />
            <br />
            <br />
            <input
                type="text"
                placeholder='Enter Age'
                value={age}
                onChange={(e) => { setAge(e.target.value) }}
            />
            <br/>
            <br/>
            <button onClick={()=>{setShowTableData(!showTableData)}}>
                {showTableData === true ? "Hide Table" : "Show Table"}
            </button>
            <br/>
            <br/>
            {showTableData && <table border = '1'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>{email}</td>
                        <td>{password}</td>
                        <td>{age}</td>
                    </tr>
                </tbody>
            </table>}
        </div>
    )
}