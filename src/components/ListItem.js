import React from 'react';

function ListItem(props) {
  const {id, task, done, area} = props.item;
  const style = {
    listStyleType: 'none',
  };

  return (
    <li style={style} key={id}>
      <input
        onChange={() => props.toggleCompletion(id, area)}
        type="checkbox"
        checked={done}
      />
      {task}
    </li>
  );
}

export default ListItem;
