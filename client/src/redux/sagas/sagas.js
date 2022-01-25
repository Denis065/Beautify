import { call, put, takeEvery } from 'redux-saga/effects'
import { categoriesInitAC } from '../actionCreators/categoriesAC';
import { gettFetchServicesAC } from '../actionCreators/servicesAC';

const fetchCategories = async () => {
  const response = await fetch('/categories')
  const categories = await response.json()
  return categories
}

const fetchServices = async ({ id }) => {
  //const id = gettFetchServicesAC.payload
  //console.log(gettFetchServicesAC())
  const response = await
    fetch(`/categories/${id}`) //????????????????????????????????????????
  const services = await response.json()
  return services
}

const fetchMasters = async ({ id }) => {
  const response = await
    fetch(`/masters/${id}`) //????????????????????????????????????????
  const masters = await response.json()
  return masters
}

const fetchReview = async ({ id }) => {

  const response = await fetch(`/reviews/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      id,
    })
  })
  const review = await response.json()
  // const id = review.id
  return review
}
// // исполнитель (worker)
// function* getFetchCategories() {
//   const categories = yield call(fetchCategories)
//   console.log(categories)
//   yield put(categoriesInitAC(categories))
// }
const fetchAddReview = async ({ obj }) => {

  const response = await fetch(`/reviews`, {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      obj,
    })
  })
  const review = await response.json()
  // const id = review.id
  return review
}

const fetchApproveReview = async ({ id }) => {

  const response = await fetch(`/reviews/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      id,
    })
  })

  const review = await response.json()
  // const id = review.id
  return review
}

const fetchEditReview = async ({ obj }) => {
  // const name = obj.name
  //const id = obj.id

  const response = await fetch(`/editreview`, {
    method: 'PUT',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      obj,
    })
  })
  const review = await response.json()
  // const id = review.id
  return review
}


function* getFetchCategories() {
  // try {
  const categories = yield call(fetchCategories);
  yield put({ type: "INIT_CATEGORIES", payload: categories });
  // } 
  // catch (e) {

  //   yield put({ type: "USER_FETCH_FAILED", message: e.message });
  // }
}

function* getFetchServices(action) {
  //const id = getFetchServices.payload

  const services = yield call(fetchServices, { id: action.payload.id })
  yield put({ type: "INIT_SERVICES", payload: { services } })
}

function* getFetchMasters(action) {
  const masters = yield call(fetchMasters, { id: action.payload.id })
  yield put({ type: 'INIT_MASTERS', payload: { masters } })
}

function* deleteFetchReview(action) {
  const review = yield call(fetchReview, { id: action.payload.reviewId })
  yield put({ type: 'DELETE_REVIEW', payload: { review } })
}

function* addFetchReview(action) {
  const review = yield call(fetchAddReview, { obj: action.payload })
  yield put({ type: 'ADD_REVIEW', payload: { review } })
}

function* getApproveFetchReview(action) {
  const review = yield call(fetchApproveReview, { id: action.payload.reviewId })
  yield put({ type: 'CHANGE_STATUS_REVIEW', payload: { review } })
}

function* getEditFetchReview(action) {
  const review = yield call(fetchEditReview, { obj: action.payload })
  yield put({ type: 'UPDATE_REVIEW', payload: { review } })
}
// // наблюдатель (watcher) типа действия + какой исполнитель будет работать
export function* mySaga() {
  yield takeEvery('GET_FETCH_CATEGORIES', getFetchCategories);
  yield takeEvery('GET_FETCH_SERVICES', getFetchServices);
  //   //   //yield takeEvery("GET_FETCH_SERVICES", getFetchServices);
  yield takeEvery("GET_FETCH_MASTERS", getFetchMasters);
  yield takeEvery("DELETE_FETCH_REVIEW", deleteFetchReview);
  yield takeEvery("ADD_FETCH_REVIEW", addFetchReview);
  yield takeEvery("APPROVE_FETCH_REVIEW", getApproveFetchReview);
  yield takeEvery("EDIT_FETCH_REVIEW", getEditFetchReview);
}

export default mySaga;
