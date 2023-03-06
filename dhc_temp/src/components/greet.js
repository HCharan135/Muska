import React from 'react';

// function greet(){
//      return <h1>hello dhc!</h1>
// }
const Greet = (props) => {
    const {name,heto}=props
    console.log(props)
    return (
        <div>
       <h1> hoii {name} {heto} </h1>
       {props.children}

       </div>
    )
    }

export default Greet