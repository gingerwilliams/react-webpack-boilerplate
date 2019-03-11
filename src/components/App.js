import React from "react";
import axios from "axios";
import imgCode from "../assets/code.png";
import "../styles/style.less";

import Manager from "./Manager";
import ManagerList from "./ManagerList";
import EmployeeList from "./EmployeeList";

// const employees = [
//     { id: 1, name: "Leanne Graham" },
//     { id: 2, name: "Ervin Howell" },
//     { id: 3, name: "Clementine Bauch" },
//     { id: 4, name: "Patricia Lebsack" }
// ];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        };
    }

    componentDidMount() {
        console.log("render mount");
        const url = "https://jsonplaceholder.typicode.com/users";
        axios
            .get(url)
            .then(response => {
                // create an array of employees only with relevant data
                const emps = response.data.map(emp => {
                    return {
                        id: emp.id,
                        name: emp.name,
                        email: emp.email
                    };
                });

                //create a new "State" object without mutating
                //the original State object.
                const newState = Object.assign({}, this.state, {
                    employees: emps
                });

                // store the new state object in the component's state
                this.setState(newState);
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <h1 className="title">
                    Welcome: <Manager name="Ginger Williams" />
                </h1>
                <div>
                    <h2>Other Managment</h2>
                    <ul>
                        <ManagerList employees={this.state.employees} />
                    </ul>
                </div>
                <img src={imgCode} className="img-sample" alt="img-alt" />
                <div className="img">
                    <span>
                        <br />
                    </span>
                </div>
                <ul>
                    <EmployeeList employees={this.state.employees} />
                </ul>
            </div>
        );
    }
}

export default App;
