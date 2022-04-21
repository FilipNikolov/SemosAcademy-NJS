import React from 'react';

export class DomasnoClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            age: "",
            showTableData: false
        }
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div id="domasno-class">
                <h2>Domasno Class</h2>
                <input
                    type="text"
                    placeholder='Enter First Name'
                    value={this.state.firstName}
                    name="firstName"
                    onChange={this.handleInput}
                />
                <br />
                <br />
                <input
                    type="text"
                    placeholder='Enter Last Name'
                    value={this.state.lastName}
                    name="lastName"
                    onChange={this.handleInput}
                />
                <br />
                <br />
                <input
                    type="email"
                    placeholder='Enter E-mail'
                    value={this.state.email}
                    name="email"
                    onChange={this.handleInput}
                />
                <br />
                <br />
                <input
                    type="password"
                    placeholder='Enter Password'
                    value={this.state.password}
                    name="password"
                    onChange={this.handleInput}
                />
                <br />
                <br />
                <input
                    type="text"
                    placeholder='Enter Age'
                    value={this.state.age}
                    name="age"
                    onChange={this.handleInput}
                />
                <br />
                <br />
                <button onClick={() => { this.setState({showTableData: !this.state.showTableData}) }}>
                    {this.state.showTableData === true ? "Hide Table" : "Show Table"}
                </button>
                <br />
                <br />
                {this.state.showTableData && <table border='1'>
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
                            <td>{this.state.firstName}</td>
                            <td>{this.state.lastName}</td>
                            <td>{this.state.email}</td>
                            <td>{this.state.password}</td>
                            <td>{this.state.age}</td>
                        </tr>
                    </tbody>
                </table>}
            </div>
        )
    }
}