import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../../../client/src/component/Login/Login'

describe('Login', () => {
  beforeEach(() => {
    render(<Login />)
  })

  it('should render component with heading', () => {
    const heading = screen.getByRole('heading', { name: 'Stoic Diary' })
    expect(heading).toBeInTheDocument()
  })

  it('should render component with email input', () => {
    const emailInput = screen.getByPlaceholderText('Enter your email')
    expect(emailInput).toBeInTheDocument()
  })

  it('should change value of email input', () => {
    const emailInput = screen.getByPlaceholderText('Enter your email')
    const emailValue = 'e@mail.com'

    userEvent.type(emailInput, emailValue)
    expect(emailInput).toHaveValue(emailValue)
  })

  it('should render component with password input', () => {
    const passwordInput = screen.getByPlaceholderText('Enter your password')
    expect(passwordInput).toBeInTheDocument()
  })

  it('should change value of password input', () => {
    const passwordInput = screen.getByPlaceholderText('Enter your password')
    const passwordValue = 'qwerty123'

    userEvent.type(passwordInput, passwordValue)
    expect(passwordInput).toHaveValue(passwordValue)
  })
})