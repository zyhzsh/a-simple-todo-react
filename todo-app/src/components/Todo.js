import React, { useContext } from 'react'
import styled from "styled-components";
import { ToDoListContext } from '../context/ToDoListContext';
import Checkbox from '@mui/material/Checkbox';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import IconButton from '@mui/material/IconButton';

const Todo = ({ props }) => {
    const id = props.id;
    const title = props.title;
    const finished = props.finished;

    const { removeTodo, updateTodo, toggleEditModel } = useContext(ToDoListContext);

    const updateTodoHandler = () => {
        updateTodo(id, title, !finished)
    }

    const deleteHandler = () => {
        removeTodo(id)
    }

    const editTodoHandler = () => {
        toggleEditModel(id)
    }
    return (

        <StyledToDosWrapper>
            <Checkbox color="default" onChange={updateTodoHandler}/>
            {finished ? <p><del>{title}</del></p> : <p>{title}</p>}
            <IconButton onClick={editTodoHandler}><ModeEditOutlinedIcon/></IconButton>
            <IconButton onClick={deleteHandler}><HighlightOffIcon/></IconButton>
        </StyledToDosWrapper>
    )
}

const StyledToDosWrapper = styled.div`
    margin: 5px;
    padding: 8px;
    width: auto;
    display: grid;
    grid-template-columns:auto auto auto auto;
    border: black 1px solid;
    p{
        font-size: 20px;
        min-width: 300px;
        max-width: auto;
        overflow-x: hidden;
    }
    p,input,button{
        display: inline-block;
    }
    @media (max-width: 768px) {
        width: 300px;
        p{
            align-self: center;
            font-size: 10px;
            min-width: 80px;
        }

  }
   // background: #aa4b6b;  /* fallback for old browsers */
   // background: -webkit-linear-gradient(to right, #3b8d99, #6b6b83, #aa4b6b);  /* Chrome 10-25, Safari 5.1-6 */
 /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export default Todo
