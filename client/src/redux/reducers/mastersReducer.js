import { mastersAT } from '../actionTypes/mastersAT';

// const cats = ''
const mastersInitialState = {
  masters: {},
  allMasters: []
}

const mastersReducer = (state = mastersInitialState, action) => {

  switch (action.type) {
    case mastersAT.INIT_MASTERS:
      const masters = action.payload.masters
      console.log('!!!!!!!!!!!!MASTERS V REDJUSEREEE!!!!!!!!!!', masters)
      return { ...state, masters: masters };
    case 'INIT_ALL_MASTERS':
      return { ...state, allMasters: action.payload }
    default:
      return state
  }

}

export default mastersReducer
