import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WeatherAPI from './components/WeatherAPI.jsx'
import '/src/WeatherAPI.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherAPI />
  </StrictMode>,
)
