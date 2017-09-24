import {
  CLEAR_ARTICLE_RESULTS,
  EVALUATE_SUCCESS,
  EXPAND_ARTICLE,
  INTERPRET_SUCCESS
} from './actionCreators';

const defaultState = { results: [], interpretations: [], focus: undefined };

const rootReducer = (state = defaultState, action) => {
  // console.log('REDUCER FIRING');
  switch (action.type) {
    case CLEAR_ARTICLE_RESULTS:
      return { ...state, results: action.results };
    case EVALUATE_SUCCESS:
      return {
        ...state,
        results: action.results.concat(state.results),
        focus: undefined
      };
    case EXPAND_ARTICLE:
      return { ...state, focus: action.index };
    case INTERPRET_SUCCESS:
      return { ...state, interpretations: action.interpretations };
    //   // should also change the inFlight stuff eventually
    //   return [...state];
    default:
      return state;
  }
};

export default rootReducer;
