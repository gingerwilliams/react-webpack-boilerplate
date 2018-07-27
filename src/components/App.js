import React from 'react';
import axios from "axios";
import "../styles/style.less";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };
    }
    
    componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/users";
        axios
            .get(url)
            .then(function(response) {
                console.log(response);
                console.log(response.data);
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    render() {
        
        return (
            <div>
                <div></div>
                <p className="title">Hello, React!</p>
            </div>
        );
    }
}

export default App;