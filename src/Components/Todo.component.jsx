import React, { useState } from 'react';
import * as Md from 'react-icons/md';
import TodoForm from './TodoForm.component';

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
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <div className='container todo'>
      {showTodos.map((todo) => (
        <div key={todo.id} className='todo-items'>
          <div
            style={{
              color: !todo.complete ? '#fff' : '#999',
              textDecoration: !todo.complete ? '' : 'line-through',
            }}
            className='todo'
            onClick={() => toggleComplete(todo.id)}
          >
            <p>{todo.text}</p>
          </div>

          <div className='button'>
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
