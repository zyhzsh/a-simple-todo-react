import React, { useContext, useState } from 'react'
import { ToDoListContext } from '../context/ToDoListContext';
import TextField from '@mui/material/TextField';
import styled from "styled-components";
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
const TodoForm = () => {
    const { addTodo, clearTodo } = useContext(ToDoListContext)
    const [userinput, setUserinput] = useState("")
    const submitHandler = e => {
        //revent 
        e.preventDefault();
        addTodo(userinput);
        setUserinput("");
    }
    const inputchangeHandler = e => {
        setUserinput(e.target.value)
    }
    const cleartoHandler = () => {
        clearTodo();
    }

    return (
        <StyledForm onSubmit={submitHandler}>
            <TextField
                autoFocus
                margin="dense" 
                variant="standard" 
                onChange={inputchangeHandler}
                value={userinput}
                type="text"
                placeholder="Add Todo"
                required
            ></TextField>
            <IconButton type="submit"><AddCircleSharpIcon /></IconButton>

            <IconButton onClick={cleartoHandler}><DeleteForeverIcon /></IconButton>
        </StyledForm>
    )
}
const StyledForm = styled.form`
    display: flex;
`;

export default TodoForm;
