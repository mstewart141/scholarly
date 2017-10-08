import React, { Component } from 'react';
import styled from 'styled-components';

import SearchResult from './SearchResult';

const SearchContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  background: white;
  border: 1px solid black;
  border-radius: .2em;
  margin-bottom: 1em;
`;

const Input = styled.input`
  padding: 0.5em 1em;
  font-size: 1.2em;
  width: 100%;
  border-radius: 0.5em;
  border: 1px grey solid;
`;

class Search extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.clearArticleResults();
    this.props.executeQuery(this.state.query);
  }

  handleChange(event) {
    const q = event.target.value;
    this.setState({ query: q });
    this.props.getInterpretations(q, true);
  }

  render() {
    const parser = new DOMParser();
    const renderedCompletions = this.props.interpretations.map(
      interpretation => {
        const q = parser
          .parseFromString(interpretation.parse, 'text/xml')
          .getElementsByTagName('attr')[0].childNodes[0].nodeValue;

        return (
          <SearchResult
            key={interpretation.parse}
            text={q}
            expr={interpretation.rules[0].output.value}
            resolveEvaluateQuery={this.props.resolveEvaluateQuery}
            clearArticleResults={this.props.clearArticleResults}
          />
        );
      }
    );

    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <Input placeholder="Search" onChange={this.handleChange} />
          <SearchContainer>
            {renderedCompletions}
          </SearchContainer>
        </div>
      </form>
    );
  }
}

export default Search;
