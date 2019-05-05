import React from 'react';
import Badge from 'react-bootstrap/Badge';

function AreaCompletionTracker({status}) {
  if (status) {
    const [done, total] = status;
    const completed = done === total;

    return (
      <Badge variant={completed ? 'success' : 'secondary'}>
        {completed ? 'DONE' : `${done}/${total}`}
      </Badge>
    );
  } else {
    return null;
  }
}

export default AreaCompletionTracker;
