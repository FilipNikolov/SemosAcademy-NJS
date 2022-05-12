import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersOperations } from "./duck";
import { UsersComponent } from "./UsersComponent";

export default function UsersContainer() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.usersReducer.users)
    const message = useSelector(state => state.usersReducer.message)

    useEffect(() => {
        dispatch(usersOperations.fetchUsers())
    }, [dispatch])

    return (
        <div>
            <UsersComponent listofUsers={users} message={message} />
        </div>
    )
}