import React from 'react';
import { useDispatch } from 'react-redux';

import './Reservation.css';

function ReservationServices({ name, id, price }) {


  const dispatch = useDispatch();

  function getMasters() {
    (async () => {
      const response = await fetch(`http://localhost:3001/mastersreserv/${id}`,)
      const res = await response.json();
      // console.log(res);
      dispatch({
        type: 'INIT_RESERVATION_MASTERS',
        payload: {
          masters: res,
          serviceId: id,
          service: name,
        },
      })
    })();
  }

  return (
    <div>
      <p><a onClick={getMasters}>{name}</a></p>
      <p>{price}p.</p>
    </div>
  );
}

export default ReservationServices;
