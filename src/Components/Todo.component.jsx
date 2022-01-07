import React from 'react';
import * as Md from 'react-icons/md';

const Todo = ({ id, text, complete, toggleComplete }) => {
  return (
    <div
      key={id}
      style={{
        color: !complete ? 'red' : 'green',
        cursor: 'pointer',
        display: 'flex',
      }}
      onClick={toggleComplete}
    >
      <p>{text}</p>
    </div>
  );
};

export default Todo;
