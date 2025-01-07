import "./styles.css";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [value, setValue] = useState();

  function addTodo() {
    let randomId = Math.floor(Math.random() * 100000);
    let timeStamp = new Date().getTime();
    let uuid = randomId + "" + timeStamp;
    setTodos((prev) => {
      let todo = {
        id: uuid,
        todo: value
      };
      return [...prev, todo];
    });
    setValue("");
  }

  function markComplete(id) {
    let tempTodo = todos.filter((i) => id === i.id);
    setCompletedTodos((prev) => [...prev, ...tempTodo]);
    setTodos((prev) => {
      return [...prev.filter((i) => id !== i.id)];
    });
  }

  function markIncomplete(id) {
    let tempTodo = completedTodos.filter((i) => id === i.id);
    setTodos((prev) => {
      return [...prev, ...tempTodo];
    });
    setCompletedTodos((prev) => {
      return [...prev.filter((i) => id !== i.id)];
    });
  }
  function deleteCompletedTodo(id) {
    setCompletedTodos((prev) => {
      return [...prev.filter((i) => id !== i.id)];
    });
  }
  function deleteInCompletedTodo(id) {
    setTodos((prev) => {
      return [...prev.filter((i) => id !== i.id)];
    });
  }

  return (
    <div className="App">
      <div className="list">
        {todos.map((item) => {
          return (
            <div key={item.id} className="card flex_space_between incomplete">
              <p>{item.todo}</p>
              <div>
                <button onClick={() => markComplete(item.id)}>done</button>
                <button
                  onClick={() => deleteInCompletedTodo(item.id)}
                  className="delete_button"
                >
                  X
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="list">
        {completedTodos.map((item) => {
          return (
            <div key={item.id} className="card flex_space_between complete">
              <p>{item.todo}</p>
              <div>
                <button onClick={() => markIncomplete(item.id)}>undo</button>
                <button
                  onClick={() => deleteCompletedTodo(item.id)}
                  className="delete_button"
                >
                  X
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="add_todo flex_space_between">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter Todo"
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </div>
  );
}
