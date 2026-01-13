import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import TemperatureDisplay from './TemperatureDisplay'

describe('TemperatureDisplay', () => {
  it('when given a temperature and unit, it displays the value correctly', () => {
    render(<TemperatureDisplay temperature={72} unit="F" />)
    expect(screen.getByText(/72°F/)).toBeInTheDocument()
  })

  it('when rendered, it has the correct data-component attribute', () => {
    const { container } = render(<TemperatureDisplay temperature={68} unit="C" />)
    expect(container.querySelector('[data-component="TemperatureDisplay"]')).toBeInTheDocument()
  })
})
