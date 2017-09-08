import React from 'react';
import styled from 'styled-components';
import ArticleListItem from './ArticleListItem';

const Container = styled.div`
  flex-grow: 1;
  border: 1px solid black;
  border-bottom: 0;
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

	// if there is only one author, return that
	if (!arr.length) {
		return last;
	}

	// turn the authors into a list
    return arr.join(join) + finalJoin + last;    
};

// takes a sentence and title cases all words in it
const titleCase = function(sentence) {
	return sentence.split(' ').map(([h, ...tl]) =>
		(h.toUpperCase() + tl.join(''))
	).join(' ');
}

// based on an articles extended data, reconstructs the abstract of
// that article by uninverting the inverted index
// e.g. {'IndexLength': 3, 'InvertedIndex' {'hello': [0, 2], 'world': [1]}}
// e.g. => 'hello world hello'
const reconstructAbstract = function(extended) {
	if (!extended || !extended.IA) {
		return 'No abstract found';
	}

	const length = extended.IA.IndexLength;
	const wordsByPosition = extended.IA.InvertedIndex;

	var result = new Array(length);

	for (let word in wordsByPosition) {
		const positions = wordsByPosition[word];
		positions.forEach(function(pos) {
			result[pos] = word;
		});
	}

	return result.join(' ');
}

const ArticleList = ({ results, expandArticle }) =>
  <Container>
    {results.map(article =>
    	<ArticleListItem 
	    	key={article.Id}
	    	title={titleCase(article.Ti)}
	    	authors={toHumanReadableList(article.AA.map(obj => obj.AuN))}
	    	extended={JSON.parse(article.E)}
	    	abstract={reconstructAbstract(JSON.parse(article.E))}
	    	journal={article.J ? titleCase(article.J.JN) : 'No Journal Found'}
	    	citations={article.CC}
			expandArticle={expandArticle}
	    	{...article} 
    	/>
	)}
  </Container>;

ArticleList.defaultProps = { results: [] };

export default ArticleList;
