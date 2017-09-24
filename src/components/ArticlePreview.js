import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid black;
  border-left: 0;
  width: 50%;
  padding: 1.25em 1.75em;
  font-size: .9em;
`;

const ArticlePreview = ({ title, author, abstract, journal, citations }) =>
  <Container>
    {abstract}
  </Container>;

export default ArticlePreview;
