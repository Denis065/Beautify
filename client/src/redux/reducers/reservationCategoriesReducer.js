import { time } from '../../helpers/time'

const reservationCategoriesInitialState = {
  reservationCategories: [],
  reservationServices: [],
  reservationMasters: [],
  reservationServiceId: null,
  reservationMasterId: null,
  freeTime: [],
  allTime: time,
  itemService: null,
  itemMaster: null,
}

export const reservationCategoriesReducer = (state = reservationCategoriesInitialState, action) => {

  switch (action.type) {
    case 'INIT_RESERVATION_CATEGORIES':
      const categories = action.payload;

      return { ...state, reservationCategories: categories };

    case 'INIT_RESERVATION_SERVICES':
      const services = action.payload
      return { ...state, reservationServices: services, reservationMasters: [] };

    case 'INIT_RESERVATION_MASTERS':
      const { masters } = action.payload;
      const { serviceId } = action.payload;
      const copyState = { ...state };
      const { service } = action.payload;
      // console.log(master, '==============MASTER');
      let copyMasters = copyState.reservationMasters
      let copyServiceId = copyState.reservationServiceId

      copyMasters = masters;
      copyServiceId = serviceId

      return { ...state, reservationMasters: copyMasters, reservationServiceId: copyServiceId, itemService: service };

    case 'ADD_RESERVATION_MASTER':
      const masterId = action.payload.id
      const { master } = action.payload
      // console.log(action.payload, '98769541651651654654');
      return { ...state, reservationMasterId: masterId, itemMaster: master };


    case 'CLEAR_RESERV':
      return {
        ...state,
        reservationServices: [],
        reservationMasters: [],
        reservationServiceId: null,
        reservationMasterId: null,
        freeTime: [],
      };

    case 'INIT_FREE_TIME':
      const busyMasterId = state.reservationMasterId
      const { allTime } = state
      // console.log('===========>>. state mast id', busyMasterId);
      const busyMasters = action.payload.filter(el => el.masterId === +busyMasterId)
      // console.log('======>>>> mastid', busyMasters)
      const busyTime = busyMasters.map(el => el.time);
      // console.log('=============>>> busy', busyTime);

      let freeTime = allTime.filter(el => !busyTime.includes(el))

      return {
        ...state, freeTime,
      };

    default:
      return state
  }
}
