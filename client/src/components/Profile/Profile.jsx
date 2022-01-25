
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Profile(props) {
  const dispatch = useDispatch()
  const { reservations, masters, services } = useSelector(state => state.cabinetReducer.reservation)
  console.log(reservations, 'client console')
  useEffect(() => {
    dispatch({ type: 'CABINET_FETCH' })
  }, [dispatch])

  async function deleteRes(event) {
    const reservationId = event.target.id;
    const response = await fetch(`/deleteres`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        id: reservationId,
      })
    })
    const reservations = await response.json()
    // window.location.href = '/profile';
    dispatch({ type: 'DELETE_RESERVATION', payload: reservationId })
  }
  return (
    <div>
      {reservations.length > 0 ?
        reservations.map(el => {
          return <><div key={el.id}>
            <p>{el.clientName}</p>
            <p>{el.clientNumber}</p>
            {masters.map(master => {
              if (master.id === el.masterId) {
                return <p>{master.name}</p>
              }
            })}
            {services.map(service => {
              if (service.id === el.serviceId) {
                return <p>{service.name}</p>
              }
            })}
            <button id={el.id} onClick={(event) => deleteRes(event)}>Удалить запись</button></div></>
        }) : <p className="no-reserv">Записи отсутствуют! :(</p>
      }     </div>
  );
}

export default Profile;
