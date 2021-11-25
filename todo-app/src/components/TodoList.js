import React, { useContext } from 'react'
import styled from "styled-components";
import { ToDoListContext } from '../context/ToDoListContext'
import Todo from './Todo'
const TodoList = () => {
    const { todos } = useContext(ToDoListContext)
    return (
        <Container>
            <hr />
            <TodoListContainer>

                {
                    todos.length ? <>
                        {todos.map(todo => {
                            return <Todo key={todo.id} props={todo} />
                        })}
                    </> : <h1>Empty...</h1>
                }

            </TodoListContainer>
        </Container>

    )
}

const Container = styled.div`
  hr{
        border: 0;
        clear:both;
        display:block;
        width: 100%;               
        background-color:black;
        height: 1px;
    }
`;

const TodoListContainer = styled.div`    
	background: rgba(255, 235, 241, .7);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
h1{
    text-align: center;
}
width: 600px;
height: 40vh;
border: black 1px solid;
padding:8px;
overflow:auto;
&::-webkit-scrollbar {
    width: 0.2rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
  }
  &::-webkit-scrollbar-track {
    background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.3)
    );
  }

  @media (max-width: 768px) {
   width: 340px;
  }

`;


export default TodoList
