import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WeatherAPI from './WeatherAPI.jsx'
import './WeatherAPI.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherAPI />
  </StrictMode>,
)
