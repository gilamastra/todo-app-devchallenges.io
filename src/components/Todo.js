import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";

const Todo = ({
  todoText,
  deleteTodo,
  todos,
  setTodos,
  todo,
  completeTodo,
}) => {
  return (
    <div className="todo-container">
      <button
        className={`buttonLi ${
          todo.completed ? "completedButton" : ""
        }`}
        onClick={() => {
          completeTodo(todo);
        }}
      >
        <li
          className={`todo-item ${
            todo.completed ? "completedText" : ""
          }`}
        >
          {todoText}
        </li>
      </button>

      <AiFillCloseSquare
        onClick={() => deleteTodo(todo)}
        size={71}
        className="iconDelete btn-delete"
        color="#e65a1a"
      />
    </div>
  );
};

export default Todo;
