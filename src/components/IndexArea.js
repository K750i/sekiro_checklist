import React from 'react';
import AreaCompletionTracker from './AreaCompletionTracker';
import ListGroup from 'react-bootstrap/ListGroup';

function IndexArea({areaName, link, status}) {
  return (
    <ListGroup.Item>
      <a href={link}>{areaName}</a>
      &nbsp;
      <AreaCompletionTracker status={status} />
    </ListGroup.Item>
  );
}

export default IndexArea;
