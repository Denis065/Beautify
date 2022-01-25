
const initialState = {

  telephone: '', password: ''

}

const clientReducer = (state = initialState, action) => {

  switch (action.type) {
    case "CLIENT_SIGN_UP":
      let copyTelephone = { ...state.telephone };
      let copyPassword = { ...state.password };

      copyTelephone = action.payload.telephone;
      copyPassword = action.payload.password;

      return { ...state, telephone: copyTelephone, password: copyPassword }


    default:
      return state
  }

}

export default clientReducer;
