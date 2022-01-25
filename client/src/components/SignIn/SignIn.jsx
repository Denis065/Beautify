import React from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SignIn.css';

function SignIn(props) {
  const dispatch = useDispatch();
  const clientPassInput = useRef();
  const clientTelInput = useRef();
  const { session } = useSelector((state) => state.sessionReducer)
  const { clientExist, correctPassword } = useSelector((state) => state.signinReducer)
  async function clientFormHandler(event, clientPassInput, clientTelInput) {
    event.preventDefault();
    try {
      const response = await fetch('/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify({
          password: clientPassInput.current.value,
          telephone: clientTelInput.current.value,
        })

      })
      const resJson = await response.json()

      dispatch({ type: 'SIGN_IN', payload: resJson })

      dispatch({ type: 'SESSION_FETCH' })
    }

    catch (err) {
      console.log(err.message)
    }
    clientPassInput.current.value = ''
    clientTelInput.current.value = ''
  }
  return (
    <>
    <h2>Войти</h2>
      {!session.authClient ?
        <div className="login-form">
          <input ref={clientTelInput} type="tel" name="" id="clientTell" placeholder='Телефон' required />
          <input ref={clientPassInput} type="password" name="" id="clientPass" placeholder='Пароль' required />
          <button onClick={(event) => clientFormHandler(event, clientPassInput, clientTelInput)}>Авторизироваться</button>
        </div>
        : <p> Авторизация прошла успешно </p>}

      {correctPassword === false && !session.authClient ?
        <p>Неправильно введен пароль</p> :
        <p></p>
      }
      {clientExist === false && !session.authClient ?
        <p>Такой пользователь не существует</p> :
        <p></p>
      }
      {clientExist && correctPassword && session.authClient ?
        <div className='misha'>window.location.href = '/'</div>
        : <p></p>}
    </>
  );
}

export default SignIn;
