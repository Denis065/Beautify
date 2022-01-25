import { something } from "../actionTypes/appAT"

export const somethingAC = (payload) => {
  return {
    type: something,
    payload
  }
}
