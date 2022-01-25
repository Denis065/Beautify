import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { gettFetchServicesAC } from '../../redux/actionCreators/servicesAC';

import '../Categories/Categories.css'


function Category({ category }) {
  const dispatch = useDispatch()
  const categoryname = category.name
  const picture = category.picture
  const id = category.id
  console.log(id, 'ETO IDIDIDIDIDIDIDIDIDIIDIDD')

  // function getGettFetchServices(id) {
  //   return {
  //     type: 'GET_FETCH_SERVICES',
  //     payload: {
  //       id,
  //     },
  //   };
  // }

  return (
    <div className="category">
      <Link to={`/categories/${categoryname}/${id}`}>
        <h4 onClick={() => dispatch({ type: 'GET_FETCH_SERVICES', payload: { id } })} size="small">{categoryname}</h4>
        <img src={picture} alt="category-img" />
      </Link>
    </div>
  );
}

export default Category;
