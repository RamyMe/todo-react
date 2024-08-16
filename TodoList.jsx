import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, saveTodo, deleteTodo, changeStatus }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          saveTodo={saveTodo}
          deleteTodo={deleteTodo}
          changeStatus={changeStatus}
        />
      ))}
    </div>
  );
};

export default TodoList;
