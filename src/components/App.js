import React from 'react';
import axios from "axios";
import imgCode from  "../assets/code.png";
import "../styles/style.less";

import Manager from "./Manager";
import Employee from "./Employee";


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: [],
        };

        this.state.employees
    }
    
    componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/users";
        axios
            .get(url)
            .then(response => {

                // create an array of employees only with relevant data
                const newEmp = response.data.map(c => {
                  return {
                    id: c.id,
                    name: c.name
                  };
                });
        
                // create a new "State" object without mutating 
                // the original State object. 
                const newState = Object.assign({}, this.state, {
                    employees: newEmp
                });
        
                // store the new state object in the component's state
                this.setState(newState);

                console.log(this);
                console.log(this.state.employees);

                const name = this.state.employees.name
              })
              .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                
                <h1 className="title">Hello <Manager name="Ginger Williams" />, and Welcome!</h1>
                <img src={imgCode} className="img-sample" alt="img-alt" />
                <div className="img">
                    <span><br/></span>
                </div>
                <ul>
                    <Employee name="Ginger Williams" />
                </ul>
            </div>
        );
    }
}

export default App;