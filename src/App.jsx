import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const inputRef = useRef()

  function searchCity() {
    const city = inputRef.current.value
    const key = "ab69bdd46919275bbce3b4a445ad96f6"
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
  }

  return (
    <div>
      <h1>Previsão do tempo</h1>
      <input ref={inputRef} type="text" placeholder='Digite o nome da cidade' />
      <button onClick={searchCity}>Buscar</button>
      
    </div>
  )
}

export default App
