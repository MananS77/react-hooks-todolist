import React, { useState } from "react";
import ReactDOM from "react-dom";
import Typography from "@material-ui/core/Typography";
import "./styles.css";
import * as serviceWorker from "./serviceWorker";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import DoneTodoList from "./DoneTodoList";

const App = () => {
    const [todos, setTodos] = useState([]);
    const [doneTodos, setDoneTodos] = useState([]);
    const appStyle = {
        position: 'fixed',
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
        overflow: 'auto'
    };

    return (
        <div className="App" style={appStyle}>
            <Typography component="h1" variant="h2" className="Title">
                To Do List
            </Typography>

            <TodoForm
                className="AddBox"
                saveTodo={todoText => {
                    const trimmedText = todoText.trim();
                    if (trimmedText.length > 0) {
                        setTodos([...todos, trimmedText]);
                    }
                }}
            />

            <TodoList
                todos={todos}
                deleteTodo={todoIndex => {
                    const updatedTodos = todos.filter((_, index) => index !== todoIndex);
                    setTodos(updatedTodos);
                }}
                checkTodo={todoIndex => {
                    const newlyDoneItem = todos[todoIndex];
                    doneTodos.push(newlyDoneItem);
                    setDoneTodos(doneTodos);
                    const updatedTodos = todos.filter((_, index) => index !== todoIndex);
                    setTodos(updatedTodos);
                }}
            />

            <hr
                className="Ruler"
            />

            <DoneTodoList
                todos={doneTodos}
                deleteTodo={todoIndex => {
                    const updatedDoneTodos = doneTodos.filter((_, index) => index !== todoIndex);
                    setDoneTodos(updatedDoneTodos);
                }}
                checkTodo={todoIndex => {
                    const undoneItem = doneTodos[todoIndex];
                    todos.push(undoneItem);
                    setTodos(todos);
                    const updatedDoneTodos = doneTodos.filter((_, index) => index !== todoIndex);
                    setDoneTodos(updatedDoneTodos);
                }}
            />

        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
