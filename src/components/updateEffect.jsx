import { useState } from "react"
import useUpdateEffect from "../hooks/useUpdateEffect"

function UpdateEffect() {
  const [count, setCount] = useState(10)
  useUpdateEffect(() => alert(count), [count])

  return (
    <div>
      <h1>UpdateEffect</h1>
      <h3>{count}</h3>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  )
}

export default UpdateEffect