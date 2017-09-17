import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex-grow: 1;
  border: 1px solid black;
  border-left: 0;
  max-width: 50%;
  padding: .5em 1em;
  font-size: .9em;
`;

const ArticlePreview = ({ title, author, abstract, journal, citations }) => (
  <Container>
    {abstract}
  </Container>
);

export default ArticlePreview;
