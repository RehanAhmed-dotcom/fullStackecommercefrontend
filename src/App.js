import { useEffect, useState } from "react";
import "./App.css";
import "./styles.css";
function App() {
  const [arr, setArr] = useState([]);
  const [val, setVal] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setArr((currentItem) => {
      return [
        ...currentItem,
        { id: crypto.randomUUID(), title: val, completed: false },
      ];
    });
    setVal("");
  };
  const checkTodo = (id, task) => {
    setArr((currentItem) => {
      return currentItem.map((item) => {
        if (item.id === id) {
          return { ...item, completed: task };
        }
        return item;
      });
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            id="item"
            value={val}
            onChange={(e) => {
              console.log("value", e.target.value);
              setVal(e.target.value);
            }}
          />
          <button
            type="submit"
            className="btn"
            // onClick={(e) => {
            //   e.preventDefault();
            //   addItem();
            // }}
          >
            Add
          </button>
        </div>
      </form>
      <h1 className="header">Todo List</h1>
      {arr.map((item) => (
        <div key={item.id} className="list-item">
          <input
            type="checkbox"
            onChange={(e) => checkTodo(item.id, e.target.checked)}
            checked={item.completed}
          />
          <text>{item.title}</text>
          <button className="btn btn-danger">Delete</button>
        </div>
      ))}
    </>
  );
}

export default App;
