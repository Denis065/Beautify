import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Review.css'


function ReviewCard({ name, text, isValid, id }) {
  const dispatch = useDispatch()
  const reviewId = id
  const currentURL = window.location.href
  console.log('CURRENT URL V REVIEW CARD', currentURL)
  //const urll = currentURL.split().splice(0, 22)

  console.log('REVIEWID V REVIEWCARD NACHALO', id)
  return (
    <>
      {isValid ?
        <li className="review-card">
          <h3 className="review-author">{name}</h3>
          <p className="review-text">{text}</p>
        </li> :
        null}
        {/* <Link to={`/reviews`}> */ }
        {/* <button onClick={() => dispatch({ type: 'DELETE_FETCH_REVIEW', payload: { reviewId } })}>Удалить отзыв</button> */}
        {/* </Link> */}
    </>
);
}

export default ReviewCard;
