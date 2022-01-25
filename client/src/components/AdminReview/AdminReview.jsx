import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { initReviewsAC } from '../../redux/actionCreators/reviewsAC/reviewsAC';
import { Link } from 'react-router-dom';
import ReviewCardDelete from './ReviewCardDelete';
import './AdminReview.css';

function AdminReview(props) {

  const dispatch = useDispatch()
  const { reviews } = useSelector(state => state.reviewsReducer)
  const { session } = useSelector((state) => state.sessionReducer)
  const newReviews = reviews.filter((el) => el.isValid != false)
  const falseReviews = reviews.filter((el) => el.isValid == false)


  useEffect(() => {
    (async () => {
      const response = await fetch(`/reviews`)
      const res = await response.json();
      dispatch(initReviewsAC({ res }))
    })();
  }, [dispatch])


  return (
    <div className="admin-reviews-block">
       { session.isAdmin ?
      <>
      <h2>Отзывы</h2>
      <div className="admin-menu">
        <Link to="/admincabinet">Личный кабинет</Link>
        <Link to="/adminreview">Отзывы</Link>
        <Link to="/adminmasters">Мастера</Link>
        <Link to="/adminchangepass">Изменить пароль</Link>
      </div>
      <div className="admin-reviews">
        <ul>
          {newReviews.length ? newReviews.map(review => <ReviewCardDelete key={review.id} name={review.name} text={review.text} id={review.id} isValid={review.isValid} />) : <></>}
        </ul>
          <h2>Новые отзывы</h2>
        <ul>
          {falseReviews.length ? falseReviews.map(review => <ReviewCardDelete key={review.id} name={review.name} text={review.text} id={review.id} isValid={review.isValid} />) : <></>}
        </ul>
      </div>
      {/* {newReview ? <AddReviewForm setNewReview={setNewReview} /> : <button onClick={() => setNewReview(true)}>Оставить отзыв</button>} */}
      </> :
      <div>Страница не найдена</div>
      }
    </div>
  );
}

export default AdminReview;
