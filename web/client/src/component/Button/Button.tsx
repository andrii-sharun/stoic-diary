import { FC, MouseEventHandler, ButtonHTMLAttributes } from 'react'
import './Button.scss'

interface ButtonProps {
  type: ButtonHTMLAttributes<HTMLButtonElement>['type']
  name: string,
  className: string,
  text: string,
  onClick: MouseEventHandler
}

const Button: FC<ButtonProps> = ({ type, name, className = 'button', onClick, text }) => {
  return (<button
    type={type}
    name={name}
    className={className}
    onClick={onClick}
  >
    {text}
  </button>
  )
}

export default Button
