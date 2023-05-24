import React, { useRef } from 'react'

export default function usePreviousValue(value) {
  // state's current value
  const currentValue = useRef(value)
  const previousValue = useRef()

  if(currentValue.current !== value) {
    previousValue.current = currentValue.current
    currentValue.current = value
  }

  return previousValue.current
}
