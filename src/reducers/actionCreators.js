import { evaluate, interpret } from '../api/endpoints';
import { processResults } from '../api/utils';

export const LOL = 'LOL';
export const EVALUATE_SUCCESS = 'EVALUATE_SUCCESS';
export const INTERPRET_SUCCESS = 'INTERPRET_SUCCESS';
export const EXPAND_ARTICLE = 'EXPAND_ARTICLE';

const interpretSuccess = interpretations => ({
  type: INTERPRET_SUCCESS,
  interpretations
});

const evaluateSuccess = results => ({
  type: EVALUATE_SUCCESS,
  results
});

export const expandArticleByIndex = index => ({
  type: EXPAND_ARTICLE,
  index
});

export const getInterpretations = userQuery => dispatch =>
  interpret(userQuery)
    .then(({ interpretations }) => interpretations)
    .then(interpretations => {
      dispatch(interpretSuccess(interpretations));
      return new Promise(res => res(interpretations));
    })
    .catch(error => console.log(error)); // TODO: dispatch interpretFailure

export const resolveEvaluateQuery = (
  expr = "Composite(AA.AuN=='jaime teevan')"
) => dispatch =>
  evaluate(expr)
    .then(({ entities }) => entities)
    .then(results => dispatch(evaluateSuccess(processResults(results))))
    .catch(error => console.log(error)); // TODO: dispatch evaluateFailure

export const interpretAndResolve = userQuery => dispatch =>
  getInterpretations(userQuery)(dispatch)
    .then(interps => {
      const rawResults = interps.length >= 4 ? interps.slice(0, 4) : interps;
      const exprArr = rawResults.map(({ rules }) => rules[0].output.value);
      return exprArr;
    })
    .then(exprArr => exprArr.map(expr => resolveEvaluateQuery(expr)(dispatch)))
    .catch(error => console.log(error));
