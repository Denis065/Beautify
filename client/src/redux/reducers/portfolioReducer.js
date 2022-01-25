
const initialState = { masters: [] }

export const portfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_PORTFOLIO': {

      return { ...state, masters: action.payload }
    }

    default:
      return state;
  }
};

export default portfolioReducer;
