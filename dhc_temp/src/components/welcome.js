import React,{Component} from 'react';
class welcome extends Component{
 render(){
        const {name, aka}= this.props
        return <h1> welcome {name} aka {aka}</h1>
 }
}
export default welcome 