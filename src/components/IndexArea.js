import React from 'react';
import AreaCompletionTracker from './AreaCompletionTracker';

function IndexArea({areaName, link, status}) {
  return (
    <li style={{listStyleType: 'none'}}>
      <a href={link} style={linkStyle}>
        {areaName}
      </a>
      &nbsp;
      <AreaCompletionTracker status={status} />
    </li>
  );
}

const linkStyle = {
  textDecoration: 'none',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  color: '#fbfbfb',
};

export default IndexArea;
