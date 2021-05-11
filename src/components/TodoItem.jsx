import React, { useState } from "react";

function TodoItem(props) {

    const [clicked, setIsClicked] = useState(false);

    function change() {
        setIsClicked((prev) => {
            return (!prev)
        });
    }

    return (
        <div style={{ textDecoration: clicked ? "line-through green" : "none" }} onClick={change}>
            <li>{props.text}</li>
        </div>
    );
}
export default TodoItem;