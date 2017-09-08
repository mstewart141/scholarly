import { COGNITIVE_API_KEY } from '../secrets/secrets';

const BASE_URL = 'https://westus.api.cognitive.microsoft.com/academic/v1.0/';

const header = {
  headers: new Headers({
    'Ocp-Apim-Subscription-Key': `${COGNITIVE_API_KEY}`
  })
};

const makeCall = uri => {
  const request = new Request(uri, header);

  return fetch(request)
    .then(res => res.json())
    .then(res => {
      console.log('fetch returning  ', res);
      return res;
    });
};

/* INTERPRET :: https://westus.dev.cognitive.microsoft.com/docs/services/56332331778daf02acc0a50b/operations/56332331778daf06340c9666
 * query string                | Query entered by user. If complete is set to 1, query will be interpreted as a prefix for generating query auto-completion suggestions.
 * complete (optional) boolean | 1 means that auto-completion suggestions are generated based on the grammar and graph data.
 * count    (optional) number  | Maximum number of interpretations to return.
 * offset   (optional) number  | Index of the first interpretation to return. For example, count=2&offset=0 returns interpretations 0 and 1. count=2&offset=2 returns interpretations 2 and 3.
 * timeout  (optional) number  | Timeout in milliseconds. Only interpretations found before the timeout has elapsed are returned.
 * model    (optional) string  | Name of the model that you wish to query. Currently, the value defaults to "latest".
* */
export const interpret = query => {
  // [?query][&complete][&count][&offset][&timeout][&model]'
  const endpoint = 'interpret?query=';
  const uri = `${BASE_URL + endpoint + query}`;

  return makeCall(uri);
};

/* EVALUATE :: https://westus.dev.cognitive.microsoft.com/docs/services/56332331778daf02acc0a50b/operations/565d753be597ed16ac3ffc03
 * expr string                  | A query expression that specifies which entities should be returned.
 * model      (optional) string | Name of the model that you wish to query. Currently, the value defaults to "latest".
 * count      (optional) number | Number of results to return.
 * offset     (optional) number | Index of the first result to return.
 * orderby    (optional) string | Name of an attribute that is used for sorting the entities. Optionally, ascending/descending can be specified. The format is: name:asc or name:desc.
 * attributes (optional) string | A comma delimited list that specifies the attribute values that are included in the response. Attribute names are case-sensitive.
* */
export const evaluate = (expr, attributes = ['Id', 'Ti']) => {
  // [?query][&complete][&count][&offset][&timeout][&model]'
  const attrStr = attributes.reduce((a, b) => `${a},${b}`, 'Id');

  const endpoint = 'evaluate?expr=';
  const uri = `${BASE_URL + endpoint + expr}&attributes=${attrStr}`;

  return makeCall(uri);
};
