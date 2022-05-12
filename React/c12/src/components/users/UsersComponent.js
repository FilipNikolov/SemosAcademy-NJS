import React from "react";
import PropTypes from "prop-types";

export const UsersComponent = ({ listofUsers, message }) => {
    return (
        <div>
            {/* Users:{listofUsers.length} */}

            {message === undefined ? <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {listofUsers.map(user => {
                        return (
                            <tr key="id">
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>

                            </tr>
                        )
                    })}
                </tbody>

            </table> : <p>Bate ne rabote!{message}</p>}
        </div>
    )
}

UsersComponent.propType = {
    listofUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
    message: PropTypes.string
}