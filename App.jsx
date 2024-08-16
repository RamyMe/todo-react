import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Filter from './Filter';
import './App.css'; 

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: new Date().getTime().toString() }]);
  };

  const saveTodo = (updatedTodo) => {
    setTodos(
      todos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      )
    );
  };

  const deleteTodo = (todoToDelete) => {
    setTodos(todos.filter((todo) => todo.id !== todoToDelete.id));
  };

  const changeStatus = (todoToChange, newStatus) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoToChange.id ? { ...todo, status: newStatus } : todo
      )
    );
  };

  const filterStatus = (status) => {
    setFilter(status);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    return todo.status === filter;
  });

  return (
    <div>
      <h1>My To-Do</h1>
      <TodoForm addTodo={addTodo} />
      <Filter filterStatus={filterStatus} />
      <TodoList
        todos={filteredTodos}
        saveTodo={saveTodo}
        deleteTodo={deleteTodo}
        changeStatus={changeStatus}
      />
    </div>
  );
};

export default App;
