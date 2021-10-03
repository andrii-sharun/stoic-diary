import { render, screen } from '@testing-library/react'
import Login from '../../../../client/src/component/Login/Login'

describe('Login', () => {
  it('should render component', () => {
    render(<Login />)
    const text = screen.getByText('Login')

    expect(text).toBeInTheDocument()
  })
})