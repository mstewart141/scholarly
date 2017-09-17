import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 0.5em 1em;
  font-size: 1.2em;
  width: 100%;
  border-radius: 0.5em;
  border: 1px grey solid;
  margin-bottom: 1em;
`;

class Search extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({query: event.target.value});
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.executeQuery(this.state.query);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <Input
          placeholder="Search"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default Search;
