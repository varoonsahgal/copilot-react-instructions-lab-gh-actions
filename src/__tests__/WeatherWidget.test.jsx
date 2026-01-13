import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent, within } from '@testing-library/react'
import WeatherWidget from '../components/WeatherWidget'

/**
 * Helper function to get the temperature value from the rendered component
 * @returns {number} The current temperature
 */
function getDisplayedTemp() {
  const valueElement = document.querySelector('.weather-widget__value')
  return parseInt(valueElement.textContent)
}

describe('WeatherWidget Component', () => {
  describe('Rendering', () => {
    it('when first rendered, it displays the initial temperature', () => {
      render(<WeatherWidget />)
      expect(getDisplayedTemp()).toBe(72)
    })

    it('when rendered, it shows the Weather title', () => {
      render(<WeatherWidget />)
      const title = screen.getByRole('heading', { level: 3 })
      expect(title).toHaveTextContent('Weather')
    })

    it('when rendered, it displays increment and decrement buttons', () => {
      render(<WeatherWidget />)
      expect(screen.getByRole('button', { name: /Increase temperature/ })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /Decrease temperature/ })).toBeInTheDocument()
    })

    it('when rendered with data-component attribute, it has correct value', () => {
      const { container } = render(<WeatherWidget />)
      expect(container.querySelector('[data-component="WeatherWidget"]')).toBeInTheDocument()
    })
  })

  describe('Props', () => {
    it('when given initialTemp prop, it uses that value', () => {
      render(<WeatherWidget initialTemp={80} />)
      expect(getDisplayedTemp()).toBe(80)
    })

    it('when given unit prop as C, it converts temperature to Celsius', () => {
      render(<WeatherWidget initialTemp={0} unit="C" />)
      expect(getDisplayedTemp()).toBe(-18)
    })

    it('when given unit prop as F, it displays Fahrenheit', () => {
      render(<WeatherWidget initialTemp={72} unit="F" />)
      expect(getDisplayedTemp()).toBe(72)
    })
  })

  describe('Interactions', () => {
    it('when increment button is clicked, it increases temperature by one', () => {
      render(<WeatherWidget initialTemp={72} />)
      const incrementButton = screen.getByRole('button', { name: /Increase temperature/ })
      
      fireEvent.click(incrementButton)
      expect(getDisplayedTemp()).toBe(73)
    })

    it('when decrement button is clicked, it decreases temperature by one', () => {
      render(<WeatherWidget initialTemp={72} />)
      const decrementButton = screen.getByRole('button', { name: /Decrease temperature/ })
      
      fireEvent.click(decrementButton)
      expect(getDisplayedTemp()).toBe(71)
    })

    it('when increment button is clicked multiple times, temperature increases accordingly', () => {
      render(<WeatherWidget initialTemp={72} />)
      const incrementButton = screen.getByRole('button', { name: /Increase temperature/ })
      
      fireEvent.click(incrementButton)
      fireEvent.click(incrementButton)
      fireEvent.click(incrementButton)
      
      expect(getDisplayedTemp()).toBe(75)
    })

    it('when decrement is clicked many times, it stops at absolute zero', () => {
      render(<WeatherWidget initialTemp={0} />)
      const decrementButton = screen.getByRole('button', { name: /Decrease temperature/ })
      
      // Click many times to try to go below -459.67°F (absolute zero)
      for (let i = 0; i < 500; i++) {
        fireEvent.click(decrementButton)
      }
      
      expect(getDisplayedTemp()).toBe(-459)
    })

    it('when unit is C and increment is clicked, it recalculates correctly', () => {
      render(<WeatherWidget initialTemp={32} unit="C" />)
      const incrementButton = screen.getByRole('button', { name: /Increase temperature/ })
      
      fireEvent.click(incrementButton)
      expect(getDisplayedTemp()).toBe(0)
    })
  })

  describe('Accessibility', () => {
    it('when rendered, buttons have descriptive ARIA labels', () => {
      render(<WeatherWidget />)
      const incrementButton = screen.getByRole('button', { name: /Increase temperature/ })
      const decrementButton = screen.getByRole('button', { name: /Decrease temperature/ })
      
      expect(incrementButton).toHaveAttribute('aria-label', 'Increase temperature')
      expect(decrementButton).toHaveAttribute('aria-label', 'Decrease temperature')
    })
  })
})
