import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setname] = useState("Rohit")

  const handleClick = () => {
    alert("hey i am clicked");
  }
  const handleMouseOver = () => {
    alert("hey i am Mouse over");
  }

  const handleChange = (e) =>{
    setname(e.target.value)
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>

      {/* <div className="red" onMouseOver={handleMouseOver}>
        I am red div
      </div> */}
      <input value={name} type="text" onChange={handleChange} />
    </>
  )
}

export default App
