import React, { useState } from 'react';
import Todo from './Todo.component';
import TodoFrom from './TodoFrom.component';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

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
      {todos &&
        todos.map((todo) => (
          <Todo
            key={todo.id}
            toggleComplete={() => toggleComplete(todo.id)}
            text={todo.text}
            complete={todo.complete}
          />
        ))}
    </div>
  );
};

export default TodoList;
