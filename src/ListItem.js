import React from "react";

function ListItem(props) {
  const { task, date, status } = props.todo;
  return (
    <li style={{ textDecoration: status ? "line-through" : "" }}>
      <span>{task}</span>
      <span> {date}</span>

      {!status ? <button onClick={props.completed}>Toggle</button> : ""}
      <button onClick={props.remove}>Remove</button>
    </li>
  );
}
export default ListItem;
