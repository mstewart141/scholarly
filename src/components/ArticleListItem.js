import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  border-bottom: 1px solid #333;
  padding .5em 1em;
`;

const Title = styled.p`
  margin-top: 0;
  margin-bottom: .1em;
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

const Journal = styled.span`
  font-size: .75em;
  margin: 0;
`;

const Citations = Journal;

const ArticleListItem = ({ title, authors, abstract, journal, citations, expandArticle}) =>
  <Container 
    onClick={() => expandArticle({
      title: title,
      authors: authors,
      abstract: abstract,
      journal: journal,
      citations: citations,
    })}>
    <Link to={'#'}>
      <Title>{title}</Title>
    </Link>
    <Authors>{authors}</Authors>
    <Abstract>{abstract.slice(0, 250) + '...'}</Abstract>
    <Journal>{journal} • {citations + ' citations'}</Journal> 
    <Citations></Citations>
  </Container>;

export default ArticleListItem;
