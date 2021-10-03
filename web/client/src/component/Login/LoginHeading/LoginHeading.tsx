import { FC } from 'react'
import './LoginHeading.scss'

interface LoginHeadingProps {
  text: string
}

const LoginHeading: FC<LoginHeadingProps> = ({ text }) => {
  return (
    <h1 className='login__heading'>
      {text}
    </h1>
  )
}

export default LoginHeading
