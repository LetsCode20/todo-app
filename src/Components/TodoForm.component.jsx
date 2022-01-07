import React, { useState, useEffect, useRef } from 'react';
import shortid from 'shortid';

const TodoForm = (props) => {
  const [text, setText] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.length) {
      return;
    }

    props.onSubmit({
      id: shortid.generate(),
      text: text,
      complete: false,
    });

    setText('');
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type='text'
            name='text'
            placeholder='Update Your Task'
            value={text}
            onChange={handleChange}
            ref={inputRef}
          />
          <button onClick={handleSubmit}>Update</button>
        </>
      ) : (
        <>
          <input
            type='text'
            name='text'
            placeholder='Add Your Tasks'
            value={text}
            onChange={handleChange}
            ref={inputRef}
          />
          <button onClick={handleSubmit}>Add Todo</button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
