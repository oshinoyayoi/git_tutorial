import React, { useState, useEffect, Fragment } from "react";
import { useRef } from "react";
import ListItem from "./ListItem";
import Form from "./Form";

//Initial tasks
const tasks = [
  { name: "task 1", date: "11", done: false },
  { name: "task 2", date: "11", done: false },
  { name: "task 3", date: "11", done: true },
];

function TodoApp() {
  const [todos, setTodos] = useState(tasks);
  const [inputValue, setInputValue] = useState("");
  const [date, setDate] = useState("");
  const inputRef = useRef(null);

  //useEffect works basically as componentDidMount and componentDidUpdate
  useEffect(() => {
    let count = 0;
    todos.map((todo) => (!todo.done ? count++ : null));
    document.title = `${count} task${count > 1 ? "s" : ""} todo`;
  });
  //

  const handleNewDate = (e) => {
    setDate(inputRef.current.value);
  };

  //
  const _handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "" || date === "") return alert("Task name is required");

    let newArr = [...todos];
    newArr.push({
      name: inputValue,
      date: date,
      done: false,
    });
    setTodos(newArr);
    setInputValue("");

    setDate("");
  };

  //比较时间，并进行排序
  const compareDate = () => {
    todos.sort(function (a, b) {
      return a.date - b.date;
    });
    setTodos([...todos]);
  };

  //
  const _handleBntClick = ({ type, index }) => {
    const newArr = todos.slice();
    if (type === "remove") newArr.splice(index, 1);
    else if (type === "completed") newArr[index].done = true;

    return setTodos(newArr);
  };

  //
  return (
    <Fragment>
      <Form
        onSubmit={_handleSubmit}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <input
        ref={inputRef}
        type="text"
        value={date}
        onChange={handleNewDate}
        placeholder="Date"
      />

      <ul>
        {todos.map((todo, index) => (
          <ListItem
            key={index}
            todo={todo}
            remove={() => _handleBntClick({ type: "remove", index })}
            completed={() => _handleBntClick({ type: "completed", index })}
          />
        ))}
      </ul>

      <button type="submit" onClick={() => compareDate()}>
        sort by time
      </button>
    </Fragment>
  );
}

export default TodoApp;
