import React from "react";
import {Hello} from "./components/Hello";
import {World} from "./components/World"
import "./css/AppFunc.css";

function AppFunc(){
    return (
        <div id="app-func">
            <h2>Functional Component Text</h2>
        <Hello/>
        <World/>
        </div>

    )
};



export default AppFunc
