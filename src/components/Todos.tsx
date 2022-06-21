import React, {useContext} from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import {TodosContext} from "../store/todos-context";

//Todos component wants an array of string
const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    return (
        <ul className={classes.todos}>
            {todosCtx.items.map((item) => (
                <TodoItem
                    key={item.id}
                    text={item.text}
                    onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}/>//this is just forwarding props to
                // multiple
                // layers of the components
            ))}
        </ul>
    );
}

export default Todos;