import React from 'react';

function ListItem(props) {
  const {id, task, done, area} = props.item;
  const style = {
    listStyleType: 'none',
  };

  return (
    <li style={style}>
      <input
        onChange={() => props.toggleCompletion(id, area)}
        type="checkbox"
        checked={done}
      />
      <span dangerouslySetInnerHTML={(() => ({__html: task}))()} />
    </li>
  );
}

export default ListItem;
