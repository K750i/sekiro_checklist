import React from 'react';
import ListItem from './ListItem';
import AreaCompletionTracker from './AreaCompletionTracker';

function AreaContainer({
  areaName,
  link,
  areaObjectives,
  status,
  toggleCompletion,
}) {
  return (
    <section id={link.substring(1)}>
      <h3>
        {areaName}&nbsp;
        <AreaCompletionTracker status={status} />
      </h3>
      <ul>
        {areaObjectives.map(item => (
          <ListItem
            key={item.id}
            toggleCompletion={toggleCompletion}
            item={item}
          />
        ))}
      </ul>
    </section>
  );
}

export default AreaContainer;
