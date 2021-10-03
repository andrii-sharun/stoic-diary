import { render, screen } from '@testing-library/react'
import LoginLayout from '../../../../client/src/component/Layout/LoginLayout/LoginLayout'

describe('LoginLayout', () => {
  it('should render component', () => {
    render(<LoginLayout />)
    const text = screen.getByText('Login layout')

    expect(text).toBeInTheDocument()
  })
})