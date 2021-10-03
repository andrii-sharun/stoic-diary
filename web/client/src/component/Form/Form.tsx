import { FC } from 'react'
import './Form.scss'

interface FormProps {
  className: string
}

const Form: FC<FormProps> = ({ className, children }) => {
  return (
    <form className={className}>
      {children}
    </form>
  )
}

export default Form
