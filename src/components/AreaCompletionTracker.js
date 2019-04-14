import React from 'react';

function AreaCompletionTracker(props) {
  console.log(props.status);
  return <span>{props.status[0]}</span>;
}

export default AreaCompletionTracker;
