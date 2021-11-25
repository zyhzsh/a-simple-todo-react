import React,{useContext} from 'react'
import styled from "styled-components";
import { ToDoListContext } from '../context/ToDoListContext';

const Todo = ({props}) => {
    const id = props.id;
    const title= props.title;
    const finished= props.finished;

    const {removeTodo,updateTodo,toggleEditModel} = useContext(ToDoListContext);

    const updateTodoHandler=()=>{
        updateTodo(id,title,!finished)
    }

    const deleteHandler=()=> {
        removeTodo(id)
    }
    
    const editTodoHandler=()=>{
        toggleEditModel(id)
    }
    return (
        <StyledToDosWrapper>
            <h2>{title}</h2>
            <input type="checkbox" onChange={updateTodoHandler}></input>
            <button onClick = {editTodoHandler}>Edit</button>
            <button onClick = {deleteHandler}>Delete</button>
        </StyledToDosWrapper>
    )
}

const StyledToDosWrapper=styled.div`
    background-color: aliceblue;
`;

export default Todo
