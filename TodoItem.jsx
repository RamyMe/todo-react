import React, { useState } from 'react';

const TodoItem = ({ todo, saveTodo, deleteTodo, changeStatus }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(todo.task);
  const [editDescription, setEditDescription] = useState(todo.description);

  const handleSave = () => {
    saveTodo({
      ...todo,
      task: editTask,
      description: editDescription,
    });
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editTask}
            onChange={(e) => setEditTask(e.target.value)}
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          ></textarea>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{todo.task}</h3>
          <p>{todo.description}</p>
          <select
            value={todo.status}
            onChange={(e) => changeStatus(todo, e.target.value)}
          >
            <option value="not completed">Not Completed</option>
            <option value="completed">Completed</option>
          </select>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(todo)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
