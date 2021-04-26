import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./components/styles.css";

function App() {
  const [inputText, setInputTex] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);
  useEffect(() => {
    statusHandler(status);
    saveLocalTodos();
    console.log(status);
  }, [status, todos]);

  const statusHandler = (e = "all") => {
    setStatus(e);

    switch (status) {
      case "completed":
        setFilteredTodos(
          todos.filter((todo) => todo.completed === true)
        );
        break;

      case "active":
        setFilteredTodos(
          todos.filter((todo) => todo.completed === false)
        );
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };
  return (
    <div className="App">
      <header>
        <h1>#todo</h1>
        <ul className="ul">
          <li
            className={status === "all" ? "activeMenu" : ""}
            onClick={() => setStatus("all")}
          >
            All
          </li>
          <li
            className={status === "active" ? "activeMenu" : ""}
            onClick={() => setStatus("active")}
          >
            Active
          </li>
          <li
            className={status === "completed" ? "activeMenu" : ""}
            onClick={() => setStatus("completed")}
          >
            Completed
          </li>
        </ul>
      </header>
      <Form
        inputText={inputText}
        setTodos={setTodos}
        todos={todos}
        setInputText={setInputTex}
        filteredTodos={filteredTodos}
      ></Form>
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
