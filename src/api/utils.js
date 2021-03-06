// takes a sentence and title cases all words in it
const titleCase = sentence =>
  sentence
    .split(' ')
    .map(([h, ...tl]) => h.toUpperCase() + tl.join(''))
    .join(' ');

// format authors into a human readable list
// e.g. ([frog, cog, dog log]) => 'Frog, Cog, and Dog Log'
const toHumanReadableList = (array, join = ', ', finalJoin = ' and ') => {
  const arr = array.slice(0).map(titleCase);
  const last = arr.pop();

  // turn the authors into a list
  return arr.length < 1 ? last : arr.join(join) + finalJoin + last;
};

// based on an articles extended data, reconstructs the abstract of
// that article by uninverting the inverted index
// e.g. {'IndexLength': 3, 'InvertedIndex' {'hello': [0, 2], 'world': [1]}}
// e.g. => 'hello world hello'
const reconstructAbstract = extended => {
  if (!extended || !extended.IA) {
    return 'No abstract found';
  }
  const { IA: { IndexLength, InvertedIndex: wordsByPosition } } = extended;

  const result = Object.entries(
    wordsByPosition
  ).reduce((accum, [word, positions]) => {
    positions.forEach(pos => {
      accum[pos] = word;
    });
    return accum;
  }, new Array(IndexLength));

  return result.join(' ');
};

export const lol = 7;
export const processResults = results =>
  results.map(
    (
      {
        AA,
        CC: citations,
        E: extendedArticle,
        Id: key,
        J,
        logprob,
        Ti: title,
        Y: year
      },
      idx
    ) => {
      const extended = JSON.parse(extendedArticle);
      return {
        abstract: reconstructAbstract(extended),
        authors: toHumanReadableList(AA.map(({ AuN }) => AuN)),
        citations,
        extended,
        idx,
        journal: J && J.JN ? titleCase(J.JN) : 'No Journal Found',
        key,
        logprob,
        title: titleCase(title),
        year
      };
    }
  );
