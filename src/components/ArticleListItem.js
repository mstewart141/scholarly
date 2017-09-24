import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  border-bottom: 1px solid #333;
  padding: 1.25em 1.75em;
  background: ${props => (props.active ? '#ffef96' : 'white')};

  &:hover {
    background: #ffef96;
  }
`;

const Title = styled.p`
  margin-top: 0;
  margin-bottom: 0.1em;
  font-size: 1.2em;
`;

const Authors = styled.p`
  margin: 0;
  font-size: 0.75em;
`;

const Abstract = styled.p`
  font-size: 0.9em;
  line-height: 1em;
`;

const Journal = styled.span`
  font-size: 0.75em;
  margin: 0;
`;

const Citations = Journal;

const ArticleListItem = ({
  title,
  authors,
  abstract,
  journal,
  citations,
  expandArticle,
  index,
  active,
  year
}) =>
  <Container onClick={() => expandArticle(index)} active={active}>
    <Link to={'#'}>
      <Title>
        {title}
      </Title>
    </Link>
    <Authors>
      {authors}
    </Authors>
    <Abstract>{`${abstract.slice(0, 250)}...`}</Abstract>
    <Journal>
      {journal} ({year}) • {`${citations} citations`}
    </Journal>
    <Citations />
  </Container>;

export default ArticleListItem;
