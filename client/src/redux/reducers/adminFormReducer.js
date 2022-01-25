
const initialState = {
  answer: {
    checked: false, checkAdmin: false, checkPass: false
  }
}

const adminFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_ANSWER":
      const copyAnswer = { ...state.answer };
      console.log(copyAnswer);
      copyAnswer.checked = action.payload.checked;
      copyAnswer.checkAdmin = action.payload.checkAdmin
      copyAnswer.checkPass = action.payload.checkPass;
      return { ...state, answer: copyAnswer }
    case 'ADMIN_CHECK_RESET':
      const copyAnswer2 = { ...state.answer };
      copyAnswer2.checked = false
      copyAnswer2.checkAdmin = false
      copyAnswer2.checkPass = false
      return {
        ...state, answer: copyAnswer2
      }

    default:
      return state
  }

}

export default adminFormReducer
