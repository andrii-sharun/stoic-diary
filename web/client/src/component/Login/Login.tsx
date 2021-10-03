import { FC, useState, ChangeEventHandler } from 'react'
import Form from '../Form/Form'
import Input from '../Input/Input'
import './Login.scss'
import LoginHeading from './LoginHeading/LoginHeading'

const Login: FC = () => {
  const [emailValue, setEmailValue] = useState<string>('')
  const [passwordlValue, setPasswordValue] = useState<string>('')

  const handleChangeEmail: ChangeEventHandler<HTMLInputElement> = (e): void => {
    setEmailValue(e.target.value)
  }

  const handleChangePassword: ChangeEventHandler<HTMLInputElement> = (e): void => {
    setPasswordValue(e.target.value)
  }

  return (
    <div className='login'>
      <LoginHeading text='Stoic Diary' />
      <Form className='login__form'>
        <div className="login__inputs">
          <Input
            className='login__input'
            name='email'
            type='email'
            plaсeholder='Enter your email'
            value={emailValue}
            onChange={handleChangeEmail}
          />
          <Input
            className='login__input'
            name='password'
            type='password'
            plaсeholder='Enter your password'
            value={passwordlValue}
            onChange={handleChangePassword}
          />
        </div>
      </Form>
    </div>
  )
}

export default Login
