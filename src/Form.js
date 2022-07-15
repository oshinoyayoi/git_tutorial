import React from "react";

function Form(props) {
  return (
    <>
      <h1>Todo List</h1>
      <form
        onSubmit={props.onSubmit}
        style={{ paddingLeft: 40, marginTop: 16 }}
      >
        <input
          type="text"
          value={props.value}
          onChange={props.onChange}
          placeholder="Ex.: Learn Java"
        />

        <button type="submit">Add </button>
      </form>
    </>
  );
}
export default Form;
