import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import * as actionCreators from './reducers/actionCreators';
import ArticleList from './components/ArticleList';
import ArticlePreview from './components/ArticlePreview';
import Search from './components/Search';

const Container = styled.div`
  width: 80%;
  max-width: 960px;
  margin: auto;
  padding-top: 4em;
  max-height: 100vh;
`;

const Subcontainer = styled.div`display: flex;`;

class App extends Component {
  render() {
    return (
      <Container>
        <Search
          executeQuery={this.props.interpretAndResolve}
          clearArticleResults={this.props.clearArticleResults}
          getInterpretations={this.props.getInterpretations}
          interpretations={this.props.interpretations}
        />
        <Subcontainer>
          <ArticleList
            results={this.props.results}
            expandArticle={this.props.expandArticleByIndex}
            focus={this.props.focus}
          />
          <ArticlePreview {...this.props.results[this.props.focus]} />
        </Subcontainer>
      </Container>
    );
  }
}

const mapStateToProps = ({ results, focus, interpretations }) => ({
  results,
  focus,
  interpretations
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
