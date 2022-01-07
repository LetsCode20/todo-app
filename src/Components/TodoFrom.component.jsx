import React, { useState } from 'react';
import shortid from 'shortid';
// import * as Md from 'react-icons/md';

const TodoFrom = (props) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: shortid.generate(),
      text: text,
      complete: false,
    });

    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={text} onChange={handleChange} />
      <button onClick={handleSubmit}>Add Todo</button>
    </form>
  );
};

export default TodoFrom;
