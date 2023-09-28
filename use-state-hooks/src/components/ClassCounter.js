import React, { Component } from 'react'

class ClassCounter extends Component {
    //class contructor
    constructor(props) {
        super(props)
    
        this.state = {
        count: 0
        }
    }

    //increament count arrow function
    increamentCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
        <div>
            <button onClick={this.increamentCount} >ClassCounter Count: {this.state.count}</button>
        </div>
        )
    }
}

export default ClassCounter;