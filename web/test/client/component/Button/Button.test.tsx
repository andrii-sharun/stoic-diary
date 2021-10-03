import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MouseEventHandler } from 'react'
import Button from '../../../../client/src/component/Button/Button'

const handleClick: MouseEventHandler = jest.fn()

describe('Button', () => {
  beforeEach(() => {
    render(
      <Button
        name='test'
        type='button'
        text='Test'
        className='test'
        onClick={handleClick}
      />)
  })

  it('should render component', () => {
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should render component with correct text', () => {
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  it('should react to the click', () => {
    userEvent.click(screen.getByRole('button'))

    expect(handleClick).toBeCalled()
  })
})