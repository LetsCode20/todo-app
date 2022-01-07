import React, { useState } from 'react';
import * as Md from 'react-icons/md';
import Todo from './Todo.component';
import TodoForm from './TodoForm.component';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todosToShow, setTodosToShow] = useState('all');
  const [toggleAllComplete, setToggleAllComplete] = useState(true);

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

  const editTodo = (todoId, newTodo) => {
    if (!newTodo.text) {
      return;
    }

    setTodos((prev) =>
      prev.map((todo) => (todo.id === todoId ? newTodo : todo))
    );
  };

  const deleteTodo = (id) => {
    const removeTodo = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeTodo);
  };

  const deleteCompleteTodo = () => {
    const removeCompleteTodo = [...todos].filter((todo) => !todo.complete);

    setTodos(removeCompleteTodo);
  };

  const toggleAllTodosToComplete = () => {
    const toggleAllCompleteArr = todos.map((todo) => {
      return { ...todo, complete: toggleAllComplete };
    });

    setTodos(toggleAllCompleteArr);
    setToggleAllComplete(!toggleAllComplete);
  };

  return (
    <div className='container'>
      <TodoForm onSubmit={addTodo} />

      <Todo
        showTodos={showTodos}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />

      <div>Todos left: {todos.filter((todo) => !todo.complete).length}</div>

      <div>
        <button onClick={() => setTodosToShow('all')}>All</button>
        <button onClick={() => setTodosToShow('active')}>Active</button>
        <button onClick={() => setTodosToShow('complete')}>Complete</button>
      </div>

      <div>
        <button onClick={toggleAllTodosToComplete}>
          Toggle All Complete: {`${toggleAllComplete}`}
        </button>
      </div>

      <div>
        {todos.some((todo) => todo.complete) && (
          <button onClick={deleteCompleteTodo}>
            Remove All Complete Todo <Md.MdDeleteForever />
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoList;
