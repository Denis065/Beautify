import { something } from '../actionTypes/appAT';

const initialState = {}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case something: {

      return {

      };
    }

    default:
      return state;
  }
};

export default appReducer;
