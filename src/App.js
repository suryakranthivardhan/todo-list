// App.js

import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='todo-app'>
      <TodoList />
      <footer className="footer">
        Made by Vardhan &copy; {new Date().getFullYear()}
      </footer>
    </div>      
  );
}

export default App;
