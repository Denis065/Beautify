import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReservationMasters from '../ReservationMasters/ReservationMasters';
import ItemReservationCategory from './ItemReservationCategory';
import ReservationServices from './ReservationServices';
import ReservationForm from '../ReservationForm/ReservationForm';

import './Reservation.css';

function ReservationCategories(props) {

  const { reservationCategories } = useSelector(state => state.reservationCategoriesReducer)
  const { reservationServices } = useSelector(state => state.reservationCategoriesReducer)
  const { reservationMasters } = useSelector(state => state.reservationCategoriesReducer)
  const { reservationMasterId } = useSelector(state => state.reservationCategoriesReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'GET_FETCH_RESERVATION_CATEGORIES' })
  }, [dispatch])

  return (
    <div className="reservation">
      <h2>Записаться</h2>
      <div className="reservation-row-1">
        <div className="reserv-category">
          <h3>Категории</h3>
          {reservationCategories.map(el => <ItemReservationCategory key={el.id} name={el.name} id={el.id} />)}
        </div>
        <div className="reserv-services">
          <h3>Услуги</h3>
          {reservationServices ? reservationServices.map(el => <ReservationServices key={el.id} id={el.id} name={el.name} price={el.price} />) : null}
        </div>
        <div className="reserv-masters">
          <h3>Мастера</h3>
          {reservationMasters ? reservationMasters.map(el => <ReservationMasters key={el.id} id={el.id} name={el.name} />) : 'netu'}
        </div>
        </div>
        <div className="reservation-row-2">
          <div className="reserv-form">
            {reservationMasterId ? <ReservationForm /> : null}
          </div>
        </div>
      
    </div>
  );
}

export default ReservationCategories;
