import React from 'react';
import styled from 'styled-components';
import ArticleListItem from './ArticleListItem';

const Container = styled.div`
  flex-grow: 1;
  border: 1px solid black;
  height: 50em;
`;

const ArticleList = ({ articles }) =>
  <Container>
    {articles.map(article => <ArticleListItem {...article} />)}
  </Container>;

ArticleList.defaultProps = { articles: [] };

export default ArticleList;
