const TodoItem = ({ item }) => {
  const { tmpTodo, time } = item;
  return (
    <div className="todo-item">
      <div className="item-content">
        <p>{tmpTodo}</p>
        <span>{time}</span>
      </div>
      <div className="todo-button">
        <button>toggle</button>
        <button>remove</button>
      </div>
    </div>
  );
};

export default TodoItem;
