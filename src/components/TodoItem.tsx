import React from "react";
import classes from "./TodoItem.module.css";

//this describe the type of function we can pass to on click
const TodoItem: React.FC<{text: string; onRemoveTodo: () => void}> = (props) => {
    return <li className={classes.item} onDoubleClick={props.onRemoveTodo}>{props.text}</li>
}

export default TodoItem;