import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInformations from './components/WeatherInformations/WeatherInformations'
import WeatherInformations5Days from './components/WeatherInformations5Days/WeatherInformations5Days'

function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const inputRef = useRef()

  async function searchCity() {
    const city = inputRef.current.value.trim()
    if (!city) return

    const key = "ab69bdd46919275bbce3b4a445ad96f6"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    setLoading(true)
    setError('')

    try {
      const [apiInfo, apiInfo5Days] = await Promise.all([
        axios.get(url),
        axios.get(url5Days),
      ])
      setWeather(apiInfo.data)
      setWeather5Days(apiInfo5Days.data)
    } catch (err) {
      if (err.response?.status === 404) {
        setError('Cidade não encontrada. Verifique o nome e tente novamente.')
      } else {
        setError('Não foi possível buscar a previsão. Tente novamente.')
      }
      setWeather(undefined)
      setWeather5Days(undefined)
    } finally {
      setLoading(false)
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') searchCity()
  }

  return (
    <div className='container'>
      <h1 className='app-title'>Previsão do Tempo</h1>

      <div className='search-form'>
        <input
          ref={inputRef}
          type='text'
          placeholder='Digite o nome da cidade'
          className='search-input'
          onKeyDown={handleKeyDown}
          aria-label='Nome da cidade'
        />
        <button
          onClick={searchCity}
          className='search-button'
          disabled={loading}
          aria-label='Buscar cidade'
        >
          {loading ? <span className='spinner' aria-hidden='true' /> : null}
          {loading ? 'Buscando' : 'Buscar'}
        </button>
      </div>

      {error && <p className='error-message' role='alert'>{error}</p>}

      {weather && <WeatherInformations weather={weather} />}
      {weather5Days && <WeatherInformations5Days weather5Days={weather5Days} />}
    </div>
  )
}

export default App
