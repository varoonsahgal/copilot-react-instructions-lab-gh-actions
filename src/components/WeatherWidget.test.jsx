import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import WeatherWidget from './WeatherWidget'

describe('WeatherWidget', () => {
  it('when rendered, it displays initial temperature in Fahrenheit', () => {
    render(<WeatherWidget initialTemp={72} unit="F" />)
    expect(screen.getByText(/72°F/)).toBeInTheDocument()
  })

  it('when increment button is clicked, it increases temperature', async () => {
    const user = userEvent.setup()
    render(<WeatherWidget initialTemp={70} unit="F" />)
    
    await user.click(screen.getByLabelText('Increase temperature'))
    expect(screen.getByText(/71°F/)).toBeInTheDocument()
  })

  it('when decrement button is clicked, it decreases temperature', async () => {
    const user = userEvent.setup()
    render(<WeatherWidget initialTemp={70} unit="F" />)
    
    await user.click(screen.getByLabelText('Decrease temperature'))
    expect(screen.getByText(/69°F/)).toBeInTheDocument()
  })

  it('when unit is C, it converts and displays temperature in Celsius', () => {
    render(<WeatherWidget initialTemp={32} unit="C" />)
    expect(screen.getByText(/0°C/)).toBeInTheDocument()
  })

  it('when temperature reaches absolute zero, it does not go lower', async () => {
    const user = userEvent.setup()
    render(<WeatherWidget initialTemp={-459} unit="F" />)
    
    await user.click(screen.getByLabelText('Decrease temperature'))
    expect(screen.getByText(/-459°F/)).toBeInTheDocument()
  })

  it('when rendered, it has the required data-component attribute', () => {
    const { container } = render(<WeatherWidget />)
    expect(container.querySelector('[data-component="WeatherWidget"]')).toBeInTheDocument()
  })
})
