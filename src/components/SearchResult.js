import React from 'react';
import styled from 'styled-components';

const Container = styled.li`
  padding: .25em 1em;

  &:hover,
  &:active {
    background: lavender;
  }
`;

const handleClick = (text, expr, clearArticleResults, resolveEvaluateQuery) => {
  // todo: update search bar and autocomplete results
  clearArticleResults();
  resolveEvaluateQuery(expr);
};

const SearchResult = ({
  text,
  expr,
  clearArticleResults,
  resolveEvaluateQuery
}) =>
  <Container
    onClick={() =>
      handleClick(text, expr, clearArticleResults, resolveEvaluateQuery)}>
    {text}
  </Container>;

export default SearchResult;
