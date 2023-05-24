import React, { useEffect, useRef } from 'react'

function useUpdateEffect(callback, dependencies) {
  const firstRender = useRef(false)
  // during development it will call 2 times because of strict mode
  useEffect(
    ()=>{
      if(firstRender.current)
        callback()
      else
        firstRender.current = true
    }, 
    dependencies
  )
}

export default useUpdateEffect