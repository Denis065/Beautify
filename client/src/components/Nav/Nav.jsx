import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import './Nav.css';

function Nav(props) {
  const { session } = useSelector((state) => state.sessionReducer)
  const dispatch = useDispatch();

  // console.log(session.authClient, 'client session')
  async function signOut() {
    try {
      await fetch('/signout');
      dispatch({ type: 'SESSION_FETCH' })
    }
    catch (err) {
      console.log(err.message)
    }

  }

  return (
    <nav className="main-nav">

    <ul>
      <li>
        <Link to="/">Главная</Link>
      </li>
      <li>
        <Link to="/categories">Категории</Link>
      </li>
      <li>
        <Link to="/about">О нас</Link>
      </li>
      <li>
        <Link to="/reviews">Отзывы</Link>
      </li>
      <li>
        <Link to="/portfolio">Мастера</Link>
      </li>
      {/* {session.authClient && session.isAdmin ?
        <li>
          <Link to="/admincabinet">Кабинет</Link>
        </li> : ''} */}
      <li>
        <Link to="/reservation">Записаться</Link>
      </li>
      { 
      session.isAdmin ?
        <> <li>
          <Link to='/admincabinet'>Кабинет администратора</Link>
        </li>
          <li><a onClick={() => signOut()}>Выйти</a></li></>
        : 
        session.authClient ? 
        <> 
        <li>
        <Link to='/profile'>Личный кабинет</Link>
      </li>
        <li><a onClick={() => signOut()}>Выйти</a></li></> 
        : 
        <>
        <li>
          <Link to="/signup">Зарегистрироваться</Link>
        </li>
        <li>
          <Link to="/signin">Войти</Link>
        </li>
      </>
      }
    </ul>
    </nav>
  );
}

export default Nav;
