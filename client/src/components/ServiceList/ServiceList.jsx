import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
// // import { fetchCategoriesAC } from '../../redux/actionCreators/categoriesAC';
import Service from '../Service/Service';
import { useDispatch } from 'react-redux';

function ServiceList(props) {

  const services = useSelector(state => state.servicesReducer.services)
  console.log(services, 'SER----VI----CES')
  const dispatch = useDispatch()
  const categoryname = useParams().categoryname
  console.log('USE PARAMS USE PARAMS USE PARAMS USE PARAMS', categoryname)
  const { id } = useParams()

  useEffect(() => {
    dispatch({ type: 'GET_FETCH_SERVICES', payload: { id } })
  }, [dispatch])

  return (
    <div>
      <h2>{categoryname}</h2>
      <ul className="service-list">
        {services.length ? services.map((service) => <Service key={uuidv4()} service={service} />) : <li>No services</li>}
      </ul>
    </div>
  );
}

export default ServiceList;
