import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex-grow: 1;
  border: 1px solid black;
  border-left: 0;
  max-width: 50%;
`;

const ArticlePreview = ({ title, author, abstract, journal, citations }) =>
  <Container>
    <p>{abstract}</p>
  </Container>;

export default ArticlePreview;
