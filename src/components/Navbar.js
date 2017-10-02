import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.ul`
  background-color: #333;
  list-style-type: none;
  position: fixed;
  display: flex;
  margin: 0 auto;
  padding: 0 10%;
  width: 100%;
`;

const StyledMenuItem = styled.li`padding: 0.75em 1em;`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Navbar = ({ articles }) =>
  <Container>
    <StyledMenuItem>
      <StyledLink to="/">Home</StyledLink>
    </StyledMenuItem>
    <StyledMenuItem>
      <StyledLink to="/about">About</StyledLink>
    </StyledMenuItem>
  </Container>;

export default Navbar;
