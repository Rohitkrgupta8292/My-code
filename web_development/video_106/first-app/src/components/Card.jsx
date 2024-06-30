import React from 'react'
import "./Card.css"

const Card = (props) => {
    return (
        <div className='card'>
            <img src="https://imgs.search.brave.com/WsME31UAQ68ByTj1qjxGDgnjcSrYxXR91AVaQbH1LqI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8x/MC8zMS8xOS8wNS93/ZWItZGVzaWduLTI5/MDYxNTlfNjQwLmpw/Zw" alt="card"/>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default Card
