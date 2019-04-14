import React from 'react';

function AreaCompletionTracker(props) {
  if (props.status) {
    const [done, total] = props.status;
    return (
      <span>
        [{done}/{total}]
      </span>
    );
  } else {
    return null;
  }
}

export default AreaCompletionTracker;
