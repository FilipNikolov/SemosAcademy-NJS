import React, { useEffect } from "react";
import { sayHello } from "../actions/SayHelloActions";
import { useDispatch, useSelector } from 'react-redux'

export const HelloFunc = () => {
    const dispatch = useDispatch();
    const greeting = useSelector(state => state.sayHelloReducer.greeting);

    useEffect(() => {
        dispatch(sayHello())
    }, [dispatch])

    return (
        <div id="app">
            <h2>{greeting}</h2>
        </div>
    )
}