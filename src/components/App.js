import React, { Component } from "react";  // Corrected import statement
import "./styles/App.css";
class Greetings extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };
    }

    onChangeText = (event) => {  // Modified method to accept event parameter
        const newValue = event.target.value;
        this.setState({ value: newValue });
    }

    render() {
        return (
            <div>
                <label htmlFor="input">Enter your name:</label>
                <input id="input" value={this.state.value} onChange={this.onChangeText} />
                {this.state.value ? <p>Hello {this.state.value}!</p> : null}
            </div>
        );
    }
}

export default Greetings;
