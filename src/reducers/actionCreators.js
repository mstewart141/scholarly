import { evaluate } from '../api/endpoints';

export const NOTIFY_OF_API_REQUEST = 'NOTIFY_OF_API_REQUEST';
export const FETCH_FROM_API_AFTER_REQUEST = 'FETCH_FROM_API_AFTER_REQUEST';
export const GRAB_RESOLVED_API_RESP_PAYLOAD = 'GRAB_RESOLVED_API_RESP_PAYLOAD';
export const LOL = 'LOL';
export const RESOLVE_EVALUATE_QUERY = 'RESOLVE_EVALUATE_QUERY';

const notifyOfApiRequest = () => ({
  type: NOTIFY_OF_API_REQUEST,
  requestInFlight: true
});

const grabResolvedApiRespPayload = payload => ({
  type: GRAB_RESOLVED_API_RESP_PAYLOAD,
  requestInFlight: false,
  payload
});

const testlol = 'node.js';

export const fetchFromApiAfterRequest = (
  searchTarget = testlol
) => dispatch => {
  dispatch(notifyOfApiRequest()); // not sure if this should be function or function invokation
  return fetch(`http://localhost:2500/search?q=${searchTarget}`)
    .then(response => response.json())
    .then(response => {
      dispatch(grabResolvedApiRespPayload(response));
    })
    .catch(error => console.log(error));
};

export const lol = () => ({ type: LOL });

export const resolveEvaluateQuery = (
  expr = "Composite(AA.AuN=='jaime teevan')"
) => dispatch =>
  evaluate(expr)
    .then(({ entities }) => entities)
    .then(entities =>
      dispatch({
        type: RESOLVE_EVALUATE_QUERY,
        entities
      })
    )
    .catch(error => console.log(error));
