import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: .5em 1em;
  width: 100%;
  border-radius: .5em;
  border: 1px grey solid;
`;

const Search = ({ onSubmit }) => <Input placeholder="Search" />;

export default Search;
