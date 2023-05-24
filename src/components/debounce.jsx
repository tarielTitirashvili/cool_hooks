import { useState } from "react"
import useDebounce from "../hooks/useDebounce"

function DebounceComponent() {
  const [count, setCount] = useState(10)
  useDebounce(() => alert(count), 1000, [count])

  return (
    <div>
      <h1>Debounce</h1>
      <h3>{count}</h3>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  )
}

export default DebounceComponent