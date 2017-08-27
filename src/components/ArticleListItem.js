import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  border: 1px solid red;
  height: 10em;
`;

const ArticleListItem = ({ article }) =>
  <Container>
    <Link to={article.url}>
      {article.title}
    </Link>
    {article.authors}
    {article.body}
  </Container>;

export default ArticleListItem;
