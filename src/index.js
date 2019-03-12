import React, {useState} from "react";
import ReactDOM from "react-dom";
import Typography from "@material-ui/core/Typography";
import "./styles.css";
import * as serviceWorker from "./serviceWorker";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";


const App = () => {
    const [todos, setTodos] = useState([]);
    return (
        <div className="App">
            <Typography component="h1" variant="h2">
                Todo List
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
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
