import React from 'react';
import styled from 'styled-components';
import ArticleListItem from './ArticleListItem';

const Container = styled.div`
  flex-grow: 1;
  border: 1px solid black;
  border-bottom: 0;
  min-height: 30em;
  overflow: hidden;
  max-width: 50%;
`;

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

  const result = new Array(IndexLength);

  for (const word in wordsByPosition) {
    const positions = wordsByPosition[word];
    positions.forEach(pos => {
      result[pos] = word;
    });
  }

  return result.join(' ');
};

const ArticleList = ({ results, expandArticle }) => (
  <Container>
    {results.map(article => (
      <ArticleListItem
        key={article.Id}
        title={titleCase(article.Ti)}
        authors={toHumanReadableList(article.AA.map(obj => obj.AuN))}
        extended={JSON.parse(article.E)}
        abstract={reconstructAbstract(JSON.parse(article.E))}
        journal={article.J ? titleCase(article.J.JN) : 'No Journal Found'}
        citations={article.CC}
        expandArticle={expandArticle}
        {...article}
      />
    ))}
  </Container>
);

ArticleList.defaultProps = { results: [] };

export default ArticleList;
