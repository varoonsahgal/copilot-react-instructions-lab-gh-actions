/**
 * TemperatureDisplay Component
 * Displays the current temperature value with unit.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {number} props.temperature - Temperature value to display
 * @param {string} props.unit - Temperature unit ('F' or 'C')
 * @returns {JSX.Element} The temperature display
 */
export default function TemperatureDisplay({ temperature, unit }) {
  return (
    <p className="weather-widget__temp" data-component="TemperatureDisplay">
      Temperature: <span className="weather-widget__value">{temperature}°{unit}</span>
    </p>
  )
}
