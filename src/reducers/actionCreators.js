import { evaluate, interpret } from '../api/endpoints';

export const LOL = 'LOL';
export const EVALUATE_SUCCESS = 'EVALUATE_SUCCESS';
export const INTERPRET_SUCCESS = 'INTERPRET_SUCCESS';

const interpretSuccess = interpretations => ({
  type: INTERPRET_SUCCESS,
  interpretations
});

const evaluateSuccess = results => ({
  type: EVALUATE_SUCCESS,
  results
});

export const lol = () => ({ type: LOL });

export const getInterpretations = userQuery => dispatch =>
  interpret(userQuery)
    .then(({ interpretations }) => interpretations)
    .then(interpretations => {
      dispatch(interpretSuccess(interpretations));

      console.log('dfssdfdf', new Promise((res, rej) => res(interpretations)));
      return new Promise((res, rej) => res(interpretations)); // value
    })
    .catch(error => console.log(error)); // dispatch interpretFailure

export const resolveEvaluateQuery = (
  expr = "Composite(AA.AuN=='jaime teevan')"
) => dispatch =>
  evaluate(expr)
    .then(({ entities }) => entities)
    .then(results => dispatch(evaluateSuccess(results)))
    .catch(error => console.log(error)); // dispatch evaluateFailure

export const interpretAndResolve = userQuery => dispatch =>
  getInterpretations(userQuery)(dispatch)
    .then(interpretations => interpretations[0].rules[0].output.value)
    .then(expr => resolveEvaluateQuery(expr)(dispatch))
    .catch(error => console.log(error));
