import React, { useState, useEffect, Fragment } from "react";
import { useRef } from "react";
import ListItem from "./ListItem";
import axios from "axios";

//Initial tasks
const tasks = [
  { task: "task 1", date: "11", status: 1 },
  { task: "task 2", date: "11", status: 1 },
  { task: "task 3", date: "11", status: 0 },
];

function TodoApp() {
  const [todos, setTodos] = useState(tasks);
  const taskRef = useRef(null);
  const dateRef = useRef(null);

  //获取所有内容,get
  useEffect(() => {
    axios
      .get("http://localhost:8080/todo")
      .then((response) => response.data)
      .then((result) => setTodos(result.data));
  }, []);

  //useEffect works basically as componentDidMount and componentDidUpdate
  useEffect(() => {
    let count = 0;
    todos.map((todo) => (!todo.status ? count++ : null));
    document.title = `${count} task${count > 1 ? "s" : ""} todo`;
  });

  //post fetch
  //增加,post

  function addTodo() {
    const addTodos = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        task: taskRef.current.value,
        date: dateRef.current.value,
        status: 0,
      }),
    };
    fetch("http://localhost:8080/todo", addTodos)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
        setTodos(result.data);
      });
  }

  //比较时间，并进行排序
  const compareDate = () => {
    todos.sort(function (a, b) {
      return a.date - b.date;
    });
    setTodos([...todos]);
  };
  /*
  //remove and completed
  const _handleBntClick = ({ type, index }) => {
    const newArr = todos.slice();
    if (type === "remove") newArr.splice(index, 1);
    else if (type === "completed") newArr[index].status = 0;

    return setTodos(newArr);
  };
*/
  const changeState = (taskId) => {
    axios
      .put("http://localhost:8080/todo")
      .then((response) => {
        console.log(setTodos(response.data));
      })
      .then(() => {
        alert("Toggle update succeed!");
      });
  };

  const deleteTodo = (taskId) => {
    axios
      .delete(`${"http://localhost:8080/todo"}/${taskId}`)
      .then((response) => {
        setTodos(response.data);
      })
      .then(() => {
        alert("Deleted remove succeed!");
      });
  };
  //
  return (
    <Fragment>
      <input ref={taskRef} type="text" placeholder="Ex.: Learn Java" />
      <input ref={dateRef} type="text" placeholder="Date" />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <ListItem
            key={index}
            todo={todo}
            remove={() => deleteTodo({ type: "remove", index })}
            completed={() => changeState({ type: "completed", index })}
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
