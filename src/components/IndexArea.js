import React from 'react';
import AreaCompletionTracker from './AreaCompletionTracker';

function IndexArea({areaName, link, status}) {
  return (
    <li style={{listStyleType: 'none'}}>
      <a href={link}>{areaName}</a>
      &nbsp;
      <AreaCompletionTracker status={status} />
    </li>
  );
}

export default IndexArea;
