import React from "react";

const Form = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  filteredTodos,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        id: new Date().getTime().toString(),
        completed: false,
      },
    ]);
    setInputText("");
  };
  return (
    <div>
      <form onSubmit={submitTodoHandler}>
        <input
          placeholder="add details"
          className="input"
          value={inputText}
          onChange={inputTextHandler}
          type="text"
        />
        <button className="btn-add">Add Todo </button>
      </form>
    </div>
  );
};

export default Form;
