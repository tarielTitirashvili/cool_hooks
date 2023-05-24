import React, { useState } from 'react'
import useTimeout from '../hooks/useTimeout'

function Timeout() {
  const [count, setCount] = useState(10)
  const {clear, reset} = useTimeout(() => setCount(0), 1000)
  return (
    <div>
      <h1>Timeout</h1>
      <h3>{count}</h3>
      <button 
        onClick={()=>setCount((prev)=>prev+1)}
      >
        increment
      </button>
      <button onClick={clear}>Clear Timeout</button>
      <button onClick={reset}>Reset Timeout</button>
    </div>
  )
}

export default Timeout