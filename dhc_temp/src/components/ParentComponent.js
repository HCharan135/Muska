import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:"DHC"      
        }
         this.greetParent=this.greetParent.bind(this)  
    }
    
    greetParent(cc){
        alert(`Hello ${this.state.parentName} from ${cc}`)
    }
  render() {
    return (
      <div>
        <ChildComponent greetEminence={this.greetParent}/>
      </div>
    )
  }
}


export default ParentComponent