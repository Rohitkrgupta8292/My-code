import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [Card, setCard] = useState([])

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setCard(data)
    console.log(data)
  }
  useEffect(() => {
    fetchData()
  }, [])


  return (
    <>
      <Navbar />
      <div className="container">
        {Card.map((Card) => {
          return <div key={Card.id} className="card">
            <h1>{Card.title}</h1>
            <p>{Card.body}</p>
            <span>By: UserId: {Card.userId}</span>
          </div>
        })}
      </div>
    </>
  )
}

export default App
