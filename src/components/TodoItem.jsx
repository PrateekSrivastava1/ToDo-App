import React, { useState } from "react";

function TodoItem(props) {

    return (
        <div onClick={() =>
            props.itDelete(props.id)
        }>
            <li>{props.text}</li>
        </div>
    );
}
export default TodoItem;