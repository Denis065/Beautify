import React from 'react';
import { useDispatch } from 'react-redux';

import './Reservation.css';

function ItemReservationCategory({ name, id }) {

  const dispatch = useDispatch();

  function getServices() {
    (async () => {
      const response = await fetch(`http://localhost:3001/servicesreserv/${id}`,)
      const res = await response.json();
      dispatch({
        type: 'INIT_RESERVATION_SERVICES',
        payload: res,
      })
    })();
  }

  return (
    <>
      <p>
        <a onClick={getServices}>
          {name}
        </a>
      </p>
    </>

  );
}

export default ItemReservationCategory;
