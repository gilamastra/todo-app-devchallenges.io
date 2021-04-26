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

      <button className="btn-delete" onClick={() => deleteTodo(todo)}>
        <AiFillCloseSquare
          size={78}
          className="iconDelete"
          color="#e65a1a"
        />
      </button>
    </div>
  );
};

export default Todo;
