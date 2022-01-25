import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import './PortfolioCard.css';

function PortfolioCard(props) {
  const dispatch = useDispatch();
  const { masterId } = useParams()
  const { services } = useSelector((state) => state.portfolioCReducer)
  useEffect(() => {
    dispatch({ type: 'PORTFOLIO_CARD_FETCH', payload: { masterId } })
  }, [dispatch])
  return (
    <>
      <h3>Услуги мастера</h3>
      {services ? services.map(el => <p>{el.name}</p>) : 'zagruzka'}

    </>
  );
}

export default PortfolioCard;
