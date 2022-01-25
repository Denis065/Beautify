import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './Portfolio.css'

function Portfolio(props) {

  const dispatch = useDispatch()
  const { masters } = useSelector(state => state.portfolioReducer)

  useEffect(() => {
    dispatch({ type: 'PORTFOLIO_FETCH' })
  }, [dispatch])

  return (

    <div className="portfolio-block">
      <h2>Мастера</h2>
      <div className="portfolio-body">
        {masters.map(el => {
          return <>
            <div key={el.id}>
              <div className="master-card">
                <img src={el.picture} alt="master-img" />
                <h3 className="master-name">{el.name}</h3>
                <p className="category-name">{el.category}</p>
                <Link to={{ pathname: `/portfolio/${el.id}` }} className="meet-link">Познакомиться</Link>
              </div>
            </div>

          </>
        })}</div>


    </div>
  );
}

export default Portfolio;
