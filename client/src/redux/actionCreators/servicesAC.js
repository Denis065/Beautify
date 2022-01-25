import { servicesAT } from '../actionTypes/servicesAT'

export const servicesInitAC = (payload) => {
  return {
    type: servicesAT.INIT_SERVICES,
    payload
  }
}
export const gettFetchServicesAC = (payload) => {
  return {
    type: servicesAT.GET_FETCH_SERVICES,
    payload
  }
}
// export const fetchChooseServiceAC = (payload) => {
//   return {
//     type: servicesAT.GET_FETCH_CHOOSE_SERVICE,
//     payload
//   }
// }
