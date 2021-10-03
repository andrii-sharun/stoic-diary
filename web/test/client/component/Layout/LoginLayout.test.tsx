import { render, screen } from '@testing-library/react'
jest.mock('@components/Login/Login', () => () => (<h1>Login Component</h1>))
import LoginLayout from '../../../../client/src/component/Layout/LoginLayout/LoginLayout'


describe('LoginLayout', () => {
  it('should render component', () => {
    render(<LoginLayout />)
    const heading = screen.getByRole('heading', { name: 'Login Component' })

    expect(heading).toBeInTheDocument()
  })
})