import React, { useState } from 'react'
import usePreviousValue from '../hooks/usePreviousValue'

function PreviousValue() {
  const [count, setCount] = useState(0)
  const previous = usePreviousValue(count)
  return (
    <div> 
      <h3>
        PreviousValue 
      </h3>
      <h3>
      {previous}-{count}
      </h3>
      <button onClick={()=>setCount(prev=>++prev)}>
        increment
      </button>
    </div>
  )
}

export default PreviousValue