import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex-grow: 1;
  border: 1px solid black;
  height: 50em;
`;

const ArticlePreview = ({ article }) =>
  <Container>
    {article}
  </Container>;

export default ArticlePreview;
