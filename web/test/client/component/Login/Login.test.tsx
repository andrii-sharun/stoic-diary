import { render, screen } from '@testing-library/react'
import Login from '../../../../client/src/component/Login/Login'

describe('Login', () => {
  beforeEach(() => {
    render(<Login />)
  })

  it('should render component with heading', () => {
    const heading = screen.getByRole('heading', { name: 'Stoic Diary' })
    expect(heading).toBeInTheDocument()
  })
})