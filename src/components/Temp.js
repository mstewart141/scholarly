import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../reducers/actionCreators';
import * as endpoints from '../api/endpoints';

const Temp = ({
  lol,
  getInterpretations,
  resolveEvaluateQuery,
  interpretAndResolve
}) => (
  <div>
    <div> hello </div>
    <div> hello </div>
    <div> hello </div>
    <div> hello </div>
    <div> hello </div>
    <div> hello </div>
    <button onClick={lol}>hello</button>
    <button onClick={() => getInterpretations('xgboost')}>interprete</button>
    <button onClick={() => resolveEvaluateQuery()}>evaluate</button>
    <button onClick={() => interpretAndResolve('xgboost')}>BOTH</button>
  </div>
);

// () => endpoints.evaluate("Composite(AA.AuN=='jaime teevan')")

const mapStateToProps = null;
const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Temp);