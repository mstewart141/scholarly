import React from 'react';
import styled from 'styled-components';
import ArticleListItem from './ArticleListItem';

const Container = styled.div`
  flex-grow: 1;
  border: 1px solid black;
  min-height: 30em;
  overflow: hidden;
  max-width: 50%;
`;

// format authors into a human readable list
// e.g. ([frog, cog, dog log]) => 'Frog, Cog, and Dog Log'
const toHumanReadableList = function(array, join, finalJoin) {
    var arr = array.slice(0);
    var last = arr.pop();

    join = join || ', ';
    finalJoin = finalJoin || ' and ';

	arr = arr.map((author) => titleCase(author));
	last = titleCase(last);

    return arr.join(join) + finalJoin + last;    
};

// takes a sentence and title cases all words in it
const titleCase = function(sentence) {
	return sentence.split(' ').map(([h, ...tl]) =>
		(h.toUpperCase() + tl.join(''))
	).join(' ');
}

const ArticleList = ({ results }) =>
  <Container>
    {results.map(article =>
    	<ArticleListItem 
	    	key={article.Id}
	    	title={titleCase(article.Ti)}
	    	authors={toHumanReadableList(article.AA.map(obj => obj.AuN))}
	    	extended={JSON.parse(article.E)}
	    	{...article} 
    	/>
	)}
  </Container>;

ArticleList.defaultProps = { results: [] };

export default ArticleList;
