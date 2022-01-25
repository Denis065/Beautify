import { servicesAT } from '../actionTypes/servicesAT';

// const cats = ''
const servicesInitialState = {
  services: {}
}

const servicesReducer = (state = servicesInitialState, action) => {

  switch (action.type) {
    case servicesAT.INIT_SERVICES:
      const services = action.payload.services
      return { ...state, services: services };

    default:
      return state
  }

}

export default servicesReducer
