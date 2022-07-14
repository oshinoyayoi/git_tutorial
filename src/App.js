import { useState } from "react";
import "./todo-styles/todo.styles.css";
import TodoList from "./todo-styles/todoList.todo-styles";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [tmpTodo, setTmpTodo] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  const addTodo = () => {
    // formの内容が空白の場合はalertを出す
    if (tmpTodo === "") {
      alert("文字を入力してください");
      return;
    }
    setTodos([...todos, tmpTodo]);
    setTmpTodo("");
  };

  const addMonth = () => {
    setTodos([...todos, tmpTodo]);
    setMonth("");
  };

  const addDay = () => {
    setTodos([...todos, tmpTodo]);
    setDay("");
  };

  const addItem = () => {
    const newTodoItem = {
      tmpTodo: tmpTodo,
      time: month + "/" + day,
      id: todos.length + 1,
    };
    const list = [...todos];
    list.push(newTodoItem);
    setTodos(list);
  };

  // todoを削除する処理
  const deleteTodo = (index) => {
    const newTodos = todos.filter((todo, todoIndex) => {
      return index !== todoIndex;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <h1>Todo List</h1>
      <div className="form">
        <input
          type="text"
          name="todo"
          placeholder="E.g. Feed the cat"
          onChange={(e) => setTmpTodo(e.target.value)}
          value={tmpTodo}
        />
        <input
          name="months"
          placeholder="month"
          onChange={(addMonth) => setMonth(addMonth.target.value)}
          value={month}
        />
        <input
          name="days"
          placeholder="day"
          onChange={(addDay) => setDay(addDay.target.value)}
          value={day}
        />
        <button onClick={addItem}>Add</button>
        <TodoList items={todos} />
      </div>

      <ol>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo}
              {/* 削除ボタンを追加 */}
              <button onClick={() => deleteTodo(index)}>Remove</button>
            </li>
          );
        })}
      </ol>

      <style>{`
        h1 {
          text-align: center;
        }
        .form {
          display: flex;
          justify-content: center;
        }
        ol {
          width: 200px;
          margin: 10px auto;
        }
      `}</style>
    </>
  );
};

export default App;
