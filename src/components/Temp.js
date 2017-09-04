import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../reducers/actionCreators';
import * as endpoints from '../api/endpoints';

const Temp = ({ lol, resolveEvaluateQuery }) => (
  <div>
    <div> hello </div>
    <div> hello </div>
    <div> hello </div>
    <div> hello </div>
    <div> hello </div>
    <div> hello </div>
    <button onClick={lol}>hello</button>
    <button onClick={() => endpoints.interpret('xgboost')}>interprete</button>
    <button onClick={() => resolveEvaluateQuery()}>evaluate</button>
  </div>
);

// () => endpoints.evaluate("Composite(AA.AuN=='jaime teevan')")

const mapStateToProps = null;
const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Temp);
