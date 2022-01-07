import React from 'react';

const Todo = ({ id, text, complete, toggleComplete }) => {
  return (
    <div
      key={id}
      style={{ color: !complete ? 'red' : 'green', cursor: 'pointer' }}
      onClick={toggleComplete}
    >
      <p>{text}</p>
    </div>
  );
};

export default Todo;
