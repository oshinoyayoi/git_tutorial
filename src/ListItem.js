import React from "react";

function ListItem(props) {
  const { name, date, done } = props.todo;
  return (
    <li style={{ textDecoration: done ? "line-through" : "" }}>
      <span>{name}</span>
      <span> {date}</span>

      {!done ? <button onClick={props.completed}>Completed</button> : ""}
      <button onClick={props.remove}>Remove</button>
    </li>
  );
}
export default ListItem;
