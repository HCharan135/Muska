import React from 'react'
function buss(){
    console.log("bussin bussin");
}
function functionclick() {
    function buss1(){
        console.log("bussin bussin1");
    }
  return (
    <div>
        <button onClick={buss1}>click1</button>
    <button onClick={()=> {buss()}}>click</button>
    </div>
  )
}


export default functionclick