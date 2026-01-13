import { useState } from 'react'
import { toCelsius } from '../utils/temperature'
import '../styles/WeatherWidget.css'

const INITIAL_TEMPERATURE = 72
const TEMP_INCREMENT = 1
const ABSOLUTE_ZERO_F = -459.67

/**
 * WeatherWidget Component
 * Displays temperature with controls to increment and decrement the value.
 * Supports both Fahrenheit and Celsius units.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {number} [props.initialTemp=72] - Initial temperature in Fahrenheit
 * @param {string} [props.unit='F'] - Temperature unit to display ('F' or 'C')
 * @returns {JSX.Element} The weather widget component
 */
export default function WeatherWidget({ initialTemp = INITIAL_TEMPERATURE, unit = 'F' }) {
  const [tempF, setTempF] = useState(initialTemp)

  const currentTemp = unit === 'C' ? Math.round(toCelsius(tempF)) : tempF

  const handleIncrement = () => {
    setTempF(prevTemp => prevTemp + TEMP_INCREMENT)
  }

  const handleDecrement = () => {
    setTempF(prevTemp => Math.max(prevTemp - TEMP_INCREMENT, ABSOLUTE_ZERO_F))
  }

  return (
    <div className="weather-widget" style={{ padding: '10px' }}>
      <h3 className="weather-widget__title">Weather</h3>
      <div className="weather-widget__content">
        <p className="weather-widget__temp">
          Temperature: <span className="weather-widget__value">{currentTemp}°{unit}</span>
        </p>
        <div className="weather-widget__controls">
          <button 
            className="weather-widget__button weather-widget__button--decrement"
            onClick={handleDecrement}
            aria-label="Decrease temperature"
          >
            −
          </button>
          <button 
            className="weather-widget__button weather-widget__button--increment"
            onClick={handleIncrement}
            aria-label="Increase temperature"
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}