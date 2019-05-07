import React from 'react';

function ListItem(props) {
  const {id, task, done, area} = props.item;
  const listStyle = {
    display: 'flex',
    alignItems: 'baseline',
    listStyleType: 'none',
  };
  const labelStyle = {display: 'inline', opacity: done ? '0.5' : '1'};
  const inputStyle = {marginRight: '8px', opacity: done ? '0.5' : '1'};

  return (
    <li style={listStyle}>
      <input
        onChange={() => props.toggleCompletion(id, area)}
        type="checkbox"
        checked={done}
        id={id}
        style={inputStyle}
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
