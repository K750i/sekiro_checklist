import React from 'react';
import Badge from 'react-bootstrap/Badge';

function AreaCompletionTracker({status}) {
  if (status) {
    const [done, total] = status;
    const completed = done === total;

    return done === 0 && total === 0 ? null : (
      <Badge variant={completed ? 'success' : 'secondary'}>
        {completed ? 'DONE' : `${done}/${total}`}
      </Badge>
    );
  } else {
    return null;
  }
}

export default AreaCompletionTracker;
