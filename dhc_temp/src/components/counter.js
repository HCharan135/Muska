import React, { Component } from 'react'

export class counter extends Component {
    constructor() {
      super()
    
      this.state = {
         count:0
      }
    }
    increment(){
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
    return (
      <div>count - {this.state.count}
      <button onClick={()=>this.increment()}>increment</button>
      </div>
    )
  }
}

export default counter