import React,{Component} from 'react'
class message extends Component{
    
    
    constructor(){
        super()
            this.state={
            message1:'welcome' ,
            message2:'baw chik baw vaw '
        }
    }
        changeMessage(){    
            this.setState({
                message1: " thank youuuuu"
            })
        }
    
   render(){
        const {mr}=this.props
        return(
        <div>
        <h1> {this.state.message1} {mr} {this.state.message2}</h1>
        <button onClick={()=>this.changeMessage()}> Subscribe </button>
        </div>)
    }
}
export default message