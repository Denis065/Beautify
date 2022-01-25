import React from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './SignUp.css';

function SignUp(props) {

  const dispatch = useDispatch();
  const clientLoginInput = useRef();
  const clientPassInput = useRef();
  const clientTelInput = useRef();
  const { session } = useSelector((state) => state.sessionReducer)
  const { clientExist } = useSelector((state) => state.signupReducer)
  async function clientFormHandler(event, clientLoginInput, clientPassInput, clientTelInput) {
    event.preventDefault();

    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          login: clientLoginInput.current.value,
          password: clientPassInput.current.value,
          telephone: clientTelInput.current.value,
        })
      })
      const resJson = await response.json()

      dispatch({ type: 'SIGN_UP', payload: resJson })

      dispatch({ type: 'CLIENT_SIGN_UP', payload: { telephone: clientTelInput.current.value, password: clientPassInput.current.value } })
    }

    catch (err) {
      console.log(err.message)
    }
    clientLoginInput.current.value = ''
    clientPassInput.current.value = ''
    clientTelInput.current.value = ''

  }
  return (
    <>
    <h2>Зарегистрироваться</h2>
      {!session.authClient ?
        <div className="sign-up-form">
          <input ref={clientLoginInput} type="text" name="" id="clientLogin" placeholder="Имя" required />
          <input ref={clientPassInput} type="password" name="" id="clientPass" placeholder="Пароль" required />
          <input ref={clientTelInput} type="tel" name="" id="clientTell" placeholder="Телефон" required />
          <button onClick={(event) => clientFormHandler(event, clientLoginInput, clientPassInput, clientTelInput)}>Зарегистрироваться</button>
        </div>
        :
        <p> Регистрация прошла успешно </p>}


      {!clientExist ?

        <div className='max'>{window.location.href = '/signin'}</div>


        : clientExist === 'initial' ?
          <p></p> : <p>Такой пользователь уже существует</p>
      }

    </>
  );
}

export default SignUp;
