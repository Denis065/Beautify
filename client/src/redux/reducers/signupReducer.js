
const initialState = {

  clientExist: 'initial'

}

const signupReducer = (state = initialState, action) => {

  switch (action.type) {
    case "SIGN_UP":
      let copyClientExist = { ...state.clientExist };
      console.log(action.payload);
      copyClientExist = action.payload.clientExist;
      return { ...state, clientExist: copyClientExist }

    default:
      return state
  }

}

export default signupReducer
