import Todo from '../models/todo';
import React, {useState} from 'react';

//storing the type definition in an aliece
type TodosContextObj = {
    items: Todo[];
    addTodo: (text:string) => void;
    removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],//in side the context we need to define initial values
    addTodo: () => {},
    removeTodo: (id: string) => {},
});
//FC Functional Component
const TodosContextProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);//here we initially pass an empty array. which is not good. that
    // can be sorted by adding generics as <Todo[]>

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);

        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo);
        });
    }

    //this is the logic happening function. Here once this function executed after clicking on a todo, this function
    // set the todo again by filtering the remain todos except the id we passed
    const removeTodoHander = (todoId: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.id !== todoId);
        });
    }

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHander
    };

    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    );
};

export default TodosContextProvider;