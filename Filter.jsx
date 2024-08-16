import React from 'react';

const Filter = ({ filterStatus }) => {
  return (
    <div>
      <button onClick={() => filterStatus('all')}>All</button>
      <button onClick={() => filterStatus('completed')}>Completed</button>
      <button onClick={() => filterStatus('not completed')}>Not Completed</button>
    </div>
  );
};

export default Filter;
