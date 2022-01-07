import React, { useState } from 'react';
import * as Md from 'react-icons/md';
import TodoFrom from './TodoFrom.component';

const Todo = ({ showTodos, toggleComplete, editTodo, deleteTodo }) => {
  const [edit, setEdit] = useState({ id: null, value: '' });

  const submitUpdate = (value) => {
    editTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <TodoFrom edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <div>
      {showTodos.map((todo) => (
        <div
          key={todo.id}
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '20px auto',
          }}
        >
          <div
            style={{
              color: !todo.complete ? 'red' : 'green',
              cursor: 'pointer',
            }}
            onClick={() => toggleComplete(todo.id)}
          >
            <p>{todo.text}</p>
          </div>

          <div>
            <button onClick={() => setEdit({ id: todo.id, value: todo.text })}>
              <Md.MdEdit />
            </button>
            <button onClick={() => deleteTodo(todo.id)}>
              <Md.MdDelete />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
