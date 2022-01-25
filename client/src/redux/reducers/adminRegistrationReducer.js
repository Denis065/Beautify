
const initialState = {
  reservations: [],
  message: null
}

export const adminRegistrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_RESERVATIONS': {

      return { ...state, reservations: action.payload }
    }

    case 'CHANGE_PASS': {
      // console.log('==========>>> changePASS', action.payload);

      return { ...state, message: action.payload.result.message }
    }
    case 'RESET_MESSAGE': {
      // console.log('==========>>> changePASS', action.payload);

      return { ...state, message: null }
    }
    default:
      return state;
  }
};

export default adminRegistrationReducer;
