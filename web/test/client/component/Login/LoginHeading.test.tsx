import { render, screen } from '@testing-library/react'
import LoginHeading from '../../../../client/src/component/Login/LoginHeading/LoginHeading'

describe('LoginHeading', () => {
  it('should render component', () => {
    render(<LoginHeading text='Test' />)
    const text = screen.getByRole('heading', { name: 'Test' })
    expect(text).toBeInTheDocument()
  })
})