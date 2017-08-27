import React from 'react';
import { lol } from '../reducers/actionCreators';

const Temp = () =>
  <div>
    <div> hello </div>
    <button
      onClick={() => {
        console.log('blah');
        lol();
      }}>
      {' '}hello{' '}
    </button>
  </div>;

export default Temp;
