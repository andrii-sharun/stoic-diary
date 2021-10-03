import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ChangeEventHandler } from 'react'
import Input from '../../../../client/src/component/Input/Input'

let input: HTMLElement
let inputValue = 'initial'
const handleInputChange: ChangeEventHandler<HTMLInputElement> = jest.fn()

describe('Input', () => {
  beforeEach(() => {
    render(
      <Input
        className='test'
        name='test'
        plaсeholder='Test Placeholder'
        type='email'
        value={inputValue}
        onChange={handleInputChange}
      />)
    input = screen.getByRole('textbox')
  })

  it('should render component', () => {
    expect(input).toBeInTheDocument()
  })

  it('should render input with initial value', () => {
    expect(input).toHaveValue('initial')
  })

  it('should render input with plaseholder text', () => {
    expect(screen.getByPlaceholderText('Test Placeholder')).toBeInTheDocument()
  })

  it('should change input value', () => {
    userEvent.type(input, 'new value')
    expect(handleInputChange).toBeCalled()
  })
})