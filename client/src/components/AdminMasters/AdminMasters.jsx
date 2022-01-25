import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AdminMasters.css';

function AdminMasters(props) {
  const mesterName = useRef();
  const priceInput = useRef();
  const masterCategory = useRef();
const [correctForm, setCorrectForm] = useState(false);
const { session } = useSelector((state) => state.sessionReducer)
const { allMasters } = useSelector((state) => state.mastersReducer)

function deleteMaster(event, id) {
  console.log(id, 'idet');
  dispatch({ type: 'DELETE_MASTER', payload: {id}})
}
const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'ALL_MASTERS_FETCH' })
  }, [dispatch])
  console.log(allMasters);
  return (
    <div className="admin-masters-block"> 
      { session.isAdmin ? 
      <>
      <Link to="/admincabinet">Назад</Link>
      <h2>Мастера</h2>
      <div className="admin-menu">
        <Link to="/admincabinet">Личный кабинет</Link>
        <Link to="/adminreview">Отзывы</Link>
        <Link to="/adminmasters">Мастера</Link>
        <Link to="/adminchangepass">Изменить пароль</Link>
      </div>
      <div className="admin-masters">
      {allMasters.length > 0 && allMasters.map(master => 
      <div className="admin-master-item" key={master.id}>
            <div>
            <p>Имя Мастера: {master.name}</p>
            {/* Категория: <input ref={priceInput} defaultValue={master.price} /> */}
            <p>Сервисы: {master.category}</p>
            <p>Описание: {}</p>
            <button onClick={(event) => deleteMaster(event, master.id)}>Удалить Мастера</button>
            </div> 
      </div>)
      }
      </div>
      </> :
     <div>Страница не найдена</div>
    }
    </div>
  );
}

export default AdminMasters;
