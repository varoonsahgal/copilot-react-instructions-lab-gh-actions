import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import TemperatureControls from './TemperatureControls'

describe('TemperatureControls', () => {
  it('when increment button is clicked, it calls onIncrement callback', () => {
    const onIncrement = vi.fn()
    const onDecrement = vi.fn()
    render(<TemperatureControls onIncrement={onIncrement} onDecrement={onDecrement} />)
    
    fireEvent.click(screen.getByLabelText('Increase temperature'))
    expect(onIncrement).toHaveBeenCalledOnce()
  })

  it('when decrement button is clicked, it calls onDecrement callback', () => {
    const onIncrement = vi.fn()
    const onDecrement = vi.fn()
    render(<TemperatureControls onIncrement={onIncrement} onDecrement={onDecrement} />)
    
    fireEvent.click(screen.getByLabelText('Decrease temperature'))
    expect(onDecrement).toHaveBeenCalledOnce()
  })

  it('when rendered, it has the correct data-component attribute', () => {
    const { container } = render(
      <TemperatureControls onIncrement={() => {}} onDecrement={() => {}} />
    )
    expect(container.querySelector('[data-component="TemperatureControls"]')).toBeInTheDocument()
  })
})
