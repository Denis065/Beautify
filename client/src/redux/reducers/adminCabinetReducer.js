
const initialState = {
  services: [],
  masters: [],
}

export const adminCabinetReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_MASTERS_AND_SERVICES': {
      // console.log('PAYLOAD', action.payload);
      const { masters } = action.payload;
      const { services } = action.payload;
// console.log('++++++++ REDUCER masters', masters);
// console.log('++++++++ services', services);


      return { ...state, services, masters }
    }

    // case 'CHANGE_PASS': {

    //   return { ...state, chagePass: action.payload }
    // }

    default:
      return state;
  }
};

export default adminCabinetReducer;
