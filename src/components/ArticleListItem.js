import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  border-bottom: 1px solid #333;
  padding .5em 1em;
`;

const Authors = styled.p`
  text-transform: none;
`;

const ArticleListItem = ({ title, authors, extended}) =>
  <Container>
    <Link to={'#'}>
      {title}
    </Link>
    <Authors>{authors}</Authors>
  </Container>;

export default ArticleListItem;
