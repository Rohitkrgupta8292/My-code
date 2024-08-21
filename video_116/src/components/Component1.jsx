import React, { useContext } from 'react'
import { counterCountext } from '../context/context'

const Component1 = () => {
  const value = useContext(counterCountext)
  return (
    <div>
      <h1>{value.count}</h1>
    </div>
  )
}

export default Component1
