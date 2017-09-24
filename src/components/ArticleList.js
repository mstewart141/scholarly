import React from 'react';
import styled from 'styled-components';
import ArticleListItem from './ArticleListItem';

const Container = styled.div`
  border: 1px solid black;
  border-bottom: 0;
  min-height: 30em;
  max-height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;
  width: 50%;
`;

const ArticleList = ({ results, expandArticle, focus }) =>
  <Container>
    {results.map((article, index) =>
      <ArticleListItem
        {...article}
        expandArticle={expandArticle}
        index={index}
        active={focus === index}
      />
    )}
  </Container>;

ArticleList.defaultProps = { results: [] };

export default ArticleList;
