import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  const deleteTodo = (todo) => {
    setTodos(todos.filter((todos) => todos.id !== todo.id));
  };
  const completeTodo = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            completeTodo={completeTodo}
            todos={todo}
            deleteTodo={deleteTodo}
            todoText={todo.text}
            todo={todo}
            setTodos={setTodos}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
