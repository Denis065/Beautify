import { categoriesAT } from '../actionTypes/categoriesAT';

// const cats = ''
const categoriesInitialState = {
  categories: {}
}

export const categoriesReducer = (state = categoriesInitialState, action) => {

  switch (action.type) {
    case 'INIT_CATEGORIES':
      const categories = action.payload
      console.log('INIT CATEGORIES WORK', categories)
      return { ...state, categories: categories };

    // case categoriesAT.INIT_CATEGORIES:
    //   return { ...state, categories: categories };

    default:
      return state
  }

}
