// import React from "react";

// export class DomasnoClass extends React.Component{
//     constructor(props){
//         super(props)
        
//         this.state={
//             firstName:"", 
//             lastName:"",
//             email:"",
//             password:"",
//             age:"",
//             showTableData:false,
//         }
//     };
   
//    handleInput =(event)=>{

//     this.setState({
//            [event.target.name]:event.target.value
//        })
//    }
   
//     render(){
//         return(
//             <div id="domasno-class">
//                 <h2>DomasnoClass</h2>
//             <input type="text" placeholder="Enter FirstName" value={this.state.firstName} name="firstName" onChange={this.handleInput}/>
//             <input type="text" placeholder="Enter LastName" value={this.state.lastName} name="lastName" onChange={this.handleInput}/>
//             <input type="email" placeholder="Enter Email" value={this.state.email} name="email" onChange={this.handleInput}/>
//             <input type="password" placeholder="Enter Password" value={this.state.password} name="password" onChange={this.handleInput}/>
//             <input type="text" placeholder="Enter Age" value={this.state.age} name="age" onChange={this.handleInput}/>
//             <br/>
//          {this.state.showTableData && <table border= '1'>
//             <thead>
//                 <tr>
//                     <th>FirstName</th>
//                     <th>LastName</th>
//                     <th>Email</th>
//                     <th>Password</th>
//                     <th>Age</th>
//                   </tr>
//                 <tr>
//                     <th>{firstName}</th>
//                     <th>{lastName}</th>
//                     <th>{email}</th>
//                     <th>{password}</th>
//                     <th>{age}</th>
//                 </tr>
//             </thead>
//         </table>}
//             </div>
//         )
//     }
// }