
const initialState = { reservations: [] }

export const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_RESERVATIONS': {

      return { ...state, reservations: action.payload }
    }

    default:
      return state;
  }
};

export default reservationReducer;
