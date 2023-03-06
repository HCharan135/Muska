import React,{useState} from 'react'

function HookCounter() {
  
  const [count,setCount]=useState(0)
    return (
    <div>
        <button onClick={()=>setCount(count+5)}> count {count} </button>
    </div>
  )
}

export default HookCounter