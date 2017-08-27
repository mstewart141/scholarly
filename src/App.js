import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './reducers/actionCreators';
import ArticleList from './components/ArticleList';
import ArticlePreview from './components/ArticlePreview';
import Search from './components/Search';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 80%;
  margin: auto;
  padding-top: 10em;
`;

const Subcontainer = styled.div`display: flex;`;

class App extends Component {
  render() {
    return (
      <Container>
        <Search />
        <Subcontainer>
          <ArticleList />
          <ArticlePreview />
        </Subcontainer>
      </Container>
    );
  }
}

const mapStateToProps = null;
const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
