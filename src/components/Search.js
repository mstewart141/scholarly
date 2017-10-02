import React, { Component } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  margin-bottom: 1em;
  z-index: 1;
  max-height: 0;
`;

const Input = styled.input`
  padding: 0.5em 1em;
  font-size: 1.2em;
  width: 100%;
  border-radius: 0.5em;
  border: 1px grey solid;
`;

const SearchResult = styled.div`
  padding: .25em 1em;
  z-index: 2;
  &:hover {
    background: lavender;
  }
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
          <SearchResult style={{ margin: 0 }}>
            {q}
          </SearchResult>
        );
      }
    );

    return (
      <form onSubmit={this.onSubmit}>
        <Input placeholder="Search" onChange={this.handleChange} />
        <SearchContainer>
          {renderedCompletions}
        </SearchContainer>
      </form>
    );
  }
}

export default Search;
