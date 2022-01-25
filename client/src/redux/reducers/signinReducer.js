
const initialState = {

  clientExist: 'initial', correctPassword: 'inital'

}

const signinReducer = (state = initialState, action) => {

  switch (action.type) {
    case "SIGN_IN":
      let copyClientExist = { ...state.clientExist };
      let copyCorrectPassword = { ...state.correctPassword };
      if (action.payload.clientExist !== undefined) {
        copyClientExist = action.payload.clientExist;
      }
      if (action.payload.correctPassword !== undefined) {
        copyCorrectPassword = action.payload.correctPassword;
      }
      return { ...state, clientExist: copyClientExist, correctPassword: copyCorrectPassword }


    default:
      return state
  }

}

export default signinReducer
