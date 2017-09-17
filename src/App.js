import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import * as actionCreators from './reducers/actionCreators';
import ArticleList from './components/ArticleList';
import ArticlePreview from './components/ArticlePreview';
import Search from './components/Search';

const Container = styled.div`
  max-width: 80%;
  margin: auto;
  padding-top: 4em;
`;

const Subcontainer = styled.div`display: flex;`;

class App extends Component {
  render() {
    return (
      <Container>
        <Search executeQuery={this.props.interpretAndResolve} />
        <Subcontainer>
          <ArticleList
            results={this.props.results}
            expandArticle={this.props.expandArticleByIndex}
          />
          <ArticlePreview {...this.props.focus} />
        </Subcontainer>
      </Container>
    );
  }
}

const mapStateToProps = ({ results, focus }) => ({ results, focus });

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
