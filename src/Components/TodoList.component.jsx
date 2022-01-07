import React, { useState } from 'react';
import Todo from './Todo.component';
import TodoFrom from './TodoFrom.component';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todosToShow, setTodosToShow] = useState('all');

  let showTodos = [];

  if (todosToShow === 'all') {
    showTodos = todos;
  } else if (todosToShow === 'active') {
    showTodos = todos.filter((todo) => !todo.complete);
  } else if (todosToShow === 'complete') {
    showTodos = todos.filter((todo) => todo.complete);
  }

  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  return (
    <div>
      <TodoFrom onSubmit={addTodo} />
      {showTodos.map((todo) => (
        <Todo
          key={todo.id}
          toggleComplete={() => toggleComplete(todo.id)}
          text={todo.text}
          complete={todo.complete}
        />
      ))}

      <div>Todos left: {todos.filter((todo) => !todo.complete).length}</div>

      <div>
        <button onClick={() => setTodosToShow('all')}>All</button>
        <button onClick={() => setTodosToShow('active')}>Active</button>
        <button onClick={() => setTodosToShow('complete')}>Complete</button>
      </div>
    </div>
  );
};

export default TodoList;
