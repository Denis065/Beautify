import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { getFetchMastersAC } from '../../redux/actionCreators/mastersAC';

import './Service.css';

function Service({ service }) {
  const dispatch = useDispatch()
  const servicename = service.name
  const id = service.id
  const picture = service.picture
  const currentURL = window.location.pathname
  return (
    <div className="service-card">
      <Link to={`/categories/:categoryname/${servicename}/${id}`}>
      <li onClick={() => dispatch({ type: 'GET_FETCH_MASTERS', payload: { id } })} size="small"><h3>{service.name}</h3></li>
      </Link>
      <div><strong>Описание</strong>: {service.description} </div>
      <img src={`/${picture}`} alt="" />
    </div>
  );
}

export default Service;
