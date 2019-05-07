import React from 'react';

function ListItem(props) {
  const {id, task, done, area} = props.item;
  const listStyle = {
    listStyleType: 'none',
    paddingBottom: '0.5rem',
  };
  const labelStyle = {
    display: 'inline',
    opacity: done ? '0.5' : '1',
  };

  return (
    <li style={listStyle}>
      <input
        onChange={() => props.toggleCompletion(id, area)}
        type="checkbox"
        checked={done}
        id={id}
        style={{marginRight: '8px'}}
      />
      <label
        style={labelStyle}
        htmlFor={id}
        dangerouslySetInnerHTML={(() => ({__html: task}))()}
      />
    </li>
  );
}

export default ListItem;
