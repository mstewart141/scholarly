import React from 'react';
import styled from 'styled-components';

const Container = styled.li`
  padding: .25em 1em;

  &:hover,
  &:active {
    background: lavender;
  }
`;

const handleClick = (
  text,
  expr,
  clearArticleResults,
  showCompletions,
  resolveEvaluateQuery
) => {
  // todo: update search bar and autocomplete results
  clearArticleResults();
  showCompletions(false);
  resolveEvaluateQuery(expr);
};

const SearchResult = ({
  text,
  expr,
  clearArticleResults,
  showCompletions,
  resolveEvaluateQuery
}) =>
  <Container
    onClick={() =>
      handleClick(
        text,
        expr,
        clearArticleResults,
        showCompletions,
        resolveEvaluateQuery
      )}>
    {text}
  </Container>;

export default SearchResult;
