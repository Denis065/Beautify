



const initialState = {
  session: {
    isAdmin: false, authClient: false
  }
}

const sessionReducer = (state = initialState, action) => {

  switch (action.type) {
    case "INIT_SESSION":
      const copySession = { ...state.session };
      copySession.isAdmin = action.payload.session.isAdmin;
      copySession.authClient = action.payload.session.authClient;
      return { ...state, session: copySession }


    default:
      return state
  }

}

export default sessionReducer
