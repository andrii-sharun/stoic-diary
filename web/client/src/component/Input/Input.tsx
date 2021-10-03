import { ChangeEventHandler, FC } from 'react'
import './Input.scss'

interface InputProps {
  type: string,
  name: string,
  plaсeholder: string,
  className: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
  value: string
}

const Input: FC<InputProps> = ({ type, name, plaсeholder, className = 'input', onChange, value }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={plaсeholder}
      className={className}
      onChange={onChange}
      value={value}
    />
  )
}

export default Input
