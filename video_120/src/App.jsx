// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/counter/counterSlice'

function App() {
  // const [count, setCount] = useState(0)
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    <Navbar />
    <div className='countbox'>
      <button onClick={() => dispatch(decrement())}> - </button>
       {count}
       <button onClick={() => dispatch(increment())}> + </button>
    </div>
    </>
  )
}

export default App
