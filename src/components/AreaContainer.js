import React from 'react';
import ListItem from './ListItem';
import AreaCompletionTracker from './AreaCompletionTracker';

function AreaContainer({areaName, areaObjectives, status, toggleCompletion}) {
  return (
    <section>
      <h2>
        {areaName}&nbsp;
        <AreaCompletionTracker status={status} />
      </h2>
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
