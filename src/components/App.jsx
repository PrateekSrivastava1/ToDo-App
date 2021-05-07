import React, { useState } from "react";
import Heading from "./Heading";
import Listitem from "./Listitem";
function App() {

  const [item, addnewitem] = useState("");

  const [listItems, addListItems] = useState([]);

  function addItemtoArray() {
    // addListItem(event.target.value);
    addListItems(prevItems => {
      return [...prevItems, item];
    })
    // item = "";
  }

  function addItem(event) {
    const newValue = event.target.value;
    addnewitem(newValue);
    // console.log(newValue);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
    </div>
      <div className="form">
        <input type="text" onChange={addItem} value={item} />
        <button onClick={addItemtoArray} className="button1">
          <span>+</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map((point) => {
           <Listitem text={point}/> 
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
