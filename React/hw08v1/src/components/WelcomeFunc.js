import React, { useEffect } from "react";
import { Welcome } from "../actions/WelcomeAction";
import { useDispatch, useSelector } from "react-redux";

export const WelcomeFunc = () => {
    const dispatch = useDispatch();
    const welcomen = useSelector(state => state.WelcomeReducer.welcomen);


    useEffect(() => {

    }, [dispatch]);

    return (
        <div id="welocme-func">
            <h2>{welcomen}</h2>
            <button onClick={() => { dispatch(Welcome()) }}>ClickHere!</button>

        </div >
    )
}