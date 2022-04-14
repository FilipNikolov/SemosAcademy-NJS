import React from "react";

export default class ClassComponent extends React.Component{
    
    componentDidMount(){
        console.log("This is didMount!")
    }

    constructor(props){
        console.log("This is a constructor!")
        super(props);

        this.state={
            promenliva1: "vrednost 1 "
        }
    }

    smeniVrednost =()=>{
        this.setState({
            promenliva1:"vrednostneso"
        })
    }    

    render(){
        console.log("This is a render!")
        return(
            <div id="class-component">
                <h2>Class</h2>
                <p>{this.state.promenliva1}</p>
                <button onClick={this.smeniVrednost}>Smeni vrednost</button>
              </div>

        )
    }
}