import { INIT_REVIEWS } from '../actionTypes/reviewsAT/reviewsAT'
import { DELETE_REVIEW } from '../actionTypes/reviewsAT/reviewsAT'
import { ADD_REVIEW } from '../actionTypes/reviewsAT/reviewsAT'
import { CHANGE_STATUS_REVIEW } from '../actionTypes/reviewsAT/reviewsAT'
import { UPDATE_REVIEW } from '../actionTypes/reviewsAT/reviewsAT'

const initialState = { reviews: [] }

export const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_REVIEWS: {

      return { ...state, reviews: action.payload.res }
    }

     case DELETE_REVIEW: {
      const id = action.payload.review.id
      //const toDelete = state.reviews.find((el) => el.id === id)
      //const newReviews = [...state.reviews.splice(state.reviews.indexOf(toDelete), 1)]
      const newReviews = state.reviews.filter((el) => el.id != id )

      return { ...state, reviews: newReviews }
    }
    case ADD_REVIEW: {
      const review = action.payload.review
      return { ...state, reviews: [...state.reviews, review] }
    }
    case CHANGE_STATUS_REVIEW: {
      const id = action.payload.review.id
      console.log('()%%$##@^&*()_()*(*&%$%', id)

      const changedReviews = state.reviews.map((el) => {
        if(el.id == id) {
          el.isValid = true
          return el
        }
          return el
        })
      
      return { ...state, reviews: changedReviews }
    }

    case UPDATE_REVIEW: {
      const review = action.payload.review
      console.log('()%%$##@^&*()_()*(*&%$%', review)

      const updatedReviews = state.reviews.map((el) => {
        if(el.id == review.id) {
          el.isValid = true
          el.name = review.name
          el.text = review.text
          return el
        }
          return el
        })
      
      return { ...state, reviews: updatedReviews }
    }

    default:
      return state;
  }
};

export default reviewsReducer;
