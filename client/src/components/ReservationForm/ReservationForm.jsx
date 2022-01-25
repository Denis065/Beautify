import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import FreeTime from '../FreeTime/FreeTime';

import './ReservationForm.css';

function ReservationForm() {

  const dispatch = useDispatch()

  const { reservationServiceId, reservationMasterId, freeTime, itemService, itemMaster } = useSelector(state => state.reservationCategoriesReducer);

  // console.log(new Date);
  const thisDate = new Date().toLocaleDateString()
  // 18.01.2022
  const day = thisDate.slice(0, 2)
  const month = thisDate.slice(3, 5)
  const year = thisDate.slice(-4)
  const nowDate = year + '-' + month + '-' + day

  // console.log(nowDate);

  function newDatee(event) {
    event.preventDefault()
    fetch('/createreserv', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        clientName: event.target.clientName.value,
        clientNumber: event.target.clientNumber.value,
        masterId: reservationMasterId,
        serviceId: reservationServiceId,
        time: event.target.time.value,
        date: event.target.Date.value,
      })
    })
    const service = event.target
    // console.log(itemService);
    // console.log(itemMaster);

    fetch(`https://sms.ru/sms/send?api_id=F76468DF-2A99-C5BE-D01F-EAC6A54FD4EC&to=79051397723,74993221627&msg=Вы записаны на услугу:${itemService}. Мастер:${itemMaster}. Дата:${event.target.Date.value}. Время:${event.target.time.value}&json=1`)
    dispatch({
      type: 'CLEAR_RESERV'
    })
  }

  function getFreeTime(event) {
    event.preventDefault()
    const select = event.target.value;
    // console.log('select++++', select);

    (async () => {

      const response = await fetch(`/freetime/${select}`)
      const res = await response.json();
      // console.log(res)
      dispatch({
        type: 'INIT_FREE_TIME',
        payload: res,
      })
    })();
  }

  return (<>
    <h3>Форма записи</h3>
    <form onSubmit={newDatee}>
      <p>Выберите день:</p>
      <input name='Date' type="date" onChange={getFreeTime} min={nowDate} />
      <br />
      <p>Свободное время:</p>
      <select name="time">
        {freeTime ? freeTime.map(el => <FreeTime key={el} el={el} />) : null}
      </select>
      <p>Ваше имя:</p>
      <input name='clientName' type="text" />
      <br />
      <p>Ваш номер телефона:</p>
      <input name='clientNumber' type="tel"
        placeholder="+79123456789" />
      <button type="submit">Записаться</button>
    </form>
  </>
  );
}

export default ReservationForm;

