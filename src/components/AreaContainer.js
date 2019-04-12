import React from 'react';
import ListItem from './ListItem';

function AreaContainer(props) {
  return (
    <section>
      <h2>{props.areaName}</h2>
      <ul>
        {props.areaObjectives.map(item => (
          <ListItem
            key={item.id}
            toggleCompletion={props.toggleCompletion}
            item={item}
          />
        ))}
      </ul>
    </section>
  );
}

export default AreaContainer;
