import React from 'react'

export default function ChildComponent(props) {
  return (
    <div>
    <button onClick={()=>props.greetEminence('dhc')}> brutton</button>
  </div>
  )
}
