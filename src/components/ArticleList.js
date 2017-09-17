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

const ArticleList = ({ results, expandArticle }) => (
  <Container>
    {results.map(article => (
      <ArticleListItem {...article} expandArticle={expandArticle} />
    ))}
  </Container>
);

ArticleList.defaultProps = { results: [] };

export default ArticleList;
