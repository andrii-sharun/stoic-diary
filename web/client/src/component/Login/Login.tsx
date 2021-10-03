import { FC } from 'react'
import './Login.scss'
import LoginHeading from './LoginHeading/LoginHeading'

const Login: FC = () => {
  return (
    <div className='login'>
      <LoginHeading text='Stoic Diary' />
    </div>
  )
}

export default Login
