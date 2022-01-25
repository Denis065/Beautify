import { call, put, takeEvery } from 'redux-saga/effects'

const fetchReservationCategories = async () => {
  const response = await fetch('/categories')
  const categories = await response.json()
  return categories
}

function* getFetchReservationCategories() {
  const categories = yield call(fetchReservationCategories);
  yield put({ type: "INIT_RESERVATION_CATEGORIES", payload: categories });

}

export function* reservationCategories() {
  yield takeEvery('GET_FETCH_RESERVATION_CATEGORIES', getFetchReservationCategories);
}
