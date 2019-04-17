import React from 'react';

function AreaCompletionTracker({status}) {
  if (status) {
    const [done, total] = status;
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
