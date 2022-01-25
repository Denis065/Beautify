import { INIT_REVIEWS } from '../../actionTypes/reviewsAT/reviewsAT'


export const initReviewsAC = (payload) => {
  return {
    type: INIT_REVIEWS,
    payload
  }
}

