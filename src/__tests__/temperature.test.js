import { describe, it, expect } from 'vitest'
import { toCelsius, toFahrenheit } from '../utils/temperature'

describe('Temperature Conversion Utils', () => {
  describe('toCelsius', () => {
    it('should convert 32°F to 0°C', () => {
      expect(toCelsius(32)).toBe(0)
    })

    it('should convert 212°F to 100°C', () => {
      expect(toCelsius(212)).toBe(100)
    })

    it('should convert 68°F to 20°C', () => {
      expect(toCelsius(68)).toBeCloseTo(20, 2)
    })

    it('should handle negative Fahrenheit values', () => {
      expect(toCelsius(-40)).toBe(-40)
    })

    it('should return a number', () => {
      expect(typeof toCelsius(72)).toBe('number')
    })
  })

  describe('toFahrenheit', () => {
    it('should convert 0°C to 32°F', () => {
      expect(toFahrenheit(0)).toBe(32)
    })

    it('should convert 100°C to 212°F', () => {
      expect(toFahrenheit(100)).toBe(212)
    })

    it('should convert 20°C to 68°F', () => {
      expect(toFahrenheit(20)).toBeCloseTo(68, 2)
    })

    it('should handle negative Celsius values', () => {
      expect(toFahrenheit(-40)).toBe(-40)
    })

    it('should return a number', () => {
      expect(typeof toFahrenheit(20)).toBe('number')
    })
  })
})
