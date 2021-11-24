import React from 'react'
import styled from "styled-components";

const Todo = ({props}) => {
    const title= props.title;
    const category= props.category;
    const finished= props.finished.toString();
    return (
        <StyledToDosWrapper>
            <h2>{title}</h2>
            <div>{category}</div>
            <div>{finished}</div>
            <button>Edit</button>
            <button>Delete</button>
        </StyledToDosWrapper>
    )
}

const StyledToDosWrapper=styled.div`
    background-color: aliceblue;
`;

export default Todo
