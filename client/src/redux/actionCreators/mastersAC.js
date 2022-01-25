import { mastersAT } from '../actionTypes/mastersAT'

export const mastersInitAC = (payload) => {
  return {
    type: mastersAT.INIT_MASTERS,
    payload
  }
}
export const getFetchMastersAC = (payload) => {
  return {
    type: mastersAT.GET_FETCH_MASTERS,
    payload
  }
}
