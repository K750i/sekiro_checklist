import React from 'react';
import AreaCompletionTracker from './AreaCompletionTracker';
import ListGroup from 'react-bootstrap/ListGroup';

function IndexArea({areaName, link, status}) {
  return (
    <ListGroup.Item>
      <a href={link} className="mr-2">
        {areaName}
      </a>
      <AreaCompletionTracker status={status} />
    </ListGroup.Item>
  );
}

export default IndexArea;
