import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: .5em 1em;
  font-size: 1.2em;
  width: 100%;
  border-radius: .5em;
  border: 1px grey solid;
  margin-bottom: 1em;
`;

class Search extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.executeQuery(this.search.value);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <Input placeholder="Search" innerRef={(search) => {this.search = search}}/>
      </form>
    );
  }
}

export default Search;
