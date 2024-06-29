import React from 'react'

const Login = () => {
  return (
    <div classNameName='mt-5'>
      <h1>Электронный дневник Кировской области <br /><span className="text-secondary">(неофициальный клиент)</span></h1>
        <h2 className="mt-5">Вход</h2>
        <form action="/auth" method="post">
            <div className="input-group mt-1">
                <span className="input-group-text">Электронная почта или СНИЛС</span>
                <input type="text" className="form-control" name='email' value='suvorov.matvej9@gmail.com'>
            </div>
            <div className="input-group mt-1">
                <span className="input-group-text">Пароль</span>
                <input type="password" className="form-control" name='password' value='motik0511'>
            </div>
            <input type="submit" className="btn btn-primary mt-1" value="Войти" />
        </form>
    </div>
  )
}
export default Login