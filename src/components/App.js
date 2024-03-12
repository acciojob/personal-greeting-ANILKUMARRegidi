import React, { Component } from "react";  // Corrected import statement

class Greetings extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };
    }

    onchangeText = (event) => {  // Modified method to accept event parameter
        const newValue = event.target.value;
        this.setState({ value: newValue });
    }

    render() {
        return (
            <div>
                <label htmlFor="input">Enter your name:</label>
                <input id="input" value={this.state.value} onChange={this.onchangeText} />
                {this.state.value ? <p>{this.state.value}!</p> : null}
            </div>
        );
    }
}

export default Greetings;
