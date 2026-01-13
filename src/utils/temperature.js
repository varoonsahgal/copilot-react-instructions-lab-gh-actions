/**
 * Convert Fahrenheit to Celsius
 * @param {number} fahrenheit - Temperature in Fahrenheit
 * @returns {number} Temperature in Celsius
 */
export function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9)
}

/**
 * Convert Celsius to Fahrenheit
 * @param {number} celsius - Temperature in Celsius
 * @returns {number} Temperature in Fahrenheit
 */
export function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32
}
