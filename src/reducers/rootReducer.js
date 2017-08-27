import {
  // NOTIFY_OF_API_REQUEST,
  // FETCH_FROM_API_AFTER_REQUEST,
  // GRAB_RESOLVED_API_RESP_PAYLOAD,
  LOL
} from './actioncreators';

const defaultState = [];

const rootReducer = function rootReducerKappa(state = defaultState, action) {
  // console.log('REDUCER FIRING');
  switch (action.type) {
    case LOL:
      console.log('yup lololol switched');
      return state;
    // case NOTIFY_OF_API_REQUEST:
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
