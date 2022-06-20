import React, {useRef} from "react";

//this says "onAddTodo" is a function which takes a tring param and return nothing
const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {
    //here we want to render a form that allows users to enter new todo
    const todoTextInputRef = useRef<HTMLInputElement>(null);//all html elements have build in types

    const submitHandler = (event: React.FormEvent) => {//earlier we were able to pass only event. but in typescript
        // we have to define the type of the event
        event.preventDefault();

        // const enteredText = todoTextInputRef.current?.value;//this question marks says to the typescript, that we try
        // to access value of todoTextInputRef(So it can be null). But if the connection is not established yet, store
        // that in
        // enteredText variable.

        const enteredText = todoTextInputRef.current!.value;//this exclamation mark says to typescript we are
        // 100% sure that value does not null at this point

        if(enteredText.trim().length === 0){
            //throw and error
            return;
        }

        props.onAddTodo(enteredText);
    }

    //we know form is submitted after this todoTextInputRef is connected
    return (
        <form onSubmit={submitHandler}>
            <label htmlFor='text'>Todo text</label>
            <input type='text' id='text' ref={todoTextInputRef}/>
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;