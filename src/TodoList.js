import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import "./styles.css";

const TodoList = ({todos, deleteTodo, checkTodo}) => (
    <List className="List">
        {todos.map((todo, index) => (
            <React.Fragment>
                <ListItem key={index.toString()} dense button>
                    <Checkbox
                        onChange={() => {
                            checkTodo(index);
                        }}
                        tabIndex={-1}
                    />
                    <ListItemText primary={todo}/>
                    <ListItemSecondaryAction>
                        <IconButton
                            aria-label="Delete"
                            onClick={() => {
                                deleteTodo(index);
                            }}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </React.Fragment>
        ))}
    </List>
);

export default TodoList;