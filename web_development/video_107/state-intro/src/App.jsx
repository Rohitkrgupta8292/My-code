import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    alert("hey welcome to my page")
  }, [])
  

  return (
    <>
      <div>The count is {count}</div>
      <button onClick={()=>{setCount(count + 1)}}>update count</button>
    </>
  )
}

export default App
