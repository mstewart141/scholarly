import {
  LOL,
  EVALUATE_SUCCESS,
  INTERPRET_SUCCESS,
  EXPAND_ARTICLE
} from './actionCreators';

const defaultState = { results: [], interpretations: [], focus: undefined };

const rootReducer = (state = defaultState, action) => {
  // console.log('REDUCER FIRING');
  switch (action.type) {
    case LOL:
      console.log('yup lololol switched');
      return { ...state, cat: 5 };
    case EVALUATE_SUCCESS:
      return {
        ...state,
        results: action.results.concat(state.results),
        focus: undefined
      };
    case INTERPRET_SUCCESS:
      return { ...state, interpretations: action.interpretations };
    case EXPAND_ARTICLE:
      return { ...state, focus: action.index };
    //   // should also change the inFlight stuff eventually
    //   return [...state];
    default:
      return state;
  }
};

export default rootReducer;
