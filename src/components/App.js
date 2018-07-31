import React from 'react';
import axios from "axios";
import "../styles/style.less";


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: [],
        };

        this.state.contacts
    }
    
    componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/users";
        axios
            .get(url)
            .then(response => {

                // create an array of contacts only with relevant data
                const newContacts = response.data.map(c => {
                  return {
                    id: c.id,
                    name: c.name
                  };
                });
        
                // create a new "State" object without mutating 
                // the original State object. 
                const newState = Object.assign({}, this.state, {
                  contacts: newContacts
                });
        
                // store the new state object in the component's state
                this.setState(newState);

                console.log(this);
                console.log(this.state.contacts);

                const name = this.state.contacts.name
              })
              .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <div className="img"><br /></div>
                <p className="title">Hello and Welcome!</p>
                <ul>
                  
                </ul>
            </div>
        );
    }
}

export default App;