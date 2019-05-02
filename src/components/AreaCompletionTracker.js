import React from 'react';
import Badge from 'react-bootstrap/Badge';

function AreaCompletionTracker({status}) {
  if (status) {
    const [done, total] = status;
    return (
      <Badge variant={done === total ? 'success' : 'secondary'}>
        {done}/{total}
      </Badge>
    );
  } else {
    return null;
  }
}

export default AreaCompletionTracker;
