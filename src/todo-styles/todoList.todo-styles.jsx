import TodoItem from "../todo-item/todoItem.todo-item";

const TodoList = ({ items }) => (
  <div className="todo-list">
    {items.map((item) => {
      return <TodoItem key={item.id} item={item}></TodoItem>;
    })}
  </div>
);

export default TodoList;
