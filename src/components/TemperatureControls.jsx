/**
 * TemperatureControls Component
 * Provides buttons to increment and decrement temperature.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Function} props.onIncrement - Callback when increment button is clicked
 * @param {Function} props.onDecrement - Callback when decrement button is clicked
 * @returns {JSX.Element} The control buttons
 */
export default function TemperatureControls({ onIncrement, onDecrement }) {
  return (
    <div className="weather-widget__controls" data-component="TemperatureControls">
      <button 
        className="weather-widget__button weather-widget__button--decrement"
        onClick={onDecrement}
        aria-label="Decrease temperature"
      >
        −
      </button>
      <button 
        className="weather-widget__button weather-widget__button--increment"
        onClick={onIncrement}
        aria-label="Increase temperature"
      >
        +
      </button>
    </div>
  )
}
