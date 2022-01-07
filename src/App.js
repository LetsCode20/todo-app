import React from 'react';
import './App.css';
import TodoList from './Components/TodoList.component';

function App() {
  return (
    <div className='app'>
      <h2>Todo App</h2>

      <TodoList />
    </div>
  );
}

export default App;
