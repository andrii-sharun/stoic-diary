import { render, screen } from '@testing-library/react'
import Form from '../../../../client/src/component/Form/Form'

const heading = <h1>Form</h1>

describe('Form', () => {
  it('should render component', () => {
    render(<Form className='test' children={heading} />)
    const text = screen.getByRole('heading', { name: 'Form' })

    expect(text).toBeInTheDocument()
  })
})