import React, { Component } from 'react'

class ClassIncrementDecrement extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    wrongIncrementCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
    wrongDecrementCount = () =>{
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
        <div>
            ClassIncrementDecrement: {this.state.count}
            <button onClick={this.wrongDecrementCount}>Dec</button>
            <button onClick={() => this.setState({count: 0})}>Reset</button>
            <button onClick={this.wrongIncrementCount}>Inc</button>

        </div>
        )
    }
}

export default ClassIncrementDecrement