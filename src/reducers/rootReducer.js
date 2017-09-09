import {
  // NOTIFY_OF_API_REQUEST,
  // FETCH_FROM_API_AFTER_REQUEST,
  // GRAB_RESOLVED_API_RESP_PAYLOAD,
  LOL,
  EVALUATE_SUCCESS,
  INTERPRET_SUCCESS,
  EXPAND_ARTICLE,
} from './actionCreators';

const defaultState = { cat: 7, results: [], interpretations: [] };

const rootReducer = (state = defaultState, action) => {
  // console.log('REDUCER FIRING');
  switch (action.type) {
    case LOL:
      console.log('yup lololol switched');
      return { ...state, cat: 5 };
    case EVALUATE_SUCCESS:
      return { ...state, results: action.results };
    case INTERPRET_SUCCESS:
      return { ...state, interpretations: action.interpretations };
    case EXPAND_ARTICLE:
      return { ...state, focus: action.article };
    //   // should also change the inFlight stuff eventually
    //   return [...state];
    // case FETCH_FROM_API_AFTER_REQUEST:
    //   console.log('fetching');
    //   return state;
    // case GRAB_RESOLVED_API_RESP_PAYLOAD:
    //   console.log(['grabed payload, updated state', ...state, action.payload]);
    //   return [action.payload, ...state];
    default:
      return state;
  }
};

export default rootReducer;
