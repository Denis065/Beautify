
const initialState = { services: [], masterServices: [] }

export const portfolioCReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_MASTER_SERVICES': {
      return { ...state, services: action.payload.services }
    }
    default:
      return state;
  }
};

export default portfolioCReducer;
