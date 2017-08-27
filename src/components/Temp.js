import React from 'react';
import * as endpoints from '../api/endpoints';

const Temp = ({ lol }) =>
  <div>
    <div> hello </div>
    <button onClick={lol}>hello</button>
    <button onClick={() => endpoints.interpret('xg-boost')}>interprete</button>
  </div>;

export default Temp;
