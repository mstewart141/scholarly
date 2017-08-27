import { COGNITIVE_API_KEY } from '../../secrets/secrets';

/* INTERPRET :: https://westus.dev.cognitive.microsoft.com/docs/services/56332331778daf02acc0a50b/operations/56332331778daf06340c9666
 * query string                | Query entered by user. If complete is set to 1, query will be interpreted as a prefix for generating query auto-completion suggestions.
 * complete (optional) boolean | 1 means that auto-completion suggestions are generated based on the grammar and graph data.
 * count    (optional) number  | Maximum number of interpretations to return.
 * offset   (optional) number  | Index of the first interpretation to return. For example, count=2&offset=0 returns interpretations 0 and 1. count=2&offset=2 returns interpretations 2 and 3.
 * timeout  (optional) number  | Timeout in milliseconds. Only interpretations found before the timeout has elapsed are returned.
 * model    (optional) string  | Name of the model that you wish to query. Currently, the value defaults to "latest".
* */
export var interpretOk = (query /* , complete, count, offset, timeout */) => {
  // [?query][&complete][&count][&offset][&timeout][&model]'
  const BASE =
    'https://westus.api.cognitive.microsoft.com/academic/v1.0/interpret?';

  const uri = `${BASE}${query}`;

  const request = new Request(uri, {
    headers: new Headers({
      'Ocp-Apim-Subscription-Key': `{${COGNITIVE_API_KEY}}`
    })
  });

  fetch(request).then(res => res).then(console.log);
};

export const ok = () => 7;
