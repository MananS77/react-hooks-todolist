import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";

const TodoForm = ({saveTodo}) => {

    const [value, setValue] = useState('');

    return (
        <form
            className="AddBox"
            onSubmit={event => {
                event.preventDefault();
                saveTodo(value);
                setValue('');
            }}
        >
            <TextField
                autoFocus
                variant="outlined"
                placeholder="Add a todo..."
                margin="normal"
                onChange={event => {
                    setValue(event.target.value);
                }}
                value={value}
            />
        </form>
    );
};

export default TodoForm;