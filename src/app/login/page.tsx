'use client'

import React, { useState } from 'react'
import auth from './auth'
import { useCookies } from 'react-cookie'

const Login = () => {

  const [cookies, setCookie] = useCookies()

  const [login, setLogin] = useState<string>('suvorov.matvej9@gmail.com')
  const [password, setPassword] = useState<string>('motik0511')

  const submit = () => {
    auth(login, password)
      .then(cookie => {
        console.log(cookie)
      })
  }

  return (
    <div className='mt-5'>
      <h1>Электронный дневник Кировской области <br /><span className="text-secondary">(неофициальный клиент)</span></h1>
        <h2 className="mt-5">Вход</h2>
        <form action="/auth" method="post">
            <div className="input-group mt-1">
                <span className="input-group-text">Электронная почта или СНИЛС</span>
                <input type="text" className="form-control" name='email' value={login} onChange={e => setLogin(e.target.value)} />
            </div>
            <div className="input-group mt-1">
                <span className="input-group-text">Пароль</span>
                <input type="password" className="form-control" name='password' value={password} onChange={e => setPassword(e.target.value)}  />
            </div>
            <input type="button" onClick={submit} className="btn btn-primary mt-1" value="Войти" />
        </form>
    </div>
  )
}
export default Login