import React from 'react';

const Temp = ({ lol }) =>
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
