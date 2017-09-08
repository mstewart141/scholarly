import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  border-bottom: 1px solid #333;
  padding .5em 1em;
`;

const Title = styled.p`
  margin: 0;
  font-size: 1.2em;
`;

const Authors = styled.p`
  margin: 0;
  font-size: .75em;
`;

const Abstract = styled.p`
  font-size: .9em;
  line-height: 1em;
`;

const ArticleListItem = ({ title, authors, abstract, extended}) =>
  <Container>
    <Link to={'#'}>
      <Title>{title}</Title>
    </Link>
    <Authors>{authors}</Authors>
    <Abstract>{abstract.slice(0, 250) + '...'}</Abstract>
  </Container>;

export default ArticleListItem;
