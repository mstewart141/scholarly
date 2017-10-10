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
          clearArticleResults={this.props.clearArticleResults}
          showCompletions={this.props.showCompletions}
          getInterpretations={this.props.getInterpretations}
          resolveEvaluateQuery={this.props.resolveEvaluateQuery}
          executeQuery={this.props.interpretAndResolve}
          interpretations={this.props.interpretations}
          completionsShown={this.props.completionsShown}
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

const mapStateToProps = ({
  results,
  focus,
  interpretations,
  showCompletions
}) => ({
  results,
  focus,
  interpretations,
  completionsShown: showCompletions
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
