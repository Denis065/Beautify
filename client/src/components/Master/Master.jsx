import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
//import { getFetchMastersAC } from '../../redux/actionCreators/mastersAC';


function Master({master}) {
  const dispatch = useDispatch()
  const mastername = master.name
  const id = master.id
  return (
    <>
    
      <div>
        <li>Name: {master.name}, Category: {master.category}</li>
      </div>

      {/* <Link to={`/categories/categoryname/service/${mastername}`}>
      <button size="small">Выбрать время</button>
      </Link> */}
    </>
  );
}

//onClick={() => dispatch(getFetchTimeAC(master.name))}

export default Master;
