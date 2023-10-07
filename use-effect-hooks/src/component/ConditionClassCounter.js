import React, { Component } from 'react'

class ConditionClassCounter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
         name: ''
      }
    }

    componentDidMount(){
        document.title = `You click ${this.state.count} times...`;
    }

    componentDidUpdate(prevProps, prevState){
        //when we do not use if condition then every keypress in input box document.title will update.
        if (prevState.count !== this.state.count) {
            console.log("Document title updated..")
            document.title = `You click ${this.state.count} times.!!`;
        }
    }

  render() {
    return (
      <div>
        <input type='text'
            value={this.state.value}
            onChange={ e => this.setState({ name: e.target.value }) } />
        <button onClick={() => this.setState({count: this.state.count + 1})}>Click {this.state.count} times</button>
      </div>
    )
  }
}

export default ConditionClassCounter