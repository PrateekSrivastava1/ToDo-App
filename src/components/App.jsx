import React, { useState } from "react";
import TodoItem from "./TodoItem";
function App() {

  const [item, addnewitem] = useState("");

  const [listItems, addListItems] = useState([]);

  function addItemtoArray() {
    // addListItem(event.target.value);
    addListItems(prevItems => {
      return [...prevItems, item];
    })
    // item = "";
    addnewitem("");
  }

  function addItem(event) {
    const newValue = event.target.value;
    addnewitem(newValue);
    // console.log(newValue);
  }

  function toDelete(id) {
    // console.log(id);
    addListItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;  
      });
    }); 
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={addItem} value={item} />
        <button onClick={addItemtoArray} className="button1" type="submit">
          <span>+</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map((point, index) => (
            <TodoItem
              key={index}
              id={index}
              text={point}
              itDelete={toDelete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
