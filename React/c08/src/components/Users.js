import React from "react";

export const Users = ({ usersList }) => {
    console.log(usersList)
    return (
        <div>
            {usersList.length > 0 ? <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {usersList.map(user => {
                        return (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                {/* <td>{user.address}</td> */}
                            </tr>
                        )
                    })}
                </tbody>
            </table> : <p>Loading ...</p>}
        </div>
    )
};