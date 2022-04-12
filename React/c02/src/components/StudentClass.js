import React from "react";

export class StudentClass extends React.Component{

    render(){
        console.log(this.props)
        return(
            <div id="student-class">
                <h4>Student Class {this.props.student.lastname}{this.props.student.name}{this.props.student.college}</h4>
            </div>
        )
    }
};